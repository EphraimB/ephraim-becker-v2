"use client";

import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import AgeComponent from "./Age";
import dayjs from "dayjs";
import Link from "next/link";
import Chip from '@mui/material/Chip';
import ComputerIcon from '@mui/icons-material/Computer';
import TheatersIcon from '@mui/icons-material/Theaters';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <Grid size={{ xs: 6, lg: 3 }}>
          <Chip icon={<ComputerIcon />} label="Technology" variant="outlined" />
          <Chip icon={<TheatersIcon />} label="Sci-fi/fantasy movies" variant="outlined" />
          <Chip icon={<MusicNoteIcon />} label="Music" variant="outlined" />
          <Chip icon={<PedalBikeIcon />} label="Biking" variant="outlined" />
        </Grid>
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
      <Grid
        container
        spacing={2}
        size={{ sm: 3, md: 1 }}
        sx={{ justifyContent: "center" }}
      >
        <Chip
          label="Facebook"
          component="a"
          target="_blank"
          rel="noopener"
          href="https://www.facebook.com/ephraim.becker/"
          icon={<FacebookIcon />}
          variant="outlined"
          clickable
        />
        <Chip
          label="Instagram"
          component="a"
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/ephraim.becker/"
          icon={<InstagramIcon />}
          variant="outlined"
          clickable
        />
        <Chip
          label="X (formally twitter)"
          component="a"
          target="_blank"
          rel="noopener"
          href="https://twitter.com/emb180"
          icon={<XIcon />}
          variant="outlined"
          clickable
        />
        <Chip
          label="YouTube"
          component="a"
          target="_blank"
          rel="noopener"
          href="https://www.youtube.com/channel/UCIHxAXYLxYlNaQiv0do0bUg"
          icon={<YouTubeIcon />}
          variant="outlined"
          clickable
        />
        <Chip
          label="LinkedIn"
          component="a"
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/ephraim-becker/"
          icon={<LinkedInIcon />}
          variant="outlined"
          clickable
        />
        <Chip
          label="GitHub"
          component="a"
          target="_blank"
          rel="noopener"
          href="https://github.com/EphraimB"
          icon={<GitHubIcon />}
          variant="outlined"
          clickable
        />
      </Grid>
    </Paper>
  );
}
