"use client";

import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { Paper, Box, Fade } from "@mui/material";
import { glassCardSx } from "@/styles/glassCard";

export default function AgeComponent() {
  const [piAge, setPiAge] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [lastPi, setLastPi] = useState<string>("");
  const [nextPi, setNextPi] = useState<string>("");
  const [celebrate, setCelebrate] = useState(false);

  const prevSnapRef = useRef<number | null>(null);

  useEffect(() => {
    const birthDate = dayjs("1996-07-19T12:28");
    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;

    function compute() {
      const now = dayjs();

      const ageYears = now.diff(birthDate, "millisecond") / MS_PER_YEAR;
      const rawPiAge = ageYears / Math.PI;

      // snap to 0.001π
      const snapped = Math.floor(rawPiAge * 1000) / 1000;
      setPiAge(snapped);

      // smooth progress toward next integer π
      const lowerPi = Math.floor(rawPiAge);
      const fractional = rawPiAge - lowerPi;
      setProgress(fractional);

      // π birthday detection (exact integer boundary crossing)
      if (
        prevSnapRef.current !== null &&
        Math.floor(prevSnapRef.current) !== Math.floor(snapped)
      ) {
        setCelebrate(true);
        setTimeout(() => setCelebrate(false), 4000);
      }
      prevSnapRef.current = snapped;

      // compute last/next π birthdays
      const lastPiBirthday = dayjs(
        birthDate.valueOf() + lowerPi * Math.PI * MS_PER_YEAR,
      );
      const nextPiBirthday = dayjs(
        birthDate.valueOf() + (lowerPi + 1) * Math.PI * MS_PER_YEAR,
      );

      setLastPi(lastPiBirthday.format("MMM D, YYYY"));
      setNextPi(nextPiBirthday.format("MMM D, YYYY"));
    }

    compute();
    const interval = setInterval(compute, 1000);
    return () => clearInterval(interval);
  }, []);

  // ---- border progress math ----
  const perimeter = 100; // normalized perimeter
  const dash = progress * perimeter;
  const gap = perimeter - dash;

  return (
    <Paper
      sx={{
        ...glassCardSx,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        p: 2,
      }}
    >
      {/* animated border */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <rect
            x="1"
            y="1"
            width="98"
            height="98"
            rx="12"
            ry="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={`${dash} ${gap}`}
            pathLength={perimeter}
            style={{
              opacity: 0.9,
              transition: "stroke-dasharray 0.6s ease",
            }}
          />
        </svg>
      </Box>

      {/* celebration overlay */}
      <Fade in={celebrate}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: celebrate ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            background:
              "radial-gradient(circle at center, rgba(255,215,0,0.25), transparent 70%)",
            pointerEvents: "none",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          🎉 π Birthday!
        </Box>
      </Fade>

      {/* content */}
      <Typography
        component="h3"
        variant="h6"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 1 }}
      >
        Age
      </Typography>

      {piAge !== null && (
        <>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: 700, letterSpacing: 0.5 }}
          >
            {piAge.toFixed(3)}π
          </Typography>

          <Typography
            variant="caption"
            sx={{ display: "block", textAlign: "center", opacity: 0.75, mt: 1 }}
          >
            {Math.floor(piAge)}π — {lastPi}
          </Typography>

          <Typography
            variant="caption"
            sx={{ display: "block", textAlign: "center", opacity: 0.75 }}
          >
            {Math.floor(piAge) + 1}π — {nextPi}
          </Typography>
        </>
      )}
    </Paper>
  );
}
