import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Footer from "./components/Footer/Footer";

import {StartRoute, LobbyRoute, GameRoute} from './routes';

import './index.scss';

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas: 'main-content' 'footer';
  grid-template-rows: 1fr auto;
  flex: 1;
`;

const MainContent = styled.main`
  grid-area: main-content;
  display: flex;
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <MainContent>
          <Switch>
            <Route path='/' exact component={StartRoute} />
            <Route path='/lobby' component={LobbyRoute} />
            <Route path='/bingo' component={GameRoute} />
          </Switch>
        </MainContent>
        <Footer />
      </AppWrapper>
    </Router>
  )

};

ReactDOM.render(<App />, document.getElementById('root'));
