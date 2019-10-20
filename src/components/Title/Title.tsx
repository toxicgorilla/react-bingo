import React from 'react';

import "./Title.scss";

interface Props {
  isBenisMode: boolean,
  toggleBenisMode: () => void;
  isNightMode: boolean,
  toggleNightMode: () => void;
  isGunAndBadgeMode: boolean,
  toggleGunAndBadgeMode: () => void;
  isCheatMode: boolean,
  toggleCheatMode: () => void;
}

const Title: React.FC<Props> = ({ isBenisMode, toggleBenisMode, isNightMode, toggleNightMode, isGunAndBadgeMode, toggleGunAndBadgeMode, isCheatMode, toggleCheatMode, }) => {
  const onClickB = () => {
    toggleBenisMode();
  };

  const onClickI = () => {
    alert('Sorry. You do not have enough services');
  };

  const onClickN = () => {
    toggleNightMode();
  };

  const onClickG = () => {
    toggleGunAndBadgeMode();
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
        {isGunAndBadgeMode ? "🔫" : "G"}
      </span>
      <span className="Title--character" onClick={onClickO}>
        {isCheatMode ? "😲" : "O"}
      </span>
    </div>
  );
};

export default Title;
