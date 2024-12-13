import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import styles from "./page.module.css";
import { Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import AgeComponent from "@/components/Age";

export default function Home() {
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
            alt="Picture of Ephraim Becker"
          />
          <Typography variant="h3" component="h3">
            Ephraim Becker
          </Typography>
          <br />
          <AgeComponent />
          <Typography>
            <span style={{ fontWeight: "bold" }}>Birthdate: </span>
            {dayjs("1996-07-19").format("MMMM DD, YYYY")}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Interests: </span>
            Technology, Sci-fi/fantasy movies
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Location: </span>
            Cedarhurst, NY, United States
          </Typography>
          <br />
          <Stack spacing={2} direction="row">
            <Link
              target="_blank"
              rel="noopener"
              style={{ display: "inline", backgroundColor: "rgba(0,0,0,0)" }}
              href="https://www.facebook.com/ephraim.becker/"
            >
              <Image
                src="/Facebook_Logo_Primary.png"
                alt="Facebook logo"
                width={50}
                height={50}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener"
              style={{ display: "inline", backgroundColor: "rgba(0,0,0,0)" }}
              href="https://www.instagram.com/ephraim.becker/"
            >
              <Image
                src="/Instagram_Glyph_Gradient.png"
                alt="Instagram logo"
                width={50}
                height={50}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener"
              style={{ display: "inline", backgroundColor: "rgba(0,0,0,0)" }}
              href="https://twitter.com/emb180"
            >
              <Image
                src="/logo-black.png"
                alt="X logo"
                width={50}
                height={50}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener"
              style={{ display: "inline", backgroundColor: "rgba(0,0,0,0)" }}
              href="https://www.youtube.com/channel/UCIHxAXYLxYlNaQiv0do0bUg"
            >
              <Image
                src="/yt_logo_rgb_light.png"
                alt="YouTube logo"
                width={100}
                height={50}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener"
              style={{ display: "inline", backgroundColor: "rgba(0,0,0,0)" }}
              href="https://www.linkedin.com/in/ephraim-becker-3263b810b/"
            >
              <Image
                src="/LI-In-Bug.png"
                alt="Linkedin logo"
                width={50}
                height={50}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener"
              style={{ display: "inline", backgroundColor: "rgba(0,0,0,0)" }}
              href="https://github.com/EphraimB"
            >
              <Image
                src="/github-mark.png"
                alt="GitHub logo"
                width={50}
                height={50}
              />
            </Link>
          </Stack>
        </Paper>
      </Container>
    </main>
  );
}
