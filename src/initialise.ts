import GameService from "./services/GameService";
import { AppStore } from "./store";

// TODO: Refactor this all

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
    store.dispatch({
      type: 'GAMES/update',
      payload: {
        game
      }
    });
  });

  const response = await fetch('https://localhost:5001/api/game');
  const games = await response.json();

  await store.dispatch({
    type: 'GAMES/load',
    payload: {
      games
    }
  });

  const startServer = async () => {
    try {
      await GameService.start();

      store.dispatch({ type: 'SERVER/connected' });
    } catch (error) {
      console.error(error);

      store.dispatch({
        type: 'SERVER/failed',
        payload: {
          error
        }
      });
    }
  };

  GameService.onStop(async () => {
    store.dispatch({
      type: 'SERVER/disconnected'
    });

    if (store.getState().server.connectionAttempts < 20) {
      await startServer();
    }
  });

  await startServer();
};

export default initialise;
