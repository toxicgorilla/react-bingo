import React, { useState } from 'react';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import GameService from "services/GameService";
import { AppState, GamesAppState } from "types";

import './CreateGameRoute.scss';
import { useUser } from "../../contexts/UserContext";

interface Props extends RouteComponentProps {
  games: GamesAppState;
}

const CreateGameRoute: React.FC<Props> = ({ history }) => {
  const user = useUser();
  const [name, setName] = useState('');
  const [numberOfPlayers, setNumberOfPlayers] = useState('');
  const [numberOfCheeses, setNumberOfCheeses] = useState('');
  const [mode, setMode] = useState('');

  const createGame = async () => {

    const game = await GameService.create({
      startedByUser: user,
      name: name,
      mode: parseInt(mode),
      size: parseInt(numberOfPlayers),
      cheeseCount: parseInt(numberOfCheeses)
    });

    history.push(`/${game.gameId}`);
  };

  return (
    <div className='CreateGameRoute'>
      <div className='RouteTitle'>
        Create Game
      </div>
      <div className='RouteContent'>
        <input className='Input' onChange={event => setName(event.target.value)} value={name} placeholder='Name' autoFocus={true} />
        <input className='Input' onChange={event => setMode(event.target.value)} value={mode} placeholder='Mode' />
        <input className='Input' onChange={event => setNumberOfPlayers(event.target.value)} value={numberOfPlayers}
               placeholder='Number of players' />
        <input className='Input' onChange={event => setNumberOfCheeses(event.target.value)} value={numberOfCheeses}
               placeholder='Number of cheeses' />
        <div className='CreateGameButton' onClick={createGame}>Create Game</div>
      </div>
    </div>
  )
};

const mapStateToProps = ({ games }: AppState) => {
  return {
    games
  }
};

export default connect(mapStateToProps)(CreateGameRoute);
