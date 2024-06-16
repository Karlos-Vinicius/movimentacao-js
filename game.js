class Game {
    constructor() {
        this.map = document.querySelector(".map");
        this.elements = [];
    }

    addElement(element) {
            this.map.insertAdjacentElement("beforeend", element);
            this.elements.push(element);
    }

    update() {
        for (let el of this.elements) {
            el.update();
        }

    }
}