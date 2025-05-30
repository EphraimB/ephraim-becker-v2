"use client";

import ComputerIcon from '@mui/icons-material/Computer';
import TheatersIcon from '@mui/icons-material/Theaters';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import Chip from '@mui/material/Chip';
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

export default function Interests() {
    return (
        <Paper sx={{
            p: 4,
            textAlign: "center",
            background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(255, 255, 255, 0.05))",
            backdropFilter: "blur(12px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            color: "#fff",
            width: "auto",
            transition: "all 0.3s ease",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
            "&:hover": {
                background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.15))",
                boxShadow: "0 6px 40px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease",
            },
        }}>
            <Typography
                component="h3"
                variant="h6"
                style={{ fontWeight: "bold" }}
            >
                Interests</Typography>
            <Chip icon={<ComputerIcon />} label="Technology" variant="outlined" />
            <Chip icon={<TheatersIcon />} label="Sci-fi/fantasy movies" variant="outlined" />
            <Chip icon={<MusicNoteIcon />} label="Music" variant="outlined" />
            <Chip icon={<PedalBikeIcon />} label="Biking" variant="outlined" />

        </Paper>
    );
}