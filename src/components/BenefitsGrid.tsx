'use client'

import { usePathname } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Heart, Shield, Zap, Droplets, Leaf } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { AnimatedReveal, StaggeredReveal } from '@/components/AnimatedReveal'

const benefitsConfig = {
  '/hair': [
    {
      icon: Sparkles,
      titleKey: 'benefits.hair.shine.title',
      descKey: 'benefits.hair.shine.desc'
    },
    {
      icon: Heart,
      titleKey: 'benefits.hair.roots.title',
      descKey: 'benefits.hair.roots.desc'
    },
    {
      icon: Shield,
      titleKey: 'benefits.hair.breakage.title',
      descKey: 'benefits.hair.breakage.desc'
    },
    {
      icon: Zap,
      titleKey: 'benefits.hair.growth.title',
      descKey: 'benefits.hair.growth.desc'
    },
    {
      icon: Droplets,
      titleKey: 'benefits.hair.hydration.title',
      descKey: 'benefits.hair.hydration.desc'
    },
    {
      icon: Leaf,
      titleKey: 'benefits.hair.volume.title',
      descKey: 'benefits.hair.volume.desc'
    }
  ],
  '/skin': [
    {
      icon: Sparkles,
      titleKey: 'benefits.skin.glow.title',
      descKey: 'benefits.skin.glow.desc'
    },
    {
      icon: Heart,
      titleKey: 'benefits.skin.antiaging.title',
      descKey: 'benefits.skin.antiaging.desc'
    },
    {
      icon: Shield,
      titleKey: 'benefits.skin.inflammation.title',
      descKey: 'benefits.skin.inflammation.desc'
    },
    {
      icon: Zap,
      titleKey: 'benefits.skin.healing.title',
      descKey: 'benefits.skin.healing.desc'
    },
    {
      icon: Droplets,
      titleKey: 'benefits.skin.moisture.title',
      descKey: 'benefits.skin.moisture.desc'
    },
    {
      icon: Leaf,
      titleKey: 'benefits.skin.complexion.title',
      descKey: 'benefits.skin.complexion.desc'
    }
  ],
  '/kidneys': [
    {
      icon: Sparkles,
      titleKey: 'benefits.kidneys.filtration.title',
      descKey: 'benefits.kidneys.filtration.desc'
    },
    {
      icon: Heart,
      titleKey: 'benefits.kidneys.stones.title',
      descKey: 'benefits.kidneys.stones.desc'
    },
    {
      icon: Shield,
      titleKey: 'benefits.kidneys.protection.title',
      descKey: 'benefits.kidneys.protection.desc'
    },
    {
      icon: Zap,
      titleKey: 'benefits.kidneys.flow.title',
      descKey: 'benefits.kidneys.flow.desc'
    },
    {
      icon: Droplets,
      titleKey: 'benefits.kidneys.hydration.title',
      descKey: 'benefits.kidneys.hydration.desc'
    },
    {
      icon: Leaf,
      titleKey: 'benefits.kidneys.cleansing.title',
      descKey: 'benefits.kidneys.cleansing.desc'
    }
  ],
  '/cancer': [
    {
      icon: Sparkles,
      titleKey: 'benefits.cancer.alkaline.title',
      descKey: 'benefits.cancer.alkaline.desc'
    },
    {
      icon: Heart,
      titleKey: 'benefits.cancer.antioxidant.title',
      descKey: 'benefits.cancer.antioxidant.desc'
    },
    {
      icon: Shield,
      titleKey: 'benefits.cancer.immune.title',
      descKey: 'benefits.cancer.immune.desc'
    },
    {
      icon: Zap,
      titleKey: 'benefits.cancer.energy.title',
      descKey: 'benefits.cancer.energy.desc'
    },
    {
      icon: Droplets,
      titleKey: 'benefits.cancer.detox.title',
      descKey: 'benefits.cancer.detox.desc'
    },
    {
      icon: Leaf,
      titleKey: 'benefits.cancer.dna.title',
      descKey: 'benefits.cancer.dna.desc'
    }
  ]
}

export function BenefitsGrid() {
  const pathname = usePathname()
  const { t } = useLanguage()
  
  const route = pathname === '/' ? 'hair' : pathname.replace(/^\/+|\/+$/g, '')
  const benefits = benefitsConfig[pathname as keyof typeof benefitsConfig] || benefitsConfig['/hair']

  return (
    <section className="py-16 md:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedReveal direction="up" delay={200}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              {t(`benefits.${route}.title`)}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('benefits.subtitle')}
            </p>
          </div>
        </AnimatedReveal>

        <StaggeredReveal
          staggerDelay={150}
          direction="up"
          duration={700}
          className="grid grid-cols-1 sm:grid-cols-2 min-[990px]:grid-cols-3 gap-6 max-[989px]:max-w-md max-[989px]:mx-auto"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card 
                key={index} 
                className="
                  relative group overflow-hidden
                  hover:shadow-2xl hover:-translate-y-1 
                  transition-all duration-700 ease-out
                  border-2 border-blue-100 hover:border-blue-200
                  bg-white/90 hover:bg-white
                  backdrop-blur-sm
                  h-[180px] sm:h-[200px] md:h-[220px] min-[990px]:h-[200px] xl:h-[220px]
                  max-[989px]:w-full max-[989px]:max-w-[400px]
                  flex flex-col
                "
              >
                <CardContent className="p-4 md:p-6 flex-1 flex">
                  <div className="flex items-start space-x-4 w-full">
                    {/* Icon Section */}
                    <div className="
                      w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 
                      rounded-xl flex items-center justify-center flex-shrink-0
                      group-hover:scale-110 group-hover:from-blue-200 group-hover:to-blue-300
                      transition-all duration-500 ease-out
                      shadow-md group-hover:shadow-lg
                    ">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col justify-center space-y-2">
                      <h3 className="
                        text-base md:text-lg font-semibold text-gray-900 
                        group-hover:text-blue-700 
                        transition-colors duration-300
                        leading-tight
                        line-clamp-2
                      ">
                        {t(benefit.titleKey)}
                      </h3>
                      <p className="
                        text-sm md:text-base text-gray-600 
                        group-hover:text-gray-700 
                        transition-colors duration-300
                        leading-relaxed
                        line-clamp-3
                      ">
                        {t(benefit.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Subtle left accent */}
                  <div className="
                    absolute left-0 top-0 bottom-0 w-1 
                    bg-gradient-to-b from-transparent via-blue-500 to-transparent 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500
                  " />
                </CardContent>
              </Card>
            )
          })}
        </StaggeredReveal>
      </div>
    </section>
  )
}