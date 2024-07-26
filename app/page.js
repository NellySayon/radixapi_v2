import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Service from "../components/home/Service";
import References from "@/components/home/References";
import Statistics from "@/components/home/Statistics";

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
      <Paper elevation={0} sx={{ paddingTop: 12, paddingBottom: 4 }}>
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

          <Typography variant="h5" color="primary" fontWeight="700">
            How? By providing you with a simple, secure and scalable API to
            access the Radix ledger and fetch the data you need.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
          >
            Get Started
          </Button>
        </Container>
      </Paper>
      <Service />
      <Statistics />
      <References />
    </>
  );
}
