"use client";

import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

export default function Location() {
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
                Location</Typography>
            <Typography component="p" variant="body2">Cedarhurst, NY, United States</Typography>
        </Paper>
    );
}