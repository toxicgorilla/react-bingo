import React from 'react';
import classnames from 'classnames';

import Title from '../Title/Title';
import Square from '../Square/Square';
import MakeItFuckingRain from "../MakeItFuckingRain";

import './Bingo.scss';
import { useGame } from "../../../../contexts/GameContext";
import { useUser } from "../../../../contexts/UserContext";

interface Props {
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

// const theCheeseyKey = '🧀';

const Bingo: React.FC<Props> = ({ isBenisMode, toggleBenisMode, isInvertedMode, toggleIsInvertedMode, isNightMode, toggleNightMode, isGunAndBadgeMode, toggleGunAndBadgeMode, isCheatMode, toggleCheatMode }) => {
  const game = useGame();
  const user = useUser();

  // const [centerSquareEmojiIndex, setCenterSquareEmojiIndex] = useState<number>(0);
  // const [centerSquareEmojis, setCenterSquareEmojis] = useState<string[]>(getRandomSelectionOfEmojis());
  // const [checkedPhrases, setCheckedPhrases] = useState<string[]>([]);
  const you = game.players.find(p => p.user === user);

  if (!you) {
    return null;
  }

  const ITS_BINGO = you.hasWon;
  //
  // const toggleSquare = (phrase: string) => {
  //   if (!isCheatMode && centerSquareEmojis[centerSquareEmojiIndex] !== theCheeseyKey) {
  //     return;
  //   }
  //
  //   const checked = [...checkedPhrases];
  //   const squareIndex = checked.indexOf(phrase);
  //
  //   if (squareIndex > -1) {
  //     checked.splice(squareIndex, 1)
  //   } else {
  //     checked.push(phrase)
  //   }
  //
  //   setCheckedPhrases(checked);
  //   setCenterSquareEmojis(getRandomSelectionOfEmojis());
  //   setCenterSquareEmojiIndex(0);
  // };

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
          {you.draws.map(draw => {
            console.log(draw);
            /*if (phrase === 'emoji') {
              return (
                <EmojiSquare key={phrase}
                  activeIndex={centerSquareEmojiIndex}
                  setActiveIndex={setCenterSquareEmojiIndex}
                  emojis={centerSquareEmojis}
                />);
            }
*/
            return (
              <Square key={draw.number}
                      phrase={draw.name}
                      isChecked={draw.matched}
                      onClick={() => {
                      }}
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
