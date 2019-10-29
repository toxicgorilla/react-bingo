import { ServerAppState, ServerStatus } from "../../../types";

const initialState = {
  status: ServerStatus.CONNECTING,
  connectionAttempts: 0,
  connectionError: undefined,
  maxRetriesReached: false
};

type ServerConnected = {
  type: 'SERVER/connected';
}

type ServerDisconnected = {
  type: 'SERVER/disconnected';
}

type ServerConnecting = {
  type: 'SERVER/connecting';
}

type ServerConnectionFailed = {
  type: 'SERVER/failed';
  payload: {
    error?: string;
  }
}

export type AllServerActions = ServerConnected | ServerDisconnected | ServerConnecting | ServerConnectionFailed;

const server = (state: ServerAppState = initialState, action: AllServerActions): ServerAppState => {

  switch (action.type) {
    case 'SERVER/connected' : {
      return {
        ...state,
        status: ServerStatus.CONNECTED,
        connectionError: undefined,
        connectionAttempts: 0,
        maxRetriesReached: false
      }
    }

    case 'SERVER/disconnected' : {
      return { ...state, status: ServerStatus.DISCONNECTED, connectionError: undefined, connectionAttempts: 0 }
    }

    case 'SERVER/failed' : {
      const { error } = action.payload;

      return { ...state, status: ServerStatus.FAILED, connectionError: error }
    }

    case 'SERVER/connecting' : {
      const connectionAttempts = state.connectionAttempts + 1;
      const maxRetriesReached = connectionAttempts >= 5;
      return { ...state, status: ServerStatus.CONNECTING, connectionAttempts, maxRetriesReached }
    }
  }

  return state;
};

export default server;
