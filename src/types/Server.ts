export interface ServerAppState {
  status: ServerStatus;
  connectionAttempts: number;
  connectionError?: string;
  maxRetriesReached: boolean;
}

export enum ServerStatus {
  CONNECTED = 'Connected',
  DISCONNECTED = 'Disconnected',
  CONNECTING = 'Connecting',
  FAILED = 'Failed'
}
