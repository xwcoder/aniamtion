import { Ball } from '@/objects'

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
const context = canvas.getContext('2d')!

const ball = new Ball()
let angle = 0
const centerY = 200
const range = 50
const xspeed = 1
const yspeed = 0.05

function drawFrame() {
  requestAnimationFrame(drawFrame)
  context.clearRect(0, 0, canvas.width, canvas.height)

  ball.x += xspeed
  ball.y = centerY / 2 + Math.sin(angle) * range
  angle += yspeed

  ball.draw(context)
}

drawFrame()
