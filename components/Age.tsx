"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { CircularProgress, Paper } from "@mui/material";

export default function AgeComponent() {
  const [age, setAge] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<string | null>(null);

  useEffect(() => {
    const birthdate = "1996-07-19";
    const today = dayjs();

    const currentAge = dayjs().diff(birthdate, "year");
    setAge(currentAge);

    // Calculate next birthday
    let nextBirthday = dayjs(birthdate).year(today.year());
    if (nextBirthday.isBefore(today, "day")) {
      nextBirthday = nextBirthday.add(1, "year");
    }

    const daysUntilBirthday = nextBirthday.diff(today, "day");

    if (daysUntilBirthday <= 60) {
      setCountdown(`Turning ${currentAge + 1} in ${daysUntilBirthday} day${daysUntilBirthday !== 1 ? "s" : ""} (${nextBirthday.format("MMM D, YYYY")})`);
    }

    if (daysUntilBirthday === 0) {
      setCountdown(`🎉 It's your birthday today! Turning ${currentAge}`);
    }

  }, []);

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
      <Typography component="h3" variant="h6" style={{ fontWeight: "bold" }}>Age</Typography>
      {age !== null ? (
        <Typography component="p" variant="body2">{countdown ? countdown : age}</Typography>
      ) : (
        <CircularProgress size={20} sx={{ marginLeft: 1 }} aria-label="Loading age" />
      )}
    </Paper>
  );
}
