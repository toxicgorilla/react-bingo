import React, { useState } from 'react';

import './Bingo.scss';
import "./App.css";
import "./Square.scss";

interface Props {
  phrase: string;
}

const Square: React.FC<Props> = ({ phrase }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const invertIsChecked = () => { setIsChecked(!isChecked); }

  var crossedOutImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuR_4xnj9h7-iRf7M69LXdy64egnbhe9MQmiTqKbvryhNpf-q';
  // // return (
  // //   <td className="Square" onClick={invertIsChecked}>
  // //     {isChecked ? <img src={crossedOutImageUrl} alt="checked" /> : <span>{phrase}</span>}
  // //   </td>
  // // );

  const className = isChecked ? "Square checked" : "Square";
  return (
    <td className={className} onClick={invertIsChecked}>
      <span>{phrase}</span>
    </td>
  );
};

export default Square;
