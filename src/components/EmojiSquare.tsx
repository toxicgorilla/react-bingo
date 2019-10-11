import React, { useState } from 'react';

import './Bingo.scss';
import "./App.css";

const EmojiSquare: React.FC = () => {
  const cheeseClick = () => { };
  return (
    <div onClick={cheeseClick}>
      <span role="img" aria-label="shrug">🤷</span>
    </div>
  );
};

export default EmojiSquare;
