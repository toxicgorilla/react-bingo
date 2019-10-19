import React, { useState, Dispatch, SetStateAction } from 'react';

import "./Title.scss";

interface Props {
  isBenisMode: boolean,
  setIsBenisMode: Dispatch<SetStateAction<boolean>>
}

const Title: React.FC<Props> = ({ isBenisMode, setIsBenisMode }) => {
  const [countB, setCountB] = useState<number>(0);
  const onClickB = () => {

    let newCountB = countB + 1;
    if (newCountB === 10) {
      newCountB = 0;
    }

    setCountB(newCountB);
    setIsBenisMode(newCountB >= 5);
  };

  return (
    <div className="Title">
      <span className="Title--character" onClick={onClickB}>
        {isBenisMode ? "🍆" : "B"}
      </span>
      INGO
    </div>
  );
};

export default Title;
