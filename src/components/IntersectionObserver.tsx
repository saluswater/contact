'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface IntersectionObserverProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export function IntersectionObserver({ 
  children, 
  className = '', 
  threshold = 0.1, 
  rootMargin = '0px 0px -50px 0px' 
}: IntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}