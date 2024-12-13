import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export default function AppsProjects() {
  const cardHeight = 600;

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, lg: 3 }}>
        <Paper sx={{ p: 2, height: cardHeight }}>
          <Image
            src="/wizardc7-screenshot.gif"
            alt="Harry Potter currency converter screenshot"
            width={100}
            height={100}
          />
          <Image
            src="/wizardc7-color-screenshot.gif"
            alt="Harry Potter currency converter color screenshot"
            width={200}
            height={200}
          />
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            Finished it on {dayjs("2014-09-01").format("MMMM DD, YYYY")}
          </Typography>
          <Typography variant="h3" component="h3">
            Harry Potter currency converter
          </Typography>
          <Typography variant="body1" component="h4">
            I made a Harry Potter currency converter for the Ti-84 Plus graphing
            calculator that converts between Dollars and Gallions and vice
            versa. I created a lot of versions of it and coded it in Ti Basic.
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            <Link href="/wizardc.zip">
              You can download the latest completed version here. Version 7.3
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
