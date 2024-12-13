import Grid from "@mui/material/Grid2";
import FlipCard from "./FlipCard";

export default function WebDevelopmentProjects() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, lg: 3 }}>
        <FlipCard
          started="2015-11-10"
          images={[
            {
              src: "/virtual-friend-screenshot.png",
              description: "Virtual friend app screenshot",
            },
          ]}
          title="Virtual Friend app"
          front="A web app that you can interact with a virtual friend. This was
            before ChatGPT came out."
          back="Under construction"
          links={[
            {
              src: "https://github.com/EphraimB/budgeting",
              description: "Click to download the prototype off GitHub",
            },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 12, lg: 3 }}>
        <FlipCard
          started="2023-02-20"
          images={[
            {
              src: "/budgeting-screenshot.png",
              description: "Budgeting app screenshot",
            },
          ]}
          title="Budgeting app"
          front="A web app that you can input all my habits and generates
            transactions for any date range based off the habits you input"
          back="Under construction"
          links={[
            {
              src: "https://github.com/EphraimB/Virtual-Friend",
              description: "Click to download the prototype off GitHub",
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
