import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
    <Fragment>
      {mode === "purchase" &&
        <Typography variant="h6" gutterBottom>
          Desired plan:
        </Typography>
      }
      <Grid
        container
        direction="row"
        alignItems="stretch"
        display="flex"
        spacing={4}
        sx={{ mb: 2 }}
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
    </Fragment>
  );
};

export default Pricing;
