import React, { useState } from 'react';

import classnames from 'classnames';

import './App.scss';
import Bingo from './Bingo';
import phrases from './phrases.json'

const App: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };
  return (
    <div className={classnames("App", { "night-mode": isNightMode })}>
      <Bingo phrases={phrases} toggleNightMode={toggleNightMode} />
    </div >
  );
};


export default App;
