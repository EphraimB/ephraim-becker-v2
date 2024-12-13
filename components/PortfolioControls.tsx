"use client";

import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import WebDevelopmentProjects from "./WebDevelopmentProjects";
import ThreeDModelingProjects from "./ThreeDModelingProjects";
import CalculatorProjects from "./CalculatorProjects";
import XRProjects from "./XRProjects";

export default function PortfolioControls() {
  const [category, setCategory] = useState("0");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  return (
    <Stack direction="column">
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            width: 300,
          }}
        >
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={handleChange} label="Category">
              <MenuItem value="0">Web Development</MenuItem>
              <MenuItem value="1">3D modeling</MenuItem>
              <MenuItem value="2">Calculator</MenuItem>
              <MenuItem value="3">XR</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <br />
      <br />
      {parseInt(category) === 0 ? (
        <WebDevelopmentProjects />
      ) : parseInt(category) === 1 ? (
        <ThreeDModelingProjects />
      ) : parseInt(category) === 2 ? (
        <CalculatorProjects />
      ) : parseInt(category) === 3 ? (
        <XRProjects />
      ) : null}
    </Stack>
  );
}
