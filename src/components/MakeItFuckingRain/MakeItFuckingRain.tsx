import React, { useEffect, useState } from 'react';
import Cheese from "./Cheese";

import './MakeItFuckingRain.scss';

interface MakeItFuckingRainProps {
  isBenisMode: boolean;
}

export const MakeItFuckingRain: React.FC<MakeItFuckingRainProps> = ({ isBenisMode }) => {
  const [cheese, setCheese] = useState();

  useEffect(() => {
    const cheese: any = [];

    for (let c = 0; c < 50; c++) {
      cheese.push(<Cheese key={c} index={c} isBenisMode={isBenisMode} />)
    }

    setCheese(cheese);
  }, [isBenisMode]);

  return (
    <div className='MakeItFuckingRain'>
      {cheese}
    </div>
  )
};

export default MakeItFuckingRain;
