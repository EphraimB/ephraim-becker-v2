import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function Concepts() {
  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Concepts
      </Typography>
      <Grid container size={{ xs: 12, lg: 3 }} spacing={2} sx={{ p: 2 }}>
        <Grid sx={{ textAlign: "center" }}>
          <Card
            sx={{
              width: "18rem",
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(255, 255, 255, 0.05))", // Glass effect
              backdropFilter: "blur(12px)", // Apply blur for glass effect
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.2)", // Border for definition
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow
              p: 3,
              transition: "all 0.3s ease", // Smooth transition for hover effect
              "&:hover": {
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)", // Increased shadow on hover
                transform: "scale(1.05)", // Slightly scale up the card
              },
            }}
          >
            <CardHeader title="AR glasses" />
            <CardContent>
              <Typography component="p" variant="subtitle1">
                Glasses to see the experience
              </Typography>
              <Typography component="p" variant="subtitle2">
                Launching in the far future
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="concepts/ar-glasses">
                <Button
                  startIcon={<ArrowForward />}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle background color
                    borderRadius: "8px", // Smooth corners
                    color: "blue", // Text color changed to blue
                    padding: "8px 16px", // Comfortable padding
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)", // Change background color on hover
                      transform: "scale(1.05)", // Slight scale effect on hover
                      transition: "background-color 0.3s, transform 0.3s ease", // Smooth transition
                    },
                    "&:focus": {
                      outline: "3px solid rgba(255, 255, 255, 0.5)", // Outline for focus state
                      outlineOffset: "2px",
                    },
                  }}
                  aria-label="Learn more about AR glasses"
                >
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
