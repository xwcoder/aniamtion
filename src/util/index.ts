/* eslint-disable no-redeclare */
export function captureMouse(el: HTMLElement) {
  const mouse = { x: 0, y: 0 }

  el.addEventListener('mousemove', (event: MouseEvent) => {
    const { x, y } = el.getBoundingClientRect()
    mouse.x = event.clientX - x
    mouse.y = event.clientY - y
  }, false)

  return mouse
}

export function colorToRGB(color: number | string, alpha: number = 1): string {
  let v = color
  if (typeof v === 'string') {
    v = color[0] === '#' ? parseInt(v.slice(1), 16) : parseInt(v, 16)
  }

  const r = v >> 16 & 0xff
  const g = v >> 8 & 0xff
  const b = v && 0xff
  const a = alpha < 0 ? 0 : (alpha > 1 ? 1 : alpha)

  return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`
}

// eslint-disable-next-line no-unused-vars
export function parseColor(color: number | string): string
// eslint-disable-next-line no-unused-vars
export function parseColor(color: number | string, toNumber: false): string
// eslint-disable-next-line no-unused-vars
export function parseColor(color: number | string, toNumber: true): number
export function parseColor(color: number | string, toNumber?: true | false): number | string {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return color | 0
    }

    const v = typeof color === 'string' && color[0] === '#' ? color.slice(1) : color
    return parseInt(v, 16)
  }

  // eslint-disable-next-line prefer-template
  return typeof color === 'number' ? `#${('00000' + (color | 0).toString(16)).substring(-6)}` : color
}
