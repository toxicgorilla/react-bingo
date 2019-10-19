import React from 'react';

import "./Title.scss";

interface Props {
  isBenisMode: boolean,
  toggleBenisMode: () => void;
  isCheatMode: boolean,
  toggleCheatMode: () => void;
  isNightMode: boolean,
  toggleNightMode: () => void;
}

const Title: React.FC<Props> = ({ isBenisMode, toggleBenisMode, isCheatMode, toggleCheatMode, isNightMode, toggleNightMode }) => {
  const onClickB = () => {
    toggleBenisMode();
  };

  const onClickI = () => {
    toggleBenisMode();
  };

  const onClickN = () => {
    toggleNightMode();
  };

  const onClickG = () => {
    toggleBenisMode();
  };

  const onClickO = () => {
    toggleCheatMode();
  }

  return (
    <div className="Title">
      <span className="Title--character" onClick={onClickB}>
        {isBenisMode ? "🍆" : "B"}
      </span>
      <span className="Title--character" onClick={onClickI}>
        {/* {isBenisMode ? "🍆" : "I"} */
          <>I</>
        }
      </span>
      <span className="Title--character" onClick={onClickN}>
        {isNightMode ? "🌌" : "N"}
      </span>
      <span className="Title--character" onClick={onClickG}>
        {/* {isBenisMode ? "🍆" : "G"} */
          <>G</>
        }
      </span>
      <span className="Title--character" onClick={onClickO}>
        {isCheatMode ? "😲" : "O"}
      </span>
    </div>
  );
};

export default Title;
