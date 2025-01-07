"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

export default function AgeComponent() {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const birthdate = "1996-07-19";
    const currentAge = dayjs().diff(birthdate, "year");
    setAge(currentAge);
  }, []);

  return (
    <Typography sx={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)" }}>
      <span style={{ fontWeight: "bold" }}>Age: </span>
      {age !== null ? (
        age
      ) : (
        <CircularProgress size={20} sx={{ marginLeft: 1 }} />
      )}
    </Typography>
  );
}
