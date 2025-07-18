import React, { useState, useEffect } from 'react'
import SplitTextAnimation from '../SplitTextAnimation'
import ProgressBarAnimation from '../ProgressBarAnimation'


const Expertise = ({ emblaApi, componentIndex }) => {
  const [update, forceUpdate] = useState(0)
  const currentMainShownSlide = emblaApi?.selectedScrollSnap()

  useEffect(() => {
    if (currentMainShownSlide === componentIndex) {
      forceUpdate(n => n + 1)
    }
  }, [currentMainShownSlide, componentIndex])

  const technologies = [
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      title: 'React',
      level: 'Advanced'
    },

    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      title: 'Tailwind CSS',
      level: 'Advanced'
    },
    {
      logo: `${process.env.PUBLIC_URL}/express.svg`,
      title: 'Express',
      level: 'Advanced'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      title: 'Spring Boot',
      level: 'Intermediate'
    },
    {
      logo: `${process.env.PUBLIC_URL}/flask.svg`,
      title: 'Flask',
      level: 'Intermediate'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      title: 'MongoDB',
      level: 'Advanced'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      title: 'MySQL',
      level: 'Intermediate'
    }
  ]


  const programmingLanguages = [
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      title: 'JavaScript',
      level: 'Advanced'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      title: 'CSS',
      level: 'Advanced'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      title: 'HTML',
      level: 'Advanced'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      title: 'Typescript',
      level: 'Advanced'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      title: 'Java',
      level: 'Intermediate'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      title: 'Python',
      level: 'Intermediate'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      title: 'Golang',
      level: 'Beginner'
    }
  ]


  const certifications = [
    {
      logo: `${process.env.PUBLIC_URL}/cloud-practitioner-badge.png`,
      title: 'AWS Cloud Pracitioner',
      link: 'https://www.credly.com/badges/299934ff-4efe-4a91-ac3b-c172519b9af5/public_url'
    },
    // {
    //   logo: '/cloud-practitioner-badge.png',
    //   title: 'AWS Cloud Pracitioner',
    //   link: 'https://www.credly.com/badges/299934ff-4efe-4a91-ac3b-c172519b9af5/public_url'
    // }
  ]

  const renderSkillRow = ({ logo, title, level }, index) => (
    <div key={index} className='flex justify-center items-center flex-col gap-1 m-3 '>
      <img src={logo} alt={title} className='w-10  object-contain' />
      <div className='font-semibold'>{title}</div>
      <div className='w-[15em]'>
        <ProgressBarAnimation key={update + 4} level={level} />
      </div>
    </div>
  )

  const renderCertification = ({ logo, title, link }, index) => (
    <a
      key={index}
      href={link || '#'}
      target='_blank'
      rel='noopener noreferrer'
      className='flex flex-col items-center justify-center'
    >
      <img src={logo} alt={title} className='w-25 object-contain' />
      <span className='font-bold w-full'>{title}</span>
    </a>
  )

  return (
    <div className='h-[90vh] pt-5 pb-5 embla__slide__content px-10 overflow-y-auto scrollbar-white-rounded'>
       <SplitTextAnimation
         key={update}
         as='h1'
         text='Technical skills'
         containerClassName="text-3xl sm:text-5xl font-bold max-w-[950px] invisible text-left content-end justify-self-start mb-[5vh]"
       />

       <div className='technologies-container'>
         <SplitTextAnimation
           key={update + 1}
           as='h1'
           text='Technologies'
           containerClassName='text-2xl font-bold max-w-[950px] invisible text-left content-end justify-self-start ml-2'
         />
         <div className='flex flex-row flex-wrap justify-center items-center' >
           {technologies.map(renderSkillRow)}
         </div>
       </div>

       <div className='programming-languages-container'>
         <SplitTextAnimation
           key={update + 2}
           as='h1'
           text='Programming Languages'
           containerClassName='text-2xl font-bold max-w-[950px] invisible text-left content-end justify-self-start ml-2'
         />
         <div className='flex flex-row flex-wrap justify-center items-center'>
           {programmingLanguages.map(renderSkillRow)}
         </div>
       </div>

       <div className='certifications-container'>
         <SplitTextAnimation
           key={update + 3}
           as='h1'
           text='Certifications'
           containerClassName='text-2xl font-bold max-w-[950px] invisible text-left content-end justify-self-start ml-2'
         />
         <div className='pl-2 flex justify-around'>
           {certifications.map(renderCertification)}
         </div>
       </div>
     </div>
  )
}

export default Expertise
