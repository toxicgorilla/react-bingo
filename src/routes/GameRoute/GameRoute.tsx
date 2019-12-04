import React, { useEffect } from 'react';

import { RouteComponentProps } from "react-router";
import { BingoGame } from "./components/Game/Game";
import { GameProvider } from "../../contexts/GameContext";
import { connect } from "react-redux";
import { AppState, GamesAppState } from "../../types";
import { WaitingForPlayers } from "./components/WaitingForPlayers/WaitingForPlayers";
import GameService from "../../services/GameService";
import { useUser } from "../../contexts/UserContext";

interface Props extends RouteComponentProps<{ gameId: string }> {
  games: GamesAppState;
}

const GameRoute: React.FC<Props> = ({ match, games }) => {
  const user = useUser();

  const game = games[match.params.gameId] || {};
  const { gameId } = game;

  useEffect(() => {
    console.log(gameId, user);

    if (gameId) {
      GameService.join({ user, gameId }).then();
    }
  }, [gameId, user]);

  if (!gameId) {
    return null;
  }

  const ready = game.status !== 0;
  const waitingForPlayers = game.status === 0;

  return (
    <GameProvider value={game}>
      {ready && <BingoGame />}
      {waitingForPlayers && <WaitingForPlayers />}
    </GameProvider>
  );
};

const mapStateToProps = ({ games }: AppState) => ({ games });

export default connect(mapStateToProps)(GameRoute);
