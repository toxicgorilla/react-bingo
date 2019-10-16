import React from 'react';
import classnames from 'classnames';

import './Bingo.scss';
import "./App.css";
import "./Square.scss";

interface Props {
  phrase: string;
  onClick(): void;
  isChecked: boolean;
}

const Square: React.FC<Props> = ({ phrase, onClick, isChecked }) => {
  // const crossedOutImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuR_4xnj9h7-iRf7M69LXdy64egnbhe9MQmiTqKbvryhNpf-q';
  // // return (
  // //   <td className="Square" onClick={invertIsChecked}>
  // //     {isChecked ? <img src={crossedOutImageUrl} alt="checked" /> : <span>{phrase}</span>}
  // //   </td>
  // // );

  return (
    <div className={classnames('Square', { checked: isChecked })} onClick={onClick}>
      <span className='answer'>{phrase}</span>
      <span className='cheese'/>
    </div>
  );
};

export default Square;
