import Image from "next/image";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Resume() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Image
          src="/ephraim-becker.jpg"
          alt="Image of Ephraim Becker"
          width={200}
          height={200}
        />
        <Typography variant="h3" component="h3">
          Ephraim Becker
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="body2" component="p">
          emb16@outlook.com | (516) 880-3474 | Cedarhurst, NY 11516
        </Typography>
      </Grid>
      <br />
      <br />
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2, height: 150 }}>
          <Typography variant="h6" component="h4">
            Professional Summary
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Experienced developer with a demonstrated history of working in the
            financial services industry. Skilled in HTML, CSS, JavaScript,
            React, NextJS, Python, Java, and Blender, and Unity. Strong
            engineering professional graduated from Ivdu.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2, height: 150 }}>
          <Typography variant="h6" component="h4">
            Work History
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Working {dayjs().diff("2017-02-08", "year", true).toFixed(2)} years
            at Junior Developer at PAAY from February 2017 to Present
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2, height: 150 }}>
          <Typography variant="h6" component="h4">
            Skills
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            HTML, CSS, JavaScript, React, NextJS, ExpressJS, Python, Java,
            Blender, Unity
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2, height: 150 }}>
          <Typography variant="h6" component="h4">
            Education
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Went to Ivdu Upper School from 2014 to 2016 for High School and
            Touro College for a Computer Science major from January 2020 to
            January 2022 for college
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
