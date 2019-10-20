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
  isInvertedMode: boolean,
  toggleIsInvertedMode: () => void;
  isNightMode: boolean,
  toggleNightMode: () => void;
  isGunAndBadgeMode: boolean,
  toggleGunAndBadgeMode: () => void;
  isCheatMode: boolean,
  toggleCheatMode: () => void;
}

const theCheeseyKey = '🧀';

const Bingo: React.FC<Props> = ({ phrases, isBenisMode, toggleBenisMode, isInvertedMode, toggleIsInvertedMode, isNightMode, toggleNightMode, isGunAndBadgeMode, toggleGunAndBadgeMode, isCheatMode, toggleCheatMode }) => {
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
      <div className={classnames("Scorecard", { badge: isGunAndBadgeMode }, { completed: ITS_BINGO })}>
        <div className='Scorecard-title'>
          <Title
            isBenisMode={isBenisMode} toggleBenisMode={toggleBenisMode}
            isInvertedMode={isInvertedMode} toggleIsInvertedMode={toggleIsInvertedMode}
            isNightMode={isNightMode} toggleNightMode={toggleNightMode}
            isGunAndBadgeMode={isGunAndBadgeMode} toggleGunAndBadgeMode={toggleGunAndBadgeMode}
            isCheatMode={isCheatMode} toggleCheatMode={toggleCheatMode} />
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
                isGunAndBadgeMode={isGunAndBadgeMode}
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
