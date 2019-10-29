import React from 'react';

import ServerStatus from "../ServerStatus/ServerStatus";

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Copyright'>© McClusky Games and Co.</div>
      <ServerStatus />
    </footer>
  )
};

export default Footer;
