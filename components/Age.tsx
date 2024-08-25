"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";

export default function AgeComponent() {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const birthdate = "1996-07-19";
    const currentAge = dayjs().diff(birthdate, "year");
    setAge(currentAge);
  }, []);

  return (
    <Typography>
      <span style={{ fontWeight: "bold" }}>Age: </span>
      {age !== null ? age : "Loading..."}
    </Typography>
  );
}
