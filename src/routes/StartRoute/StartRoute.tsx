import React, { useState } from 'react';
import classnames from 'classnames';
import { RouteComponentProps } from "react-router";

import './StartRoute.scss';

const StartRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const [credits, setCredits] = useState(0);

  const insertCredit = () => setCredits(credits + 1);
  const pressStart = () => history.push('/lobby');

  return (
    <div className='StartRoute'>
      <div className='Title'>
        <div className='CheeseyText'>CHEESEY</div>
        <div className='BingoText'>BINGO</div>
      </div>
      <div className={classnames('Introduction', { 'empty': !credits })}>
        <div className='Credits'>
          <div>{credits} Credits</div>
          <div className='Coin' />
        </div>
        <div className='Instructions' onClick={insertCredit}>Click to Insert Coin/s</div>
        <div className='PressStart' onClick={pressStart}>Press Start</div>
      </div>
    </div>
  )
};

export { StartRoute };
