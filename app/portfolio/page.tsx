import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import Box from "@mui/material/Box";

export default function Portfolio() {
  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Portfolio
      </Typography>
      <Grid container spacing={2} sx={{ m: 2 }}>
        <Grid item xs={12} lg={3}>
          <Paper sx={{ p: 2 }}>
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
          <Paper sx={{ p: 2 }}>
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
      </Grid>
    </Box>
  );
}
