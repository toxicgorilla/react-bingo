import React, { useState } from 'react';
import classnames from 'classnames';

import Title from '../Title/Title';
import Square from '../Square/Square';
import EmojiSquare from '../EmojiSquare/EmojiSquare';
import { getRandomPhrases, getRandomSelectionOfEmojis } from "../../utils/bingo";
import MakeItFuckingRain from "../MakeItFuckingRain";

import './Bingo.scss';

interface Props {
  phrases: Array<string>;
  isBenisMode: boolean,
  toggleBenisMode: () => void;
  isCheatMode: boolean,
  toggleCheatMode: () => void;
  isNightMode: boolean,
  toggleNightMode: () => void;
}

const theCheeseyKey = '🧀';

const Bingo: React.FC<Props> = ({ phrases, isBenisMode, toggleBenisMode, isCheatMode, toggleCheatMode, isNightMode, toggleNightMode }) => {
  const [centerSquareEmojiIndex, setCenterSquareEmojiIndex] = useState<number>(0);
  const [centerSquareEmojis, setCenterSquareEmojis] = useState<string[]>(getRandomSelectionOfEmojis());
  const count = 24;
  const randomSubSet = getRandomPhrases(phrases, count);
  const [selectedPhrases] = useState<Array<string>>(randomSubSet);
  const [checkedPhrases, setCheckedPhrases] = useState<string[]>([]);
  const ITS_BINGO = checkedPhrases.length === count;

  const toggleSquare = (phrase: string) => {
    if (!isCheatMode && centerSquareEmojis[centerSquareEmojiIndex] !== theCheeseyKey) {
      return;
    }

    const checked = [...checkedPhrases];
    const squareIndex = checked.indexOf(phrase);

    if (squareIndex > -1) {
      checked.splice(squareIndex, 1)
    } else {
      checked.push(phrase)
    }

    setCheckedPhrases(checked);
    setCenterSquareEmojis(getRandomSelectionOfEmojis());
    setCenterSquareEmojiIndex(0);
  };

  return (
    <>
      <div className={classnames("Scorecard", { completed: ITS_BINGO })}>
        <div className='Scorecard-title'>
          <Title
            isBenisMode={isBenisMode} toggleBenisMode={toggleBenisMode}
            isCheatMode={isCheatMode} toggleCheatMode={toggleCheatMode}
            isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
        </div>
        <div className="Bingo">
          {selectedPhrases.map(phrase => {
            if (phrase === 'emoji') {
              return (
                <EmojiSquare key={phrase}
                  activeIndex={centerSquareEmojiIndex}
                  setActiveIndex={setCenterSquareEmojiIndex}
                  emojis={centerSquareEmojis}
                />);
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
