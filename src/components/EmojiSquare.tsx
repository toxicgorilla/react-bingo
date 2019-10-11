import React, { useState } from 'react';

import './Bingo.scss';
import "./App.css";
import "./EmojiSquare.scss"

const EmojiSquare: React.FC = () => {
  const emojis = ['🤷‍', '🧐', '😈', '💋', '👀', '🎅'];
  const [index, setIndex] = useState<number>(0);
  const incrementIndex = () => {
    let newIndex = index + 1;
    if (newIndex > 5) {
      newIndex = 0;
    }

    setIndex(newIndex);
  }

  const currentEmoji = emojis[index];

  return (
    <td className="EmojiSquare" onClick={incrementIndex}>
      <span role="img" aria-label="shrug">{currentEmoji}</span>
    </td>
  );
};

export default EmojiSquare;
