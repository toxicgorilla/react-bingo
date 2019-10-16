import React, { useEffect, useState } from 'react';

import './MakeItFuckingRain.scss';

const getRandom = (min: number, max: number) => {
  return (Math.random() * (max - min)) + min;
};

export const Cheese = () => {
  const [x, setX] = useState(document.body.clientWidth / 2);
  const [rotate, setRotate] = useState(getRandom(0, 360));
  const [speed] = useState(getRandom(10, 20));
  const [y, setY] = useState(-200);
  const requestRef = React.useRef<number>();

  const cheeseRef = React.useRef<HTMLDivElement>(null);

  const animate = () => {
    setY(current => {
      let next = current + speed;

      if (current > (document.body.clientHeight)) {
        setX(getRandom(0, document.body.clientWidth));
        next = -200;
      }

      return next;
    });

    // setRotate(r => r + 0.4);

    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    setX(getRandom(0, document.body.clientWidth));

    setTimeout(() => {
      requestRef.current = requestAnimationFrame(animate);
    }, getRandom(0, 3000));

    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div className='Cheese' ref={cheeseRef} style={{ transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)` }}>
      🧀
    </div>
  )
};

export const MakeItFuckingRain = () => {
  const [cheese, setCheese] = useState();

  useEffect(() => {
    const cheese: any = [];

    for (let c = 0; c < 20; c++) {
      cheese.push(<Cheese key={c} />)
    }

    setCheese(cheese);
  }, []);

  return (
    <div className='MakeItFuckingRain'>
      {cheese}
    </div>
  )
};
