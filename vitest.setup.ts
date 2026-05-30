import '@testing-library/jest-dom/vitest'

// jsdom stubs for browser APIs used by client components
if (!('IntersectionObserver' in globalThis)) {
  class IO {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return [] }
  }
  // @ts-expect-error attach stub
  globalThis.IntersectionObserver = IO
}
if (!globalThis.matchMedia) {
  // @ts-expect-error attach stub
  globalThis.matchMedia = () => ({ matches: false, media: '', addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {}, dispatchEvent() { return false } })
}
