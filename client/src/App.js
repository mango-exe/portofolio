import React, { useState } from 'react'
import './App.css'
import EmblaCarousel from './components/EmblaCarousel'
import SlotTextAnimation from './components/SlotTextAnimation'

import AboutMe from './components/Slides/AboutMe'
import Experience from './components/Slides/Experience'
import Intro from './components/Slides/Intro'
import Projects from './components/Slides/Projects'
import Expertise from './components/Slides/Expertise'
import Education from './components/Slides/Education'

function App() {
  const OPTIONS = { loop: true }

  const SLIDES = [
    {
      title: 'Intro',
      component: Intro
    },
    {
      title: 'About me',
      component: AboutMe
    },
    {
      title: 'Education',
      component: Education
    },
    {
      title: 'Experience',
      component: Experience
    },
    {
      title: 'Expertise',
      component: Expertise
    },
    {
      title: 'Projects',
      component: Projects
    }
    ]

  const [heading, setHeading] = useState(SLIDES[0].title)

  const onSlideChange = (headingText)  => {
    setHeading(headingText)
  }

  return (
    <div className="h-screen">
      <div className="grid grid-cols-[10%_80%_10%] h-15 mobile-app-header">
        <div className="justify-self-center self-center w-[100%] h-[100%] content-end text-center mr-[-3em] mobile-slot-animation-hidden">
          <SlotTextAnimation texts={["full", "stack", "web", "developer", "portofolio"]} />
        </div>
        <div className="justify-self-center self-center w-[100%] h-[100%] content-center text-center text-4xl font-bold">{heading.toLowerCase()}</div>
        <div className="justify-self-center self-center w-[100%] h-[100%] text-center"></div>
      </div>
      <div className='w-screen'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} onSlideChange={onSlideChange} />
      </div>
      <div>
      </div>
    </div>
  )
}

export default App;
