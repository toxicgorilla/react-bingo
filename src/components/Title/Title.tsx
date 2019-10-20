import React from 'react';
import classnames from 'classnames';

import "./Title.scss";

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

const Title: React.FC<Props> = ({ isBenisMode, toggleBenisMode, isInvertedMode, toggleIsInvertedMode, isNightMode, toggleNightMode, isGunAndBadgeMode, toggleGunAndBadgeMode, isCheatMode, toggleCheatMode, }) => {
  const onClickB = () => {
    toggleBenisMode();
  };

  const onClickI = () => {
    toggleIsInvertedMode();
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
      <span className="Title__character" onClick={onClickB}>
        {isBenisMode ? "🍆" : "B"}
      </span>
      <span className={classnames("", { "Title__character": !isInvertedMode }, { "Title__character--inverted": isInvertedMode })} onClick={onClickI}>
        {isInvertedMode ? "✍" : "I"}
      </span>
      <span className="Title__character" onClick={onClickN}>
        {isNightMode ? "🌌" : "N"}
      </span>
      <span className="Title__character" onClick={onClickG}>
        {isGunAndBadgeMode ? "🔫" : "G"}
      </span>
      <span className="Title__character" onClick={onClickO}>
        {isCheatMode ? "😲" : "O"}
      </span>
    </div >
  );
};

export default Title;
