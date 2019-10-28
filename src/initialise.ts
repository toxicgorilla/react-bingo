import GameService from "./services/GameService";
import { AppStore } from "./store";

const initialise = async (store: AppStore) => {

  GameService.onNewGame(game => {
    store.dispatch({
      type: 'GAMES/new',
      payload: {
        game
      }
    });
  });

  GameService.onUpdateGame(game => {
    store.dispatch({
      type: 'GAMES/update',
      payload: {
        game
      }
    });
  });

  GameService.onLobbyPlayerNumbers(game => {
    store.dispatch({
      type: 'GAMES/update',
      payload: {
        game
      }
    });
  });

  GameService.onPlayerJoin(game => {
    console.log(game);
  });

  const response = await fetch('https://localhost:5001/api/game');
  const games = await response.json();

  await store.dispatch({
    type: 'GAMES/load',
    payload: {
      games
    }
  });
};

export default initialise;
