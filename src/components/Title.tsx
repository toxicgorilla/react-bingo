import React, { useState, Dispatch, SetStateAction } from 'react';

import "./Title.scss";

interface Props {
  isBenisMode: boolean,
  setIsBenisMode: Dispatch<SetStateAction<boolean>>,
  toggleNightMode: () => void,
}

const Title: React.FC<Props> = ({ isBenisMode, setIsBenisMode, toggleNightMode }) => {
  const [countB, setCountB] = useState<number>(0);
  const onClickB = () => {

    let newCountB = countB + 1;
    if (newCountB === 10) {
      newCountB = 0;
    }

    setCountB(newCountB);
    setIsBenisMode(newCountB >= 5);
  };

  const onClickO = () => {
    toggleNightMode();
  }

  return (
    <div className="Title">
      <span className="Title--character" onClick={onClickB}>
        {isBenisMode ? "🍆" : "B"}
      </span>
      <span className="Title--character">I</span>
      <span className="Title--character">N</span>
      <span className="Title--character">G</span>
      <span className="Title--character" onClick={onClickO}>
        O
      </span>
    </div>
  );
};

export default Title;
