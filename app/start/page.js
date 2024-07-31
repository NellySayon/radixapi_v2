import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const metadata = {
  title: "Get Started",
  description:
    "Learn how to get started with RadixAPI and use our data service.",  
};

function GetStarted() {
  return (
    <Paper square elevation={1} sx={{ paddingTop: 12, paddingBottom: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 1 }}>
          Get Started
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Follow these steps to get ready to use the RadixAPI data service.
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h3" color="primary" sx={{ mb: 2 }}>
              1
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Create an account
            </Typography>
            <Typography variant="body1">
              Accounts on RadixAPI use the Radix native assets, meaning you do
              not need to register with email and password, but mint a profile
              badge instead.
            </Typography>
            <Typography variant="body1">
              Connect your Radix wallet, choose an account and create a profile.
              You will receive a badge in form of an NFT that you can use to
              authenticate with the API. This badge is transferable to other
              team members by simply sending it to their account.
            </Typography>
          </CardContent>
          <Button href="/profile" startIcon={<ArrowOutwardIcon/>}>To the profile page</Button>
        </Card>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h3" color="primary" sx={{ mb: 2 }}>
              2
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Choose an API plan
            </Typography>
            <Typography variant="body1">
              We offer different payment plans for little or high usage of the
              data service.
            </Typography>
            <Typography variant="body1">
              Choose the one that fits your needs best and proceed to the
              payment. The badge you minted in step 1 will be used to assign
              your purchase to the right account. The payment will be processed
              in XRD via your connected Radix wallet.
            </Typography>
            <Typography variant="body1">
              When we verified the transaction, the balance will be credited automatically.
            </Typography>
          </CardContent>
          <Button href="/pricing" startIcon={<ArrowOutwardIcon/>}>To the price list</Button>
        </Card>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h3" color="primary" sx={{ mb: 2 }}>
              3
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Receive your access token
            </Typography>
            <Typography variant="body1">
              Each account has a unique access token that is used to
              authenticate with the API.
            </Typography>
            <Typography variant="body1">
              You find your access token on the profile page. Check out the
              documentation to see how to use it.
            </Typography>
          </CardContent>
          <Button href="/profile" startIcon={<ArrowOutwardIcon/>}>To the profile page</Button>
          <Button
            href="https://docs.radixapi.net/howto/authenticate"
            target="_blank"
            startIcon={<ArrowOutwardIcon/>}
            sx={{ml: 2}}
          >
            To the docs
          </Button>
        </Card>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h3" color="primary" sx={{ mb: 2 }}>
              4
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Keep an eye on your balance
            </Typography>
            <Typography variant="body1">
              You find the remaining amount of credits as well as the validity
              time on your profile page.
            </Typography>
            <Typography variant="body1">
              You can easily purchase a new API plan upfront and we will
              activate it automatically when the old one expires.
            </Typography>
          </CardContent>
          <Button href="/profile" startIcon={<ArrowOutwardIcon/>}>To the profile page</Button>
        </Card>

        <Alert
          icon={<HelpOutlineIcon fontSize="medium" />}
          color="primary"
          sx={{ mt: 3 }}
        >
          <AlertTitle>Need help?</AlertTitle>
          Check our{" "}
          <a href="https://docs.radixapi.net/howto/get-access" target="_blank">
            How-To guide
          </a>{" "}
          for more information. If you have any questions left, feel free to
          contact us via <a href="mailto: radixapi@upperone.llc">email</a> or{" "}
          <a href="https://t.me/radixapi" target="_blank">telegram</a>.
        </Alert>
      </Container>
    </Paper>
  );
}

export default GetStarted;
