import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Pricing from "@/components/home/Pricing";

export const metadata = {
  title: "Pricing",
  description:
    "The pricing of RadixAPI, including the different plans and costs.",  
};

function PricingPage() {
  return (
    <>
      <Paper square elevation={1} sx={{ paddingTop: 14, paddingBottom: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 1 }}>
            What does it cost?
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            RadixAPI is a paid service. We offer different plans to fit your
            needs. You can start with a small plan and upgrade as your needs
            grow. There is three main API plans available to fetch the usual
            endpoints. They differ in amount of credits, rate limit, validity
            and of course costs. Additionally to the base plans there are
            special plans for dedicated functionality like WebSockets or ROLA.
            These can be purchased as AddOn to a base plan, but also
            independently.
          </Typography>
        </Container>
      </Paper>
      <Paper square elevation={0} sx={{ paddingTop: 6, paddingBottom: 6 }}>
        <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 2 }}>
            Available API plans
          </Typography>
          <Pricing mode="main" />
        </Container>
      </Paper>
      <Paper square elevation={1} sx={{ paddingTop: 6, paddingBottom: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 1 }}>
            Detailed costs
          </Typography>
          <Typography variant="h6">
            Check our{" "}
            <a
              href="https://docs.radixapi.net/pricing-and-conditions/consuming-credits"
              target="_blank"
            >
              documentation
            </a>{" "}
            to get the detailed list of credit costs per endpoint.
          </Typography>
        </Container>
      </Paper>
    </>
  );
}

export default PricingPage;
