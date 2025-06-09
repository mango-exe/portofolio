import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const HideAnimation = ({ Component, componentProps }) => {

    return (
      <AnimatePresence initial={false}>
          <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key='box'
          >
            <Component {...componentProps} />
          </motion.div>
      </AnimatePresence>
    )
}

export default HideAnimation
