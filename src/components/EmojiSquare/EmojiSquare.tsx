import React from 'react';

import "./EmojiSquare.scss";

interface Props {
  emojis: Array<string>;
  activeIndex: number;
  setActiveIndex(index: number): void;
}

const EmojiSquare: React.FC<Props> = ({ emojis, activeIndex, setActiveIndex }) => {

  const incrementIndex = () => {
    // TODO: Implement Browser Collapse after 100

    let newIndex = activeIndex + 1;

    if (newIndex >= emojis.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const currentEmoji = emojis[activeIndex];

  return (
    <div className="Square EmojiSquare" onClick={incrementIndex}>
      <span role="img" aria-label="shrug">{currentEmoji}</span>
    </div>
  );
};

export default EmojiSquare;
