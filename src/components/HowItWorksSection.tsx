'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Filter, Droplets, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { AnimatedReveal, StaggeredReveal } from '@/components/AnimatedReveal'

const steps = [
  {
    icon: Filter,
    titleKey: 'how.step1.title',
    descKey: 'how.step1.desc',
  },
  {
    icon: Droplets,
    titleKey: 'how.step2.title',
    descKey: 'how.step2.desc',
  },
  {
    icon: CheckCircle,
    titleKey: 'how.step3.title',
    descKey: 'how.step3.desc',
  },
]

export function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20 xl:py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedReveal direction="up" delay={200}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {t('how.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('how.subtitle')}
            </p>
          </div>
        </AnimatedReveal>

        <StaggeredReveal 
          staggerDelay={200} 
          direction="up" 
          duration={800}
          className="grid grid-cols-1 min-[990px]:grid-cols-3 gap-8 max-[989px]:max-w-sm max-[989px]:mx-auto"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card 
                key={index} 
                className="
                  relative text-center group overflow-hidden
                  hover:shadow-2xl hover:-translate-y-1 
                  transition-all duration-700 ease-out
                  border-2 border-blue-100 hover:border-blue-200
                  bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60
                  backdrop-blur-sm
                  h-[380px] sm:h-[400px] md:h-[420px] min-[990px]:h-[480px] xl:h-[500px]
                  max-[989px]:w-full max-[989px]:aspect-square max-[989px]:max-w-[380px]
                  flex flex-col
                "
              >
                <CardContent className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                  {/* Icon Section */}
                  <div className="relative mb-6">
                    <div className="
                      w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 
                      rounded-full flex items-center justify-center mx-auto mb-4
                      group-hover:scale-110 group-hover:from-blue-200 group-hover:to-blue-300
                      transition-all duration-500 ease-out
                      shadow-lg group-hover:shadow-xl
                    ">
                      <Icon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>
                    <div className="
                      absolute -top-2 -right-2 
                      w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 
                      text-white rounded-full flex items-center justify-center 
                      text-lg font-bold shadow-lg
                      group-hover:from-blue-700 group-hover:to-blue-800 
                      group-hover:scale-110
                      transition-all duration-300
                    ">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col justify-center space-y-3">
                    <h3 className="
                      text-lg md:text-xl font-bold text-gray-900 
                      group-hover:text-blue-700 
                      transition-colors duration-300
                      leading-tight
                      line-clamp-2
                    ">
                      {t(step.titleKey)}
                    </h3>
                    <p className="
                      text-sm md:text-base text-gray-600 
                      group-hover:text-gray-700 
                      transition-colors duration-300
                      leading-relaxed
                      px-2
                      line-clamp-4
                    ">
                      {t(step.descKey)}
                    </p>
                  </div>

                  {/* Subtle bottom accent */}
                  <div className="
                    absolute bottom-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-transparent via-blue-500 to-transparent 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500
                  " />
                </CardContent>
              </Card>
            )
          })}
        </StaggeredReveal>

        {/* Connection Lines - Only on desktop */}
        <AnimatedReveal 
          direction="fade" 
          delay={1000} 
          className="hidden min-[990px]:flex items-center justify-center mt-12 space-x-8"
        >
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 relative rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 animate-pulse opacity-60 rounded-full" />
            </div>
          ))}
        </AnimatedReveal>
      </div>
    </section>
  )
}