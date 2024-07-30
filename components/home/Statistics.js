import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Statistics = () => {
  const users = 100;
  const transactions = 1000000;
  const endpoints = 10;

  return (
    <Paper square elevation={0} sx={{ paddingTop: 6, paddingBottom: 2}}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography
                  variant="h2"
                  color="primary"
                  fontWeight={600}                  
                >
                  {users}
                </Typography>
                <Typography variant="h6">
                  Active users
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography
                  variant="h2"
                  color="primary"
                  fontWeight={600}                  
                >
                  {transactions}
                </Typography>
                <Typography variant="h6">
                  API requests served
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography
                  variant="h2"
                  color="primary"
                  fontWeight={600}                  
                >
                  {endpoints}
                </Typography>
                <Typography variant="h6">Endpoints available</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Statistics;
