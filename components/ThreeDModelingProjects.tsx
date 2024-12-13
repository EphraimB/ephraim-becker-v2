import Grid from "@mui/material/Grid2";
import FlipCard from "./FlipCard";

export default function ThreeDModelingProjects() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, lg: 3 }}>
        <FlipCard
          started="2016-10-26"
          ended="2016-11-26"
          images={[
            {
              src: "/beaming-video-screenshot.png",
              description: "Beaming video screenshot",
            },
          ]}
          title="Beaming video"
          front="I made a beaming video in Blender
            after one month of making it. I 3D modeled the transported controls
            and made the effects all in Blender. I beamed from my bedroom to my
            therapy office."
          back="Under construction"
          links={[
            {
              src: "https://www.youtube.com/watch?v=6ktNUS7dt0M",
              description: "You can view the video on YouTube here",
            },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 12, lg: 3 }}>
        <FlipCard
          ended="2024-04-08"
          images={[
            {
              src: "/blob-man-video-screenshot.png",
              description: "Blob man video screenshot",
            },
          ]}
          title="Blob man video"
          front="I made a blob man video in Blender
            and 3D modeled the blob man and the walking animation guided by a
            tutorial on Udemy"
          back="Under construction"
          links={[
            {
              src: "https://www.youtube.com/watch?v=G8un8IlF7_c",
              description: "You can view the video on YouTube here",
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
