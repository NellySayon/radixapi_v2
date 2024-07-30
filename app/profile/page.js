"use client";
import { useState, useEffect, useContext, Fragment } from "react";
import Link from "next/link";

import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SyncIcon from "@mui/icons-material/Sync";

import { CreateProfileDialog } from "../components/profile/createProfile";
import { AddListingDialog } from "../components/profile/listingDialog";
import AuthContext from "../components/context/authContext";
import MultiGrid from "@/components/ui/MultiGrid";
import {
  plan_small,
  plan_medium,
  plan_large,
  plan_rola,
  plan_socket,
  plan_flatrate,
  plan_listing,
} from "@/components/utils/conditions";

import { getUserData } from "@/components/api/user";
import { formatDate } from "@/components/utils/formatDate";

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

  const plans = {
    plan_small,
    plan_medium,
    plan_large,
    plan_rola,
    plan_socket,
    plan_flatrate,
    plan_listing
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
          <MultiGrid title="Name" value={name} />
          {balances.map((api_plan) => (
            <Fragment key={api_plan.api_plan}>
              <Divider color="#e7eff6" sx={{ mt: 2, mb: 2 }} />
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
    <>
      <Head>
        <title>RadixAPI User Profile</title>
        <meta
          name="description"
          content="Your RadixAPI account overview and balances"
        />
      </Head>
      <Container
        maxWidth="md"
        disableGutters
        sx={{
          mt: { xs: "55px", sm: "100px" },
          mb: "10px",
          padding: { xs: 0, sm: 2 },
        }}
      >
        {connected != true ? (
          <Alert severity="error">
            Please connect your wallet via the Radix Connect Button!
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
            <Alert severity="info" variant="outlined" sx={{ mb: 2 }}>
              <Typography variant="body1" color="primary">
                No owner badge found.
              </Typography>
            </Alert>
            <Button
              variant="outlined"
              color="info"
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
          <Alert severity="error">
            We could not verify your profile. Please reconnect your Radix wallet.
          </Alert>
        ) : userData.user_account ? (
          <>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Your Profile
            </Typography>
            <SummaryGrid name={userData.user_account} balances={balances} />
            <Link href="/buy">
              <Button
                variant="outlined"
                color="info"
                startIcon={<AddBoxIcon />}
              >
                New purchase
              </Button>
            </Link>
            {/* TODO: only show this button when the user has ourchased the listing plan */}
            {hasListing ? (
              <div>
                <Button
                  variant="outlined"
                  color="info"
                  startIcon={<AddBoxIcon />}
                  onClick={() => {
                    setListingOpen(true);
                  }}
                  sx={{mt: 2}}
                >
                  Add listing Information
                </Button>
                <AddListingDialog
                  open={listingOpen}
                  setOpen={setListingOpen}
                  setPending={setPending}
                  rdt={rdt}
                  userData={userData}
                />
              </div>
            ) : null}
          </>
        ) : (
          <Alert severity="error">
            <AlertTitle>No user data available.</AlertTitle>
            Your profile was not activated in the system yet. Please contact us
            in case you created the profile more than 24 hours ago.
          </Alert>
        )}
      </Container>
    </>
  );
};

export default ProfilePage;
