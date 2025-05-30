"use client";

import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import AgeComponent from "./Age";
import BirthDate from "./BirthDate";
import Interests from "./Interests";
import Location from "./Location";
import SocialMedia from "./SocialMedia";

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
      <Grid container spacing={2} justifyContent="center">
        {/* Row 1: Age, Birthdate, Location */}
        <Grid size={{ xs: 6, md: 4 }}>
          <AgeComponent />
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <BirthDate />
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Location />
        </Grid>

        {/* Row 2: Interests spans the full width on mobile and desktop */}
        <Grid size={{ xs: 12 }}>
          <Interests />
        </Grid>
      </Grid>

      <br />

      <Grid
        container
        spacing={2}
        size={{ xs: 12 }}
        sx={{ justifyContent: "center" }}
      >
        <SocialMedia />
      </Grid>
    </Paper>
  );
}
