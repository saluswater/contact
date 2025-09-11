'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MessageCircle, Clock, Users, Shield } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { AnimatedReveal, StaggeredReveal } from '@/components/AnimatedReveal'

const stats = [
  {
    icon: Users,
    number: '4,000+',
    labelKey: 'conversion.customers'
  },
  {
    icon: Shield,
    number: '99.9%',
    labelKey: 'conversion.purity'
  },
  {
    icon: Clock,
    number: '24/7',
    labelKey: 'conversion.support'
  }
]

export function ConversionSection() {
  const pathname = usePathname()
  const { t, getWhatsAppNumber } = useLanguage()
  
  const route = pathname === '/' ? 'hair' : pathname.replace(/^\/+|\/+$/g, '')

  const getWhatsAppMessage = () => {
    return t(`whatsapp.${pathname === '/' ? 'home' : pathname.replace(/^\/+|\/+$/g, '')}`)
  }

  const getContent = () => {
    return {
      headline: t(`conversion.${route}.headline`),
      cta: t(`conversion.${route}.cta`)
    }
  }

  const content = getContent()

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden border-t border-blue-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedReveal direction="up" delay={200} duration={800}>
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              {content.headline}
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('conversion.subtitle')}
            </p>
          </div>
        </AnimatedReveal>

        {/* CTA Button */}
        <AnimatedReveal direction="scale" delay={800} duration={400} className="flex items-center justify-center mb-16">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white min-h-[56px] px-10 py-4 text-lg font-semibold hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 ease-out"
            asChild
          >
            <a
              href={`https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(getWhatsAppMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Quero água de qualidade
            </a>
          </Button>
        </AnimatedReveal>

        {/* Footer Content */}
        <AnimatedReveal direction="up" delay={1000} duration={400}>
          <div className="text-center border-t border-blue-400/30 pt-8">
            <div className="text-blue-100 text-sm">
              {t('footer.rights')}
            </div>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  )
}