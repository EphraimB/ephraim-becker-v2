import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export default function DesignProjects() {
  const cardHeight = 600;

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, lg: 3 }}>
        <Paper sx={{ p: 2, height: cardHeight }}>
          <Image
            src="/beaming-video-screenshot.png"
            alt="Beaming video screenshot"
            width={300}
            height={200}
          />
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            Started work on it {dayjs("2016-10-26").format("MMMM DD, YYYY")} and
            finished it {dayjs("2016-11-26").format("MMMM DD, YYYY")}
          </Typography>
          <Typography variant="h3" component="h3">
            Beaming video
          </Typography>
          <Typography variant="body1" component="h4">
            I made a beaming video in{" "}
            <Link href="https://www.blender.org/" target="_blank">
              Blender
            </Link>{" "}
            after one month of making it. I 3D modeled the transported controls
            and made the effects all in Blender. I beamed from my bedroom to my
            therapy office.
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            <Link
              href="https://www.youtube.com/watch?v=6ktNUS7dt0M"
              target="_blank"
            >
              You can view the video on YouTube here
            </Link>
          </Typography>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, lg: 3 }}>
        <Paper sx={{ p: 2, height: cardHeight }}>
          <Image
            src="/blob-man-video-screenshot.png"
            alt="Blob man video screenshot"
            width={300}
            height={200}
          />
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            Finished it {dayjs("2024-04-08").format("MMMM DD, YYYY")}
          </Typography>
          <Typography variant="h3" component="h3">
            Blob man video
          </Typography>
          <Typography variant="body1" component="h4">
            I made a blob man video in{" "}
            <Link href="https://www.blender.org/" target="_blank">
              Blender
            </Link>{" "}
            and 3D modeled the blob man and the walking animation guided by a
            tutorial on{" "}
            <Link href="https://www.udemy.com/" target="_blank">
              Udemy
            </Link>
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            <Link
              href="https://www.youtube.com/watch?v=G8un8IlF7_c"
              target="_blank"
            >
              You can view the video on YouTube here
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
