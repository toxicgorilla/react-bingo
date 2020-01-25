import { SocketService } from "./SocketService";
import { Game, GameCreate, GameRequest } from "../types";
import environment from "../constants/environment";

type KnownMethods = 'ClientStartedNewGame' | 'LobbyUpdateGame' | 'ClientJoinedGame';
type KnownEvents =
  'LobbyNewGameHasStarted'
  | 'LobbyUserJoinedGame'
  | 'LobbyPlayerNumbers'
  | 'LobbyPlayerMessage'
  | 'LobbyUpdateGame';

const LOBBY_URL = `${environment.API_URL}/hub/lobby`;

class GameService {
  constructor(private gameSocket = new SocketService<KnownMethods, KnownEvents>(LOBBY_URL)) {
    this.listen('LobbyNewGameHasStarted');
    this.listen('LobbyUserJoinedGame');
    this.listen('LobbyPlayerNumbers');
    this.listen('LobbyPlayerMessage');
    this.listen('LobbyUpdateGame');
  }

  async start() {
    return await this.gameSocket.start();
  }

  async join(game: GameRequest) {
    await this.gameSocket.send('ClientJoinedGame', game);
  }

  async create(game: GameCreate) {
    return await this.gameSocket.send<Game>('ClientStartedNewGame', game);
  }

  onStop(callback: () => void) {
    this.gameSocket.onClose(callback);
  }

  onNewGame(callback: (game: Game) => void) {
    this.gameSocket.on('LobbyNewGameHasStarted', callback)
  }

  onPlayerJoin(callback: (game: Game) => void) {
    this.gameSocket.on('LobbyUserJoinedGame', callback)
  }

  onUpdateGame(callback: (game: Game) => void) {
    this.gameSocket.on('LobbyUpdateGame', callback)
  }

  onLobbyPlayerNumbers(callback: (game: Game) => void) {
    this.gameSocket.on('LobbyPlayerNumbers', callback)
  }

  listen(event: KnownEvents) {
    this.gameSocket.on(event, (data) => {
      console.log(event, data);
    });
  }
}

export default new GameService();
