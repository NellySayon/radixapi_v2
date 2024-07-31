"use client";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import SelectedPlanContext from "../context/selectedPlanContext";

const PriceCard = (props) => {
  const selPlanCtx = useContext(SelectedPlanContext);

  const handleChange = (event) => {
    //props.setSelectedPlan(event.target.value);
    selPlanCtx.setSelectedPlan(
      event.target.value,
      props.plan.plan,
      props.plan.price
    );
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          {props.mode === "purchase" ? (
            <Radio
              checked={selPlanCtx.selectedPlan === props.plan.name}
              onChange={handleChange}
              value={props.plan.name}
              
            />
          ) : null}
          <Typography variant="h4" fontWeight={600}>
            {props.plan.name}
          </Typography>
        </Stack>
        <Box style={{ height: "210px" }}>
          <List dense>
            {props.plan.conditions &&
              props.plan.conditions.map((condition) => (
                <ListItem key={condition}>
                  {props.mode !== "purchase" ? (
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="info" />
                    </ListItemIcon>
                  ) : null}
                  <ListItemText
                    primary={condition}
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                </ListItem>
              ))}
          </List>
        </Box>
        <Stack
          direction="row"
          justifyContent="right"
          alignItems="flex-end"
          spacing={1}
        >
          <Typography variant="h4" color="primary" textAlign="right">
            {props.plan.price} USD
          </Typography>
          <Typography variant="h6" color="primary" textAlign="right">
            in $XRD
          </Typography>
        </Stack>
      </CardContent>
      {props.mode === "main" ? (
        <CardActions sx={{ marginTop: "auto", justifyContent: "right" }}>
          <Button size="medium" color="info" href="_blank">
            Terms
          </Button>

          <Link href="/profile">
            <Button
              size="medium"
              variant="outlined"
              color="info"
              onClick={() => {
                selPlanCtx.setSelectedPlan(
                  props.plan.name,
                  props.plan.plan,
                  props.plan.price
                );
              }}
            >
              Buy
            </Button>
          </Link>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default PriceCard;
