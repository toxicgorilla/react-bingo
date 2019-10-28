import React from 'react';

import './WaitingForPlayers.scss';
import { useGame } from "../../../../contexts/GameContext";

const WaitingForPlayers: React.FunctionComponent = () => {
  const game = useGame();

  return (
    <div className='WaitingForPlayers'>
      <div className='Game--name'>{game.name}</div>
      <div className='Game--waitingMessage'>Your game will begin when all players join.</div>
      <div className='Game--players'>Players: {game.players.length} / {game.size}</div>
    </div>
  )
};

export { WaitingForPlayers };
