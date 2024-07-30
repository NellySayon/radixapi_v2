import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Service from "../components/home/Service";
import References from "@/components/home/References";
import Statistics from "@/components/home/Statistics";
import Pricing from "@/components/home/Pricing";

export const metadata = {
  title: "RadixAPI",
  description:
    "Data provider for Radix DLT, delivering the endpoints you need.",
  keywords:
    "Radix, API, endpoint, data, json, blockchain, ledger, database, gateway, developer, dApp",
};

export default function Home() {
  return (
    <>
      <Paper square elevation={0} sx={{ paddingTop: 12, paddingBottom: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            color="primary"
            fontWeight="700"
            gutterBottom
          >
            Welcome to RadixAPI
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            We enable fast dApp development by letting you focus on your smart
            contracts and your UX!
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom fontWeight="700">
            How? By providing you with a simple, secure and scalable API to
            access the Radix ledger and fetch the data you need.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
            href="/start"
          >
            Get Started
          </Button>
        </Container>
      </Paper>
      <Service />
      <Statistics />
      <References />
      <Pricing mode="preview"/>
      <Paper square elevation={1} sx={{ paddingTop: 12, paddingBottom: 12 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            color="primary"
            fontWeight="700"
            gutterBottom
          >
            Get in touch!
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            Contact us for any questions, feedback or feature requests. We offer custom solutions as well.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3 }}
            href="mailto: radixapi@upperone.llc"
          >
            Email us
          </Button>
        </Container>
      </Paper>
    </>
  );
}
