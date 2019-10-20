import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StartRoute from './components/StartRoute/StartRoute';
import GameRoute from "./components/GameRoute/GameRoute";

import './index.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={StartRoute} />
        <Route path='/bingo' component={GameRoute} />
      </Switch>
    </Router>
  )

};

ReactDOM.render(<App />, document.getElementById('root'));
