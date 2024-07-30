import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarsIcon from "@mui/icons-material/Stars";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import PriceCard from "../ui/PriceCard";

import {
  plan_small,
  plan_medium,
  plan_large,
  plan_rola,
  plan_socket,
  plan_listing,
} from "../utils/conditions";

const Pricing = (props) => {
  const mode = props.mode ? props.mode : "preview";
  //const [selectedPlan, setSelectedPlan] = useState("Small");

  return (
    <Paper square elevation={0} sx={{ paddingTop: 6, paddingBottom: 6 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {mode === "preview" ? (
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            alignItems="flex-end"
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            <Typography variant="h4">Pricing</Typography>
            <Typography variant="h6" color="primary">
              Different plans for different needs. Choose the one that fits you
              best for now and grow with us.
            </Typography>
          </Stack>
        ) : mode === "main" ? null : ( 
          <Typography variant="h6" gutterBottom>
            Desired plan:
          </Typography>
        )}
        <Grid
          container
          direction="row"
          alignItems="stretch"
          display="flex"
          spacing={4}
          sx={{ mb: mode === "preview" ? 6 : 0 }}
        >
          <Grid item xs={12} sm={6} lg={4} display="flex">
            <PriceCard plan={plan_small} mode={mode} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} display="flex">
            <PriceCard plan={plan_medium} mode={mode} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} display="flex">
            <PriceCard plan={plan_large} mode={mode} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} display="flex">
            <PriceCard plan={plan_rola} mode={mode} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} display="flex">
            <PriceCard plan={plan_socket} mode={mode} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} display="flex">
            <PriceCard plan={plan_listing} mode={mode} />
          </Grid>
        </Grid>
        {mode === "preview" ? (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="/pricing"          
        >
          More on pricing
        </Button>
        ) : null}
      </Container>
    </Paper>
  );
};

export default Pricing;
