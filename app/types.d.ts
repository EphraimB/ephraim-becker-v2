export interface Player {
  firstName: string;
  lastName: string;
}

export interface Team {
  name: string;
  points: number;
  color: string;
  players: Player[];
}
