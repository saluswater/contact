# Arquitetura da Aplicação - Salus Water Landing Page

## Visão Geral da Arquitetura

Esta aplicação segue uma arquitetura moderna baseada em **Next.js 15 App Router** com **React 19**, implementando padrões de **Clean Architecture** e **Component-Driven Development**. A estrutura foi projetada para alta performance, escalabilidade e manutenibilidade.

## 🏗️ Arquitetura Geral

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT SIDE (Browser)                    │
├─────────────────────────────────────────────────────────────┤
│  React 19 Components (RSC + Client Components)             │
│  ├── Pages (App Router)                                    │
│  ├── Layout System                                         │
│  ├── UI Components (ShadCN/UI)                            │
│  └── Context Providers                                     │
├─────────────────────────────────────────────────────────────┤
│                 STATE MANAGEMENT                            │
│  ├── React Context (i18n)                                 │
│  ├── localStorage (Preferences)                           │
│  └── URL State (Routes)                                   │
├─────────────────────────────────────────────────────────────┤
│                    STYLING LAYER                           │
│  ├── TailwindCSS v4 (Utility-First)                      │
│  ├── CSS Custom Properties                                │
│  ├── CSS Modules (Global)                                 │
│  └── CSS-in-JS (Styled via className)                    │
├─────────────────────────────────────────────────────────────┤
│                  BUILD & BUNDLING                          │
│  ├── Next.js 15 (Framework)                              │
│  ├── Turbopack (Bundler)                                 │
│  ├── TypeScript (Type Safety)                            │
│  └── Static Site Generation                               │
├─────────────────────────────────────────────────────────────┤
│                    DEPLOYMENT                              │
│  ├── Static HTML/CSS/JS                                  │
│  ├── CDN Distribution                                     │
│  └── Edge Optimization                                    │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Estrutura de Diretórios Detalhada

```
salus-new-lps/
├── 📁 src/                           # Código fonte principal
│   ├── 📁 app/                       # Next.js App Router
│   │   ├── 📄 layout.tsx             # Root Layout + Providers
│   │   ├── 📄 page.tsx               # Home Page (/)
│   │   ├── 📄 globals.css            # Estilos globais TailwindCSS v4
│   │   ├── 📁 hair/
│   │   │   └── 📄 page.tsx           # Hair health page
│   │   ├── 📁 skin/
│   │   │   └── 📄 page.tsx           # Skin health page
│   │   ├── 📁 kidneys/
│   │   │   └── 📄 page.tsx           # Kidney health page
│   │   └── 📁 cancer/
│   │       └── 📄 page.tsx           # Wellness support page
│   ├── 📁 components/                # Componentes React
│   │   ├── 📄 Navbar.tsx             # Navegação principal
│   │   ├── 📄 HeroSection.tsx        # Seção hero com animação
│   │   ├── 📄 StatsCarousel.tsx      # Carrossel de estatísticas
│   │   ├── 📄 TestimonialMarquee.tsx # Marquee de depoimentos
│   │   ├── 📄 HowItWorksSection.tsx  # Como funciona (3 steps)
│   │   ├── 📄 BenefitsGrid.tsx       # Grid de benefícios
│   │   ├── 📄 FAQSection.tsx         # Perguntas frequentes
│   │   ├── 📄 ConversionSection.tsx  # CTA final + Footer
│   │   ├── 📄 AnimatedReveal.tsx     # Animações de entrada
│   │   └── 📁 ui/                    # ShadCN/UI Components
│   │       ├── 📄 accordion.tsx      # Accordion component
│   │       ├── 📄 avatar.tsx         # Avatar component
│   │       ├── 📄 button.tsx         # Button component
│   │       ├── 📄 card.tsx           # Card component
│   │       ├── 📄 navigation-menu.tsx # Navigation menu
│   │       └── ...                   # Other UI components
│   ├── 📁 contexts/                  # React Contexts
│   │   └── 📄 LanguageContext.tsx    # i18n Context + 400+ translations
│   ├── 📁 hooks/                     # Custom React Hooks
│   │   └── 📄 useIntersectionObserver.tsx # Animation trigger hook
│   └── 📁 lib/                       # Utilities & Configuration
│       └── 📄 utils.ts               # TailwindCSS + clsx utilities
├── 📁 public/                        # Static Assets
│   ├── 🖼️ *.webp                     # Optimized images
│   ├── 🖼️ *.png                      # Fallback images
│   └── 📄 favicon.ico                # Site favicon
├── 📄 package.json                   # Dependencies & Scripts
├── 📄 tsconfig.json                  # TypeScript configuration
├── 📄 tailwind.config.ts             # TailwindCSS v4 config
├── 📄 components.json                # ShadCN/UI configuration
├── 📄 next.config.js                 # Next.js configuration
├── 📄 .gitignore                     # Git ignore rules
├── 📄 CLAUDE.md                      # Project documentation
└── 📄 ARQUITETURA.md                 # This architecture file
```

