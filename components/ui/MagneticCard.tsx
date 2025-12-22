'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MagneticCardProps {
  children: ReactNode
  className?: string
  magnetStrength?: number
  rotationFactor?: number
  scaleFactor?: number
}

export function MagneticCard({
  children,
  className = '',
  magnetStrength = 15,
  rotationFactor = 0.8,
  scaleFactor = 1.02,
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = cardRef.current.getBoundingClientRect()

    const centerX = left + width / 2
    const centerY = top + height / 2

    const x = (clientX - centerX) / (width / 2)
    const y = (clientY - centerY) / (height / 2)

    setPosition({
      x: x * magnetStrength,
      y: y * magnetStrength,
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      animate={{
        x: position.x,
        y: position.y,
        rotateX: position.y * rotationFactor,
        rotateY: position.x * -rotationFactor,
        scale: isHovered ? scaleFactor : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        mass: 1,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-inherit pointer-events-none"
        animate={{
          opacity: isHovered ? 0.15 : 0,
          background: isHovered
            ? `radial-gradient(circle at ${50 + position.x / 2}% ${50 + position.y / 2}%, rgba(255,255,255,0.3), transparent 40%)`
            : 'none',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}



