import React, { useEffect, useState } from 'react'
import MediaLinks from '../MediaLinks'
import SplitTextAnimation from '../SplitTextAnimation'

const AboutMe = ({ emblaApi, componentIndex }) => {
  const [update, forceUpdate] = useState(0)
  const currentMainShownSlide = emblaApi?.selectedScrollSnap()

  useEffect(() => {
    if (currentMainShownSlide === componentIndex) {
      forceUpdate(n => n + 1)
    }
  }, [currentMainShownSlide, componentIndex])

  return (
    <div className="h-[90vh] px-4 sm:px-6 md:px-10 flex flex-col gap-20 max-[640px]:gap-5 overflow-y-auto scrollbar-white-rounded justify-center">
      <SplitTextAnimation
        key={update}
        as="h1"
        text="I'm a 26-year-old Full Stack Developer with 4 years of hands-on experience"
        containerClassName="text-2xl sm:text-3xl md:text-5xl font-bold max-w-[950px] invisible text-left"
      />

      <div className="space-y-6 text-left">
        <div className="text-lg sm:text-xl md:text-2xl font-bold">
          I specialize in both front-end and back-end development, with a strong passion for clean code, intuitive user experiences, and efficient system design.
          Over the years, I've worked on a wide range of projects—from interactive websites and e-commerce platforms to RESTful APIs and automation tools. I enjoy staying current with modern technologies and frameworks, and I’m always eager to learn and grow as a developer.
        </div>
        <div className="text-lg sm:text-xl md:text-2xl font-bold">
          Outside of work, I enjoy experimenting with new tech stacks and refining my skills through personal projects. I’m always open to new challenges and collaborations, so feel free to reach out if you’d like to connect or work together!
        </div>
      </div>

      <div className="w-full justify-self-end">
        <MediaLinks />
      </div>
    </div>
  )
}

export default AboutMe
