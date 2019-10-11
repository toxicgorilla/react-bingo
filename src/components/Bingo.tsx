import React, { useState } from 'react';

import Square from './Square';
import EmojiSquare from './EmojiSquare';
import './Bingo.scss';
import "./App.css";

interface Props {
  phrases: Array<string>;
}

const Bingo: React.FC<Props> = ({ phrases }) => {

  const randomSubSet = getRandomSubSetOfArray(phrases, 24);
  const [selectedPhrases, setSelectedPhrases] = useState<Array<string>>(randomSubSet);

  return (
    <div className="Bingo">
      <table>
        <tbody>
          <tr>
            <Square phrase={selectedPhrases[0]} />
            <Square phrase={selectedPhrases[1]} />
            <Square phrase={selectedPhrases[2]} />
            <Square phrase={selectedPhrases[3]} />
            <Square phrase={selectedPhrases[4]} />
          </tr>
          <tr>
            <Square phrase={selectedPhrases[5]} />
            <Square phrase={selectedPhrases[6]} />
            <Square phrase={selectedPhrases[7]} />
            <Square phrase={selectedPhrases[8]} />
            <Square phrase={selectedPhrases[9]} />
          </tr>
          <tr>
            <Square phrase={selectedPhrases[10]} />
            <Square phrase={selectedPhrases[11]} />

            <EmojiSquare />
            <Square phrase={selectedPhrases[12]} />
            <Square phrase={selectedPhrases[13]} />
          </tr>
          <tr>
            <Square phrase={selectedPhrases[14]} />
            <Square phrase={selectedPhrases[15]} />
            <Square phrase={selectedPhrases[16]} />
            <Square phrase={selectedPhrases[17]} />
            <Square phrase={selectedPhrases[18]} />
          </tr>
          <tr>
            <Square phrase={selectedPhrases[19]} />
            <Square phrase={selectedPhrases[20]} />
            <Square phrase={selectedPhrases[21]} />
            <Square phrase={selectedPhrases[22]} />
            <Square phrase={selectedPhrases[23]} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const getRandomSubSetOfArray = (originalArray: Array<string>, count: number): Array<string> => {
  const getRandomStringAndRemove = (): string => {
    var randomIndex = Math.floor(Math.random() * originalArray.length) + 1;

    console.log(`originalArray.length: ${originalArray.length}    randomIndex: ${randomIndex}`)

    var randomString = originalArray.splice(randomIndex - 1, 1);

    if (randomString[0] === "") {
      console.log('no string!');
    }

    return randomString[0];
  }

  const subSet = new Array<string>();
  for (let i = 0; i < count; i++) {
    const randomString = getRandomStringAndRemove();
    subSet.push(randomString)
  }

  return subSet;
}

export default Bingo;
