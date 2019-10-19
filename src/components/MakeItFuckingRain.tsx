import React, { CSSProperties, useEffect, useState } from 'react';

import './MakeItFuckingRain.scss';

const getRandom = (min: number, max: number) => {
  return (Math.random() * (max - min)) + min;
};

const getRandomBool = () => Math.random() >= 0.5;

const forbiddenCheese = '🍆';

export const Cheese: React.FC<{ index: number }> = ({ index }) => {
  const [x, setX] = useState(document.body.clientWidth / 2);
  const [animationDelay] = useState(getRandom(0, 3000));
  const [duration, setDuration] = useState(0);
  const [rotationReverse, setRotationReverse] = useState(getRandomBool());
  const [rotationSpeed, setRotationSpeed] = useState(getRandom(4000, 5000));
  const [isForbidden, setIsForbidden] = useState(false);

  const randomize = () => {
    const newX = getRandom(0, document.body.clientWidth);
    const newDuration = getRandom(2000, 3000);

    setX(newX);
    setDuration(newDuration);

    return { newDuration }
  };

  const loop = (d: number) => {
    setTimeout(() => {
      setRotationSpeed(getRandom(3000, 5000));
      setRotationReverse(getRandomBool());
      setX(getRandom(0, document.body.clientWidth));
      loop(d);
    }, d);
  };

  React.useEffect(() => {
    setTimeout(() => {
      const { newDuration } = randomize();
      loop(newDuration);
    }, animationDelay);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fallStyle: CSSProperties = {
    animationName: 'fall',
    animationDelay: `${animationDelay / 1000}s`,
    animationDuration: `${duration / 1000}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  };

  const rotationStyle: CSSProperties = {
    animationName: 'spin',
    animationDuration: `${rotationSpeed / 1000}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDirection: `${rotationReverse ? 'reverse' : 'normal'}`
  };

  const xStyle: CSSProperties = {
    transform: `translateX(${x}px)`
  };

  const convertToOurCause = () => {
    setIsForbidden(true);
  };

  return (
    <div className='Cheese' style={fallStyle}>
      <div className='Cheese-x' style={xStyle}>
        <div className='Cheese-spinner' style={rotationStyle} onClick={convertToOurCause}>
          {!isForbidden ? '🧀' : forbiddenCheese}
        </div>
      </div>
    </div>
  )
};

export const MakeItFuckingRain = () => {
  const [cheese, setCheese] = useState();

  useEffect(() => {
    const cheese: any = [];

    for (let c = 0; c < 50; c++) {
      cheese.push(<Cheese key={c} index={c} />)
    }

    setCheese(cheese);
  }, []);

  return (
    <div className='MakeItFuckingRain'>
      {cheese}
    </div>
  )
};
