import React, { useState } from 'react';

import classnames from 'classnames';

import './App.scss';
import Bingo from './Bingo';
import phrases from './phrases.json'

const App: React.FC = () => {
  const [isBenisMode, setIsBenisMode] = useState<boolean>(false);
  const toggleBenisMode = () => {
    setIsBenisMode(!isBenisMode);
  };

  const [isCheatMode, setIsCheatMode] = useState<boolean>(false);
  const toggleCheatMode = () => {
    setIsCheatMode(!isCheatMode);
  };

  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };
  return (
    <div className={classnames("App", { "night-mode": isNightMode })}>
      <Bingo phrases={phrases}
        isBenisMode={isBenisMode} toggleBenisMode={toggleBenisMode}
        isCheatMode={isCheatMode} toggleCheatMode={toggleCheatMode}
        isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
    </div >
  );
};


export default App;
