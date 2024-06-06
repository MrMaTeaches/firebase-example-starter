import { Canvas } from "./canvas.js";
//@ts-ignore Import module
import { nanoid } from "https://cdnjs.cloudflare.com/ajax/libs/nanoid/3.3.4/nanoid.min.js";
class Character {
    h = 25;
    w = 25;
    _x = Math.random() * Canvas.WIDTH - this.w;
    _y = Math.random() * Canvas.HEIGHT - this.h;
    _colour = `rgb(${this.randomizer(255)}, ${this.randomizer(255)}, ${this.randomizer(255)})`;
    constructor(colour) {
        if (colour) {
            this._colour = colour;
        }
    }
    randomizer(val) {
        return Math.floor(Math.random() * val);
    }
}
class Player extends Character {
    moveSpeed = 1;
    _id = nanoid(10);
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get colour() {
        return this._colour;
    }
    get id() {
        return this._id;
    }
    moveRight() {
        this._x += this.moveSpeed;
    }
    moveLeft() {
        this._x -= this.moveSpeed;
    }
    moveUp() {
        this._y -= this.moveSpeed;
    }
    moveDown() {
        this._y += this.moveSpeed;
    }
    draw() {
        Canvas.instance.context.fillStyle = this._colour;
        Canvas.instance.context.fillRect(this._x, this._y, this.w, this.h);
    }
}
export { Character, Player };
//# sourceMappingURL=character.js.map