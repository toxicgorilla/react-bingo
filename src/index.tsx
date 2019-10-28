import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Provider } from "react-redux";

import Footer from "./components/Footer/Footer";
import store from "./store";
import { AuthRoute, StartRoute, UserRoute } from './routes';

import './index.scss';
import initialise from "./initialise";

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

  useEffect(() => {
    initialise(store).then();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <AppWrapper>
          <MainContent>
            <Switch>
              <Route path='/' exact component={StartRoute} />
              <Route path='/user' component={UserRoute} />
              <Route path='*' component={AuthRoute} />
            </Switch>
          </MainContent>
          <Footer />
        </AppWrapper>
      </Router>
    </Provider>
  )

};

ReactDOM.render(<App />, document.getElementById('root'));
