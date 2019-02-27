class SocketManager {
    constructor() {
        this.Arcadia = window.Arcadia;
        this.connect();
    }

    connect() {
        this.socket = new WebSocket('ws://localhost:4001');
        this.socket.onopen = this.socketOpened.bind(this);
        this.socket.onmessage = this.socketMessageReceived.bind(this);
        this.socket.onerror = this.socketErrorOccurred.bind(this);
    }

    socketOpened() {
        console.log('connection established');
    }

    socketMessageReceived(e) {
        console.log('got data', e.data);
    }

    socketErrorOccurred() {
        this.Arcadia.TextManager.addText('A socket error has occurred.');
    }
}

export default SocketManager;