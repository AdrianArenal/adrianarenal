export function scrollToElm(container, elm, durationInSeconds, onDone): void {
  const pos = getRelativePos(elm)
  scrollTo(container, pos.top, durationInSeconds, onDone)
}
function getRelativePos(elm) {
  const parentPost = elm.parentNode.getBoundingClientRect()
  const targetPost = elm.getBoundingClientRect()
  return {
    top: targetPost.top - parentPost.top + elm.parentNode.scrollTop,
    right: targetPost.right - parentPost.right,
    bottom: targetPost.bottom - parentPost.bottom,
    left: targetPost.left - parentPost.left
  }
}
function scrollTo(element, to, durationInSeconds, onDone): void {
  const start = element.scrollTop,
    change = to - start,
    startTime = performance.now()
  animateScroll(
    element,
    start,
    startTime,
    to,
    change,
    durationInSeconds,
    onDone
  )
}
function animateScroll(
  element,
  start,
  startTime,
  to,
  change,
  durationInSeconds,
  onDone
): void {
  const now = performance.now()
  const elapsed = (now - startTime) / 1000
  const t = elapsed / durationInSeconds
  element.scrollTop = start + change * easeInOutQuad(t)

  if (t < 1) {
    window.requestAnimationFrame(() =>
      animateScroll(
        element,
        start,
        startTime,
        to,
        change,
        durationInSeconds,
        onDone
      )
    )
  } else {
    onDone && onDone()
  }
}
function easeInOutQuad(t): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}