## 🔧 Camadas da Arquitetura

### 1. **Camada de Apresentação (Presentation Layer)**

#### **Pages (App Router)**
```typescript
// src/app/page.tsx
export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsCarousel />
      <TestimonialMarquee />
      <HowItWorksSection />
      <BenefitsGrid />
      <FAQSection />
      <ConversionSection />
    </>
  );
}
```

#### **Layout System**
```typescript
// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
```

### 2. **Camada de Componentes (Component Layer)**

#### **Arquitetura de Componentes**

```
Components Architecture:
├── 🎯 Business Components (Domain-Specific)
│   ├── Navbar                    # Navigation with i18n
│   ├── HeroSection              # Hero with dynamic content
│   ├── BenefitsGrid             # Scientific benefits by route
│   └── ConversionSection        # CTA + Footer integrated
├── 🧱 Layout Components (Structure)
│   ├── StatsCarousel           # Statistics presentation
│   ├── TestimonialMarquee      # Social proof
│   ├── HowItWorksSection       # Process explanation
│   └── FAQSection              # Q&A with accordion
├── 🎨 UI Components (ShadCN/UI)
│   ├── Button                  # Interactive elements
│   ├── Card                    # Content containers
│   ├── Accordion               # Expandable content
│   └── NavigationMenu          # Responsive navigation
└── 🎬 Animation Components (Effects)
    ├── AnimatedReveal          # Scroll-triggered animations
    └── StaggeredReveal         # Sequential animations
```

#### **Component Props Pattern**
```typescript
// Tipo de props consistente
interface ComponentProps {
  className?: string;           // Tailwind override
  children?: React.ReactNode;   // Composition
  variant?: 'default' | 'alt';  // Variants
  size?: 'sm' | 'md' | 'lg';   // Sizing
}

// Uso de forwardRef para componentes UI
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

### 3. **Camada de Estado (State Layer)**

#### **React Context para i18n**
```typescript
// src/contexts/LanguageContext.tsx
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getWhatsAppNumber: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Pattern de provider com persistência
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('pt');
  
  // Persistência em localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getWhatsAppNumber }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

#### **URL State Management**
```typescript
// usePathname para conteúdo dinâmico
const pathname = usePathname();
const route = pathname === '/' ? 'hair' : pathname.replace('/', '');

// Conteúdo baseado na rota
const benefits = benefitsConfig[pathname as keyof typeof benefitsConfig];
```

### 4. **Camada de Dados (Data Layer)**

#### **Static Data (Translations)**
```typescript
// 400+ traduções organizadas hierarquicamente
const translations = {
  en: {
    'nav.hair': 'Hair',
    'hero.hair.headline': 'HEALTHY HAIR STARTS WITH PURE WATER.',
    'benefits.hair.shine.title': 'Natural shine & cleanliness',
    // ... 200+ more English translations
  },
  pt: {
    'nav.hair': 'Cabelo', 
    'hero.hair.headline': 'CABELOS SAUDÁVEIS COMEÇAM COM ÁGUA PURA.',
    'benefits.hair.shine.title': 'Brilho natural e limpeza',
    // ... 200+ more Portuguese translations
  }
};
```

