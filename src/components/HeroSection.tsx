'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'

export function HeroSection() {
  const pathname = usePathname()
  const { t, getWhatsAppNumber } = useLanguage()

  const getHeroContent = () => {
    const route = pathname === '/' ? 'hair' : pathname.replace('/', '')
    return {
      headline: t(`hero.${route}.headline`),
      subtitle: t(`hero.${route}.subtitle`)
    }
  }

  const getRouteColors = () => {
    const route = pathname === '/' ? 'hair' : pathname.replace('/', '')
    
    const colorMap = {
      hair: {
        bg: '#FFFFFF',
        text: '#5C2F23'
      },
      skin: {
        bg: '#131217',
        text: '#FF7071'
      },
      kidneys: {
        bg: '#554744',
        text: '#FF9F2B'
      },
      cancer: {
        bg: '#2B4958',
        text: '#FFFFFF'
      }
    }
    
    return colorMap[route as keyof typeof colorMap] || colorMap.hair
  }

  const getWhatsAppMessage = () => {
    const route = pathname === '/' ? 'home' : pathname.replace('/', '')
    return t(`whatsapp.${route}`)
  }

  const getHeroImage = () => {
    const route = pathname === '/' ? 'hair' : pathname.replace('/', '')
    const imageMap = {
      hair: getAssetPath('/hair-hero.webp'),
      skin: getAssetPath('/skin-hero.webp'),
      kidneys: getAssetPath('/kidneys-hero.webp'),
      cancer: getAssetPath('/cancer-hero.webp')
    }
    return imageMap[route as keyof typeof imageMap] || imageMap.hair
  }

  const content = getHeroContent()
  const colors = getRouteColors()

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Clean background without particles */}
      
      {/* Mobile Hero Image Background */}
      <div className="lg:hidden absolute inset-0 z-5">
        <Image
          src={getHeroImage()}
          alt={`Salus Water ${pathname === '/' ? 'hair' : pathname.replace('/', '')} benefits`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Strong overlay for text readability on mobile */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(135deg, ${colors.bg}95 0%, ${colors.bg}80 50%, ${colors.bg}90 100%)` 
          }}
        />
      </div>
      
      {/* Fallback gradient background */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{ backgroundColor: colors.bg }}
      />
      
      {/* Content Overlay */}
      <div className="hero-content-overlay w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
          {/* Left Column - Text Content */}
          <div className="flex items-center justify-center px-4 container mx-auto lg:mx-0 lg:pl-8 xl:pl-16 relative z-30">
            <div className="max-w-2xl">
              <h1 
                className="text-[60px] md:text-6xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6"
                style={{ color: colors.text }}
              >
                {content.headline}
              </h1>
              <p 
                className="text-xl md:text-2xl mb-8 leading-relaxed font-semibold"
                style={{ color: colors.text }}
              >
                {content.subtitle}
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white min-h-[56px] min-w-[280px] px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-green-500/25 hover:scale-105 active:scale-95 transition-all duration-300 ease-out rounded-xl border-2 border-green-500"
                asChild
              >
                <a
                  href={`https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('hero.cta')}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image Background (Desktop) */}
          <div className="hidden lg:block relative min-h-screen">
            <Image
              src={getHeroImage()}
              alt={`Salus Water ${pathname === '/' ? 'hair' : pathname.replace('/', '')} benefits`}
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
            {/* Gradient overlay for better text integration */}
            <div 
              className="absolute inset-0 z-10"
              style={{ 
                background: `linear-gradient(90deg, ${colors.bg}80 0%, ${colors.bg}20 50%, transparent 100%)` 
              }}
            />
          </div>
        </div>
      </div>

      {/* Optional subtle overlay for better text readability */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{ 
          background: `linear-gradient(to top, ${colors.bg}10 0%, transparent 50%, transparent 100%)` 
        }}
      />

      {/* Waves Effect */}
      <div className="hero-waves absolute bottom-0 left-0 right-0 z-30">
        <svg 
          className="relative w-full h-[15vh] min-h-[100px] max-h-[150px] -mb-2" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" 
          preserveAspectRatio="none" 
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax-waves">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(37, 99, 235, 0.3)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(37, 99, 235, 0.4)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(37, 99, 235, 0.6)" />
            <use href="#gentle-wave" x="48" y="7" fill="rgb(59, 130, 246)" />
          </g>
        </svg>
      </div>
    </section>
  )
}