"use client";
import { useState, useEffect, useContext, Fragment } from "react";

import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import AddBoxIcon from "@mui/icons-material/AddBox";
import SyncIcon from "@mui/icons-material/Sync";
import EditIcon from "@mui/icons-material/Edit";

import { CreateProfileDialog } from "@/components/profile/createProfile";
import { AddListingDialog } from "@/components/profile/listingDialog";
import AuthContext from "@/components/context/authContext";
import MultiGrid from "@/components/ui/MultiGrid";
import Purchase from "@/components/profile/Purchase";
import { getUserData } from "@/components/api/user";
import { formatDate } from "@/components/utils/formatDate";
import {
  plan_small,
  plan_medium,
  plan_large,
  plan_rola,
  plan_socket,
  plan_flatrate,
  plan_listing,
} from "@/components/utils/conditions";


const ProfilePage = (props) => {
  const authCtx = useContext(AuthContext);
  //console.log("authCtx: ", authCtx);
  const rdt = authCtx.rdt;
  const jwt = authCtx.jwt;
  const connected = authCtx.connected;
  const badgeID = authCtx.badgeId;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [listingOpen, setListingOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [userData, setUserData] = useState([]);
  const [balances, setBalances] = useState([]);
  const [hasListing, setHasListing] = useState(false);
  const [purchaseMode, setPurchaseMode] = useState(false);

  const plans = {
    plan_small,
    plan_medium,
    plan_large,
    plan_rola,
    plan_socket,
    plan_flatrate,
    plan_listing,
  };

  useEffect(() => {
    if (jwt != "") {
      getProfileData(jwt);
    }
  }, []);

  useEffect(() => {
    if (jwt != "") {
      getProfileData(jwt);
    }
  }, [jwt]);

  const getProfileData = async (jwtCheck) => {
    const data = await getUserData(jwtCheck);
    if (data != -1 && data.length > 0) {
      //console.log("user data: ", data[0]);
      setUserData(data[0]);

      // Combine deposit and balance data
      if (data[0].deposits != null) {
        let combinedData = [];
        const user = data[0];
        user.balances.forEach((balance) => {
          let deposit = user.deposits.find(
            (b) => b.deposit_id === balance.deposit_id
          );

          // balance is only added when deposit is verified, so this is already checked
          if (deposit) {
            // find the token that matches the api_plan
            let matchingPlan = user.token_api_plans.find((plan) =>
              plan[Object.keys(plan)[0]].includes(deposit.api_plans[0])
            );

            let matchingToken = matchingPlan
              ? Object.keys(matchingPlan)[0]
              : null;

            let combined = {
              api_plan: deposit.api_plans[0],
              deposit_id: deposit.deposit_id,
              activated: balance.activated,
              activated_ts: balance.activated_ts,
              expired: balance.expired,
              validity: balance.validity,
              balance: balance.balance,
              token: matchingToken,
            };
            combinedData.push(combined);
          }
        });

        calcBalances(combinedData);
      }
    }
  };

  // create a list of balances that are not expired grouped by api_plan
  // and calculate the expiry date
  const calcBalances = (data) => {
    let balances = [];
    let activated = new Date();
    if (data) {
      data.map((item) => {
        if (item.expired == false) {
          // if user has api plan 14 (listing) set hasListing to true
          if (item.api_plan === 14) {
            setHasListing(true);
          }
          let balance = balances.find((b) => b.api_plan === item.api_plan);
          if (item.activated == true) {
            activated = new Date(item.activated_ts);
          }
          if (balance) {
            balance.balance += item.balance;
            balance.validity += item.validity;
          } else {
            balances.push({
              api_plan: item.api_plan,
              balance: item.balance,
              validity: item.validity,
              activated_ts: activated,
              token: item.token,
            });
          }
        }
      });
    }
    // for each balance calculate the expiry date based on activated date and validity (in days)
    balances.map((item) => {
      let expiry = new Date(item.activated_ts);
      expiry.setDate(expiry.getDate() + item.validity);
      item.expiryDate = formatDate(expiry);
    });

    setBalances(balances);
  };

  // go through the plans and return the name of the plan where the plan number matches
  const getPlanName = (planNumber) => {
    return Object.values(plans).find((plan) => plan.plan == planNumber)?.name;
  };

  const SummaryGrid = ({ name, balances }) => {
    return (
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <MultiGrid title="Profile name" value={name} />
          {balances.map((api_plan) => (
            <Fragment key={api_plan.api_plan}>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <MultiGrid
                title="API plan"
                value={getPlanName(api_plan.api_plan)}
              />
              <MultiGrid
                title="Token"
                value={api_plan.token ? api_plan.token : "n/a"}
              />
              <MultiGrid
                title="Overall balance"
                value={!api_plan.balance ? "n/a" : api_plan.balance}
              />
              <MultiGrid
                title="Estimated expiry date"
                value={api_plan.expiryDate}
              />
            </Fragment>
          ))}
          <IconButton
            color="primary"
            onClick={() => {
              getProfileData(jwt);
            }}
          >
            <SyncIcon />
          </IconButton>
        </CardContent>
      </Card>
    );
  };

  return (
    <Paper square elevation={1} sx={{ paddingTop: 14, paddingBottom: 6 }}>
      <Container maxWidth="lg">
        {connected != true ? (
          <Alert severity="error" variant="outlined">
            <Typography variant="body1">
              Please connect your wallet via the Radix Connect Button!
            </Typography>
          </Alert>
        ) : pending == true ? (
          <Alert severity="info">
            <Typography variant="body1" gutterBottom>
              Waiting for result from your wallet...
            </Typography>
            <LinearProgress color="secondary" />
          </Alert>
        ) : badgeID === "" ? (
          <>
            <Alert severity="warning" variant="outlined" sx={{ mb: 2 }}>
              <Typography variant="body1">
                No owner badge found. Change the connected account or start by
                creating a new profile.
              </Typography>
            </Alert>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddBoxIcon />}
              onClick={() => {
                setDialogOpen(true);
              }}
            >
              Create New Profile
            </Button>
            <CreateProfileDialog
              open={dialogOpen}
              setOpen={setDialogOpen}
              setPending={setPending}
              rdt={rdt}
              mode="add"
            />
          </>
        ) : jwt === "" ? (
          <Alert severity="error" variant="outlined">
            <Typography variant="body1">
              We could not verify your profile. Please reconnect your Radix
              wallet.
            </Typography>
          </Alert>
        ) : userData.user_account ? (
          <>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Your current API plans
            </Typography>
            <SummaryGrid name={userData.user_account} balances={balances} />

            {purchaseMode ? (
              <Purchase />
            ) : hasListing ? (
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<EditIcon />}
                  onClick={() => {
                    setListingOpen(true);
                  }}
                >
                  Maintain listing data
                </Button>
                <AddListingDialog
                  open={listingOpen}
                  setOpen={setListingOpen}
                  setPending={setPending}
                  rdt={rdt}
                  userData={userData}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AddBoxIcon />}
                  sx={{ ml: 2 }}
                  onClick={() => {
                    setPurchaseMode(true);
                  }}
                >
                  New purchase
                </Button>
              </div>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                startIcon={<AddBoxIcon />}
                sx={{ mt: 2 }}
                onClick={() => {
                  setPurchaseMode(true);
                }}
              >
                New purchase
              </Button>
            )}
          </>
        ) : (
          <Alert severity="error">
            <AlertTitle>No user data available.</AlertTitle>
            Your profile was not activated in the system yet. Please contact us
            in case you created the profile more than 24 hours ago.
          </Alert>
        )}
      </Container>
    </Paper>
  );
};

// ---------------------------------------------------------------------------------------------
// This function gets called at build time and pre-renders the page with the data from the API
// and returns it as props to the page component
// ---------------------------------------------------------------------------------------------
// export async function getServerSideProps() {
//   let xrdPrice = 0;

//   const requestOptionsRCV = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization: "Bearer " + process.env.RDXAPI_BEARER,
//     },
//   };

//   const url = [
//     `${process.env.RDXAPI_LINK}/token/price/current?resource_addresses=resource_rdx1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxradxrd`,
//   ];

//   try {
//     const response = await fetch(url, requestOptionsRCV).then((res) =>
//       res.json()
//     );

//     // check for error response
//     if (!response) {
//       console.log("Error at PurchasePage: No response from XRD price API");
//     } else {
//       xrdPrice =
//         response.data[
//           "resource_rdx1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxradxrd"
//         ].usd_price;
//     }
//   } catch (error) {
//     console.log("Error during data fetch for XRD price", error);
//   }

//   return {
//     props: {
//       xrdPrice: xrdPrice,
//     },
//   };
// }

export default ProfilePage;
