"use client";

import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { glassCardSx } from "@/styles/glassCard";

export default function Location() {
    return (
        <Paper sx={{
            ...glassCardSx,
            cursor: "pointer",
        }}
        >
            <Typography
                component="h3"
                variant="h6"
                style={{ fontWeight: "bold" }}
            >
                Location</Typography>
            <Typography component="p" variant="body2">Cedarhurst, NY, United States</Typography>
        </Paper>
    );
}