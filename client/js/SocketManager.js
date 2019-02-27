class SocketManager {
    constructor() {
        this.Arcadia = window.Arcadia;
        this.connect();
    }

    connect() {
        this.socket = new WebSocket('ws://localhost:4001');
        this.socket.onopen = this.socketOpened;
        this.socket.onmessage = this.socketMessageReceived;
    }

    socketOpened() {
        console.log('connection established');
    }

    socketMessageReceived(e) {
        console.log('got data', e.data);
    }
}

export default SocketManager;