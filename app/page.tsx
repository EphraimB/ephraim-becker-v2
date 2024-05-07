import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";

export default function Home() {
  const birthdate = "1996-07-19";

  const age = dayjs().diff(birthdate, "year");

  return (
    <main className={styles.main}>
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            p: 4,
            textAlign: "center",
          }}
        >
          <Image
            src="/ephraim-becker.jpg"
            width={100}
            height={150}
            alt="Picture of the Ephraim Becker"
          />
          <Typography variant="h3" component="h3">
            Ephraim Becker
          </Typography>
          <br />
          <Typography>
            <span style={{ fontWeight: "bold" }}>Age: </span>
            {age}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Birthdate: </span>
            {dayjs(birthdate).format("MMMM DD, YYYY")}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Interests: </span>
            Technology, Astronomy, Sci-fi/fantasy movies, Trains
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Location: </span>
            Cedarhurst, NY, United States
          </Typography>
        </Paper>
      </Container>
    </main>
  );
}
