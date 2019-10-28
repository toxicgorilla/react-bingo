import React from 'react';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import GameService from "services/GameService";
import { AppState, Game, GamesAppState } from "types";

import LobbyGame from './components/LobbyGame/LobbyGame';

import './JoinGameRoute.scss';
import { useUser } from "../../contexts/UserContext";

interface Props extends RouteComponentProps {
  games: GamesAppState;
}

const JoinGameRoute: React.FC<Props> = ({ history, games }) => {

  const user = useUser();

  const joinGame = async (game: Game) => {
    const { gameId } = game;

    history.push(`/${gameId}`);
  };

  return (
    <div className='JoinGameRoute'>
      <div className='RouteTitle'>
        Join Game
      </div>
      <div className='RouteContent'>
        <div className='LobbyGames'>
          {Object.values(games).map(game => <LobbyGame key={game.gameId} game={game} joinGame={joinGame} />)}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({ games }: AppState) => {
  return {
    games
  }
};

export default connect(mapStateToProps)(JoinGameRoute);
