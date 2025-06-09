
import React, { useEffect, useState } from 'react'
import SplitTextAnimation from '../SplitTextAnimation'

const Experience = ({ emblaApi, componentIndex }) => {
  const [update, forceUpdate] = useState(0)
  const currentMainShownSlide = emblaApi?.selectedScrollSnap()

  useEffect(() => {
    if (currentMainShownSlide === componentIndex) {
      forceUpdate(n => n + 1)
    }
  }, [currentMainShownSlide, componentIndex])

  return (
    <div className="h-[90vh] flex flex-col p-5 overflow-y-auto scrollbar-white-rounded">
      <div className="max-w-full sm:max-w-[950px] space-y-2">
        <SplitTextAnimation
          key={update}
          as="h1"
          text="Full Stack Developer at Cyberllence Innovation"
          containerClassName="text-2xl sm:text-3xl md:text-4xl font-bold invisible text-left"
        />
        <SplitTextAnimation
          key={update + 1}
          as="h2"
          text="June 2021 — Present"
          containerClassName="text-xl sm:text-2xl md:text-3xl font-semibold invisible text-left"
        />
      </div>

      <div className="space-y-6">
        <p className="text-lg sm:text-xl font-semibold text-left">
          Cyberllence Innovation is an educational startup that uses the power of machine learning
          algorithms to facilitate the teaching and learning process. My contributions to the
          application span the entire codebase, which was built using the MERN stack (MongoDB,
          Express, React, Node.js) and other technologies like Redis for caching.
        </p>

        {/* Contributions List */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-left">
            Key Contributions:
          </h3>
          <ul className="list-disc list-inside text-base sm:text-lg font-semibold text-white space-y-2 ml-5">
            <li>Algorithms for generating an aggregated top-down view of lesson engagement metrics obtained by students.</li>
            <li>Frontend components and visualizations for engagement metric reports, built with D3.js.</li>
            <li>PDF generator for engagement metric reports.</li>
            <li>Management of the MongoDB database.</li>
            <li>Installation of a high-availability MongoDB Sharded Cluster with X.509 Authentication Mechanism.</li>
            <li>Implementation of algorithms for generating lesson coverage and creating visual representations of the obtained metrics.</li>
            <li>PDF generator for lesson coverage reports.</li>
            <li>Feature development for learning path management.</li>
            <li>Video generation script written in Python, powered by SikuliX and FFmpeg.</li>
            <li>Implementation of SCORM standard support.</li>
            <li>Development of new features.</li>
            <li>Creation of a mail service for internal use.</li>
            <li>Contribution to the development of a cross-platform app using Apache Cordova.</li>
            <li>Management of app deployments across multiple servers.</li>
            <li>Implementation of a custom parser for a markup language designed to simplify lesson creation, which is then imported into the core application.</li>
            <li>Docker Compose setup for managing multiple services, including an Nginx reverse proxy for routing and load balancing.</li>
            <li>Custom OAuth2 implementation with Passport.js.</li>
            <li>Bug fixing.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
