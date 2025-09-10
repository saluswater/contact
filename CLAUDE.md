# Salus Water - Landing Page SaaS

## Visão Geral do Projeto

Esta é uma landing page SaaS profissional para a **Salus Water**, uma empresa focada em sistemas de purificação e alcalinização de água. A aplicação foi desenvolvida com Next.js 15, TypeScript, TailwindCSS e componentes ShadCN/UI, apresentando um design moderno, totalmente responsivo e com suporte completo a internacionalização (i18n) para Português Brasileiro e Inglês.

## Características Principais

### 🌍 **Internacionalização Completa**
- Suporte total para **Português (pt-BR)** e **Inglês (en)**
- Detecção automática do idioma do navegador
- Persistência da preferência do usuário no localStorage
- Botão de alternância de idioma no navbar
- Tradução dinâmica de todo o conteúdo baseado na rota atual

### 🎯 **Conteúdo Dinâmico por Rota**
A aplicação adapta todo o conteúdo baseado na rota atual:
- `/` (home) - Padrão para conteúdo de cabelo
- `/hair` - Foco em saúde capilar
- `/skin` - Foco em saúde da pele  
- `/kidneys` - Foco em saúde renal
- `/cancer` - Foco em prevenção ao câncer

### 📱 **Design Responsivo e Moderno**
- Layout totalmente fluido e responsivo
- Esquema de cores azul e branco com gradientes temáticos de água
- Animações suaves com intersection observers
- Efeitos hover em todos os elementos interativos
- Tipografia otimizada com fontes Google (Geist)

## Estrutura da Aplicação

### 📁 **Organização dos Arquivos**

```
src/
├── app/
│   ├── layout.tsx           # Layout raiz com LanguageProvider
│   ├── page.tsx             # Página inicial (/)
│   ├── globals.css          # Estilos globais e animações
│   ├── hair/page.tsx        # Página específica para cabelo
│   ├── skin/page.tsx        # Página específica para pele
│   ├── kidneys/page.tsx     # Página específica para rins
│   └── cancer/page.tsx      # Página específica para câncer
├── components/
│   ├── Navbar.tsx           # Barra de navegação com toggle de idioma
│   ├── HeroSection.tsx      # Seção hero com conteúdo dinâmico
│   ├── TestimonialMarquee.tsx # Carrossel infinito de depoimentos
│   ├── HowItWorksSection.tsx  # Seção "Como Funciona" (3 passos)
│   ├── BenefitsGrid.tsx     # Grid de benefícios por área de saúde
│   ├── FAQSection.tsx       # Seção de perguntas frequentes
│   ├── ConversionSection.tsx # Seção final de conversão
│   ├── IntersectionObserver.tsx # Hook para animações de entrada
│   └── ui/                  # Componentes ShadCN/UI
├── contexts/
│   └── LanguageContext.tsx  # Context para gerenciamento de idioma
└── lib/
    └── utils.ts             # Utilitários e configurações
```

### 🎨 **Componentes Principais**

#### **Navbar**
- Logo da Salus Water com ícone personalizado
- Links de navegação centralizados (/hair, /skin, /kidneys, /cancer)
- Botão de alternância de idioma (EN/PT)
- CTAs para WhatsApp e Contato
- Indicador visual da página atual

#### **HeroSection**
- Altura de 100vh para impacto visual máximo
- Headlines dinâmicos baseados na rota:
  - Cabelo: "CABELOS SAUDÁVEIS COMEÇAM COM ÁGUA PURA."
  - Pele: "PELE RADIANTE, FINALMENTE."
  - Rins: "PROTEJA SEUS RINS, NATURALMENTE."
  - Câncer: "A PREVENÇÃO COMEÇA COM ÁGUA ALCALINA."
- Subtítulos específicos para cada área de foco
- **Animação Unicorn Studio**: Integração com projeto ID `D4Wf15X9ZwUJ7WXEmEAN`
- Animação de partículas de água profissional e responsiva
- CTA integrado com WhatsApp

#### **TestimonialMarquee**
- Duas fileiras com 10 cards cada
- Animação infinita (superior para esquerda, inferior para direita)
- Depoimentos reais com avatars, nomes, citações e localizações
- Design de cards elegante com efeitos hover

