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

    try {
      const response = await fetch('https://localhost:5001/api/game');
      const games = await response.json();

      await store.dispatch({
        type: 'GAMES/load',
        payload: {
          games
        }
      });
    } catch (e) {

    }

    const startServer = async () => {
      if (store.getState().server.maxRetriesReached) {
        store.dispatch({
          type: 'SERVER/failed',
          payload: {
            error: 'Max retries reached'
          }
        });

        return;
      }

      store.dispatch({ type: 'SERVER/connecting' });

      try {
        await GameService.start();

        store.dispatch({ type: 'SERVER/connected' });
      } catch (error) {
        console.error(error);

        store.dispatch({
          type: 'SERVER/failed',
          payload: {
            error: 'Failed to connect'
          }
        });

        setTimeout(async () => {
          await startServer();
        }, 2000);
      }
    };

    GameService.onStop(async () => {
      store.dispatch({
        type: 'SERVER/disconnected'
      });

      await startServer();
    });

    await startServer();
  }
;

export default initialise;
