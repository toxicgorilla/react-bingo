import { SocketService } from "./SocketService";
import { Game, GameCreate, GameRequest } from "../types";

type KnownMethods = 'ClientStartedNewGame' | 'LobbyUpdateGame' | 'ClientJoinedGame';
type KnownEvents = 'LobbyNewGameHasStarted' | 'LobbyUserJoinedGame' | 'LobbyPlayerNumbers' | 'LobbyPlayerMessage' | 'LobbyUpdateGame';

const LOBBY_URL = 'https://localhost:5001/hub/lobby';

class GameService {
  constructor(private gameSocket = new SocketService<KnownMethods, KnownEvents>(LOBBY_URL)) {
    this.gameSocket.start().then(() => {
      console.log('LobbyGame Socket: Started');
    });

    this.listen('LobbyNewGameHasStarted');
    this.listen('LobbyUserJoinedGame' );
    this.listen('LobbyPlayerNumbers');
    this.listen('LobbyPlayerMessage');
    this.listen('LobbyUpdateGame');
  }

  async join(game: GameRequest) {
    await this.gameSocket.send('ClientJoinedGame', game);
  }

  async create(game: GameCreate) {
    return await this.gameSocket.send<Game>('ClientStartedNewGame', game);
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
