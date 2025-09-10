'use client'

import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal'
import { ReactNode } from 'react'

interface AnimatedRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  duration?: number
  stagger?: boolean
  staggerDelay?: number
}

export function AnimatedReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 600,
  stagger = false,
  staggerDelay = 100
}: AnimatedRevealProps) {
  const { ref, isVisible } = useScrollReveal({ 
    delay, 
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  })

  const getTransformStyles = () => {
    const baseStyle = `transition-all duration-${duration} ease-out`
    
    if (isVisible) {
      return `${baseStyle} opacity-100 translate-x-0 translate-y-0 scale-100`
    }

    switch (direction) {
      case 'up':
        return `${baseStyle} opacity-0 translate-y-8`
      case 'down':
        return `${baseStyle} opacity-0 -translate-y-8`
      case 'left':
        return `${baseStyle} opacity-0 translate-x-8`
      case 'right':
        return `${baseStyle} opacity-0 -translate-x-8`
      case 'scale':
        return `${baseStyle} opacity-0 scale-95`
      case 'fade':
      default:
        return `${baseStyle} opacity-0`
    }
  }

  return (
    <div 
      ref={ref}
      className={`${getTransformStyles()} ${className}`}
      style={{
        transitionDelay: stagger ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}

interface StaggeredRevealProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  duration?: number
}

export function StaggeredReveal({ 
  children, 
  className = '',
  staggerDelay = 150,
  direction = 'up',
  duration = 600
}: StaggeredRevealProps) {
  const { ref, isItemVisible } = useStaggeredReveal(children.length, staggerDelay)

  const getTransformStyles = (index: number) => {
    const baseStyle = `transition-all duration-${duration} ease-out`
    const isVisible = isItemVisible(index)
    
    if (isVisible) {
      return `${baseStyle} opacity-100 translate-x-0 translate-y-0 scale-100`
    }

    switch (direction) {
      case 'up':
        return `${baseStyle} opacity-0 translate-y-12`
      case 'down':
        return `${baseStyle} opacity-0 -translate-y-12`
      case 'left':
        return `${baseStyle} opacity-0 translate-x-12`
      case 'right':
        return `${baseStyle} opacity-0 -translate-x-12`
      case 'scale':
        return `${baseStyle} opacity-0 scale-90`
      case 'fade':
      default:
        return `${baseStyle} opacity-0`
    }
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={getTransformStyles(index)}
        >
          {child}
        </div>
      ))}
    </div>
  )
}