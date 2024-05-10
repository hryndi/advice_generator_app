import Grid from "@mui/material/Grid";
import AdviceCard from "./components/AdviceCard";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  return (
    <Grid
      container
      minHeight="100svh"
      direction="column"
      alignItems={"center"}
      justifyContent="center"
      spacing={0}
      sx={{ backgroundColor: theme.palette.primary.dark }}
    >
      <Grid item padding={2}>
        <AdviceCard />
      </Grid>
    </Grid>
  );
}

export default App;
