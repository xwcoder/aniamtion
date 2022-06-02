import { Ball } from '@/objects'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const context = canvas.getContext('2d')!

const ball = new Ball()
let angle = 0
const centerX = canvas.width / 2
const centerY = canvas.height / 2
const radiusX = 150
const radiusY = 100
const speed = 0.05

function drawFrame() {
  requestAnimationFrame(drawFrame)
  context.clearRect(0, 0, canvas.width, canvas.height)

  ball.x = centerX + Math.cos(angle) * radiusX
  ball.y = centerY + Math.sin(angle) * radiusY
  angle += speed
  ball.draw(context)
}

drawFrame()
