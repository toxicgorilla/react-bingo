import React from 'react';

import './LobbyRoute.scss';
import { RouteComponentProps } from "react-router";

const LobbyRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const createGame = () => {
    history.push('/bingo');
  };

  const joinGame = () => {
    history.push('/bingo');
  };

  return (
    <div className='LobbyRoute'>
      <div className='RouteTitle'>
        Lobby
      </div>
      <div className='CreateGame'>
        <div className='Title' onClick={createGame}>Create Game</div>
      </div>
      <div className='JoinGame'>
        <div className='Title' onClick={joinGame}>Join Game</div>
      </div>
    </div>
  )
};

export { LobbyRoute };
