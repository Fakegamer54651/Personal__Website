'use client'

import { useRef, useState, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ProximityMagneticCardProps {
  children: ReactNode
  className?: string
  magnetStrength?: number
  rotationFactor?: number
  scaleFactor?: number
  proximityRange?: number
}

export function ProximityMagneticCard({
  children,
  className = '',
  magnetStrength = -24,
  rotationFactor = 1.2,
  scaleFactor = 1.03,
  proximityRange = 150,
}: ProximityMagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isInRange, setIsInRange] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from cursor to card center
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

      // Check if cursor is within proximity range
      if (distance < proximityRange) {
        setIsInRange(true)
        
        // Calculate normalized position (-1 to 1)
        const x = distanceX / (rect.width / 2)
        const y = distanceY / (rect.height / 2)
        
        // Calculate strength based on distance (closer = stronger)
        const strength = 1 - (distance / proximityRange)
        
        setPosition({
          x: x * magnetStrength * strength,
          y: y * magnetStrength * strength,
        })
      } else {
        setIsInRange(false)
        setPosition({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [magnetStrength, proximityRange])

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      animate={{
        x: position.x,
        y: position.y,
        rotateX: position.y * rotationFactor,
        rotateY: position.x * -rotationFactor,
        scale: isInRange ? scaleFactor : 1,
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
    >
      {children}
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-inherit pointer-events-none"
        animate={{
          opacity: isInRange ? 0.15 : 0,
          background: isInRange
            ? `radial-gradient(circle at ${50 + position.x / 2}% ${50 + position.y / 2}%, rgba(255,255,255,0.3), transparent 40%)`
            : 'none',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

