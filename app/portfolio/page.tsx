import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PortfolioControls from "@/components/PortfolioControls";

export default function Portfolio() {
  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Portfolio
      </Typography>
      <br />
      <br />
      <PortfolioControls />
    </Box>
  );
}
