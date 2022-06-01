import { Ball } from '@/objects'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const contex = canvas.getContext('2d')!
const ball = new Ball()
let angle = 0
const centerY = 200
const range = 50
const speed = 0.05

ball.x = canvas.width / 2
ball.y = canvas.height / 2

function drawFrame() {
  requestAnimationFrame(drawFrame)
  contex.clearRect(0, 0, canvas.width, canvas.height)

  ball.y = centerY / 2 + Math.sin(angle) * range
  angle += speed
  ball.draw(contex)
}

drawFrame()