#### **Dynamic Content Configuration**
```typescript
// Configuração de benefícios por rota
const benefitsConfig = {
  '/hair': [
    { icon: Sparkles, titleKey: 'benefits.hair.shine.title', descKey: 'benefits.hair.shine.desc' },
    { icon: Heart, titleKey: 'benefits.hair.roots.title', descKey: 'benefits.hair.roots.desc' },
    // ... 4 more hair benefits
  ],
  '/skin': [/* skin benefits */],
  '/kidneys': [/* kidney benefits */],
  '/cancer': [/* wellness benefits */]
};
```

### 5. **Camada de Styling (Style Layer)**

#### **TailwindCSS v4 Configuration**
```typescript
// tailwind.config.ts
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(var(--primary))',
        secondary: 'oklch(var(--secondary))',
        // CSS Custom Properties integration
      },
      animation: {
        'marquee-left': 'marquee-left 60s linear infinite',
        'marquee-right': 'marquee-right 60s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      }
    }
  }
};
```

#### **CSS Architecture**
```css
/* src/app/globals.css */

/* 1. CSS Imports */
@import "tailwindcss";
@import "tw-animate-css";

/* 2. CSS Custom Properties */
:root {
  --primary: oklch(0.6723 0.1606 244.9955);
  --primary-foreground: oklch(1.0000 0 0);
  /* ... more variables */
}

/* 3. Base Styles */
@layer base {
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-sans); }
}

/* 4. Custom Animations */
@keyframes marquee-left {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

/* 5. Responsive Animations */
@media (max-width: 768px) {
  .animate-marquee-left { animation-duration: 25s; }
}
```

## 🔄 Fluxo de Dados

### **1. Inicialização da Aplicação**
```
User loads page
    ↓
Next.js App Router renders layout.tsx
    ↓
LanguageProvider initializes
    ↓ 
Checks localStorage for saved language
    ↓
Checks URL params for language override
    ↓
Checks browser language as fallback
    ↓
Sets initial language state
    ↓
Renders page components with translations
```

### **2. Navegação Entre Páginas**
```
User clicks navigation link
    ↓
Next.js client-side navigation
    ↓
usePathname hook detects route change
    ↓
Components re-render with route-specific content
    ↓
BenefitsGrid loads benefits for new route
    ↓
HeroSection updates headline/subtitle
    ↓
WhatsApp links update with route context
```

### **3. Mudança de Idioma**
```
User clicks language toggle
    ↓
setLanguage called in LanguageContext
    ↓
State updates trigger re-render
    ↓
All t() calls resolve to new language
    ↓
localStorage updated with preference
    ↓
URL updated with lang parameter
```

## 🎨 Padrões de Design

### **1. Component Composition Pattern**
```typescript
// Composição ao invés de herança
<Card>
  <CardContent>
    <div className="flex items-start space-x-4">
      <Icon />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </CardContent>
</Card>
```

### **2. Render Props Pattern**
```typescript
// AnimatedReveal como render prop
<AnimatedReveal direction="up" delay={200}>
  <div className="content">
    {children}
  </div>
</AnimatedReveal>
```

### **3. Custom Hook Pattern**
```typescript
// useIntersectionObserver hook reutilizável
function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [ref, setRef] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);
  
  return [setRef, isVisible] as const;
}
```

### **4. Variant Pattern (Class Variance Authority)**
```typescript
// Variantes tipadas para componentes
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
);
```

## 🚀 Performance Architecture

