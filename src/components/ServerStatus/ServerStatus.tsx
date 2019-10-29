import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";

import { AppState, ServerAppState, ServerStatus as ServerStatusTypes } from "../../types";

import './ServerStatus.scss';

interface Props {
  server: ServerAppState;
}

const ServerStatus: React.FC<Props> = ({ server }) => {
  const { status, connectionError: error, connectionAttempts, maxRetriesReached } = server;

  const getStatus = () => {
    switch (status) {
      case ServerStatusTypes.CONNECTED:
        return 'Connected';
      case ServerStatusTypes.CONNECTING:
        return 'Connecting...';
      case ServerStatusTypes.DISCONNECTED:
        return `Disconnected`;
      case ServerStatusTypes.FAILED: {
        if (maxRetriesReached) {
          return `Disconnected: ${error}`;
        }

        return `Trying to reconnect...(${connectionAttempts})`

      }
      default:
        return 'Connected?'
    }
  };

  return (
    <div className={classnames('ServerStatus', status)}>
      <span className='ServerStatus--icon' />
      <span>{getStatus()}</span>
    </div>
  )
};


const mapStateToProps = ({ server }: AppState) => ({ server });

export default connect(mapStateToProps)(ServerStatus);
