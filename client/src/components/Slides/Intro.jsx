import React, { useEffect, useState } from 'react'
import SplitTextAnimation from '../SplitTextAnimation'

const Intro = ({ emblaApi, componentIndex }) => {
  const [update, forceUpdate] = useState(0)
  const currentMainShownSlide = emblaApi?.selectedScrollSnap()

  useEffect(() => {
    if (currentMainShownSlide === componentIndex) {
      forceUpdate(n => n + 1)
    }
  }, [currentMainShownSlide, componentIndex])

  return (
    <div className="h-[90vh] flex items-center justify-center px-4 sm:px-6 md:px-10 embla__slide__content">
      <SplitTextAnimation
        key={update}
        as="h1"
        text="Hello! I’m Albert, a Full Stack Developer focused on crafting scalable and reliable web solutions. Thanks for visiting my portfolio!"
        containerClassName="text-2xl sm:text-3xl md:text-5xl font-bold max-w-[860px] mx-auto invisible text-left"
      />
    </div>
  )
}

export default Intro
