import React from 'react';
import { RouteComponentProps } from "react-router";

import './LobbyRoute.scss';
import { useUser } from "../../contexts/UserContext";

const LobbyRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const user = useUser();

  const createGame = () => {
    history.push('/create');
  };

  const joinGame = async () => {
    history.push('/join');
  };

  const goToUser = async () => {
    history.push('/user');
  };

  return (
    <div className='LobbyRoute'>
      <div className='RouteTitle'>
        Lobby
      </div>
      <div className='User'>
        <div className='Title' onClick={goToUser}>Playing as: {user}</div>
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
