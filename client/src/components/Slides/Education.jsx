import React, { useEffect, useState } from 'react'
import SplitTextAnimation from '../SplitTextAnimation'

const Education = ({ emblaApi, componentIndex }) => {
  const [update, forceUpdate] = useState(0)
  const currentMainShownSlide = emblaApi?.selectedScrollSnap()

  useEffect(() => {
    if (currentMainShownSlide === componentIndex) {
      forceUpdate(n => n + 1)
    }
  }, [currentMainShownSlide, componentIndex])

  return (
    <div className="h-[90vh] px-4 sm:px-6 md:px-10 flex flex-col md:gap-10 max-[640px]:gap-0 overflow-y-auto scrollbar-white-rounded justify-center">
      <SplitTextAnimation
        key={update + 10}
        as="h1"
        text="Academic Background"
        containerClassName="text-3xl sm:text-4xl md:text-5xl font-bold max-w-[950px] invisible text-left"
      />

      {/* Bachelor's Section */}
      <div className="space-y-3">
        <SplitTextAnimation
          key={update + 11}
          as="h1"
          text="Bachelor's at Faculty of Cybernetics, Statistics and Informatics – ASE Bucharest"
          containerClassName="text-xl sm:text-2xl md:text-3xl font-bold invisible text-left"
        />
        <SplitTextAnimation
          key={update + 12}
          as="h1"
          text="2018-2021"
          containerClassName="text-lg sm:text-xl md:text-2xl invisible text-left"
        />
        <div className="text-base sm:text-lg md:text-xl font-bold text-left">
          Economic Informatics is a multidisciplinary undergraduate program offered by the Faculty of Cybernetics, Statistics and Informatics at ASE Bucharest. It combines computer science, economics, and data analysis to prepare students for the digital economy. The program focuses on software development, databases, information systems, and business process modeling, equipping graduates with the technical and analytical skills needed to design and manage IT solutions in economic and business environments.
        </div>
      </div>

      {/* Master's Section */}
      <div className="space-y-3">
        <SplitTextAnimation
          key={update + 13}
          as="h1"
          text="Master's in Business-Support Databases at Faculty of Cybernetics, Statistics and Informatics – ASE Bucharest"
          containerClassName="text-xl sm:text-2xl md:text-3xl font-bold invisible text-left"
        />
        <SplitTextAnimation
          key={update + 14}
          as="h1"
          text="2021-2023"
          containerClassName="text-lg sm:text-xl md:text-2xl invisible text-left"
        />
        <div className="text-base sm:text-lg md:text-xl font-bold text-left">
          This professional master’s program focuses on advanced database technologies and their application in business environments. It is designed for individuals seeking to deepen their knowledge of modern IT solutions and leverage technology to develop or enhance business processes. The curriculum integrates practical needs from the IT field with up-to-date tools for business management.
        </div>
      </div>
    </div>
  )
}

export default Education
