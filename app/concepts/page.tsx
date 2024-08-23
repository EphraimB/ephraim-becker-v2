import Grid from "@mui/material/Grid";
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

export default function Concepts() {
  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Concepts
      </Typography>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Card sx={{ minWidth: 275 }}>
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
              <Link href="concepts/ar-glasses" as="concepts/ar-glasses">
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
