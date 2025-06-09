import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const letterVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: '0%', opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { y: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
}

const SlotTextAnimation = ({ texts = [], interval = 2000 }) => {
  const [index, setIndex] = useState(0)

  // Get max word length for consistent letter slots
  const maxLength = useMemo(() => Math.max(...texts.map(t => t.length)), [texts])
  const paddedText = texts[index % texts.length].padEnd(maxLength, ' ')

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1)
    }, interval)
    return () => clearInterval(timer)
  }, [interval])

  return (
     <div className="flex text-2xl font-bold">
       {Array.from(paddedText).map((char, i) => (
         <div
           key={i}
           className="relative inline-flex h-[2em] items-center justify-center "
           style={{ minWidth: '0.6em' }} // minimal width to avoid collapse but adapt to content
         >
           <AnimatePresence mode="popLayout" initial={false}>
             <motion.span
               key={`${char}-${index}`}
               variants={letterVariants}
               initial="initial"
               animate="animate"
               exit="exit"
               className="absolute left-0 top-0 inline-flex items-center justify-center"
               style={{ width: '100%' }}
             >
               {char === ' ' ? '\u00A0' : char}
             </motion.span>
           </AnimatePresence>
         </div>
       ))}
     </div>
   )
}

export default SlotTextAnimation
