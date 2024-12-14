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
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import projects from "@/app/projects.json";
import FlipCard from "./FlipCard";

export default function PortfolioControls() {
  const [category, setCategory] = useState("");

  // Extract unique categories
  const uniqueCategories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
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
            <Select
              value={category}
              onChange={handleCategoryChange}
              label="Category"
            >
              {uniqueCategories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <br />
      <br />
      {category && (
        <Box>
          <Typography component="h2" variant="h2">
            Projects in {category}
          </Typography>
          <br />
          <br />
          <Grid container spacing={2}>
            {projects
              .filter((project) => project.category === category)
              .map((project) => (
                <Grid size={{ xs: 12, md: 3 }} key={project.id}>
                  <FlipCard data={project} />
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
    </Stack>
  );
}
