'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ProgressiveBlurProps {
  position?: 'top' | 'bottom' | 'left' | 'right'
  height?: string
  width?: string
  blur?: string
}

// Progressive blur component with Framer Motion - exact Figma design colors
const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  position = 'bottom',
  height = '40%',
  width = '100%',
  blur = '50px'
}) => {
  const gradientDirections = {
    top: 'to bottom',
    bottom: 'to bottom',
    left: 'to right',
    right: 'to left'
  }

  const positionStyles = {
    top: { top: 0, left: 0, right: 0, height },
    bottom: { bottom: 0, left: 0, right: 0, height },
    left: { left: 0, top: 0, bottom: 0, width },
    right: { right: 0, top: 0, bottom: 0, width }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        ...positionStyles[position],
        background: `linear-gradient(${gradientDirections[position]}, #f2f2f2 0%, rgba(242, 242, 242, 0) 100%)`,
        backdropFilter: `blur(${blur})`,
        WebkitBackdropFilter: `blur(${blur})`,
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  )
}

export { ProgressiveBlur }
export default ProgressiveBlur


