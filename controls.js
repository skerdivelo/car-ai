class Controls {
    constructor() {
        this.foward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyBoardListeners();
    }

    #addKeyBoardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.foward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
            console.table(this)
        };
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.foward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
            console.table(this)
        };
    }
}
