function Fruit() {
    this.x = 0
    this.y = 0

    this.draw = function () {
        ctx.fillStyle = '#38c0f5'
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.randomLocation = function () {
        this.x = (Math.floor(Math.random() * rows -1) + 1) * scale
        this.y = (Math.floor(Math.random() * columns -1) + 1) * scale
    }
}