import React from 'react';
import classnames from 'classnames';

import "./Square.scss";

interface Props {
  phrase: string;
  onClick(): void;
  isChecked: boolean;
  isGunAndBadgeMode: boolean;
}

const Square: React.FC<Props> = ({ phrase, onClick, isChecked, isGunAndBadgeMode }) => (
  <div className={classnames('Square', { checked: isChecked })} onClick={onClick}>
    <span className='answer'>{phrase}</span>
    <span className={classnames('stamp', { cheese: !isGunAndBadgeMode }, { badge: isGunAndBadgeMode })}/>
  </div>
);


export default Square;
