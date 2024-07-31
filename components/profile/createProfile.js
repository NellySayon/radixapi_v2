import Link from "next/link";

//import emailjs from "@emailjs/browser";

import React, { useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import mintBadge from "./mintBadge";
import checkBadge from "./checkBadge";
import AuthContext from "../context/authContext";

export const CreateProfileDialog = (props) => {
  // console.log("DialogAddprofile props: ", props);
  const authCtx = useContext(AuthContext);
  const rdt = authCtx.rdt;
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [usage, setUsage] = useState("");
  

  const handleDialogSubmit = async () => {
    // check if all mandatory fields are filled
    if (name === "") {
      alert("Please enter a profile name.");
      return;
    } else if (usage === "") {
      alert("Please select your expected usage.");
      return;
    } else if (telegram === "" && email === "") {
      alert("Please enter either a telegram contact or an email address.");
      return;
    } else if (!termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    props.setPending(true);
    props.setOpen(false);

    const result = await mintBadge(rdt, name);

    if (result == 1) {
      saveProfile();
    } else if (result == -1){
      alert("Error during badge minting. Your profile could not be saved. Please try again later.");
    } else if (result == 0) {
      alert("Transaction rejected by user. Your profile could not be saved.");
    }

    props.setPending(false);  
    handleDialogClose();
  };

  // interims solution creating an email only
  const saveProfile = async () => {
    const badges = await checkBadge(rdt.walletApi.getWalletData().accounts[0].address);
    const badge_id = badges.length > 0 ? badges[0] : "";
    authCtx.setBadgeId(badge_id);

    const templateParams = {
      badge_id: badge_id,
      profile_name: name,
      profile_usage: usage,
      telegram_contact: telegram,
      email_contact: email,
    };

    // emailjs
    //   .send(
    //     "service_1cfylys",
    //     "template_qhkxneh",
    //     templateParams,
    //     "4H-UkjdVmJ0gSKS8f"
    //   )
    //   .then(
    //     (result) => {
    //       alert(
    //         "Your profile has been saved successfully. We will contact you soon to provide your bearer token."
    //       );
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert(
    //         "Something went wrong. Please contact us to activate your profile"
    //       );
    //     }
    //   );
  };

  const handleDialogClose = () => {
    // reset all fields
    setTelegram("");
    setEmail("");
    setName("");
    setUsage("");
    setTermsAccepted(false);
    // close dialog
    props.setOpen(false);
  };

  const handleCheckBox = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleSelection = (event) => {
    setUsage(event.target.value);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      onClose={props.handleDialogClose}
    >
      <DialogTitle color="#483d8b" fontWeight="600">
        {props.mode === "add" ? "Create a profile" : "Edit your profile"}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        {props.mode === "add" ? (
          <React.Fragment>
            <DialogContentText>
              Thank you for your interest in using our API service. Please fill
              out the form below to create a new profile. You will be asked to
              confirm a transaction in your Radix Wallet to mint a new owner
              badge for your profile. 
              Your profile needs to be activated by our team before you can use the API service.
            </DialogContentText>
            <Divider sx={{ mt: 2, mb: 1 }} />
          </React.Fragment>
        ) : null}

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" color="#483d8b" gutterBottom>
              Profile name
            </Typography>
            <TextField
              id="profile-name"
              type="text"
              color="success"
              fullWidth
              helperText="! be aware that this will be a public name on the NFT"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => {
                if (e.target.value.length <= 50) {
                  setName(e.target.value);
                }
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <Typography variant="subtitle1" color="#483d8b" gutterBottom>
                Expected usage
              </Typography>

              <RadioGroup
                row
                sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                onChange={handleSelection}
              >
                <FormControlLabel
                  value="commercial"
                  control={<Radio sx={{ color: "#483d8b" }} />}
                  label="commercial"
                />
                <FormControlLabel
                  value="private"
                  control={<Radio sx={{ color: "#483d8b" }} />}
                  label="private"
                />
                <FormControlLabel
                  value="both"
                  control={<Radio sx={{ color: "#483d8b" }} />}
                  label="both"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Typography variant="subtitle1" color="#483d8b" gutterBottom>
          Preferred contact
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <TextField
            id="telegram"
            type="text"
            color="success"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TelegramIcon sx={{ color: "#483d8b" }} />
                </InputAdornment>
              ),
            }}
            value={telegram}
            onChange={(e) => {
              setTelegram(e.target.value);
            }}
          />
          <TextField
            id="email"
            type="text"
            color="success"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#483d8b" }} />
                </InputAdornment>
              ),
            }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Stack>
        <FormControlLabel
          sx={{ color: "rgba(0, 0, 0, 0.6)", mt: 1 }}
          control={
            <Checkbox
              sx={{ color: "#483d8b" }}
              checked={termsAccepted}
              onChange={handleCheckBox}
            />
          }
          label={
            <span>
              I confirm that I have read and agree to the{" "}
              <Link
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(0, 0, 0, 0.6)" }}
              >
                Terms and Conditions
              </Link>{" "}
              for this API service.
            </span>
          }
        />
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: "#483d8b" }} onClick={handleDialogSubmit}>
          Submit
        </Button>
        <Button sx={{ color: "#483d8b" }} onClick={handleDialogClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
