"use client";

import { useState, useEffect } from "react";
import { Team } from "@/app/types";
import AddTeamForm from "./AddTeamForm";
import AddPlayerForm from "./AddPlayerForm";

export default function BuddyDuelsGame() {
  const [teams, setTeams] = useState<Team[]>([]);

  // Load teams from localStorage on component mount
  useEffect(() => {
    const storedTeams = localStorage.getItem("teams");
    if (storedTeams) {
      setTeams(JSON.parse(storedTeams));
    }
  }, []);

  // Save teams to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  // Function to add a team
  const addTeam = (team: Team) => {
    const updatedTeams = [...teams, { ...team, players: [] }];
    setTeams(updatedTeams);
  };

  // Function to add a player to a team
  const addPlayer = (playerName: string, teamName: string) => {
    const updatedTeams = teams.map((team) =>
      team.name === teamName
        ? { ...team, players: [...team.players, playerName] }
        : team
    );
    setTeams(updatedTeams);
  };

  return (
    <div>
      <h2>Add Teams</h2>
      <AddTeamForm onAddTeam={addTeam} teams={teams} />

      <h2>Add Players</h2>
      <AddPlayerForm onAddPlayer={addPlayer} teams={teams} />

      <h2>Teams</h2>
      {teams.map((team, index) => (
        <div
          key={index}
          style={{
            border: `2px solid ${team.color}`,
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>
            {team.name} ({team.color})
          </h3>
          <ul>
            {team.players.map((player, idx) => (
              <li key={idx}>{player}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
