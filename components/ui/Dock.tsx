'use client'

import React, { useRef, forwardRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface DockProps {
  direction?: 'top' | 'middle' | 'bottom'
  className?: string
  children?: React.ReactNode
}

const Dock = forwardRef<HTMLDivElement, DockProps>(
  ({ className, children }, ref) => {
    const mouseX = useMotionValue(Infinity)

    return (
      <motion.div
        ref={ref}
        className={`dock-container ${className || ''}`}
        onMouseMove={(e: React.MouseEvent) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { mouseX } as any)
          }
          return child
        })}
      </motion.div>
    )
  }
)

Dock.displayName = 'Dock'

interface DockIconProps {
  mouseX?: any
  className?: string
  children?: React.ReactNode
}

function DockIcon({ className, children, mouseX }: DockIconProps) {
  const iconRef = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = iconRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-120, 0, 120], [48, 72, 48])
  const width = useSpring(widthSync, { mass: 0.05, stiffness: 300, damping: 15 })

  return (
    <motion.div
      ref={iconRef}
      style={{ width }}
      className={`dock-icon ${className || ''}`}
    >
      {children}
    </motion.div>
  )
}

export { Dock, DockIcon }

