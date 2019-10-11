import React, { useState } from 'react';

import './Bingo.scss';
import "./App.css";
import "./EmojiSquare.scss";

const emojis = ['🧀 ', '🤷‍', '🧐', '😈', '💋', '👀', '🎅'];

const EmojiSquare: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const incrementIndex = () => {
    // TODO: Implement Browser Collapse after 100

    let newIndex = index + 1;

    if (newIndex > 5) {
      newIndex = 0;
    }

    setIndex(newIndex);
  };

  const currentEmoji = emojis[index];

  return (
    <div className="Square EmojiSquare" onClick={incrementIndex}>
      <span role="img" aria-label="shrug">{currentEmoji}</span>
    </div>
  );
};

export default EmojiSquare;
