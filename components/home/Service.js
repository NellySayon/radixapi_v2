"use client";
import Image from "next/image";
import apiicon from "../../public/images/Icon.png";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import DataObjectIcon from "@mui/icons-material/DataObject";

const endpoints = [
  "Account",
  "Component",
  "Entity",
  "Network",
  "NFT",
  "Price",
  "ROLA",
  "Token",
  "Transaction",
  "Supply",
  "Validator",
];

const Service = () => {
  return (
    <Paper elevation={6} sx={{ paddingTop: 6, paddingBottom: 6 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={apiicon} alt="RadixAPI" className="sectionImage" />
        </Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h4">Service</Typography>
          <Typography gutterBottom variant="h6" color="primary">
            Most wanted endpoints for Radix related data
          </Typography>
        </Stack>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Our goal is to make the data access easier, more accessible and also
          more intuitive for the Radix developers. Therefore we have endpoints
          for the following data ready to use:
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {endpoints.map((endpoint) => (
            <Chip
              key={"chip_" + endpoint}
              label={endpoint}
              color="info"
              variant="outlined"
              icon={<DataObjectIcon />}
            />
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
          justifyContent="center"
          sx={{ mt: 4, mb: 4 }}
        >
          <Typography variant="h4">Endpoints</Typography>
          <Typography variant="h4">WebSocket</Typography>
          <Typography variant="h4">ROLA as a Service</Typography>
          <Typography variant="h4">Listing Service</Typography>
        </Stack>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => {
            window.open(
              "https://docs.radixapi.net/howto",
              "_blank"
            );
          }}          
        >
          More Information
        </Button>
        
      </Container>
    </Paper>
  );
};

export default Service;
