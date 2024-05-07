import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import Box from "@mui/material/Box";

export default function Portfolio() {
  const cardHeight = 600;

  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Portfolio
      </Typography>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} lg={3}>
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
              I made a Harry Potter currency converter for the Ti-84 Plus
              graphing calculator that converts between Dollars and Gallions and
              vice versa. I created a lot of versions of it. I coded it in Ti
              Basic and then tried Assembly but couldn't handle it.
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
        <Grid item xs={12} lg={3}>
          <Paper sx={{ p: 2, height: cardHeight, alignContent: "flex-end" }}>
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "center" }}
            >
              Started work on it {dayjs("2016-04-09").format("MMMM DD, YYYY")}{" "}
              and abandoned it {dayjs("2016-04-11").format("MMMM DD, YYYY")}
            </Typography>
            <Typography variant="h3" component="h3">
              LCARS Google Chrome extention
            </Typography>
            <Typography variant="body1" component="h4">
              I made a Google Chrome extention that turns any website into the
              LCARS interface. It didn't do a good job and abandoned it. I might
              come back to it.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "center" }}
            >
              <Link href="https://github.com/EphraimB/LCARS" target="_blank">
                You can download the extention here
              </Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3}>
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
              Started work on it {dayjs("2016-10-26").format("MMMM DD, YYYY")}{" "}
              and finished it {dayjs("2016-11-26").format("MMMM DD, YYYY")}
            </Typography>
            <Typography variant="h3" component="h3">
              Beaming video
            </Typography>
            <Typography variant="body1" component="h4">
              I made a beaming video in{" "}
              <Link href="https://www.blender.org/" target="_blank">
                Blender
              </Link>{" "}
              after one month of making it. I 3D modeled the transported
              controls and made the effects all in Blender. I beamed from my
              bedroom to my Ohel therapy office.
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
        <Grid item xs={12} lg={3}>
          <Paper sx={{ p: 2, height: cardHeight }}>
            <Image
              src="/virtual-friend-screenshot.png"
              alt="Virtual friend app screenshot"
              width={300}
              height={200}
            />
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "center" }}
            >
              Started work on it {dayjs("2015-11-10").format("MMMM DD, YYYY")}{" "}
              but gave up {dayjs("2021-08-27").format("MMMM DD, YYYY")} when I
              converted it to Python without thinking. I then abandoned it.
            </Typography>
            <Typography variant="h3" component="h3">
              Virtual Friend app
            </Typography>
            <Typography variant="body1" component="h4">
              A web app that you can interact with a virtual friend. This was
              before ChatGPT came out.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "center" }}
            >
              <Link
                href="https://github.com/EphraimB/Virtual-Friend"
                target="_blank"
              >
                Click to download the prototype off GitHub
              </Link>
              <br />
              <Link
                href="https://ephraimb.github.io/Virtual-Friend/"
                target="_blank"
              >
                You can also view it live here
              </Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Paper sx={{ p: 2, height: cardHeight }}>
            <Image
              src="/budgeting-screenshot.png"
              alt="Budgeting app screenshot"
              width={300}
              height={200}
            />
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "center" }}
            >
              Started work on it {dayjs("2023-02-20").format("MMMM DD, YYYY")}{" "}
              and still ongoing
            </Typography>
            <Typography variant="h3" component="h3">
              Budgeting app
            </Typography>
            <Typography variant="body1" component="h4">
              A web app that you can input all my habits and generates
              transactions for any date range based off the habits you inputted
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "center" }}
            >
              <Link
                href="https://github.com/EphraimB/budgeting"
                target="_blank"
              >
                Click to download the prototype off GitHub
              </Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3}>
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
    </Box>
  );
}
