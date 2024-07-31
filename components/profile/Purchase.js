import Link from "next/link";
import { useState, useEffect, Fragment, useContext } from "react";

import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import SelectedPlanContext from "@/components/context/selectedPlanContext";
import AuthContext from "@/components/context/authContext";
import Pricing from "@/components/home/Pricing";
import takePayment from "@/components/api/takePayment";
import { saveUserDeposit, getUserData } from "@/components/api/user";
import { isJWTExpired } from "@/components/utils/decodeJwt";

const Purchase = (props) => {
  const authCtx = useContext(AuthContext);
  const rdt = authCtx.rdt;
  const connected = authCtx.connected;
  const badgeID = authCtx.badgeId;
  const jwt = authCtx.jwt;
  const xrd_rate = props.xrdPrice;
  //console.log("authCtx: ", authCtx);
  const selPlanCtx = useContext(SelectedPlanContext);
  const [usd_price, setUsdPrice] = useState(selPlanCtx.usd_price);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [numberOfPackages, setNumberOfPackages] = useState(1);
  const [pending, setPending] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUsdPrice(selPlanCtx.usd_price * numberOfPackages);
  }, [selPlanCtx]);

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
      setUserData(data[0]);
    }
  };

  // this will call the walletAPI to process the payment
  // and save the payment as deposit to the database
  const buyPackage = async () => {
    try {
      // check if the jwt is still valid. if not, the user has to reconnect
      if (isJWTExpired(jwt) === true) {
        alert("Your session has expired. Please reconnect your wallet.");
        return;
      }
      setPending(true);
      //console.log("User data: ", userData);
      // get the right bearer token based on the selected plan
      // in case the user has not purcahsed anything yet, the selected plan is null
      // in this case, the first token is used
      let matchingToken;
      let firstPlan = userData.token_api_plans[0];

      if (firstPlan[0] == null) {
        matchingToken = Object.keys(userData.token_api_plans[0])[0];
      } else {
        let matchingPlan = userData.token_api_plans.find((plan) =>
          plan[Object.keys(plan)[0]].includes(selPlanCtx.plan_id)
        );
        matchingToken = matchingPlan
          ? Object.keys(matchingPlan)[0]
          : Object.keys(userData.token_api_plans[0])[0];
      }
      //console.log("Matching token: ", matchingToken);

      // create an array with the selected plan id
      const api_plans = Array.from(
        { length: numberOfPackages },
        () => selPlanCtx.plan_id
      );

      // calculate the amount of XRD needed for the payment
      const xrd_amount = parseFloat((usd_price / xrd_rate).toFixed(2));
      //const xrd_amount = 1;
      // process the payment with the wallet
      const walletResult = await takePayment(rdt, xrd_amount);

      if (walletResult == -1) {
        alert(
          "Error during processing. Your purchase could not be saved. Please try again later."
        );
      } else if (walletResult == 0) {
        alert(
          "Transaction rejected by user. Your purchase could not be saved."
        );
      } else {
        // save the payment to the database
        const deposit = {
          intent_hash: walletResult.intentHash,
          ledger_state: walletResult.ledgerState,
          token: matchingToken,
          api_plans: api_plans,
          xrd_amount: xrd_amount,
          usd_amount: usd_price,
        };
        console.log("Deposit: ", deposit);
        const db_result = await saveUserDeposit(deposit, jwt);
        if (db_result.code == 200) {
          // route to the profile page
          // wait for 2 seconds to let the transaction be processed
          // before the user is redirected
          await new Promise((r) => setTimeout(r, 2000));
          alert("Your purchase was successful. Thank you for using RadixAPI!");
        } else {
          alert(
            "Your purchase could not be saved. Please contact us to support."
          );
        }
      }
    } catch (error) {
      console.log("Error during purchase: ", error);
      alert("Error during purchase. Please try again later.");
    }
    setPending(false);
  };

  const handleCheckBox = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handlePackageSelection = (event) => {
    setNumberOfPackages(event.target.value);
    setUsdPrice(event.target.value * selPlanCtx.usd_price);
  };

  return (
    <Fragment>
      <Typography variant="h4" gutterBottom sx={{mt:2}}>
        Purchase API plans
      </Typography>
      <Alert severity="info" sx={{mb: 2}}>
        <Typography variant="body1" >
          The selected plans will be added
          to your profile after the payment transaction is verified on the
          network.
        </Typography>
        <Typography variant="body1" >
          In case you already have an active API plan, the new one starts after
          the current one is used up.
        </Typography>
      </Alert>

      <Pricing mode="purchase" />

      <Stack direction="row" spacing={1} alignItems={"center"}>
        <Typography variant="h6" textAlign="right">
          Number of plans:
        </Typography>
        <FormControl >
          <Select
            labelId="package-select-label"
            id="package-select"
            value={numberOfPackages}
            onChange={handlePackageSelection}
            size="small"            
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Typography variant="body2">
        You can buy multiple plans at once. They will be used consecutively.
      </Typography>
      <Divider sx={{ mt: 2, mb: 1 }} />
      <Typography variant="h5" gutterBottom>
        Price: {(usd_price / xrd_rate).toLocaleString("en-US")} XRD
        (~ {usd_price.toLocaleString("en-US")} USD)
      </Typography>
      <FormControlLabel
        sx={{ mt: 1 }}
        control={
          <Checkbox            
            checked={termsAccepted}
            onChange={handleCheckBox}
          />
        }
        label={
          <span>
            I confirm that I have read and agree to the{" "}
            <Link href="/terms" target="_blank" rel="noopener noreferrer">
              Terms and Conditions
            </Link>{" "}
            for this API service.
          </span>
        }
      />

      <Button
        size="medium"
        variant="contained"
        color="secondary"
        disabled={!termsAccepted || pending}
        onClick={buyPackage}
      >
        Buy now
      </Button>
      {pending == true ? (
        <Alert severity="info">
          <Typography variant="body1" gutterBottom>
            Waiting for result from your wallet...
          </Typography>
          <LinearProgress color="secondary" />
        </Alert>
      ) : null}
    </Fragment>
  );
};

export default Purchase;
