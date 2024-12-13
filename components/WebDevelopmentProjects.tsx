import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentProjects() {
  const cardHeight = 600;

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, lg: 3 }}>
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
            Started work on it {dayjs("2015-11-10").format("MMMM DD, YYYY")}.
            While this project was left incomplete due to shifting priorities
            and personal challenges, I gained valuable experience working with
            html, css, and JavaScript and developed new problem-solving skills.
            I plan to revisit and improve this project in the future whether on
            the web or in Virtual Reality and maybe even connected to AI
            chatbots like ChatGPT.
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
      <Grid size={{ xs: 12, lg: 3 }}>
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
            Started work on it {dayjs("2023-02-20").format("MMMM DD, YYYY")} and
            still ongoing
          </Typography>
          <Typography variant="h3" component="h3">
            Budgeting app
          </Typography>
          <Typography variant="body1" component="h4">
            A web app that you can input all my habits and generates
            transactions for any date range based off the habits you input
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "center" }}
          >
            <Link href="https://github.com/EphraimB/budgeting" target="_blank">
              Click to download the prototype off GitHub
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
