import { ServerAppState, ServerStatus } from "../../../types";

const initialState = {
  status: ServerStatus.CONNECTING,
  connectionAttempts: 0,
  connectionError: undefined
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
      return { ...state, status: ServerStatus.CONNECTED }
    }

    case 'SERVER/disconnected' : {
      return { ...state, status: ServerStatus.DISCONNECTED }
    }

    case 'SERVER/failed' : {
      const { error } = action.payload;

      return { ...state, status: ServerStatus.DISCONNECTED, connectionError: error }
    }

    case 'SERVER/connecting' : {
      return { ...state, status: ServerStatus.CONNECTING, connectionAttempts: state.connectionAttempts + 1 }
    }
  }

  return state;
};

export default server;
