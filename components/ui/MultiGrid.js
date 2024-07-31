import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const MultiGrid = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1.5}
    >
      <Grid item xs="auto">
        <Typography
          variant="subtitle1"
          fontWeight="600"          
          textAlign="left"
          width="180px"
        >
          {props.title}:
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="subtitle1" textAlign="left">
          {props.value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MultiGrid;
