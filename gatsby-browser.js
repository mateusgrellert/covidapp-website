/* eslint-disable no-unused-expressions */
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.info(`# IntersectionObserver is polyfilled!`)
  }
}
