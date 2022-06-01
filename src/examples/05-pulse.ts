import { Ball } from '@/objects'

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
const context = canvas.getContext('2d')!

const ball = new Ball()
let angle = 0
const range = 0.5
const speed = 0.05
const centerScale = 1

ball.x = canvas.width / 2
ball.y = canvas.height / 2

function drawFrame() {
  requestAnimationFrame(drawFrame)
  context.clearRect(0, 0, canvas.width, canvas.height)

  const scale = centerScale + Math.sin(angle) * range
  ball.scaleX = scale
  ball.scaleY = scale
  angle += speed

  ball.draw(context)
}

drawFrame()
