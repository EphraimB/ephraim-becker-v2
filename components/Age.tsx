"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { CircularProgress, Paper } from "@mui/material";
import { glassCardSx } from "@/styles/glassCard";

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
    <Paper sx={glassCardSx}>
      <Typography component="h3" variant="h6" style={{ fontWeight: "bold" }}>Age</Typography>
      {age !== null ? (
        <Typography component="p" variant="body2">{countdown ? countdown : age}</Typography>
      ) : (
        <CircularProgress size={20} sx={{ marginLeft: 1 }} aria-label="Loading age" />
      )}
    </Paper>
  );
}
