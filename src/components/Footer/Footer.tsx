import React from 'react';
import classnames from 'classnames';

import { AppState, ServerAppState } from "../../types";

import './Footer.scss';
import { connect } from "react-redux";

interface Props {
  server: ServerAppState;
}

const Footer: React.FC<Props> = ({ server }) => {
  const { status } = server;

  return (
    <footer className='Footer'>
      <div className='Copyright'>© McClusky Games and Co.</div>
      <div className={classnames('ServerStatus', status)}>
        <span className='ServerStatus--icon' />
        <span>{status}</span>
      </div>
    </footer>
  )
};

const mapStateToProps = ({ server }: AppState) => ({ server });

export default connect(mapStateToProps)(Footer);
