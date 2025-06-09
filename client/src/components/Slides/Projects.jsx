import React, { useEffect, useState } from 'react'
import SplitTextAnimation from '../SplitTextAnimation'
import ProjectCard from './ProjectCard' // adjust path as needed

const Projects = ({ emblaApi, componentIndex }) => {
  const [update, forceUpdate] = useState(0)
  const currentMainShownSlide = emblaApi?.selectedScrollSnap()

  useEffect(() => {
    if (currentMainShownSlide === componentIndex) {
      forceUpdate(n => n + 1)
    }
  }, [currentMainShownSlide, componentIndex])

  const professionalProjects = [
    {
      name: 'Nextlab Flowgen',
      description: 'A tool that extracts content from PDF and PPT files to generate learning paths, integrated with the Nextlab Educational Platform.',
      github: '',
      live: 'https://flowgen.nextlab.tech',
      technologies: ['React', 'ExpressJS', 'MongoDB', 'Redis']
    },
    {
      name: 'Robo Nextlab',
      description: 'Educational platform used for one of the biggest robotics competitions in Romania.',
      github: '',
      live: 'https://robo.nextlab.tech',
      technologies: ['React', 'ExpressJS', 'MongoDB', 'Redis']
    },
    {
      name: 'Testrax',
      description: "This is a cross-platform educational application designed to support the assessment and progress tracking of students in both homework and tests. The app also leverages artificial intelligence to generate new exercises for assignments and exams. Additionally, it provides comprehensive reports to closely monitor each student's progress..",
      github: '',
      live: 'https://testrax.nextlab.tech',
      technologies: ['React', 'ExpressJS', 'MongoDB', 'Redis', 'Docker Compose']
    },
    {
      name: 'Nextlab Edulib',
      description: 'A customized implementation of the Nextlab Adaptive Learning platform developed specifically for the Edulib Project—an educational initiative created by the Romanian Ministry of Education to support the national education system.',
      github: '',
      live: 'https://nextlab.roedulib.ro',
      technologies: ['React', 'ExpressJS', 'MongoDB', 'Redis']
    }
  ]

  const personalProjects = [
    {
      name: 'Portfolio Website',
      description: 'Built with React and TailwindCSS to showcase my work.',
      github: 'https://github.com/mango-exe/portofolio.git',
      // live: 'https://myportfolio.com'
      technologies: ['React', 'TailwindCSS']
    },
    {
      name: 'GO Load Balancer',
      description: 'A simple Load Balancer written in GO for learning purposes.',
      github: 'https://github.com/mango-exe/go-load-balancer.git',
      live: '',
      technologies: ['GO']
    }
  ]

  return (
     <div className="h-[90vh] flex flex-col justify-center gap-y-[1.5vh] sm:gap-y-[4vh] embla__slide__content sm:px-10 px-4 overflow-y-auto">
      <SplitTextAnimation
        key={update}
        as='h1'
        text='Crafted with code'
        containerClassName='text-3xl sm:text-5xl font-bold max-w-[950px] invisible text-left content-end justify-self-start mb-[5vh]'
      />

      <div>
        <SplitTextAnimation
          key={update + 1}
          as='h2'
          text='Projects I’ve Worked On Professionally'
          containerClassName='text-2xl font-bold max-w-[950px] invisible text-left content-end justify-self-start'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 overflow-y-auto max-h-[30vh] scrollbar-white-rounded'>
          {professionalProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>

      <div>
        <SplitTextAnimation
          key={update + 2}
          as='h2'
          text='Projects Built for Learning'
          containerClassName='text-2xl font-bold max-w-[950px] invisible text-left content-end justify-self-start'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 overflow-y-auto max-h-[25vh] scrollbar-white-rounded'>
          {personalProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
