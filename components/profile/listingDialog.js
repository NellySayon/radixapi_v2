import React, { useState, useContext, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import AuthContext from "../context/authContext";
import { saveListingData } from "../api/listing";

export const AddListingDialog = (props) => {
  const authCtx = useContext(AuthContext);
  const [resource, setResource] = useState("");
  const [resourceError, setResourceError] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [name, setName] = useState("");
  const [mode, setMode] = useState("add");
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState([
    { accountAddress: "", description: "", share: 100 },
  ]);

  useEffect(() => {
    if (props.userData && props.userData.listings != null) {
      const data = props.userData.listings[0];
      setMode("edit");
      setResource(data.resource_address);
      setName(data.project_name);
      const fields = data.exclude_accounts.map((account) => ({
        accountAddress: account.account,
        description: account.description,
        share: account.percentage,
      }));
      setFields(fields);
    }
    else {
      setMode("add");
      setResource("");
      setName("");
      setFields([{ accountAddress: "", description: "", share: 100 }]);      
    }
  }, [props.userData]);


  const handleInputChange = (index, event) => {
    const values = [...fields];
    if (event.target.name === "accountAddress") {
      values[index].accountAddress = event.target.value;
    } else if (event.target.name === "description") {
      values[index].description = event.target.value;
    } else {
      const shareValue = parseFloat(event.target.value);
      if (shareValue >= 1 && shareValue <= 100) {
        values[index].share = shareValue;
      }
    }
    setFields(values);
    // reset error state on input change
    const errorValues = [...errors];
    errorValues[index] = false;
    setErrors(errorValues);
  };

  const checkContent = (index) => {
    if (
      fields[index].accountAddress &&
      !fields[index].accountAddress.startsWith("account_")
    ) {
      const errorValues = [...errors];
      errorValues[index] = true;
      setErrors(errorValues);
    }
  };

  const handleAddFields = () => {
    setFields([...fields, { accountAddress: "", description: "", share: 100 }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleDialogSubmit = async () => {
    // check if all mandatory fields are filled
    if (resource === "") {
      alert("Please enter a resource address.");
      return;
    } else if (fields[0].accountAddress === "") {
      alert("Please enter at least one account address.");
      return;
    }

    // remove empty fields
    const filteredFields = fields.filter(
      (field) => field.accountAddress !== ""
    );
    setFields(filteredFields);

    props.setPending(true);
    props.setOpen(false);

    saveData();

    props.setPending(false);
    handleDialogClose();
  };

  const saveData = async () => {        
    const data = {
      resource_address: resource,
      project_name: name,
      exclude_accounts: fields.map(field => ({
        account: field.accountAddress,
        percentage: parseFloat(field.share),
        description: field.description
      })),
    };
    console.log("Data: ", data)
    const result = await saveListingData(data, authCtx.jwt);  
    console.log("Result: ", result);
    if (!result.code) {
      alert(result.detail);
    } 
  };

  const handleDialogClose = () => {
    // reset all fields
    setResource("");
    setResourceError(false);
    setName("");
    setFields([{ accountAddress: "", description: "", share: 100 }]);
    setErrors([]);    
    setAccepted(false);
    // close dialog
    props.setOpen(false);
  };

  const handleCheckBox = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      onClose={props.handleDialogClose}
    >
      <DialogTitle color="#483d8b" fontWeight="600">
        {mode === "add"
          ? "Add listing information"
          : "Edit listing information"}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <DialogContentText>
          To calculate the correct circulating supply for your token, the
          following information is required.
        </DialogContentText>
        <Divider sx={{ mt: 2, mb: 1 }} />
        <Typography variant="subtitle1" color="#483d8b" gutterBottom>
          Project name
        </Typography>
        <TextField
          id="projectName"
          type="text"         
          fullWidth
          variant="outlined"
          size="small"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          sx={{ mb: 2 }}
        />

        <Typography variant="subtitle1" color="#483d8b" gutterBottom>
          Resource address
        </Typography>
        <TextField
          id="resourceAddress"
          type="text"         
          fullWidth
          variant="outlined"
          color={resourceError ? "error" : "success"}
          size="small"
          error={resourceError}
          value={resource}
          helperText={
            resourceError
              ? 'Resource address must start with "resource_"'
              : null
          }
          onChange={(e) => {
            setResource(e.target.value);
          }}
          onBlur={() => {
            if (!resource.startsWith("resource_")) {
              setResourceError(true);
            } else {
              setResourceError(false);
            }
          }}
          sx={{ mb: 2 }}
        />
        <Typography variant="subtitle1" color="#483d8b" gutterBottom>
          Excluded accounts
        </Typography>
        <Typography variant="body2" color="rgba(0, 0, 0, 0.6)" gutterBottom>
          Please provide all accounts held by foundation/company, team,
          investors, and advisors, that contain tokens which are considered as locked. These will be
          reduced from the circulating supply.
        </Typography>

        <div>
          {fields.map((field, index) => (
            <div key={`${field}-${index}`}>
              <TextField
                name="accountAddress"
                type="text"
                color={errors[index] ? "error" : "success"}
                fullWidth
                error={errors[index]}
                variant="outlined"
                size="small"
                helperText={
                  errors[index]
                    ? 'Account address must start with "account_"'
                    : "Account address"
                }
                value={field.accountAddress}
                onChange={(event) => handleInputChange(index, event)}
                onBlur={() => checkContent(index)}
                sx={{ mb: 1 }}
              />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                sx={{ mb: 2 }}
              >
                <TextField
                  name="description"
                  type="text"
                  color="success"
                  variant="outlined"
                  fullWidth
                  helperText="Account description"
                  size="small"
                  value={field.description}
                  onChange={(event) => handleInputChange(index, event)}
                />
                <TextField
                  name="share"
                  type="number"
                  color="success"
                  helperText="Locked amount in %"
                  variant="outlined"
                  size="small"                  
                  value={field.share}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  onChange={(event) => handleInputChange(index, event)}                  
                />
                <IconButton onClick={() => handleRemoveFields(index)}>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </div>
          ))}

          <Button
            variant="outlined"
            color="success"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => handleAddFields()}
          >
            Add another account
          </Button>
        </div>

        <FormControlLabel
          sx={{ color: "rgba(0, 0, 0, 0.6)", mt: 1 }}
          control={
            <Checkbox
              sx={{ color: "#483d8b" }}
              checked={accepted}
              onChange={handleCheckBox}
            />
          }
          label={
            "I confirm that I am the owner of the resource and that the information provided is correct as well as complete."
          }
        />
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ color: "#483d8b" }}
          disabled={!accepted}
          onClick={handleDialogSubmit}
        >
          Submit
        </Button>
        <Button sx={{ color: "#483d8b" }} onClick={handleDialogClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
