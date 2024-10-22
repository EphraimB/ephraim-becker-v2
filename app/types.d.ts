export interface Player {
  name: string;
}

export interface Team {
  name: string;
  points: number;
  color: string;
  players: Player[];
}