### **1. Static Site Generation (SSG)**
```typescript
// Todas as páginas são pré-renderizadas
Route (app)                Size  First Load JS
┌ ○ /                       0 B         168 kB
├ ○ /hair                   0 B         168 kB  
├ ○ /skin                   0 B         168 kB
├ ○ /kidneys                0 B         168 kB
└ ○ /cancer                 0 B         168 kB
```

### **2. Code Splitting Strategy**
```
Shared chunks:
├── Framework chunk (React, Next.js)     ~59kB
├── UI Components chunk (ShadCN)         ~21kB  
├── Utilities chunk (clsx, tailwind)     ~17kB
├── Styles chunk (CSS)                   ~15kB
└── Other shared logic                   ~25kB
Total shared: ~139kB

Page-specific:
└── Each page: ~0kB (only content, no additional JS)
```

### **3. Image Optimization**
```typescript
// Next.js Image component com lazy loading
<Image
  src="/hero-image.webp"
  alt="Water purification"
  width={1200}
  height={800}
  priority={true}  // Above the fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### **4. Animation Performance**
```css
/* GPU-accelerated animations */
.animate-marquee-left {
  animation: marquee-left 60s linear infinite;
  will-change: transform;  /* GPU hint */
  transform: translateZ(0); /* Force GPU layer */
}

/* IntersectionObserver para trigger */
.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0; /* Inicial hidden */
}
```

## 🔐 Segurança & Conformidade

### **1. Content Security Policy**
```typescript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' cdn.unicorn.studio; style-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ];
  }
};
```

### **2. Input Sanitization**
```typescript
// WhatsApp URL encoding
const whatsappUrl = `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`;

// Type safety com TypeScript
interface WhatsAppMessage {
  number: string;
  message: string;
}
```

### **3. Environment Variables**
```typescript
// Apenas NEXT_PUBLIC_ são expostas ao cliente
NEXT_PUBLIC_WHATSAPP_PT=14078814629
NEXT_PUBLIC_WHATSAPP_EN=14078207276

// Uso tipado
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PT!;
```

## 📱 Responsividade Architecture

### **1. Breakpoint Strategy**
```css
/* Mobile First approach */
.component {
  /* Mobile styles (default) */
  padding: 1rem;
  
  /* Tablet */
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
  
  /* Desktop */
  @media (min-width: 1024px) {
    padding: 2rem;
  }
  
  /* Large Desktop */
  @media (min-width: 1280px) {
    padding: 3rem;
  }
}
```

### **2. Responsive Animation**
```css
/* Diferentes velocidades para diferentes telas */
.animate-marquee-left {
  animation: marquee-left 60s linear infinite;
}

@media (max-width: 768px) {
  .animate-marquee-left {
    animation-duration: 25s; /* Mais rápido no mobile */
  }
}
```

### **3. Grid Responsivo**
```typescript
// TailwindCSS responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 min-[990px]:grid-cols-3 gap-6">
  {benefits.map(benefit => (
    <BenefitCard key={benefit.id} {...benefit} />
  ))}
</div>
```

## 🎯 Acessibilidade Architecture

### **1. Semantic HTML**
```jsx
<main>
  <nav aria-label="Main navigation">
    <ul role="menubar">
      <li role="none">
        <a role="menuitem" href="/hair">Hair Health</a>
      </li>
    </ul>
  </nav>
  
  <section aria-labelledby="benefits-heading">
    <h2 id="benefits-heading">Health Benefits</h2>
    <div role="grid" aria-label="Benefits grid">
      {/* Benefits cards */}
    </div>
  </section>
</main>
```

### **2. ARIA Labels**
```jsx
<button
  aria-expanded={isOpen}
  aria-controls="faq-content"
  aria-label={`Toggle ${question}`}
>
  {question}
</button>

<div
  id="faq-content"
  role="region"
  aria-labelledby="faq-question"
  hidden={!isOpen}
>
  {answer}
