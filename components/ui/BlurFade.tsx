"use client"

import { useRef, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
  AnimatePresence,
  motion,
  MotionProps,
  useInView,
  UseInViewOptions,
  Variants,
} from "framer-motion"

type MarginType = UseInViewOptions["margin"]

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode
  className?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
  }
  duration?: number
  delay?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
  skipOnRevisit?: boolean
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  skipOnRevisit = false,
  ...props
}: BlurFadeProps) {
  const ref = useRef(null)
  const pathname = usePathname()
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = !inView || inViewResult
  
  // Check if this is a revisit to homepage (for skipOnRevisit feature)
  const [shouldSkipAnimation, setShouldSkipAnimation] = useState(false)
  
  useEffect(() => {
    if (skipOnRevisit && typeof window !== 'undefined') {
      // Check if we're on a homepage route (matches /en or /ru)
      const isHomepage = pathname === '/en' || pathname === '/ru'
      
      if (isHomepage) {
        const visitedKey = 'homepage-visited'
        const hasVisited = sessionStorage.getItem(visitedKey)
        
        if (hasVisited === 'true') {
          // Already visited, skip animation
          setShouldSkipAnimation(true)
        } else {
          // First visit, set flag after component mounts
          sessionStorage.setItem(visitedKey, 'true')
        }
      }
    }
  }, [skipOnRevisit, pathname])
  
  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  }
  const combinedVariants = variant || defaultVariants
  
  // If should skip animation, show content immediately
  if (shouldSkipAnimation) {
    return <div ref={ref} className={className}>{children}</div>
  }
  
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}



