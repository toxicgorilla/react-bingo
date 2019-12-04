import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Provider } from "react-redux";

import Footer from "./components/Footer/Footer";
import store from "./store";
import { AuthRoute, StartRoute, UserRoute } from './routes';

import './index.scss';
import initialise from "./initialise";
import Chat, { ChatStatus } from "./components/Chat/Chat";

const AppWrapper = styled('div')<{ chatStatus: ChatStatus }>`
  display: grid;
  grid-template-areas: 'main-content' 'footer';
  grid-template-rows: 1fr auto;
  flex: 1;
  
  margin-right: ${({ chatStatus }) => chatStatus === ChatStatus.VISIBLE ? 350 : 0}px;
  transition: margin-right ease-in-out 0.15s;
`;

const MainContent = styled.main`
  grid-area: main-content;
  display: flex;
`;


const App = () => {
  const [chatStatus, setChatStatus] = useState<ChatStatus>(ChatStatus.HIDDEN);

  useEffect(() => {
    initialise(store).then();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <AppWrapper chatStatus={chatStatus}>
            <MainContent>
              <Switch>
                <Route path='/' exact component={StartRoute} />
                <Route path='/user' component={UserRoute} />
                <Route path='*' component={AuthRoute} />
              </Switch>
            </MainContent>
            <Footer />
          </AppWrapper>
          <Chat status={chatStatus} setChatStatus={setChatStatus} />
        </>
      </Router>
    </Provider>
  )

};

ReactDOM.render(<App />, document.getElementById('root'));
