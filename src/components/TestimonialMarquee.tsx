'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Star, Plus } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getAssetPath } from '@/lib/assets'
import { AnimatedReveal } from '@/components/AnimatedReveal'

const testimonials = [
  {
    name: 'Cintia Menochelli',
    quote: 'I loved everything about my experience with Salus Water Filters! Their customer service was outstanding - so attentive and professional. The quality of the water has improved drastically; it tastes amazing and feels so much cleaner. I am truly impressed and highly recommend their work to anyone looking for a reliable water filtration solution.',
    initials: 'CM'
  },
  {
    name: 'Raimundo Silva',
    quote: 'Pele e cabelo estao completamente diferentes apos a instalacao do filtro. Super recomendo!',
    initials: 'RS'
  },
  {
    name: 'Dan Chappell',
    quote: 'We love the our water filter system. It is very easy to maintain and provides great tasting and chemical free water to the entire house. Their service is five star quality! Highly recommend!',
    initials: 'DC'
  },
  {
    name: 'Luciana Longhi',
    quote: 'I recently had the Salus Team test the water in my home, and at first, I was alarmed to learn about all the chemicals present in the water my family uses daily. However, I am so glad I decided to make the change and purchase their filter. Knowing our water is now safer brings me so much peace of mind. Thank you Joao and Mateus for the excellent customer service!',
    initials: 'LL'
  },
  {
    name: 'Michael Meirelles',
    quote: 'Excelente sistema de filtragem de agua! Comprei para minha casa e estou extremamente satisfeito com a qualidade da agua. Desde a instalacao, notei uma grande diferenca no sabor e na pureza. A agua ficou muito mais leve e sem nenhum gosto estranho. A instalacao foi rapida, e o sistema tem se mostrado eficiente no dia a dia. Alem disso, o atendimento ao cliente e rapido e me ajudou com todas as duvidas que tive. Se voce esta procurando um filtro de agua confiavel e de alta qualidade, recomendo! Vale cada centavo investido.',
    initials: 'MM'
  },
  {
    name: 'Juliana Nishiyama',
    quote: 'Melhor investimento da vida foi esse, agora podemos tomar agua de qualidade! Depois que descobri o cancer de mama, comecamos a mudar a alimentacao e muitas outras coisas foi onde percebemos que a agua tinha grande influencia nessa doenca, decidimos colocar esse investimento como prioridade! So tenho a agradecer extremamente satisfeita!',
    initials: 'JN'
  },
  {
    name: 'Rogerio Fornari',
    quote: 'I could not be happier. Dalys team delivered all that they promised during the sales process. The post-sales customer service is just out of this world. I would highly recommend Salus if you are thinking on having a water system installed.',
    initials: 'RF'
  },
  {
    name: 'Mauro Miyake',
    quote: 'Great solution, easy to maintain and understand the operation. Great customer care, clear communication!',
    initials: 'MM'
  },
  {
    name: 'Eric Vaz de Lima',
    quote: 'Simplesmente o melhor sistema de filtragem de agua, sem contar o atendimento e o cuidado em manter a qualidade, mesmo apos a instalacao. Sem duvida, vale cada centavo do investimento.',
    initials: 'EL'
  },
  {
    name: 'Dr. Marco Lucio Ferreira',
    quote: 'Fantastico! Desde a venda, passando pela instalacao e a atencao do pos venda.',
    initials: 'MF'
  },
  {
    name: 'Christian Figueroa',
    quote: '100% recommended. The quality of water throughout our house is by far the best we have done for our well-being. The attention of this company is unbeatable. Thank you.',
    initials: 'CF'
  },
  {
    name: 'Carlos Magno',
    quote: 'Sao extremamente atenciosos! Tive a melhor experiencia possivel, fico feliz de ter uma agua de qualidade na minha residencia e a tranquilidade de ter um excelente atendimento.',
    initials: 'CM'
  }
]

// Duplicate testimonials for seamless loop
const topRowTestimonials = [...testimonials, ...testimonials]
const bottomRowTestimonials = [...testimonials.reverse(), ...testimonials]

function TestimonialDialogContent({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-blue-100 text-blue-600">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <DialogTitle className="text-left">
              <span className="font-semibold text-gray-900">{testimonial.name}</span>
            </DialogTitle>
          </div>
        </div>
      </DialogHeader>
      <div className="pt-4">
        <p className="text-gray-700 leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </DialogContent>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  // Limit characters to fit properly in 6 lines with ellipsis
  const maxLength = 120
  const isLongText = testimonial.quote.length > maxLength
  const truncatedText = isLongText 
    ? testimonial.quote.substring(0, maxLength).trim() + '...'
    : testimonial.quote

  return (
    <Dialog>
      <Card className="flex-shrink-0 w-80 h-48 mx-2 bg-white hover:-translate-y-1 transition-all duration-200 ease-out relative overflow-hidden border border-gray-200">
        <CardContent className="pt-0 px-4 pb-3 flex flex-col">
          <div className="flex items-start space-x-3 mb-2">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className="bg-blue-100 text-blue-600 text-[10px] font-semibold">
                {testimonial.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex space-x-1 pb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-gray-900 text-[10px] truncate">{testimonial.name}</p>
            </div>
          </div>
          
          <div className="flex-1 pr-10">
            <p className="text-gray-700 text-[11px] leading-[1.4]">
              &ldquo;{truncatedText}&rdquo;
            </p>
          </div>
          
          {isLongText && (
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="absolute bottom-3 right-3 min-w-[32px] min-h-[32px] w-8 h-8 p-0 rounded-full bg-blue-100 hover:bg-blue-200 hover:scale-110 active:scale-95 text-blue-600 transition-all duration-200 ease-out"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </DialogTrigger>
          )}
        </CardContent>
      </Card>
      
      <TestimonialDialogContent testimonial={testimonial} />
    </Dialog>
  )
}

export function TestimonialMarquee() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <AnimatedReveal direction="fade" delay={200} className="flex justify-center mb-6 pb-4">
            <Image
              src={getAssetPath("/5starsgoogle.webp")}
              alt="5 Stars Google Reviews"
              width={500}
              height={250}
              className="object-contain w-56 h-auto sm:w-64 md:w-72 lg:w-80"
            />
          </AnimatedReveal>
          
          <AnimatedReveal direction="up" delay={400}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="underline decoration-emerald-500 decoration-4 underline-offset-4">
                {t('testimonials.title')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('testimonials.subtitle')}
            </p>
          </AnimatedReveal>
        </div>
      </div>

      {/* Testimonial Marquee */}
      <div className="space-y-4">
        {/* Top Row - Moving Left */}
        <div className="relative">
          <div className="flex animate-marquee-left">
            {topRowTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="relative">
          <div className="flex animate-marquee-right">
            {bottomRowTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}