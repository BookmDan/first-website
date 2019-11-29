class Snowflake {

    constructor() {
        this.pos = createVector();
        this.vel = createVector();
        this.acc = createVector();
    }

    render() {
        stroke(255);
        strokeWeight(4);
        PointerEvent(this.pos.x, this.pos.y);
    }
}