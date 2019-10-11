import React, { useState } from 'react';

import Square from './Square';
import EmojiSquare from './EmojiSquare';
import { getRandomSubSetOfArray } from "../utils/bingoUtils";

import './Bingo.scss';
import "./App.css";

interface Props {
  phrases: Array<string>;
}

const Bingo: React.FC<Props> = ({ phrases }) => {
  const count = 24;
  const randomSubSet = getRandomSubSetOfArray(phrases, count);
  const [selectedPhrases] = useState<Array<string>>(randomSubSet);
  const [checkedPhrases, setCheckedPhrases] = useState<number[]>([]);

  const toggleSquare = (index: number) => {
    const checked = [...checkedPhrases];
    const squareIndex = checked.indexOf(index);

    if (squareIndex > -1) {
      current.splice(squareIndex)
    } else {
      current.push(index)
    }

    setCheckedPhrases(current);
  };

  return (
    <div className="Scorecard">
      <div className='Scorecard-title'>BINGO</div>
      <div className="Bingo">
        {selectedPhrases.map((phrase, index) => {
          if (phrase === 'emoji') {
            return <EmojiSquare key={phrase} />;
          }

          const isChecked = checked.includes(index);

          return (
            <Square key={phrase}
                    phrase={phrase}
                    isChecked={isChecked}
                    onClick={() => toggleSquare(index)}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Bingo;
