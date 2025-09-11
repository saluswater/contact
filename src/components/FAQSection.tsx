'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/contexts/LanguageContext'
import { AnimatedReveal, StaggeredReveal } from '@/components/AnimatedReveal'

export function FAQSection() {
  const { t } = useLanguage()
  
  const faqs = [
    { questionKey: 'faq.q1', answerKey: 'faq.a1' },
    { questionKey: 'faq.q2', answerKey: 'faq.a2' },
    { questionKey: 'faq.q3', answerKey: 'faq.a3' },
    { questionKey: 'faq.q4', answerKey: 'faq.a4' },
    { questionKey: 'faq.q5', answerKey: 'faq.a5' },
    { questionKey: 'faq.q6', answerKey: 'faq.a6' },
    { questionKey: 'faq.q7', answerKey: 'faq.a7' },
    { questionKey: 'faq.q8', answerKey: 'faq.a8' },
  ]

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <AnimatedReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('faq.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('faq.subtitle')}
            </p>
          </div>
        </AnimatedReveal>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            <StaggeredReveal
              staggerDelay={150}
              direction="up"
              duration={600}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-blue-100 rounded-lg px-6 bg-blue-50/30 hover:bg-blue-50/50 hover:shadow-md transition-all duration-300 hover:border-blue-200 data-[state=open]:bg-blue-50/50 data-[state=open]:border-blue-200 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 hover:no-underline text-lg transition-colors duration-200 data-[state=open]:text-blue-600">
                    {t(faq.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-base">
                    {t(faq.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </StaggeredReveal>
          </Accordion>
        </div>
      </div>
    </section>
  )
}