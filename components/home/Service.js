import Image from "next/image";
import apiicon from "../../public/images/Icon.png";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
  "...",
];

const Service = () => {
  return (
    <Paper square elevation={1} sx={{ paddingTop: 8, paddingBottom: 12 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={apiicon} alt="RadixAPI" className="sectionImage" />
        </Box>
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          alignItems="flex-end"
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <Typography variant="h4">Our Service</Typography>
          <Typography variant="h6" color="primary">
            Most wanted API for Radix related data
          </Typography>
        </Stack>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={5}>
            <Card>
              <CardContent>
                <Typography variant="h6" textAlign={{xs: "center", sm: "right"}} fontWeight="400">
                  We make data access easier, more accessible and more intuitive
                  for Radix developers.
                </Typography>
                <Typography variant="h6" textAlign={{xs: "center", sm: "right"}} fontWeight="400">
                  Therefore we have endpoints for the following data on mainnet and stokenet ready to
                  use...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Stack
              direction="row"
              spacing={2}
              useFlexGap
              flexWrap="wrap"
              justifyContent="center"
            >
              {endpoints.map((endpoint) => (
                <Chip
                  key={"chip_" + endpoint}
                  label={endpoint}
                  color="secondary"
                  size="large"
                  variant="outlined"
                  icon={<DataObjectIcon />}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          spacing={4}
          useFlexGap
          flexWrap="wrap"
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
          href="/service"
        >
          Show all
        </Button>
      </Container>
    </Paper>
  );
};

export default Service;
