import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import Image from "next/image";

export default function XRProjects() {
  const cardHeight = 600;

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, lg: 3 }}>
        <Paper sx={{ p: 2, height: cardHeight }}>
          <Image
            src="/beautiful-mind-vr-app.png"
            alt="A screenshot of the watch I created"
            width={254}
            height={142}
          />
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            Finished it on {dayjs("2023-01-01").format("MMMM DD, YYYY")}
          </Typography>
          <Typography variant="h4" component="h3">
            Beautiful Mind - VR Teleportation Watch Interface
          </Typography>
          <Typography variant="body2" component="h4">
            Collaborated on the Beautiful Mind VR app, contributing to the
            design and implementation of a teleportation watch interface. This
            feature allowed users to navigate virtual environments seamlessly
            through an intuitive spatial UI. The project deepened my experience
            with immersive user interactions and highlighted the potential of VR
            for innovative solutions. Technologies used included Unity and C#.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
