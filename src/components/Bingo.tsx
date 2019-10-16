import React, { useState } from 'react';

import Square from './Square';
import EmojiSquare from './EmojiSquare';
import { getRandomPhrases } from "../utils/bingo";

import './Bingo.scss';

interface Props {
  phrases: Array<string>;
}

const Bingo: React.FC<Props> = ({ phrases }) => {
  const count = 24;
  const randomSubSet = getRandomPhrases(phrases, count);
  const [selectedPhrases] = useState<Array<string>>(randomSubSet);
  const [checkedPhrases, setCheckedPhrases] = useState<string[]>([]);

  const toggleSquare = (phrase: string) => {
    const checked = [...checkedPhrases];
    const squareIndex = checked.indexOf(phrase);

    if (squareIndex > -1) {
      checked.splice(squareIndex, 1)
    } else {
      checked.push(phrase)
    }

    setCheckedPhrases(checked);
  };

  return (
    <div className="Scorecard">
      <div className='Scorecard-title'>BINGO</div>
      <div className="Bingo">
        {selectedPhrases.map(phrase => {
          if (phrase === 'emoji') {
            return <EmojiSquare key={phrase} />;
          }

          const isChecked = checkedPhrases.includes(phrase);

          return (
            <Square key={phrase}
                    phrase={phrase}
                    isChecked={isChecked}
                    onClick={() => toggleSquare(phrase)}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Bingo;
