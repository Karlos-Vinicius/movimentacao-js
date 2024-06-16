class Player {
    constructor(x, y, size=50) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.keyboard = {left: false, right: false, up: false, down: false};
        this.element = this.createElement();
        this.initEvents()
    }

    update() {
        this.move();
        this.collisionWall()
        this.dray();
    }

    createElement() {
        const player = document.createElement("div")
        player.classList.add('player')
        return player
    }
    
    move() {
    
    }

    dray() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    collisionWall() {

    }

    initEvents() {
        document.body.addEventListener("keydown", (ev) => {
            console.log(ev.key)
        })

        document.body.addEventListener("keyup", (ev) => {

        })

    }
}