</div>
```

### **3. Focus Management**
```css
/* Focus styles consistentes */
.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\:ring-2:focus-visible {
  ring-width: 2px;
  ring-color: oklch(var(--primary));
}
```

## 🔄 Deploy Architecture

### **1. Build Process**
```bash
# Development
npm run dev          # Next.js dev with Turbopack

# Production Build
npm run build        # Static generation + optimization
├── HTML pre-rendered pages
├── CSS extracted and purged  
├── JS bundles split and minified
├── Images optimized (WebP/AVIF)
└── Static assets copied

# Production Serve
npm start           # Serve static files
```

### **2. Static Export**
```typescript
// next.config.js
const nextConfig = {
  output: 'export',     // Static export
  trailingSlash: true,  // Add trailing slashes
  images: {
    unoptimized: true   // For static hosting
  }
};
```

### **3. CDN Strategy**
```
Static Assets Distribution:
├── HTML files      → CDN Edge
├── CSS files       → CDN with long cache
├── JS bundles      → CDN with long cache  
├── Images          → CDN with WebP/AVIF
└── Fonts           → CDN with preload hints
```

## 📊 Monitoring & Analytics

### **1. Performance Monitoring**
```typescript
// Core Web Vitals tracking
export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP':  // First Contentful Paint
    case 'LCP':  // Largest Contentful Paint  
    case 'CLS':  // Cumulative Layout Shift
    case 'FID':  // First Input Delay
      // Send to analytics service
      break;
  }
}
```

### **2. Error Boundaries**
```typescript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

## 🎯 Escalabilidade

### **1. Component Scalability**
```
Component Growth Strategy:
├── 📁 components/
│   ├── 📁 business/     # Domain-specific components
│   ├── 📁 layout/       # Layout components  
│   ├── 📁 ui/           # Reusable UI components
│   └── 📁 forms/        # Form components (future)
├── 📁 hooks/            # Reusable logic
├── 📁 utils/            # Helper functions
└── 📁 types/            # TypeScript definitions
```

### **2. State Scalability**
```typescript
// Future state management patterns
├── React Context        # Current (i18n, theme)
├── Zustand             # Future (complex state)
├── React Query         # Future (server state)
└── Local Storage       # Persistent preferences
```

### **3. Route Scalability**
```
Route Growth Strategy:
├── /                   # Home (current)
├── /hair              # Hair health (current)
├── /skin              # Skin health (current)  
├── /kidneys           # Kidney health (current)
├── /cancer            # Wellness (current)
├── /products          # Product catalog (future)
├── /about             # About page (future)
├── /contact           # Contact page (future)
└── /dashboard         # User dashboard (future)
```

---

## 🏁 Resumo da Arquitetura

Esta arquitetura foi projetada com os seguintes princípios:

### **🎯 Design Principles**
- **Component-Driven Development**: Componentes reutilizáveis e testáveis
- **Mobile-First Responsive**: Design otimizado para dispositivos móveis
- **Performance-First**: SSG, code splitting, image optimization
- **Accessibility-First**: ARIA, semantic HTML, keyboard navigation
- **Type-Safe**: TypeScript em 100% do código

### **🚀 Performance Characteristics**
- **First Load JS**: 168kB total
- **LCP**: < 2.5s (SSG + image optimization)
- **CLS**: < 0.1 (layout stability)
- **FID**: < 100ms (React 19 concurrent features)

### **🔧 Maintainability Features**
- **Clear separation of concerns**: Layers bem definidas
- **Consistent patterns**: Hooks, components, styling
- **Type safety**: TypeScript + strict mode
- **Documentation**: Inline comments + architecture docs

### **📈 Scalability Readiness**
- **Modular architecture**: Easy to add new components/pages
- **State management**: Ready for complex state (Zustand/React Query)
- **API integration**: Prepared for backend integration
- **CMS ready**: Structure prepared for headless CMS

Esta arquitetura garante uma base sólida para crescimento futuro mantendo alta performance e qualidade de código.

---

**Última atualização: Janeiro 2025**
**Versão da Arquitetura: 2.0.0**