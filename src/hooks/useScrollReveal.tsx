'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  staggerChildren?: number
  delay?: number
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce, delay])

  return { ref, isVisible }
}

export function useStaggeredReveal(itemCount: number, staggerDelay: number = 100) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  useEffect(() => {
    if (isVisible) {
      const timeouts: NodeJS.Timeout[] = []
      
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => [...prev, i])
        }, i * staggerDelay)
        
        timeouts.push(timeout)
      }

      return () => {
        timeouts.forEach(clearTimeout)
      }
    }
  }, [isVisible, itemCount, staggerDelay])

  const isItemVisible = (index: number) => visibleItems.includes(index)

  return { ref, isVisible, isItemVisible, visibleItems }
}