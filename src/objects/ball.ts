export class Ball {
  x = 0

  y = 0

  radius = 40

  color = '#ff0000'

  scaleX = 1

  scaleY = 1

  rotation = 0

  lineWidth = 1

  constructor(radius?: number, color?: string) {
    if (radius !== undefined) {
      this.radius = radius
    }

    if (color !== undefined) {
      this.color = color
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.rotation)
    context.scale(this.scaleX, this.scaleY)

    context.lineWidth = this.lineWidth
    context.fillStyle = this.color

    context.beginPath()
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true)
    context.closePath()
    context.fill()

    if (this.lineWidth > 0) {
      context.stroke()
    }

    context.restore()
  }
}
