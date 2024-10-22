import React from "react";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Team } from "@/app/types";

export default function TeamForm({
  team,
  onTeamNameChange,
  onColorChange,
  onPlayerChange,
}: {
  team: Team;
  onTeamNameChange: (team: string) => void;
  onColorChange: (color: string) => void;
  onPlayerChange: (index: number, player: string) => void;
}) {
  return (
    <Box sx={{ padding: "16px", transition: "max-height 0.3s ease" }}>
      {/* Team Name Input */}
      <TextField
        label="Team Name"
        variant="outlined"
        value={team.name}
        onChange={(e) => onTeamNameChange(e.target.value)}
        margin="normal"
        style={{ marginBottom: "12px" }}
      />

      {/* Team Color Select */}
      <FormControl margin="normal">
        <InputLabel>Team Color</InputLabel>
        <Select
          value={team.color}
          onChange={(e) => onColorChange(e.target.value)}
        >
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </Select>
      </FormControl>

      {/* Player Name Inputs */}
      {team.players.map((player, index) => (
        <>
          <br />
          <TextField
            key={index}
            label={`Player ${index + 1}`}
            variant="outlined"
            value={player}
            onChange={(e) => onPlayerChange(index, e.target.value)}
            margin="dense"
            style={{ marginBottom: "8px" }}
          />
        </>
      ))}
    </Box>
  );
}
