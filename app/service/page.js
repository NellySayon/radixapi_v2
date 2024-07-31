import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SwaggerIcon from "@/components/icons/swaggerIcon";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const metadata = {
  title: "Service",
  description:
    "The service provided by RadixAPI, including the endpoints and functionality.",  
};

function ServicePage() {
  return (
    <>
      <Paper square elevation={1} sx={{ paddingTop: 14, paddingBottom: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 1 }}>
            What do we offer?
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            RadixAPI is a community data service, that provides additional
            endpoints and functionality to the official Radix Gateway API to
            make it easier to obtain specific data. These include:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="info" />
              </ListItemIcon>
              <ListItemText
                primary="Creating and verifying ROLA challenges"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="info" />
              </ListItemIcon>
              <ListItemText
                primary="Getting up-to-date token prices"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="info" />
              </ListItemIcon>
              <ListItemText
                primary="Finding the owners of a
            fungible or non fungible resource"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="info" />
              </ListItemIcon>
              <ListItemText
                primary="Finding the owners of validator
            stake and pool unit tokens"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="info" />
              </ListItemIcon>
              <ListItemText
                primary="Receiving all transaction data via
            WebSocket"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="info" />
              </ListItemIcon>
              <ListItemText
                primary="... and many more!"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
          </List>

          <Alert
            icon={<SwaggerIcon fontSize="medium" />}
            color="info"
            sx={{ mt: 3 }}
          >
            <AlertTitle>API specification</AlertTitle>
            Check our{" "}
            <a href="https://api.radixapi.net/docs" target="_blank">
              Swagger UI
            </a>{" "}
            for detailed information on the available endpoints.
          </Alert>
        </Container>
      </Paper>
      <Paper square elevation={0} sx={{ paddingTop: 6, paddingBottom: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 1 }}>
            How do we do that?
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            We are running our own full nodes with the original aggregator
            provided by the Radix Foundation and an adapted PostgreSQL database
            with additional aggregation functionality.
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            The service is running in a cluster to ensure high availability.
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Due to our experience with the Radix ledger, our work on
            RadixCharts, and our contribution to the Radix developer community
            we know what data is important to the community and can provide it
            in a structured way.
          </Typography>
        </Container>
      </Paper>
      <Paper square elevation={1} sx={{ paddingTop: 6, paddingBottom: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 1 }}>
            What do we plan next?
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Our aim is to provide a fast, reliable and secure service to the
            Radix community. We are constantly working on new features and
            improvements. And we are open to your feedback and suggestions. If
            you have any ideas or requests, feel free to contact us.
          </Typography>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLScGjrnzA101bPn4slJI4YOu67XLMuFWoUauNRcU5tuZankGmA/viewform"
            target="_blank"
            startIcon={<ArrowOutwardIcon />}
          >
            Send a feature request
          </Button>
          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
            We are currently working on a Gateway Service!
          </Typography>
          <Typography variant="h6" gutterBottom>
            The public Gateway API provided by the Radix Foundation is rate
            limited, only designed for users browsing a front-end dApp alongside
            with using the connect button and their wallet. When projects build
            back-end solutions with large or user-driven data query profiles,
            they quickly encounter unpredictable peaks in API queries that are
            not supported by the official Radix Foundation gateway. Projects are
            obligated to run their own gateways or use a service of other
            providers to mitigate this deficit. RadixAPI wants to establish such
            a gateway service to:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <AddCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="enable developers building their dApps without
            data limitations"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="prevent the need to gain technical knowledge to run
            a gateway"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="offer cost attractive solutions by sharing infrastructure"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
          </List>
          <Typography variant="h6" gutterBottom>
            Stay tuned for more information!
          </Typography>
        </Container>
      </Paper>
    </>
  );
}

export default ServicePage;
