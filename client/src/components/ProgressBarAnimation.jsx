import React from 'react'
import { motion } from 'framer-motion' // use 'framer-motion', not 'motion/react'

const stages = ['Beginner', 'Intermediate', 'Advanced']

const stagePercentages = {
  Beginner: 10,
  Intermediate: 50,
  Advanced: 100,
}

const ProgressBarAnimation = ({ level }) => {
  const progress = stagePercentages[level] || 0

  return (
    <div className='w-full max-w-xl mx-auto bg-black rounded-2xl shadow-lg text-white'>
      <div className='flex justify-between mb-2 text-sm font-bold'>
        {stages.map((stage) => (
          <span
            key={stage}
            className={stage === level ? 'text-white' : 'text-gray-500'}
          >
            {stage}
          </span>
        ))}
      </div>
      <div className='border border-white rounded-[16px] h-[1.2em] overflow-hidden'>
        <motion.div
          className='h-full bg-white'
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.25 }}
        />
      </div>
    </div>
  )
}

export default ProgressBarAnimation
