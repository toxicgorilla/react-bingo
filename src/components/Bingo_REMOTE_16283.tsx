import React, { useState } from 'react';
import classnames from 'classnames';

import Title from './Title';
import Square from './Square';
import EmojiSquare from './EmojiSquare';
import { getRandomPhrases, getRandomSelectionOfEmojis } from "../utils/bingo";

import './Bingo.scss';
import { MakeItFuckingRain } from "./MakeItFuckingRain";

interface Props {
  phrases: Array<string>;
  toggleNightMode: () => void;
}

const Bingo: React.FC<Props> = ({ phrases, toggleNightMode }) => {
  const [isBenisMode, setIsBenisMode] = useState<boolean>(false);
  const centerSqaureEmojis = getRandomSelectionOfEmojis();
  const count = 24;
  const randomSubSet = getRandomPhrases(phrases, count);
  const [selectedPhrases] = useState<Array<string>>(randomSubSet);
  const [checkedPhrases, setCheckedPhrases] = useState<string[]>([]);
  const ITS_BINGO = checkedPhrases.length === count;

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
    <>
      <div className={classnames("Scorecard", { completed: ITS_BINGO })}>
        <div className='Scorecard-title'>
          <Title isBenisMode={isBenisMode} setIsBenisMode={setIsBenisMode} toggleNightMode={toggleNightMode} />
        </div>
        <div className="Bingo">
          {selectedPhrases.map(phrase => {
            if (phrase === 'emoji') {
              return <EmojiSquare key={phrase} emojis={centerSqaureEmojis} />;
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
      {ITS_BINGO && <MakeItFuckingRain isBenisMode={isBenisMode} />}
    </>
  );
};

export default Bingo;
