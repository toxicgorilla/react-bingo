import React from 'react';

import './App.css';
import Bingo from './Bingo';
import phrases from './phrases.json'

const App: React.FC = () => {
  return (
    <div className="App">
      <Bingo phrases={phrases} />
    </div>
  );
}


export default App;
