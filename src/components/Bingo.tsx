import React, { useState } from 'react';

import Square from './Square';
import EmojiSquare from './EmojiSquare';
import './Bingo.scss';
import "./App.css";

interface Props {
  phrases: Array<string>;
}

const Bingo: React.FC<Props> = ({ phrases }) => {

  const randomSubSet = getRandomSubSetOfArray(phrases, 25);
  const [selectedPhrases, setSelectedPhrases] = useState<Array<string>>(randomSubSet);

  return (
    <div className="Bingo">
      {selectedPhrases.map(phrase => phrase === 'emoji' ? <EmojiSquare key={phrase} /> : <Square key={phrase} phrase={phrase} />)}
    </div>
  );
};

const getRandomSubSetOfArray = (originalArray: Array<string>, count: number): Array<string> => {
  const getRandomStringAndRemove = (): string => {
    var randomIndex = Math.floor(Math.random() * originalArray.length) + 1;
    var randomString = originalArray.splice(randomIndex, 1);

    return randomString[0];
  };

  const subSet = new Array<string>();
  for (let i = 0; i < count; i++) {
    if (i === Math.floor(count / 2)) {
      subSet.push('emoji')
    }

    const randomString = getRandomStringAndRemove();
    subSet.push(randomString)
  }

  return subSet;
}

export default Bingo;
