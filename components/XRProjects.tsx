import Grid from "@mui/material/Grid2";
import FlipCard from "./FlipCard";

export default function XRProjects() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, lg: 3 }}>
        <FlipCard
          ended="2023-01-01"
          images={[
            {
              src: "/beautiful-mind-vr-app.png",
              description: "A screenshot of the watch I created",
            },
          ]}
          title="Beautiful Mind - VR Teleportation Watch Interface"
          front="Collaborated on the Beautiful Mind VR app, contributing to the
            design and implementation of a teleportation watch interface. This
            feature allowed users to navigate virtual environments seamlessly
            through an intuitive spatial UI. The project deepened my experience
            with immersive user interactions and highlighted the potential of VR
            for innovative solutions. Technologies used included Unity and C#."
          back="Under construction"
        />
      </Grid>
    </Grid>
  );
}
