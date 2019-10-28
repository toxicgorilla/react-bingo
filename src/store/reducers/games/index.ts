import { Game, GamesAppState } from "../../../types";

const initialState = {};

type NewGame = {
  type: 'GAMES/new';
  payload: {
    game: Game;
  }
}

type UpdateGame = {
  type: 'GAMES/update';
  payload: {
    game: Game;
  }
}

type LoadGames = {
  type: 'GAMES/load';
  payload: {
    games: Game[];
  }
}

export type AllGameActions = NewGame | UpdateGame | LoadGames;

const games = (state: GamesAppState = initialState, action: AllGameActions): GamesAppState => {

  switch (action.type) {

    case "GAMES/load" : {
      const games = action.payload.games.reduce<GamesAppState>((t, game) => ({
        ...t, [game.gameId]: game
      }), {});

      return { ...state, ...games }
    }

    case 'GAMES/new' : {
      const { game } = action.payload;

      return { ...state, [game.gameId]: game };
    }

    case 'GAMES/update' : {
      const { game } = action.payload;

      return { ...state, [game.gameId]: game };
    }
  }

  return state;
};

export default games;
