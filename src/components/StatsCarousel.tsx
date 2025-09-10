'use client'

import React, { useEffect, useState } from 'react'
import { DollarSign, Users, Shield } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'

// Animated Counter
function AnimatedCounter({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '' 
}: { 
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOutCubic * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsCarousel() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const stats = [
    {
      icon: DollarSign,
      value: 600000,
      prefix: '+$',
      suffix: '',
      label: t('stats.savings.label'),
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Users,
      value: 4000,
      prefix: '+',
      suffix: '',
      label: t('stats.families.label'),
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Shield,
      value: 99,
      prefix: '',
      suffix: '.9%',
      label: t('stats.approval.label'),
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    }
  ]

  // Certifications for desktop display
  const certifications = [
    { src: getAssetPath('/fau.webp'), alt: t('stats.cert.fau') },
    { src: getAssetPath('/ip54.webp'), alt: t('stats.cert.ip54') },
    { src: getAssetPath('/ip55.webp'), alt: t('stats.cert.ip55') },
    { src: getAssetPath('/nsf.webp'), alt: t('stats.cert.nsf') }
  ]

  // Combined carousel items: stats + certifications
  const allCarouselItems = [
    ...stats,
    ...certifications.map(cert => ({
      type: 'certification',
      src: cert.src,
      alt: cert.alt,
      label: cert.alt
    }))
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allCarouselItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [allCarouselItems.length])

  const currentItem = allCarouselItems[currentIndex]
  const currentStat = stats[currentIndex % stats.length]
  const Icon = currentStat?.icon

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-blue-500 via-blue-400 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Mobile: Full Carousel (stats + certifications) - Below 990px */}
        <div className="block min-[990px]:hidden">
          <div className="flex items-center justify-center">
            <div className="text-center max-w-sm transition-all duration-500 h-[200px] flex flex-col justify-center">
              {('type' in currentItem && currentItem.type === 'certification') ? (
                <>
                  {/* Single Certification Logo - Fixed Height Container */}
                  <div className="h-[120px] flex items-center justify-center mb-4">
                    <Image
                      src={'src' in currentItem ? currentItem.src : ''}
                      alt={'alt' in currentItem ? currentItem.alt : ''}
                      width={120}
                      height={120}
                      className="w-[120px] h-[120px] object-contain opacity-100"
                    />
                  </div>
                  
                  {/* Label - Fixed Height */}
                  <div className="h-[56px] flex items-center justify-center">
                    <p className="text-sm font-medium text-white/90 text-center leading-tight px-4">
                      {currentItem.label}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Icon + Stats Container - Fixed Height to match image */}
                  <div className="h-[120px] flex flex-col items-center justify-center mb-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${'bg' in currentItem ? currentItem.bg : 'bg-gray-50'} flex items-center justify-center transition-all duration-500`}>
                      {Icon && <Icon className={`w-6 h-6 ${'color' in currentItem ? currentItem.color : 'text-gray-600'}`} />}
                    </div>

                    {/* Animated Number */}
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      <AnimatedCounter 
                        end={'value' in currentItem ? currentItem.value || 0 : 0}
                        prefix={'prefix' in currentItem ? currentItem.prefix || '' : ''}
                        suffix={'suffix' in currentItem ? currentItem.suffix || '' : ''}
                        duration={1500}
                      />
                    </div>
                  </div>

                  {/* Label - Fixed Height */}
                  <div className="h-[56px] flex items-center justify-center">
                    <p className="text-sm font-medium text-white/90 text-center leading-tight px-4">
                      {currentItem.label}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {allCarouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-6 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>


        {/* Desktop: Stats center + all 4 certifications split left/right - MODELO FUNCIONANDO DESKTOP COM RESPONSIVIDADE */}
        <div className="hidden min-[990px]:block">
          <div className="w-full max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-center w-full">
              <div 
                className="grid items-center justify-items-center"
                style={{ 
                  gridTemplateColumns: 'clamp(120px, 15vw, 200px) clamp(120px, 15vw, 200px) clamp(280px, 25vw, 320px) clamp(120px, 15vw, 200px) clamp(120px, 15vw, 200px)', 
                  gap: 'clamp(1.5rem, 4vw, 3rem)', 
                  maxWidth: '1300px'
                }}
              >
              {/* Left Certifications */}
              <div className="flex justify-center" style={{ padding: 'clamp(1rem, 2vw, 2rem)' }}>
                <Image
                  src={getAssetPath("/fau.webp")}
                  alt={t('stats.cert.fau')}
                  width={200}
                  height={200}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                  priority
                  style={{
                    width: 'clamp(110px, 12vw, 170px)',
                    height: 'clamp(110px, 12vw, 170px)'
                  }}
                />
              </div>
              
              <div className="flex justify-center" style={{ padding: 'clamp(1rem, 2vw, 2rem)' }}>
                <Image
                  src={getAssetPath("/ip54.webp")}
                  alt={t('stats.cert.ip54')}
                  width={200}
                  height={200}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                  priority
                  style={{
                    width: 'clamp(110px, 12vw, 170px)',
                    height: 'clamp(110px, 12vw, 170px)'
                  }}
                />
              </div>

              {/* Center Stats - Perfectly centered */}
              <div className="flex justify-center items-center" style={{ padding: 'clamp(1rem, 2vw, 2rem)' }}>
                <div className="text-center flex flex-col justify-center py-8">
                  {/* Icon - Fixed size */}
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-lg ${currentStat.bg} flex items-center justify-center transition-colors duration-300`}>
                      {Icon && <Icon className={`w-6 h-6 ${currentStat.color}`} />}
                    </div>
                  </div>

                  {/* Animated Number - Fixed container */}
                  <div className="mb-2 h-12 flex items-center justify-center">
                    <div className="text-2xl md:text-3xl font-bold text-white font-mono">
                      <AnimatedCounter 
                        end={currentStat.value || 0}
                        prefix={currentStat.prefix || ''}
                        suffix={currentStat.suffix || ''}
                        duration={1500}
                      />
                    </div>
                  </div>

                  {/* Label - Fixed height */}
                  <div className="h-12 flex items-center justify-center">
                    <p className="text-sm md:text-base font-medium text-white/90 text-center leading-tight">
                      {currentStat.label}
                    </p>
                  </div>

                  {/* Stats Dots Indicator */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {stats.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-white w-6 shadow-lg' 
                            : 'bg-white/50 hover:bg-white/70 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Certifications */}
              <div className="flex justify-center" style={{ padding: 'clamp(1rem, 2vw, 2rem)' }}>
                <Image
                  src={getAssetPath("/ip55.webp")}
                  alt={t('stats.cert.ip55')}
                  width={200}
                  height={200}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                  priority
                  style={{
                    width: 'clamp(110px, 12vw, 170px)',
                    height: 'clamp(110px, 12vw, 170px)'
                  }}
                />
              </div>
              
              <div className="flex justify-center" style={{ padding: 'clamp(1rem, 2vw, 2rem)' }}>
                <Image
                  src={getAssetPath("/nsf.webp")}
                  alt={t('stats.cert.nsf')}
                  width={200}
                  height={200}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                  priority
                  style={{
                    width: 'clamp(110px, 12vw, 170px)',
                    height: 'clamp(110px, 12vw, 170px)'
                  }}
                />
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}