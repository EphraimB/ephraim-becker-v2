"use client";

import { useState, useEffect } from "react";
import { Team } from "@/app/types";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TeamForm from "./TeamForm";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function BuddyDuelsGame() {
  const [isTeamAExpanded, setIsTeamAExpanded] = useState(false);
  const [isTeamBExpanded, setIsTeamBExpanded] = useState(false);

  const [teamA, setTeamA] = useState({
    name: "Team A",
    color: "green",
    points: 0,
    players: Array(10).fill(""), // Initially 10 empty players
  });
  const [teamB, setTeamB] = useState({
    name: "Team B",
    color: "red",
    points: 0,
    players: Array(10).fill(""), // Initially 10 empty players
  });

  // Handle expanding and collapsing teams
  const handleTeamA = () => setIsTeamAExpanded((prev) => !prev);
  const handleTeamB = () => setIsTeamBExpanded((prev) => !prev);

  // Handle team name change
  const handleTeamANameChange = (newName: string) => {
    setTeamA((prevTeam) => ({ ...prevTeam, name: newName }));
  };

  const handleTeamBNameChange = (newName: string) => {
    setTeamB((prevTeam) => ({ ...prevTeam, name: newName }));
  };

  // Handle player name change
  const handleTeamAPlayerChange = (index: number, newPlayerName: string) => {
    setTeamA((prevTeam) => {
      const updatedPlayers = [...prevTeam.players];
      updatedPlayers[index] = newPlayerName;
      return { ...prevTeam, players: updatedPlayers };
    });
  };

  const handleTeamBPlayerChange = (index: number, newPlayerName: string) => {
    setTeamB((prevTeam) => {
      const updatedPlayers = [...prevTeam.players];
      updatedPlayers[index] = newPlayerName;
      return { ...prevTeam, players: updatedPlayers };
    });
  };

  useEffect(() => {
    const storedTeamA = localStorage.getItem("TeamA");
    if (storedTeamA) {
      setTeamA(JSON.parse(storedTeamA));
    }

    const storedTeamB = localStorage.getItem("TeamB");
    if (storedTeamB) {
      setTeamB(JSON.parse(storedTeamB)); // Corrected from setTeamA to setTeamB
    }
  }, []);

  // Save teams to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("TeamA", JSON.stringify(teamA));
  }, [teamA]);

  useEffect(() => {
    localStorage.setItem("TeamB", JSON.stringify(teamB));
  }, [teamB]);

  const handleTeamAColorChange = (newColor: string) => {
    setTeamA((prevTeam) => ({ ...prevTeam, color: newColor }));
  };

  const handleTeamBColorChange = (newColor: string) => {
    setTeamB((prevTeam) => ({ ...prevTeam, color: newColor }));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "16px" }}>
      {/* Team A */}
      <Paper
        style={{
          padding: "16px",
          marginBottom: "16px",
          backgroundColor: teamA.color, // Apply selected team color
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <Stack direction="row">
          <Stack direction="column">
            <Typography variant="body2">{teamA.name}</Typography>
            <Typography variant="body1">{teamA.points}</Typography>
          </Stack>
          {/* Chevron button */}
          <IconButton onClick={handleTeamA}>
            {isTeamAExpanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Stack>
        {/* Conditionally render the inline form */}
        {isTeamAExpanded && (
          <TeamForm
            team={teamA}
            onTeamNameChange={handleTeamANameChange}
            onColorChange={handleTeamAColorChange}
            onPlayerChange={handleTeamAPlayerChange}
          />
        )}
      </Paper>

      {/* Team B */}
      <Paper
        style={{
          padding: "16px",
          marginBottom: "16px",
          backgroundColor: teamB.color, // Apply selected team color
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <Stack direction="row">
          <Stack direction="column">
            <Typography variant="body2">{teamB.name}</Typography>
            <Typography variant="body1">{teamB.points}</Typography>
          </Stack>
          <IconButton onClick={handleTeamB}>
            {isTeamAExpanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Stack>
        {/* Conditionally render the inline form */}
        {isTeamBExpanded && (
          <TeamForm
            team={teamB}
            onTeamNameChange={handleTeamBNameChange}
            onColorChange={handleTeamBColorChange}
            onPlayerChange={handleTeamBPlayerChange}
          />
        )}
      </Paper>
    </Box>
  );
}
