"use client";

import { Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AgeComponent from "./Age";
import dayjs from "dayjs";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <Paper
      sx={{
        p: 4,
        textAlign: "center",
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(255, 255, 255, 0.05))",
        backdropFilter: "blur(12px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        color: "#fff",
        width: "75%",
        transition: "all 0.3s ease",
        "&:hover": {
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.15))",
          boxShadow: "0 6px 40px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.05)",
          transition: "transform 0.3s ease",
        },
      }}
    >
      <Image
        src="/ephraim-becker.jpg"
        width={100}
        height={150}
        alt="Picture of Ephraim Becker"
        style={{ borderRadius: "50%", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
      />
      <Typography
        variant="h4"
        component="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "10px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        Ephraim Becker
      </Typography>
      <br />
      <AgeComponent />
      <Typography
        component="p"
        sx={{
          fontWeight: "bold",
          marginBottom: "10px",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
          }}
        >
          Birthdate:{" "}
        </span>
        {dayjs("1996-07-19").format("MMMM DD, YYYY")}
      </Typography>
      <Typography
        component="p"
        sx={{
          fontWeight: "bold",
          marginBottom: "10px",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
          }}
        >
          Interests:{" "}
        </span>
        Technology, Sci-fi/fantasy movies
      </Typography>
      <Typography
        component="p"
        sx={{
          fontWeight: "bold",
          marginBottom: "10px",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          Location:{" "}
        </span>
        Cedarhurst, NY, United States
      </Typography>
      <br />
      <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
        <Link
          target="_blank"
          rel="noopener"
          className="link-hover-effect"
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
          className="link-hover-effect"
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
          className="link-hover-effect"
          href="https://twitter.com/emb180"
        >
          <Image src="/logo-black.png" alt="X logo" width={50} height={50} />
        </Link>
        <Link
          target="_blank"
          rel="noopener"
          className="link-hover-effect"
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
          className="link-hover-effect"
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
          className="link-hover-effect"
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
  );
}
