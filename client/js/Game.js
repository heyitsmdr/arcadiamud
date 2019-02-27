import TextManager from './TextManager.js';
import SocketManager from './SocketManager.js';

class Game {
    initializeManagers() {
        this.TextManager = new TextManager();
        this.SocketManager = new SocketManager();
    }
}

export default Game;