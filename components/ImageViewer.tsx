'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageViewerProps {
  images: string[]
  currentIndex: number
  onClose: () => void
}

function ImageViewer({ images, currentIndex, onClose }: ImageViewerProps) {
  const [index, setIndex] = useState(currentIndex)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft' && index > 0) {
        setIndex(index - 1)
      } else if (e.key === 'ArrowRight' && index < images.length - 1) {
        setIndex(index + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [index, images.length, onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="image-viewer-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <button className="image-viewer-close" onClick={onClose}>
          ×
        </button>

        {index > 0 && (
          <button
            className="image-viewer-arrow image-viewer-prev"
            onClick={(e) => {
              e.stopPropagation()
              setIndex(index - 1)
            }}
          >
            ‹
          </button>
        )}

        {index < images.length - 1 && (
          <button
            className="image-viewer-arrow image-viewer-next"
            onClick={(e) => {
              e.stopPropagation()
              setIndex(index + 1)
            }}
          >
            ›
          </button>
        )}

        <motion.div
          key={index}
          className="image-viewer-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={images[index]} alt="" className="image-viewer-img" />
        </motion.div>

        <div className="image-viewer-counter">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageViewer




