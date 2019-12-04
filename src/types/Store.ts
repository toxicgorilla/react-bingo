import { GamesAppState } from "./Game";
import { ServerAppState } from "./Server";

export interface AppState {
  server: ServerAppState;
  games: GamesAppState;
}
