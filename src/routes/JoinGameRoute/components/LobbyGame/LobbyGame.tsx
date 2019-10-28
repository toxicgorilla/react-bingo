import React from "react";
import { Game } from "types";
import classnames from 'classnames';

import './LobbyGame.scss';

interface Props {
  game: Game;
  joinGame(game: Game): void;
}

const LobbyGame: React.FC<Props> = ({ game, joinGame }) => {
  const onJoinGame = () => {
    joinGame(game);
  };

  const ready = game.players.length === game.size;

  return (
    <div className={classnames('LobbyGame', { 'LobbyGame--ready' : ready })} onClick={onJoinGame}>
      <div className='LobbyGame--title'>{game.name} <div className='LobbyGame--players'>- Players: {game.players.length} / {game.size}</div></div>
      <div className='LobbyGame--startedBy'>Started by: {game.startedByUser}</div>
      <div className='LobbyGame--gameId'>Game Id: {game.gameId}</div>
    </div>
  )
};

export default LobbyGame;
