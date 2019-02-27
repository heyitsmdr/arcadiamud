class TextManager {
    constructor() {
        this.Arcadia = window.Arcadia;
        this.lineNumber = 0;
    }

    addText(text) {
        const div = document.createElement('div');
        
        div.innerHTML = text;
        div.className = "line"
        div.setAttribute("line-number", this.lineNumber++);

        const textContainer = document.getElementsByClassName('text-container')[0];
        textContainer.appendChild(div);
    }
}

export default TextManager;