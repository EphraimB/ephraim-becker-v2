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
    const birthMonth = 6; // July (0-indexed)
    const birthDay = 19;

    const today = dayjs().startOf("day");
    const thisYear = today.year();

    const birthdayThisYear = dayjs()
      .set("year", thisYear)
      .set("month", birthMonth)
      .set("date", birthDay)
      .startOf("day");

    const isBirthdayToday = birthdayThisYear.isSame(today, "day");

    const nextBirthday = birthdayThisYear.isBefore(today)
      ? birthdayThisYear.add(1, "year")
      : birthdayThisYear;

    const age = isBirthdayToday || birthdayThisYear.isBefore(today)
      ? thisYear - 1996
      : thisYear - 1996 - 1;

    setAge(age);

    const daysUntilBirthday = nextBirthday.diff(today, "day");

    if (isBirthdayToday) {
      setCountdown(`🎉 It's your birthday today! Turning ${age}`);
    } else if (daysUntilBirthday <= 60) {
      setCountdown(
        `Turning ${age + 1} in ${daysUntilBirthday} day${daysUntilBirthday !== 1 ? "s" : ""}`
      );
    } else {
      setCountdown(null); // no message if > 60 days away
    }
  }, []);

  return (
    <Paper sx={{ ...glassCardSx, cursor: "pointer" }}>
      <Typography component="h3" variant="h6" style={{ fontWeight: "bold" }}>Age</Typography>
      {age !== null ? (
        <Typography component="p" variant="body2">{countdown ? countdown : age}</Typography>
      ) : (
        <CircularProgress size={20} sx={{ marginLeft: 1 }} aria-label="Loading age" />
      )}
    </Paper>
  );
}
