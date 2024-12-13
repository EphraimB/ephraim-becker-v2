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
import DesignProjects from "./DesignProjects";
import AppsProjects from "./AppsProjects";

export default function PortfolioControls() {
  const [category, setCategory] = useState("");

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
              <MenuItem value="1">Design</MenuItem>
              <MenuItem value="2">Apps</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <br />
      <br />
      {parseInt(category) === 0 ? (
        <WebDevelopmentProjects />
      ) : parseInt(category) === 1 ? (
        <DesignProjects />
      ) : parseInt(category) === 2 ? (
        <AppsProjects />
      ) : null}
    </Stack>
  );
}