#### **HowItWorksSection**
- Processo de 3 etapas com ícones Lucide React
- Animações de entrada com IntersectionObserver
- Linhas de conexão animadas entre os passos
- Cards com hover effects e numeração

#### **BenefitsGrid**
- Conteúdo completamente dinâmico baseado na rota
- 6 benefícios específicos por área de saúde
- Layout responsivo (1/2/3 colunas)
- Ícones temáticos e descrições detalhadas

#### **FAQSection**
- 8 perguntas frequentes com accordion ShadCN
- Conteúdo traduzido para ambos os idiomas
- Design harmonioso com o tema da aplicação

#### **ConversionSection**
- Mensagens de urgência dinâmicas por rota
- Estatísticas sociais (50.000+ clientes, 99.9% pureza)
- CTAs duplos (principal e consulta gratuita)
- Indicadores de confiança (garantia 60 dias, instalação gratuita)

### 🎬 **Integração Unicorn Studio**

#### **Animação de Background Hero**
A seção hero utiliza uma animação profissional criada no Unicorn Studio para o background de partículas de água:

```html
<div data-us-project="D4Wf15X9ZwUJ7WXEmEAN" 
     className="w-full h-full"
     style={{ minHeight: '100vh', minWidth: '100vw' }} />
```

#### **Configuração Técnica**
- **Projeto ID**: `D4Wf15X9ZwUJ7WXEmEAN`
- **CDN Version**: v1.4.30
- **Auto-inicialização**: Script carregado no `<head>`
- **Posicionamento**: Background completo da hero section (z-index: 1)
- **Overlay Content**: Títulos e botões com z-index superior (z-index: 20)
- **Responsividade**: 100% width/height com object-fit cover forçado via CSS
- **Fallback**: Gradiente CSS caso a animação não carregue

#### **Performance & UX**
- **Lazy Loading**: Animação carrega após script principal
- **Fallback Graceful**: Background gradiente como fallback
- **Otimização**: Canvas redimensiona automaticamente
- **Overlay Inteligente**: Texto com sombras sutis para legibilidade
- **Z-Index Management**: Camadas organizadas (background: 1, overlay: 10, content: 20)

### 🔧 **Sistema de Internacionalização**

#### **LanguageContext**
```typescript
interface LanguageContextType {
  language: 'en' | 'pt'
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}
```

#### **Estrutura de Tradução**
O sistema de tradução organiza as chaves por contexto:
```typescript
'nav.hair': 'Cabelo' | 'Hair'
'hero.hair.headline': 'CABELOS SAUDÁVEIS...' | 'HEALTHY HAIR...'
'benefits.hair.shine.title': 'Mais Brilho' | 'Increased Shine'
'faq.q1': 'O que é água alcalina...' | 'What is alkaline water...'
```

#### **Funcionalidades do Sistema i18n**
- **Detecção Automática**: Detecta idioma do navegador (pt-* → português)
- **Persistência**: Salva preferência no localStorage
- **Fallback**: pt → en → chave original
- **Performance**: Sem re-renderização desnecessária
- **TypeScript Safe**: Tipagem completa com fallbacks

### 📱 **Integração WhatsApp**

Todos os botões WhatsApp geram mensagens específicas:

**Português:**
- Home: "Olá, gostaria de saber mais sobre as soluções Salus Water."
- Cabelo: "Olá, vim da página de cabelo e gostaria de saber mais..."
- Consulta: "Olá, gostaria de agendar uma consulta gratuita..."

**English:**
- Home: "Hi, I would like to know more about Salus Water solutions."
- Hair: "Hi, I came from the hair page and would like to know more..."
- Consultation: "Hi, I would like to schedule a free consultation..."

### 🎨 **Sistema de Design**

#### **Paleta de Cores**
```css
/* Primárias */
--primary-blue-600: #2563eb
--primary-blue-700: #1d4ed8
--green-600: #16a34a (WhatsApp)
--green-700: #15803d

/* Gradientes */
from-blue-50 to-white (backgrounds)
from-blue-600 via-blue-700 to-blue-800 (conversion)
```

