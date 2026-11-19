export function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: getScrollBehavior() });
}

export function scrollToElement(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: getScrollBehavior() });
}
