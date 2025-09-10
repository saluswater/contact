'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  getWhatsAppNumber: () => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('pt')

  useEffect(() => {
    // Check URL for language parameter
    const urlParams = new URLSearchParams(window.location.search)
    const urlLang = urlParams.get('lang') as Language
    
    if (urlLang && ['en', 'pt'].includes(urlLang)) {
      setLanguage(urlLang)
    } else {
      // Check for saved language preference
      const savedLanguage = localStorage.getItem('language') as Language
      if (savedLanguage && ['en', 'pt'].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      } else {
        // Default to Portuguese
        setLanguage('pt')
      }
    }
  }, [])

  useEffect(() => {
    // Save language preference and update URL
    localStorage.setItem('language', language)
    
    // Update URL with language parameter
    const url = new URL(window.location.href)
    if (language === 'pt') {
      url.searchParams.delete('lang') // Remove lang param for Portuguese (default)
    } else {
      url.searchParams.set('lang', language)
    }
    
    // Update URL without page reload
    window.history.replaceState({}, '', url.toString())
  }, [language])

  const t = (key: string): string => {
    return (translations[language] as any)[key] || (translations['en'] as any)[key] || key
  }

  const getWhatsAppNumber = (): string => {
    return language === 'pt' ? '14078814629' : '14078207276'
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getWhatsAppNumber }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations = {
  en: {
    // Navbar
    'nav.hair': 'Hair',
    'nav.hair.title': 'Hair Problems',
    'nav.hair.desc': 'Brittle, lifeless and dry hair',
    'nav.skin': 'Skin',
    'nav.skin.title': 'Skin Problems', 
    'nav.skin.desc': 'Dry, irritated and inflamed skin',
    'nav.kidneys': 'Kidneys',
    'nav.kidneys.title': 'Kidney Problems',
    'nav.kidneys.desc': 'Protection and care for kidney health',
    'nav.cancer': 'Cancer',
    'nav.cancer.title': 'Cancer Prevention',
    'nav.cancer.desc': 'Prevention through alkaline water',
    'nav.whatsapp': 'WhatsApp',
    'nav.contact': 'Contact us',
    'nav.phone': '+1 (407) 820-7276',
    
    // Hero Section
    'hero.hair.headline': 'HEALTHY HAIR STARTS WITH PURE WATER.',
    'hero.hair.subtitle': 'Stop hair loss with alkaline water that strengthens follicles and promotes healthy growth. Experience thicker, more resilient hair in just 30 days.',
    'hero.skin.headline': 'DRY AND IRRITATED SKIN? YOUR TAP IS TO BLAME.',
    'hero.skin.subtitle': 'Unlock your natural glow with pH-balanced water that hydrates deeply and fights inflammation from the inside out.',
    'hero.kidneys.headline': 'PROTECT YOUR KIDNEYS, NATURALLY.',
    'hero.kidneys.subtitle': 'Support kidney function and prevent stone formation with mineral-rich alkaline water that cleanses and protects.',
    'hero.cancer.headline': 'PREVENTION STARTS WITH ALKALINE WATER.',
    'hero.cancer.subtitle': 'Create an alkaline environment in your body that supports optimal cellular health and natural disease resistance.',
    'hero.cta': 'Get in touch',
    
    // Testimonials
    'testimonials.title': 'Lives impacted by quality water',
    'testimonials.subtitle': 'Discover the real transformation our solution brings to your home.',
    
    // How It Works
    'how.title': 'The Salus Water solution',
    'how.subtitle': 'Our three-step purification and alkalinization process ensures you get the purest, healthiest water possible',
    'how.step1.title': 'Advanced filtration',
    'how.step1.desc': 'Our advanced multi-stage filtration system efficiently removes harmful contaminants, chlorine, and heavy metals while carefully preserving essential minerals for optimal health.',
    'how.step2.title': 'Alkalinization',
    'how.step2.desc': 'Our alkalinization process precisely raises pH levels to 8.5-9.5, creating the optimal alkaline environment for enhanced cellular health and vitality.',
    'how.step3.title': 'Premium lifetime support',
    'how.step3.desc': 'Exclusive Florida differentiator: priority service with maximum urgency, always putting you first with specialized technical support.',
    
    // Benefits
    'benefits.hair.title': 'Hair benefits',
    'benefits.skin.title': 'Skin benefits',
    'benefits.kidneys.title': 'Kidney benefits',
    'benefits.cancer.title': 'Wellness support benefits',
    'benefits.subtitle': 'Discover the scientifically proven benefits of alkaline water for your specific health goals',
    
    // Hair Benefits
    'benefits.hair.shine.title': 'Natural shine & cleanliness',
    'benefits.hair.shine.desc': 'Controlled pH water removes harmful mineral buildup that leaves hair dull and lifeless, revealing natural luster.',
    'benefits.hair.roots.title': 'Follicle strengthening',
    'benefits.hair.roots.desc': 'Enhanced cellular hydration nourishes and strengthens hair follicles, reducing breakage from the root.',
    'benefits.hair.breakage.title': 'Damage protection',
    'benefits.hair.breakage.desc': 'Balanced mineral content maintains healthy cuticles and reduces fragility and split ends.',
    'benefits.hair.growth.title': 'Scalp circulation',
    'benefits.hair.growth.desc': 'Balanced minerals promote healthy scalp circulation, supporting more efficient hair growth.',
    'benefits.hair.hydration.title': 'Deep penetration',
    'benefits.hair.hydration.desc': 'Ionized water with smaller molecules facilitates penetration and prolonged moisture retention.',
    'benefits.hair.volume.title': 'Healthy scalp environment',
    'benefits.hair.volume.desc': 'Pure water maintains scalp health, preventing irritation and dryness that can weaken hair.',
    
    // Skin Benefits
    'benefits.skin.glow.title': 'pH balance & protection',
    'benefits.skin.glow.desc': 'Supports healthy acid-base balance, strengthening skin\'s natural protective barrier and reducing sensitivity.',
    'benefits.skin.antiaging.title': 'Antioxidant defense',
    'benefits.skin.antiaging.desc': 'Rich antioxidants neutralize free radicals responsible for premature aging and skin inflammation.',
    'benefits.skin.inflammation.title': 'Anti-inflammatory relief',
    'benefits.skin.inflammation.desc': 'Antioxidant properties help calm irritations, accelerate healing and reduce redness from allergies.',
    'benefits.skin.healing.title': 'Enhanced cellular hydration',
    'benefits.skin.healing.desc': 'Superior cellular absorption promotes deep hydration, maintaining soft and elastic skin.',
    'benefits.skin.moisture.title': 'Deep lasting hydration',
    'benefits.skin.moisture.desc': 'Easily absorbed by cells, preventing dryness and flaking in deeper skin layers.',
    'benefits.skin.complexion.title': 'Detox & clarity',
    'benefits.skin.complexion.desc': 'Efficient toxin elimination contributes to clearer, healthier skin and reduced breakouts.',
    
    // Kidney Benefits
    'benefits.kidneys.filtration.title': 'Enhanced filtration function',
    'benefits.kidneys.filtration.desc': 'Supports kidney function by facilitating metabolic waste filtration and elimination, maintaining body balance.',
    'benefits.kidneys.stones.title': 'Stone formation prevention',
    'benefits.kidneys.stones.desc': 'Alkalinizes urine pH, reducing calcium oxalate crystal formation and lowering kidney stone risk.',
    'benefits.kidneys.protection.title': 'Toxin elimination support',
    'benefits.kidneys.protection.desc': 'Quality hydration facilitates renal elimination of environmental and metabolic toxins, protecting kidney tissues.',
    'benefits.kidneys.flow.title': 'Improved renal circulation',
    'benefits.kidneys.flow.desc': 'Better cellular hydration maintains blood volume and improves renal blood flow for optimal function.',
    'benefits.kidneys.hydration.title': 'Superior cellular hydration',
    'benefits.kidneys.hydration.desc': 'Enhanced hydration due to composition and pH, ensuring efficient oxygen and nutrient delivery.',
    'benefits.kidneys.cleansing.title': 'Acid-base balance relief',
    'benefits.kidneys.cleansing.desc': 'Influences body acid-base balance, relieving kidney effort to correct mild metabolic acidosis.',
    
    // Cancer Benefits
    'benefits.cancer.alkaline.title': 'General health support',
    'benefits.cancer.alkaline.desc': 'Contributes to overall health as part of a balanced lifestyle, supporting general wellness.',
    'benefits.cancer.antioxidant.title': 'Oxidative stress reduction',
    'benefits.cancer.antioxidant.desc': 'Contains antioxidants that help neutralize free radicals and reduce oxidative stress, factors associated with cellular damage.',
    'benefits.cancer.immune.title': 'Immune system maintenance',
    'benefits.cancer.immune.desc': 'Adequate hydration supports immune system maintenance, important for overall health and cellular function.',
    'benefits.cancer.energy.title': 'Cellular function support',
    'benefits.cancer.energy.desc': 'Good hydration contributes to efficient cellular energy production and healthy cellular processes.',
    'benefits.cancer.detox.title': 'Lymphatic system support',
    'benefits.cancer.detox.desc': 'Enhanced hydration supports lymphatic system function and natural toxin elimination processes.',
    'benefits.cancer.dna.title': 'Cellular protection',
    'benefits.cancer.dna.desc': 'Antioxidant potential may contribute to protecting cells from oxidative damage as part of overall health support.',
    
    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Get answers to common questions about alkaline water and our purification systems based on scientific evidence',
    'faq.q1': 'What is alkaline water and how is it different from regular water?',
    'faq.a1': 'Alkaline water has a higher pH level (8.5-9.5) compared to regular water (pH 7). This is achieved through our ionization process that adds beneficial minerals while removing harmful contaminants. Studies suggest it may provide enhanced cellular hydration and antioxidant properties that support overall health.',
    'faq.q2': 'How does Salus Water purification system work?',
    'faq.a2': 'Our advanced 12-stage purification process includes sediment filtration, carbon filtration, reverse osmosis, UV sterilization, mineral enhancement, alkalinization, and final quality testing. This ensures every drop is pure, safe, and optimally balanced for your health needs.',
    'faq.q3': 'Is alkaline water safe to drink every day?',
    'faq.a3': 'Yes, alkaline water is safe for daily consumption when properly balanced. Our water meets all safety standards and is regularly tested for purity and mineral content. However, moderation is key - excessive alkalinity should be avoided to maintain natural body balance.',
    'faq.q4': 'What health benefits can I expect and when?',
    'faq.a4': 'Most customers report improved hydration within the first week. Benefits like better skin hydration and reduced mineral buildup in hair may appear within 2-4 weeks. However, individual results vary and benefits are primarily supportive of overall health rather than treating specific conditions.',
    'faq.q5': 'What minerals are added to Salus Water?',
    'faq.a5': 'We add essential minerals including calcium, magnesium, potassium, and sodium bicarbonate in scientifically balanced proportions. These minerals improve taste, support hydration, and help maintain the optimal alkaline pH level for health benefits.',
    'faq.q6': 'How do I maintain my Salus Water system and what\'s the warranty?',
    'faq.a6': 'Our systems are designed for easy maintenance with filter replacements every 6-12 months depending on usage. We provide automatic reminders and convenient filter delivery service. All systems come with a comprehensive 5-10 year warranty depending on the solution acquired.',
    'faq.q7': 'Can alkaline water help with specific health conditions?',
    'faq.a7': 'While alkaline water supports general wellness through better hydration and antioxidant properties, it should be viewed as complementary to overall health. For specific health conditions, always consult healthcare professionals and use alkaline water as part of a balanced lifestyle.',
    'faq.q8': 'How long do Salus Water systems last?',
    'faq.a8': 'Our systems are built for durability and longevity. With proper maintenance and regular filter replacements, Salus Water systems typically provide reliable performance for many years. All systems come with a comprehensive 5-10 year warranty depending on the solution acquired, ensuring peace of mind for your investment.',
    
    // Conversion
    'conversion.hair.headline': 'Transform your hair in 30 days',
    'conversion.hair.urgency': 'Limited time: Free hair analysis kit with every order',
    'conversion.hair.cta': 'Get your hair solution now',
    'conversion.skin.headline': 'Radiant skin awaits you',
    'conversion.skin.urgency': 'Special offer: Free skin pH test kit - only 50 left!',
    'conversion.skin.cta': 'Start your skin transformation',
    'conversion.kidneys.headline': 'Protect your kidneys today',
    'conversion.kidneys.urgency': 'Act now: Free kidney health consultation worth $150',
    'conversion.kidneys.cta': 'Get your kidney protection plan',
    'conversion.cancer.headline': 'Prevention is your best defense',
    'conversion.cancer.urgency': 'Exclusive: Free pH testing kit + health guide - limited stock',
    'conversion.cancer.cta': 'Start prevention today',
    'conversion.subtitle': 'Join thousands who have already transformed their health with Salus Water. Don\'t wait - your health is worth the investment.',
    'conversion.customers': 'Happy customers',
    'conversion.purity': 'Purity guaranteed',
    'conversion.support': 'Customer support',
    'conversion.consultation': 'Get free consultation',
    'conversion.guarantee': '60-day money back',
    'conversion.installation': 'Free installation',
    'conversion.lifetime': 'Lifetime support',
    
    // Stats
    'stats.savings.label': 'Generated savings for our customers',
    'stats.families.label': 'Families served throughout Florida', 
    'stats.approval.label': 'Approval rating in our service',
    'stats.cert.fau': 'A Global Venture company from Florida Atlantic University',
    'stats.cert.ip54': 'IP54 Protection Certified',
    'stats.cert.ip55': 'IP55 Weather Protection Certified',
    'stats.cert.nsf': 'NSF Certified',
    
    // WhatsApp Messages
    'whatsapp.home': 'Hi, I would like to know more about Salus Water solutions.',
    'whatsapp.hair': 'Hi, I came from the hair page and would like to know more about Salus Water solutions.',
    'whatsapp.skin': 'Hi, I came from the skin page and would like to know more about Salus Water solutions.',
    'whatsapp.kidneys': 'Hi, I came from the kidneys page and would like to know more about Salus Water solutions.',
    'whatsapp.cancer': 'Hi, I came from the cancer page and would like to know more about Salus Water solutions.',
    'whatsapp.consultation': 'Hi, I would like to schedule a free consultation about Salus Water.',
    'footer.rights': '© 2025 Salus Water. All rights reserved.',
  },
  pt: {
    // Navbar
    'nav.hair': 'Cabelo',
    'nav.hair.title': 'Problemas Capilares',
    'nav.hair.desc': 'Cabelos quebradiços, sem vida e ressecados',
    'nav.skin': 'Pele',
    'nav.skin.title': 'Problemas de Pele',
    'nav.skin.desc': 'Pele ressecada, irritada e inflamada',
    'nav.kidneys': 'Rins',
    'nav.kidneys.title': 'Problemas Renais',
    'nav.kidneys.desc': 'Proteção e cuidado com a saúde renal',
    'nav.cancer': 'Câncer',
    'nav.cancer.title': 'Prevenção ao Câncer',
    'nav.cancer.desc': 'Prevenção através de água alcalina',
    'nav.whatsapp': 'WhatsApp',
    'nav.contact': 'Contato',
    'nav.phone': '+1 (407) 881-4629',
    
    // Hero Section
    'hero.hair.headline': 'CABELOS SAUDÁVEIS COMEÇAM COM ÁGUA PURA.',
    'hero.hair.subtitle': 'Pare a queda capilar com água alcalina que fortalece os folículos e promove crescimento saudável. Experimente cabelos mais densos e resistentes em apenas 30 dias.',
    'hero.skin.headline': 'PELE RESSECADA OU IRRITADA? A SOLUÇÃO NÃO ESTÁ NOS CREMES.',
    'hero.skin.subtitle': 'Desbloqueie seu brilho natural com água com pH balanceado que hidrata profundamente e combate a inflamação.',
    'hero.kidneys.headline': 'PROTEJA SEUS RINS ENQUANTO HÁ TEMPO.',
    'hero.kidneys.subtitle': 'Apoie a função renal e previna a formação de pedras com água alcalina rica em minerais que limpa e protege.',
    'hero.cancer.headline': 'A PREVENÇÃO COMEÇA COM ÁGUA ALCALINA.',
    'hero.cancer.subtitle': 'Crie um ambiente alcalino em seu corpo que apoia a saúde celular ideal e a resistência natural às doenças.',
    'hero.cta': 'Entrar em contato',
    
    // Testimonials
    'testimonials.title': 'Vidas impactadas por uma água de qualidade',
    'testimonials.subtitle': 'Descubra a verdadeira transformação que nossa solução proporciona para sua casa.',
    
    // How It Works
    'how.title': 'A solução Salus Water',
    'how.subtitle': 'Nosso processo de purificação e alcalinização em três etapas garante que você obtenha a água mais pura e saudável possível',
    'how.step1.title': 'Filtração avançada',
    'how.step1.desc': 'Nosso avançado sistema de filtração de múltiplos estágios remove eficientemente contaminantes nocivos, cloro e metais pesados preservando minerais essenciais para saúde ideal.',
    'how.step2.title': 'Alcalinização',
    'how.step2.desc': 'Nosso processo de alcalinização eleva precisamente os níveis de pH para 8,5-9,5, criando o ambiente alcalino ideal para saúde celular aprimorada e vitalidade.',
    'how.step3.title': 'Suporte premium vitalício',
    'how.step3.desc': 'Diferencial exclusivo na Flórida: atendimento prioritário com urgência máxima, colocando você sempre em primeiro lugar com suporte técnico especializado.',
    
    // Benefits
    'benefits.hair.title': 'Benefícios para o cabelo',
    'benefits.skin.title': 'Benefícios para a pele',
    'benefits.kidneys.title': 'Benefícios para os rins',
    'benefits.cancer.title': 'Benefícios de suporte ao bem-estar',
    'benefits.subtitle': 'Descubra os benefícios cientificamente comprovados da água alcalina para seus objetivos específicos de saúde',
    
    // Hair Benefits
    'benefits.hair.shine.title': 'Brilho natural e limpeza',
    'benefits.hair.shine.desc': 'Água com pH controlado remove minerais nocivos acumulados que deixam o cabelo opaco e sem vida, revelando brilho natural.',
    'benefits.hair.roots.title': 'Fortalecimento folicular',
    'benefits.hair.roots.desc': 'Hidratação celular aprimorada nutre e fortalece os folículos capilares, diminuindo a quebra desde a raiz.',
    'benefits.hair.breakage.title': 'Proteção contra danos',
    'benefits.hair.breakage.desc': 'Conteúdo mineral equilibrado mantém cutículas saudáveis e reduz fragilidade e pontas duplas.',
    'benefits.hair.growth.title': 'Circulação do couro cabeludo',
    'benefits.hair.growth.desc': 'Minerais balanceados favorecem circulação saudável do couro cabeludo, estimulando crescimento mais eficiente.',
    'benefits.hair.hydration.title': 'Penetração profunda',
    'benefits.hair.hydration.desc': 'Água ionizada com moléculas menores facilita penetração e retenção prolongada de umidade.',
    'benefits.hair.volume.title': 'Ambiente saudável do couro cabeludo',
    'benefits.hair.volume.desc': 'Água pura mantém couro cabeludo saudável, evitando irritações e ressecamento que enfraquecem os fios.',
    
    // Skin Benefits
    'benefits.skin.glow.title': 'Equilíbrio do pH e proteção',
    'benefits.skin.glow.desc': 'Favorece equilíbrio ácido-base saudável, reforçando barreira protetora natural da pele e reduzindo sensibilidade.',
    'benefits.skin.antiaging.title': 'Defesa antioxidante',
    'benefits.skin.antiaging.desc': 'Antioxidantes neutralizam radicais livres responsáveis pelo envelhecimento precoce e inflamações na pele.',
    'benefits.skin.inflammation.title': 'Alívio anti-inflamatório',
    'benefits.skin.inflammation.desc': 'Propriedades antioxidantes ajudam a acalmar irritações, acelerar cicatrização e reduzir vermelhidão de alergias.',
    'benefits.skin.healing.title': 'Hidratação celular aprimorada',
    'benefits.skin.healing.desc': 'Absorção celular superior promove hidratação profunda, mantendo pele macia e elástica.',
    'benefits.skin.moisture.title': 'Hidratação profunda duradoura',
    'benefits.skin.moisture.desc': 'Facilmente absorvida pelas células, prevenindo ressecamento e descamação nas camadas mais profundas.',
    'benefits.skin.complexion.title': 'Desintoxicação e clareza',
    'benefits.skin.complexion.desc': 'Eliminação eficiente de toxinas contribui para pele mais clara e saudável, reduzindo erupções.',
    
    // Kidney Benefits
    'benefits.kidneys.filtration.title': 'Função de filtração aprimorada',
    'benefits.kidneys.filtration.desc': 'Apoia função renal facilitando filtragem e eliminação de resíduos metabólicos, mantendo equilíbrio corporal.',
    'benefits.kidneys.stones.title': 'Prevenção de pedras nos rins',
    'benefits.kidneys.stones.desc': 'Alcaliniza pH urinário, diminuindo formação de cristais de oxalato de cálcio e reduzindo risco de litíase.',
    'benefits.kidneys.protection.title': 'Apoio à eliminação de toxinas',
    'benefits.kidneys.protection.desc': 'Hidratação de qualidade facilita eliminação renal de toxinas ambientais e metabólicas, protegendo tecidos renais.',
    'benefits.kidneys.flow.title': 'Circulação renal melhorada',
    'benefits.kidneys.flow.desc': 'Melhor hidratação celular mantém volume sanguíneo e melhora fluxo sanguíneo renal para função ideal.',
    'benefits.kidneys.hydration.title': 'Hidratação celular superior',
    'benefits.kidneys.hydration.desc': 'Hidratação aprimorada devido à composição e pH, garantindo entrega eficiente de oxigênio e nutrientes.',
    'benefits.kidneys.cleansing.title': 'Alívio do equilíbrio ácido-base',
    'benefits.kidneys.cleansing.desc': 'Influencia equilíbrio ácido-base corporal, aliviando esforço renal para corrigir acidose metabólica leve.',
    
    // Cancer Benefits
    'benefits.cancer.alkaline.title': 'Suporte à saúde geral',
    'benefits.cancer.alkaline.desc': 'Contribui para saúde geral como parte de estilo de vida equilibrado, apoiando bem-estar overall.',
    'benefits.cancer.antioxidant.title': 'Redução do estresse oxidativo',
    'benefits.cancer.antioxidant.desc': 'Contém antioxidantes que ajudam a neutralizar radicais livres e reduzir estresse oxidativo, fatores associados ao dano celular.',
    'benefits.cancer.immune.title': 'Manutenção do sistema imunológico',
    'benefits.cancer.immune.desc': 'Hidratação adequada apoia manutenção do sistema imunológico, importante para saúde geral e função celular.',
    'benefits.cancer.energy.title': 'Suporte à função celular',
    'benefits.cancer.energy.desc': 'Boa hidratação contribui para produção eficiente de energia celular e processos celulares saudáveis.',
    'benefits.cancer.detox.title': 'Suporte ao sistema linfático',
    'benefits.cancer.detox.desc': 'Hidratação aprimorada apoia função do sistema linfático e processos naturais de eliminação de toxinas.',
    'benefits.cancer.dna.title': 'Proteção celular',
    'benefits.cancer.dna.desc': 'Potencial antioxidante pode contribuir para proteger células de danos oxidativos como parte do suporte à saúde geral.',
    
    // FAQ
    'faq.title': 'Perguntas frequentes',
    'faq.subtitle': 'Obtenha respostas para perguntas comuns sobre água alcalina e nossos sistemas de purificação baseadas em evidências científicas',
    'faq.q1': 'O que é água alcalina e como ela difere da água comum?',
    'faq.a1': 'A água alcalina tem pH mais alto (8,5-9,5) comparado à água comum (pH 7). Isso é alcançado através do nosso processo de ionização que adiciona minerais benéficos enquanto remove contaminantes nocivos. Estudos sugerem que pode proporcionar hidratação celular aprimorada e propriedades antioxidantes que apoiam a saúde geral.',
    'faq.q2': 'Como funciona o sistema de purificação Salus Water?',
    'faq.a2': 'Nosso processo avançado de purificação de 12 estágios inclui filtração de sedimentos, filtração de carbono, osmose reversa, esterilização UV, enriquecimento mineral, alcalinização e teste final de qualidade. Isso garante que cada gota seja pura, segura e otimamente equilibrada para suas necessidades de saúde.',
    'faq.q3': 'É seguro beber água alcalina todos os dias?',
    'faq.a3': 'Sim, a água alcalina é segura para consumo diário quando adequadamente balanceada. Nossa água atende a todos os padrões de segurança e é regularmente testada quanto à pureza e conteúdo mineral. Porém, moderação é fundamental - alcalinidade excessiva deve ser evitada para manter o equilíbrio natural do corpo.',
    'faq.q4': 'Que benefícios posso esperar e quando?',
    'faq.a4': 'A maioria dos clientes relata hidratação melhorada na primeira semana. Benefícios como melhor hidratação da pele e redução do acúmulo mineral no cabelo podem aparecer dentro de 2-4 semanas. Porém, resultados individuais variam e os benefícios são primariamente de apoio à saúde geral ao invés de tratar condições específicas.',
    'faq.q5': 'Quais minerais são adicionados à Salus Water?',
    'faq.a5': 'Adicionamos minerais essenciais incluindo cálcio, magnésio, potássio e bicarbonato de sódio em proporções cientificamente balanceadas. Estes minerais melhoram o sabor, apoiam a hidratação e ajudam a manter o nível ideal de pH alcalino para benefícios à saúde.',
    'faq.q6': 'Como mantenho meu sistema Salus Water e qual a garantia?',
    'faq.a6': 'Nossos sistemas são projetados para manutenção fácil com substituições de filtro a cada 6-12 meses dependendo do uso. Fornecemos lembretes automáticos e serviço conveniente de entrega de filtros. Todos os sistemas vêm com garantia abrangente de 5-10 anos dependendo da solução adquirida.',
    'faq.q7': 'A água alcalina pode ajudar com condições específicas de saúde?',
    'faq.a7': 'Embora a água alcalina apoie o bem-estar geral através de melhor hidratação e propriedades antioxidantes, deve ser vista como complementar à saúde geral. Para condições específicas de saúde, sempre consulte profissionais da saúde e use água alcalina como parte de um estilo de vida equilibrado.',
    'faq.q8': 'Quanto tempo duram os sistemas Salus Water?',
    'faq.a8': 'Nossos sistemas são construídos para durabilidade e longevidade. Com manutenção adequada e substituições regulares de filtro, os sistemas Salus Water tipicamente fornecem performance confiável por muitos anos. Todos os sistemas vêm com garantia abrangente de 5-10 anos dependendo da solução adquirida, garantindo tranquilidade para seu investimento.',
    
    // Conversion
    'conversion.hair.headline': 'Seu cabelo como você nunca o sentiu antes',
    'conversion.hair.urgency': 'Tempo limitado: Kit de análise capilar grátis com cada pedido',
    'conversion.hair.cta': 'Obtenha sua solução capilar agora',
    'conversion.skin.headline': 'A transformação da pele pela hidratação',
    'conversion.skin.urgency': 'Oferta especial: Kit de teste de pH da pele grátis - apenas 50 restantes!',
    'conversion.skin.cta': 'Comece sua transformação da pele',
    'conversion.kidneys.headline': 'Proteja seus rins hoje',
    'conversion.kidneys.urgency': 'Aja agora: Consulta de saúde renal grátis no valor de R$750',
    'conversion.kidneys.cta': 'Obtenha seu plano de proteção renal',
    'conversion.cancer.headline': 'A prevenção é sua melhor defesa',
    'conversion.cancer.urgency': 'Exclusivo: Kit de teste de pH grátis + guia de saúde - estoque limitado',
    'conversion.cancer.cta': 'Comece a prevenção hoje',
    'conversion.subtitle': 'Junte-se a milhares que já transformaram sua saúde com Salus Water. Sua saúde vale o investimento.',
    'conversion.customers': 'Clientes satisfeitos',
    'conversion.purity': 'Pureza garantida',
    'conversion.support': 'Suporte ao cliente',
    'conversion.consultation': 'Consulta gratuita',
    'conversion.guarantee': 'Garantia de 60 dias',
    'conversion.installation': 'Instalação gratuita',
    'conversion.lifetime': 'Suporte vitalício',
    
    // Stats
    'stats.savings.label': 'Em economia gerada aos nossos clientes',
    'stats.families.label': 'Famílias atendidas em toda a Flórida',
    'stats.approval.label': 'Aprovação em nosso atendimento',
    'stats.cert.fau': 'Uma empresa Global Venture da Florida Atlantic University',
    'stats.cert.ip54': 'Certificado de Proteção IP54',
    'stats.cert.ip55': 'Certificado de Proteção Climática IP55',
    'stats.cert.nsf': 'Certificados NSF',
    
    // WhatsApp Messages
    'whatsapp.home': 'Olá, gostaria de saber mais sobre as soluções Salus Water.',
    'whatsapp.hair': 'Olá, vim da página de cabelo e gostaria de saber mais sobre as soluções Salus Water.',
    'whatsapp.skin': 'Olá, vim da página de pele e gostaria de saber mais sobre as soluções Salus Water.',
    'whatsapp.kidneys': 'Olá, vim da página de rins e gostaria de saber mais sobre as soluções Salus Water.',
    'whatsapp.cancer': 'Olá, vim da página de câncer e gostaria de saber mais sobre las soluções Salus Water.',
    'whatsapp.consultation': 'Olá, gostaria de agendar uma consulta gratuita sobre Salus Water.',
    'footer.rights': '© 2025 Salus Water. Todos os direitos reservados.',
  }
}