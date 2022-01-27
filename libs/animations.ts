const bezierEase = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      easing: bezierEase
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const letterAnimation = {
  initial: {
    y: 200
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5
    }
  }
}

const banner = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

const underlineMotion = {
  rest: {
    opacity: 0,
    width: 0,
    ease: 'easeOut',
    duration: 0.2
  },
  hover: {
    width: '60%',
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    },
    backgroundColor: 'white',
    cursor: 'pointer'
  }
}

export { fadeInUp, stagger, banner, letterAnimation, underlineMotion }
