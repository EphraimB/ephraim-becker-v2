import { Team } from "@/app/types";
import { useState } from "react";

export default function AddPlayerForm({
  onAddPlayer,
  teams,
}: {
  onAddPlayer: (playerName: string, selectedTeam: string) => void;
  teams: Team[];
}) {
  const [playerName, setPlayerName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(teams[0]?.name || "");

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim() && selectedTeam) {
      const team = teams.find((t) => t.name === selectedTeam);
      if (team && team.players.length < 10) {
        onAddPlayer(playerName, selectedTeam);
        setPlayerName(""); // Clear the form
      } else {
        alert(`Team ${selectedTeam} already has 10 players.`);
      }
    }
  };

  return (
    <form onSubmit={handleAddPlayer}>
      {teams.length < 2 ? (
        <p>Please add both teams first!</p>
      ) : (
        <>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter player name"
            required
          />
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            {teams.map((team, index) => (
              <option key={index} value={team.name}>
                {team.name} ({team.color})
              </option>
            ))}
          </select>
          <button type="submit" disabled={teams.length < 2}>
            Add Player
          </button>
        </>
      )}
    </form>
  );
}
