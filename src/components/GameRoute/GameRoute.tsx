import React, { useState } from 'react';

import classnames from 'classnames';

import './GameRoute.scss';
import Bingo from '../Bingo';
import phrases from '../phrases.json'

const GameRoute: React.FC = () => {
  const [isBenisMode, setIsBenisMode] = useState<boolean>(false);
  const toggleBenisMode = () => {
    const newValue = !isBenisMode;
    setIsBenisMode(newValue);

    if (newValue) {
      const asciiArt = `MO..';:::::::::::::::::,'...'::,. .,:::::::::::::::::;,'.......;::::::::::::::::::::'.;0MMMMMMMMMMMM
      Mk..::::::::::::::::::::::;'.....,:::::::::::::::::::::::::;,'';:::::::::::::::::::::;.;XMMMMMMMMMMM
      MX:.;::::::::::::::::::::::::;,,::::::::::::::::::::::::::::::::::::::::::::::::::::::'.lNMMMMMMMMMM
      MNl.,:::::,....,::::::::::::::::::::::;''.',:::::::::::::::::::::::::::::::::::::::::::'.:KMMMMMMMMM
      No..:::::'      .::::::::::::::::::::'.     .;::::::::::::::::::::::::::::::::::::::::::,.;KMMMMMMMM
      O..::::::.      .;::::::::::::::::::;.       ':::::::::::::::::::::::::::::::::::::::::::,.'kNMMMMMM
      O..::::::,.    .,::::::::::::::::::::.      .;::::::::::::::::::::::::::::::::::::::::::::;'.cKWMMMM
      Nc.':::::::;,,,:::::::::::::::::::::::,....';:::::::::::::::::::::::::::::::::::::::::::::::,.'xNMMM
      MNl.'::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;'.;0WM
      MMXc.,:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;..xN
      MMWo.,:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::..o
      MMX:.;::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::..
      MMO..:::::::::::::::::::::::::::::::::clllooddxxxxxxxxkkkkkkkkkxxxxd:.';::::::::::::::::::::::::::,.
      Xk,.ckOOOkkkxddlcc:::::::::::::ccldxkO0KKKXXXXXNNNNNNNNNNNNNNNNNNNXXOo;..,:::::::::::::::::::::::c;.
      ,;lkXXXNXXXNNXXKK0Okxdoc;;,':dk00KXNNNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXNNXl..::::::::::::::::::::::::;.
      'ONXXXXXXXXXXXXXXXXXXN0;    .ckXXXXXXXXNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXN0,.;::::::::::::::::::::::::'.
      .;lx0XNNNNNNNNXXXXXXXN0;      .lKNXXXXXXNXXXXXXXXXXXXXXXXXXXXXXXXXXX0o'.,::::::::::::::::::::::::,.:
      Odc::;:clooooxO000Okdl:'..     ,0NXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKx:'.,::::::::::::::::::::::::::..O
      MMMWX0kc.... .'.';:;;:ldxdlcc:'.:ldkOKXXNNNNXXXXXXXXXXXXXXNNNXKxc'..,:::::::::::::::::::::::::::,.:N
      MMMMMMMX;.;,..;..lO000OOOO0000Odl::;;:::cclodxO000000OOOOxdlc:,..,:::::::::::::::::::::::::::::;.'OM
      MMMMMMMWo.':' .;..oOOO00000000OO0000Okxdolc::;,......''''..'',;::::::::::::::::::::::::::::::::..dWM
      MMMMMMMMx..::. ';..oOOO00000000O00000OOOO0000Oc..'. .:::::::::::::::::::::::::::::::::::::::::..dNMM
      MMMMMMMMK,.:::..';..lOOO00000000O00000000O00Ol..;'  ':::::::::::::::::::::::::::::::::::::::;..xWMMM
      MMMMMMMMWl.':::...,..,dO00000000O0000O0000Ox;.';,. .;::::::::::::::::::::::::::::::::::::::;.'kWMMMM
      MMMMMMMMM0' ':::,..''..,lkO0000O00000Okdol;..,;...,;:::::::::::::::::::::::::::::::::::::;..:0WMMMMM
      MMMMMMMMMWk,.'::::'...,'..,:cloolc::,,'...',,'..'::::::::::::::::::::::::::::::::::::::;..;kNMMMMMMM
      MMMMMMMMMMMXd'.,::::,...,,''.........'''''....';::::::::::::::::::::::::::::::::::::;'..:kNMMMMMMMMM
      MMMMMMMMMMMMMx..::::::'. .''''''.....   ....;::::::::::::::::::::::::::::::::::::::,..:OWMMMMMMMMMMM`;
      console.log(asciiArt);
    }
  };

  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const [isGunAndBadgeMode, setIsGunAndBageMode] = useState<boolean>(false);
  const toggleGunAndBadgeMode = () => {
    setIsGunAndBageMode(!isGunAndBadgeMode);
  };

  const [isCheatMode, setIsCheatMode] = useState<boolean>(false);
  const toggleCheatMode = () => {
    setIsCheatMode(!isCheatMode);
  };

  return (
    <div className={classnames("GameRoute", { "night-mode": isNightMode })}>
      <Bingo phrases={phrases}
        isBenisMode={isBenisMode} toggleBenisMode={toggleBenisMode}
        isNightMode={isNightMode} toggleNightMode={toggleNightMode}
        isGunAndBadgeMode={isGunAndBadgeMode} toggleGunAndBadgeMode={toggleGunAndBadgeMode}
        isCheatMode={isCheatMode} toggleCheatMode={toggleCheatMode}
      />
    </div >
  );
};


export default GameRoute;
