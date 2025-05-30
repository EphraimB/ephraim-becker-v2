"use client";

import ComputerIcon from '@mui/icons-material/Computer';
import TheatersIcon from '@mui/icons-material/Theaters';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import Chip from '@mui/material/Chip';
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";
import { glassCardSx } from '@/styles/glassCard';

export default function Interests() {
    return (
        <Paper sx={glassCardSx}>
            <Typography
                component="h3"
                variant="h6"
                style={{ fontWeight: "bold" }}
            >
                Interests</Typography>
            <Stack spacing={1}>
                <Chip icon={<ComputerIcon />} label="Technology" variant="outlined" />
                <Chip icon={<TheatersIcon />} label="Sci-fi/fantasy movies" variant="outlined" />
                <Chip icon={<MusicNoteIcon />} label="Music" variant="outlined" />
                <Chip icon={<PedalBikeIcon />} label="Biking" variant="outlined" />
            </Stack>
        </Paper>
    );
}