#### **Animações Personalizadas**
```css
/* Marquee infinito */
@keyframes marquee-left { /* 60s linear infinite */ }
@keyframes marquee-right { /* 60s linear infinite */ }

/* Animação de água */
@keyframes water-flow { /* 8s ease-in-out infinite */ }

/* Fade in com IntersectionObserver */
@keyframes fadeInUp { /* 0.6s ease-out */ }
```

#### **Responsividade**
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid Layouts**: Adaptação automática baseada no viewport
- **Typography**: Escalas responsivas (text-3xl md:text-4xl lg:text-5xl)

## 🛠️ **Comandos de Desenvolvimento**

### **Instalação**
```bash
npm install
```

### **Desenvolvimento**
```bash
npm run dev
# Servidor local em http://localhost:3000
```

### **Build de Produção**
```bash
npm run build
# Gera build otimizado com ~148kB por página
```

### **Iniciar Produção**
```bash
npm start
# Serve a aplicação buildada
```

## 📦 **Dependências Principais**

### **Core**
- **Next.js 15.5.2**: Framework React com App Router
- **React 19.1.0**: Biblioteca principal
- **TypeScript**: Tipagem estática completa
- **TailwindCSS v4**: Framework CSS utilitário

### **UI Components**
- **@radix-ui/react-***: Componentes headless acessíveis
- **ShadCN/UI**: Sistema de componentes customizados
- **lucide-react**: Ícones SVG otimizados
- **class-variance-authority**: Gerenciamento de variantes CSS

### **Otimizações**
- **clsx**: Manipulação condicional de classes
- **tailwind-merge**: Merge inteligente de classes Tailwind
- **tw-animate-css**: Animações CSS adicionais

## 🚀 **Performance e SEO**

### **Otimizações de Performance**
- **SSG (Static Site Generation)**: Todas as páginas são pré-renderizadas
- **Tree Shaking**: Apenas código usado é incluído no bundle
- **Image Optimization**: Componentes Next.js otimizados
- **CSS Purging**: Apenas CSS usado é incluído

### **Métricas de Build**
```
Route (app)                    Size    First Load JS
┌ ○ /                           0 B         148 kB
├ ○ /hair                       0 B         148 kB  
├ ○ /skin                       0 B         148 kB
├ ○ /kidneys                    0 B         148 kB
└ ○ /cancer                     0 B         148 kB
```

### **SEO**
- **Meta Tags**: Configurados para cada página
- **Semantic HTML**: Estrutura acessível
- **Schema Markup**: Preparado para implementação
- **Open Graph**: Meta tags para redes sociais

## 🔐 **Configurações de Segurança**

### **Headers de Segurança**
- Configurações Next.js para CSP
- Headers de segurança recomendados
- Sanitização de inputs WhatsApp

### **Environment Variables**
```bash
# .env.local (exemplo)
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🎯 **Roadmap e Melhorias Futuras**

### **Próximas Implementações**
- [x] **Animação de partículas de água no background hero** (✅ Implementado com Unicorn Studio)
- [ ] Integração com CMS (Sanity/Strapi)
- [ ] Sistema de analytics avançado
- [ ] A/B testing para conversão
- [ ] PWA (Progressive Web App)
- [ ] Chatbot integrado
- [ ] Sistema de newsletter
- [ ] Área de clientes/dashboard

### **Melhorias de Performance**
- [ ] Lazy loading para componentes não-críticos
- [ ] Service Worker para cache
- [ ] Preload de recursos críticos
- [ ] Compression de imagens WebP/AVIF

### **Funcionalidades Avançadas**
- [ ] Calculadora de benefícios personalizada
- [ ] Quiz de diagnóstico de água
- [ ] Mapa de distribuidores
- [ ] Sistema de agendamento online
- [ ] Reviews e avaliações integradas

## 📞 **Contato e Suporte**

Para dúvidas sobre desenvolvimento ou manutenção:
- **Documentação**: Este arquivo CLAUDE.md
- **Issues**: GitHub Issues para bugs
- **Suporte**: Contato via WhatsApp integrado

---

**Desenvolvido com ❤️ usando Next.js 15, TailwindCSS v4 e ShadCN/UI**

*Última atualização: Janeiro 2025*