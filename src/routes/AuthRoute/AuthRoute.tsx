import React from 'react';
import { Route, RouteComponentProps, Switch } from "react-router";
import { connect } from "react-redux";
import { AppState, GamesAppState } from "types";

import { CreateGameRoute, GameRoute, JoinGameRoute, LobbyRoute } from "..";
import { UserProvider } from "../../contexts/UserContext";

interface Props extends RouteComponentProps {
  games: GamesAppState;
}

const AuthRoute: React.FC<Props> = ({ history }) => {
    const savedName = localStorage.getItem('USER');

    if (!savedName || !savedName.length) {
      history.push('/user');
      return null;
    }

    return (
      <UserProvider value={savedName}>
        <Switch>
          <Route path='/lobby' component={LobbyRoute} />
          <Route path='/join' component={JoinGameRoute} />
          <Route path='/create' component={CreateGameRoute} />
          <Route path='/:gameId' component={GameRoute} />
        </Switch>
      </UserProvider>
    )
  }
;

const mapStateToProps = ({ games }: AppState) => {
  return {
    games
  }
};

export default connect(mapStateToProps)(AuthRoute);
