"use client";

import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { glassCardSx } from "@/styles/glassCard";

export default function Location() {
    return (
        <Paper sx={{
            ...glassCardSx,
            cursor: "pointer",
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.3)
              ),
              url("/backgrounds/cedarhurst.png")
            `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backdropFilter: "blur(12px)",
            color: "#fff",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
            "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 40px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease",
            },
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