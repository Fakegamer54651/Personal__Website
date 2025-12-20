'use client'

import React, { useRef, useEffect, ReactNode } from 'react'

interface ClickSparkProps {
  children: ReactNode
  sparkColor?: string
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  duration?: number
}

// Click spark effect component - triggers anywhere on the page
const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkColor = '#333',
  sparkSize = 8,
  sparkRadius = 20,
  sparkCount = 8,
  duration = 400
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return

      const container = document.createElement('div')
      container.style.position = 'fixed'
      container.style.left = `${e.clientX}px`
      container.style.top = `${e.clientY}px`
      container.style.pointerEvents = 'none'
      container.style.zIndex = '9999'

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div')
        const angle = (360 / sparkCount) * i
        const radians = (angle * Math.PI) / 180
        const offsetX = Math.cos(radians) * sparkRadius
        const offsetY = Math.sin(radians) * sparkRadius

        spark.style.position = 'absolute'
        spark.style.width = `${sparkSize}px`
        spark.style.height = `${sparkSize}px`
        spark.style.borderRadius = '50%'
        spark.style.backgroundColor = sparkColor
        spark.style.transform = 'translate(-50%, -50%)'
        spark.style.transition = `all ${duration}ms ease-out`
        spark.style.opacity = '1'

        container.appendChild(spark)

        requestAnimationFrame(() => {
          spark.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`
          spark.style.opacity = '0'
        })
      }

      document.body.appendChild(container)

      setTimeout(() => {
        document.body.removeChild(container)
      }, duration)
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration])

  return <div ref={containerRef}>{children}</div>
}

export default ClickSpark




