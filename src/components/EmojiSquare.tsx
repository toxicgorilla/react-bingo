import React, { useState } from 'react';

import './Bingo.scss';
import "./App.css";

const EmojiSquare: React.FC = () => {
  const cheeseClick = () => { };
  return (
    <td onClick={cheeseClick}>
      <span role="img" aria-label="shrug">🤷</span>
    </td>
  );
};

export default EmojiSquare;
