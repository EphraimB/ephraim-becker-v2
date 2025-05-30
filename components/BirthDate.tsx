"use client";

import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { glassCardSx } from "@/styles/glassCard";

export default function BirthDate() {
    return (
        <Paper sx={glassCardSx}>
            <Typography
                component="h3"
                variant="h6"
                style={{ fontWeight: "bold" }}
            >
                Birthdate</Typography>
            <Typography component="p" variant="body2">{dayjs("1996-07-19").format("MMMM DD, YYYY")}</Typography>

        </Paper>
    );
}