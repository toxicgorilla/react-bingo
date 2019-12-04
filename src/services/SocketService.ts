import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";

class SocketService<Methods extends string, Events extends string> {
  socket: HubConnection;

  constructor(url: string) {
    this.socket = new HubConnectionBuilder().withUrl(url).build();
  }

  async start() {
    await this.socket.start();
  }

  on(event: Events, callback: (...args: any[]) => void) {
    this.socket.on(event, callback);
  }

  onClose(callback: (error?: Error) => void) {
    this.socket.onclose(callback)
  }

  async send<T>(method: Methods, data?: any) {
    try {
      return await this.socket.invoke<T>(method, data);
    }
    catch (e) {
      return e;
    }
  }
}

export { SocketService };
