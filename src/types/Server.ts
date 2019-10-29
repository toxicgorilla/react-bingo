export interface ServerAppState {
  status: ServerStatus;
  connectionAttempts: number;
  connectionError?: string;
}

export enum ServerStatus {
  CONNECTED = 'Connected',
  DISCONNECTED = 'Disconnected',
  CONNECTING = 'Connecting'
}
