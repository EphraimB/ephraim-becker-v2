import { Team } from "@/app/types";
import { useState } from "react";

export default function AddTeamForm({
  onAddTeam,
  teams,
}: {
  onAddTeam: (team: Team) => void;
  teams: Team[];
}) {
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("red"); // Default to red

  const handleAddTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (teamName.trim() && teams.length < 2) {
      onAddTeam({ name: teamName, color: teamColor, players: [] });
      setTeamName(""); // Clear form
    }
  };

  return (
    <form onSubmit={handleAddTeam}>
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Enter team name"
        required
      />
      <select value={teamColor} onChange={(e) => setTeamColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        {/* Add more colors as needed */}
      </select>
      <button type="submit" disabled={teams.length >= 2}>
        Add Team
      </button>
    </form>
  );
}
