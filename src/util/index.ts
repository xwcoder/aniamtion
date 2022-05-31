export function captureMouse(el: HTMLElement) {
  const mouse = { x: 0, y: 0 };

  el.addEventListener('mousemove', (event: MouseEvent) => {
    const { x, y } = el.getBoundingClientRect();
    mouse.x = event.clientX - x;
    mouse.y = event.clientY - y;
  });

  return mouse;
}
