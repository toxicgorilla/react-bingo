export interface GamesAppState {
  [id: string]: Game;
}

export interface GameRequest {
  user: string;
  gameId: string;
}

export interface GameCreate {
  mode: number;
  name: string;
  size: number;
  cheeseCount: number;
  startedByUser: string;
}

export interface Draw {
  number: number;
  name: string;
  matched: boolean;
}

export interface Player {
  user: string;
  hasWon: boolean;
  draws: Draw[]
}

export interface Game {
  gameId: string;
  mode: number;
  name: string;
  gameRound: number;
  cheeseCount: number;
  status: number;
  size: number;
  startedByUser: string;
  startedAtUtc: string;
  endedAtUtc: string;
  players: Player[];
  numberNames: string[];
  numbersDrawn: number[];
}
