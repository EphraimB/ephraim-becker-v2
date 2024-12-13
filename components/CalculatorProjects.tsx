import Grid from "@mui/material/Grid2";
import FlipCard from "./FlipCard";

export default function CalculatorProjects() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, lg: 3 }}>
        <FlipCard
          ended="2014-09-01"
          images={[
            {
              src: "/wizardc7-screenshot.gif",
              description: "Harry Potter currency converter screenshot",
              size: {
                width: 100,
                height: 100,
              },
            },
            {
              src: "/wizardc7-color-screenshot.gif",
              description: "Harry Potter currency converter color screenshot",
              size: {
                width: 200,
                height: 200,
              },
            },
          ]}
          title="Harry Potter currency converter"
          front="I made a Harry Potter currency converter for the Ti-84 Plus graphing
            calculator that converts between Dollars and Gallions and vice
            versa. I created a lot of versions of it and coded it in Ti Basic."
          back="Under construction"
          links={[
            {
              src: "/wizardc.zip",
              description:
                "You can download the latest completed version here. Version 7.3",
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
