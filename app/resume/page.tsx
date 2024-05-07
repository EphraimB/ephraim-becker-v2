import Image from "next/image";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";

export default function Resume() {
  return (
    <Grid container sx={{ textAlign: "center" }}>
      <Grid item xs={12}>
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
      <Grid item xs={12}>
        <Typography variant="body2" component="p">
          emb16@outlook.com | (516) 880-3474 | Cedarhurst, NY 11516
        </Typography>
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <Typography variant="h6" component="h4">
          Professional Summary
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="p">
          Experienced developer with a demonstrated history of working in the
          financial services industry. Skilled in HTML, CSS, JavaScript, React,
          NextJS, Python, Java, and Blender, and Unity. Strong engineering
          professional graduated from Ivdu.
        </Typography>
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <Typography variant="h6" component="h4">
          Work History
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="p">
          Working {dayjs().diff("2017-02-08", "year", true).toFixed(2)} years at
          Junior Developer at PAAY from February 2017 - Present
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h4">
          Skills
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="p">
          HTML
        </Typography>
        <Typography variant="body2" component="p">
          CSS
        </Typography>
        <Typography variant="body2" component="p">
          JavaScript
        </Typography>
        <Typography variant="body2" component="p">
          React
        </Typography>
        <Typography variant="body2" component="p">
          NextJS
        </Typography>
        <Typography variant="body2" component="p">
          ExpressJS
        </Typography>
        <Typography variant="body2" component="p">
          Python
        </Typography>
        <Typography variant="body2" component="p">
          Java
        </Typography>
        <Typography variant="body2" component="p">
          Blender
        </Typography>
        <Typography variant="body2" component="p">
          Unity
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h4">
          Education
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="p">
          Touro College for a Computer Science major from January 2020 - January
          2022
        </Typography>
        <Typography variant="body2" component="p">
          Ivdu Upper School from 2014 - 2016
        </Typography>
      </Grid>
    </Grid>
  );
}
