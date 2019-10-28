import React, { FormEvent, useState } from 'react';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import { AppState, GamesAppState } from "types";

import './UserRoute.scss';

interface Props extends RouteComponentProps {
  games: GamesAppState;
}

const UserRoute: React.FC<Props> = ({ history }) => {
    const [name, setName] = useState<string>(localStorage.getItem('USER') || '');

    const save = (event: FormEvent) => {
      event.preventDefault();
      localStorage.setItem('USER', name);
      history.push('/lobby');
    };

    return (
      <div className='UserRoute'>
        <div className='RouteTitle'>
          Who are you?
        </div>
        <form className='RouteContent' onSubmit={save}>
          <input className='Input' onChange={event => setName(event.target.value)} value={name} placeholder='Name' autoFocus={true}/>
          <div className='SaveButton' onClick={save}>Save</div>
        </form>
      </div>
    )
  }
;

const mapStateToProps = ({ games }: AppState) => {
  return {
    games
  }
};

export default connect(mapStateToProps)(UserRoute);
