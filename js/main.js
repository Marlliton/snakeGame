const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = '#ffffff'
ctx.fillRect(0, 0, canvas.width, canvas.height)

const scale = 10
const rows = canvas.width / scale
const columns = canvas.height / scale

let snake
let fruit

(function setup() {
    snake = new Snake()
    fruit = new Fruit()
    fruit.randomLocation()

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fruit.draw()
        snake.draw()
        snake.update()
    }, 100)
}())



window.addEventListener('keydown', evnt => {
    const direction = evnt.key.replace("Arrow", "")
    // console.log(direction)
    snake.setDirection(direction)
})