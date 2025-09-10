### Padrões Elevados de UI/UX para Landing Pages com Acessibilidade como Pilar

A acessibilidade não é mais um "add-on" vago ou opcional em UI/UX; ela é um pilar fundamental para designs inclusivos, impulsionado por regulamentações como a ADA (Americans with Disabilities Act) e padrões globais. O padrão mais elevado e amplamente adotado é o **Web Content Accessibility Guidelines (WCAG) 2.1** (e sua evolução para WCAG 2.2 em 2025), mantido pelo W3C. Ele define quatro princípios principais: **Perceivable** (conteúdo deve ser detectável por todos os sentidos), **Operable** (interface navegável via teclado, voz ou outros dispositivos), **Understandable** (conteúdo claro e previsível) e **Robust** (compatível com tecnologias assistivas como screen readers). Big techs como Google, Apple e Microsoft incorporam esses princípios em seus frameworks de design, elevando a acessibilidade a um nível excepcional ao integrá-la desde o início do processo (não como correção posterior). Isso resulta em landing pages que não só cumprem leis, mas melhoram a UX para todos os usuários, aumentando conversões em até 20-30% em cenários reais.

Aqui vai um resumo dos padrões excepcionais usados por big techs, focando em landing pages. Eles vão além do WCAG básico, incorporando design inclusivo e testes com usuários diversos:

#### Padrões e Conceitos Excepcionais de Big Techs
- **Google (Material Design 3 - Acessibilidade Integrada):** Enfatiza "acessibilidade por padrão" com guidelines para contrastes de cor (mínimo 4.5:1 para texto, 3:1 para gráficos), tipografia escalável (suporte a dynamic type para tamanhos de fonte ajustáveis), alvos de toque grandes (mínimo 48x48 pixels para CTAs), e motion reduzida (respeitando a media query `prefers-reduced-motion` para evitar animações que causem náusea). Para landing pages, Google recomenda heros com texto alternativo para imagens de fundo e navegação sem dependência de hover. Exemplo: A landing page do Google Cloud usa contrastes elevados e ARIA labels para elementos interativos, garantindo compatibilidade com screen readers como TalkBack.
  
- **Apple (Human Interface Guidelines - Acessibilidade):** Foca em "design universal" com ênfase em VoiceOver (screen reader nativo), contrastes de cor adaptáveis (suporte a dark mode e high contrast mode), texto redimensionável sem perda de layout (até 200% de zoom), e animações pausáveis. Para landing pages, Apple prioriza estruturas semânticas (headings lógicos H1-H6) e evita elementos que dependam apenas de cor para transmitir informação (ex: usar ícones + labels em CTAs). Exemplo: A landing page do Apple Watch integra acessibilidade com tooltips visuais e suporte a Braille, testado com usuários com deficiências visuais e motoras.

- **Microsoft (Inclusive Design Principles):** Adota um abordagem "pessoas-first" com o Microsoft Inclusive Design Toolkit, que inclui WCAG mas adiciona testes de usabilidade com diversidade (ex: usuários com deficiências cognitivas). Guidelines chave: Keyboard navigation previsível (focus indicators visíveis), captions automáticas para vídeos, e design responsivo que mantém acessibilidade em telas pequenas. Para landing pages, Microsoft recomenda forms com labels associadas via `for` attributes e erro messages claras. Exemplo: A landing page do Microsoft Azure usa alt text descritivo para infográficos e suporta narradores como o Windows Narrator, com foco em robustez cross-browser.

Outros conceitos elevados comuns nessas big techs incluem:
- **Testes Automatizados e Manuais:** Usar ferramentas como WAVE, Axe ou Lighthouse para audits WCAG, combinados com testes reais com usuários (ex: Google's "empathy labs").
- **Design Inclusivo Beyond WCAG:** Considerar deficiências temporárias (ex: braço quebrado) ou situacionais (ex: sol forte no celular), como no framework de Microsoft.
- **Tendências 2025:** Integração de IA para acessibilidade dinâmica (ex: auto-geração de alt text via modelos como Google's Gemini) e foco em motion design acessível.

Esses padrões são excepcionais porque são escaláveis, testados em bilhões de usuários e priorizam ROI: landing pages acessíveis melhoram SEO (Google prioriza acessibilidade no ranking) e reduzem barreiras de conversão.

#### Análise e Sugestões para o Detalhamento UI/UX da Landing Page Salus Water
Seu time de frontend senior já tem uma base sólida: o design é clean, minimalista, com foco em cores temáticas (azuis para confiança), tipografia legível e animações sutis – isso alinha bem com WCAG Perceivable e Understandable. Elementos como espaços em branco, ícones + texto e layouts responsivos são positivos. No entanto, acessibilidade parece implícita (ex: fontes sans-serif para legibilidade), mas não explícita o suficiente para um padrão big tech. Hoje, "vago" significa não integrar WCAG desde o wireframe, levando a remediações caras. Eu agregaria diretrizes WCAG/ big tech para torná-lo excepcional, mudando pouco no visual mas adicionando robustez técnica. Aqui vai uma revisão por seção, com o que manter, mudar ou agregar. Usei uma tabela para clareza em comparações.

| Seção | O que Está Bom (Alinhado com Padrões) | O que Mudar/Agregar/Direcionar (para Acessibilidade Excepcional) |
|-------|---------------------------------------|---------------------------------------------------------------|
| **Visão Geral do Estilo Visual** | Cores temáticas (azuis para confiança); tipografia sans-serif legível; animações sutis (Framer Motion); layout clean com espaço branco. Isso suporta Perceivable e Operable. | **Agregar:** Teste contrastes de cor (ex: Salus Blue com branco deve ter ratio ≥4.5:1 via tools como Contrast Checker). Adicione media query `@prefers-reduced-motion` para pausar animações. Para elementos gráficos (ondas aquáticas), forneça alt text ou ARIA-hidden se decorativos. Direção: Integre Lighthouse audits no pipeline CI/CD, como faz Google. |
| **Cabeçalho (Header)** | Fundo transparente com blur; logo clicável; CTA visível; menu hambúrguer responsivo. Bom para mobile-first. | **Agregar:** Garanta keyboard navigation (focus indicators visíveis, ex: outline azul em hover/focus). Use ARIA roles (ex: `role="navigation"` para menu). Para blur, teste com low vision users – evite se reduzir contraste. Direção: Como Apple, adicione suporte a high contrast mode. |
| **Seção Hero** | Fundo com overlay; título/subtítulo animados; CTAs com animações; partículas flutuantes. Impactante e dinâmico. | **Mudar:** Evite animações auto-play em partículas (use `prefers-reduced-motion` para estática). **Agregar:** Alt text descritivo para imagem de fundo (ex: "Mulher com cabelo saudável bebendo água pura"). CTAs: Tamanhos ≥48x48px; labels ARIA (ex: `aria-label="Fale conosco para melhorar sua saúde capilar"`). Direção: Inspire-se em Microsoft para não depender de cor (ex: adicione padrões texturais para daltonismo). |
| **Seção de Prova Social/Credibilidade** | Carrossel de depoimentos; selos com tooltips; Google Reviews destacados. Reforça autoridade. | **Agregar:** ARIA para carrossel (ex: `role="region" aria-live="polite"` para updates). Alt text para imagens 'antes/depois' (ex: "Antes: Cabelo seco; Depois: Cabelo hidratado"). Estrelas: Use SVG com fill acessível, não só cor. Direção: Como Google, teste com screen readers para fluidez. |
| **Seção 'Como Funciona'** | Cards com ícones + texto; infográfico interativo; animações sequenciais. Claro e educativo. | **Agregar:** Ícones com labels textuais (não só visuais). Infográfico: Torne interativo keyboard-accessible (ex: tabindex). Para diagramas, forneça texto alternativo ou versão textual. Direção: Adote Apple's dynamic type para textos escaláveis sem quebrar layout. |
| **Seção de FAQ** | Acordeão com animação; barra de busca. Fácil de usar. | **Mudar:** Garanta expansão via keyboard (Enter/Space). **Agregar:** ARIA-expanded para estados; focus management (foco vai para corpo ao abrir). Busca: Label implícita (`aria-label="Buscar FAQs"`). Direção: Categorize com tabs keyboard-navegable, como em Microsoft designs. |
| **CTA Final** | Fundo vibrante; título/subtítulo; botão WhatsApp. Chamativo. | **Agregar:** Gatilho de urgência com timer acessível (não auto-desapareça). Botão: `aria-label` completo; teste touch targets. Direção: Integre captions se houver vídeo implícito, alinhado a WCAG. |
| **Rodapé (Footer)** | Colunas responsivas; ícones com hover; links legais. Sólido. | **Agregar:** Skip links no topo (ex: "Pular para rodapé") para keyboard users. Ícones sociais: Alt text ou ARIA. Direção: Como big techs, adicione sitemap acessível para crawlers e users. |
| **Elementos Visuais e Autoridade** | Caixas de texto com fundos escuros; citações em cards; dados com ícones. Profissional. | **Agregar:** Para caixas navy/branco, cheque contraste (texto branco em navy OK se ≥4.5:1). Imagens de impacto: Alt text detalhado. **Mudar:** Bordas vermelhas para alertas – adicione ícones + texto para não depender de cor. Direção: Use Microsoft's toolkit para validar com usuários reais. |

**Direções Gerais para o Time Senior:**
- **Integre desde o Início:** Adote WCAG AA como mínimo (nível intermediário, adotado por big techs). Use Figma/Adobe XD plugins para checar acessibilidade em protótipos.
- **Ferramentas:** Lighthouse (Google), Axe DevTools (gratuito), ou WAVE para audits. Teste com NVDA/JAWS screen readers.
- **Mudanças de Alto Impacto:** Foque em keyboard-only navigation e contrastes – esses cobrem 50% das falhas comuns. Agregue um "Accessibility Statement" no footer, como faz Apple.
- **Agregações Estratégicas:** Adicione suporte a idiomas (lang attributes) e dark mode adaptável para inclusão global. Meça sucesso com métricas como taxa de bounce em usuários com tech assistiva.


***

## 1. Padrões Elevados de Acessibilidade — Referência das Big Techs

### A. Contraste
- Verifique todos os textos, botões, ícones e elementos interativos para que a relação de contraste atenda pelo menos o padrão AA do WCAG 2.1 (4.5:1 para texto normal, 3:1 para texto grande).
- Na área de CTA e caixas de texto em azul marinho ou azul escuro, o texto branco deve ser testado com ferramentas de contraste (ex: Contrast Checker) para garantir legibilidade máxima em todos os dispositivos, especialmente para idosos e pessoas com baixa visão.

### B. Navegação com teclado
- Todos os elementos interativos (links, botões, acordeões, carrosséis, menus) devem ser totalmente navegáveis via teclado (tab, shift+tab, enter, space).
- Foque em um estilo `:focus-visible` muito claro, com outline ou sombra visível, para garantir que o foco do teclado seja evidente.
- No menu hambúrguer móvel, garantir que o foco fique “travado” dentro do menu enquanto aberto (focus trap).

### C. Texto legível e dimensionamento dinâmico
- Use unidades relativas (em/rem/%) para tamanhos de fonte e espaçamentos, garantindo que o usuário possa ampliar o zoom ou ajustar o zoom do navegador sem quebra de layout.
- Evite textos muito pequenos; o corpo ideal está entre 16-18px com altura de linha confortável (1.4 a 1.6).

### D. Uso semântica ARIA e HTML acessível
- Botões e links semânticos (`<button>`, `<a>`) com atributos ARIA corretos para estado (ex: `aria-expanded` para acordeões).
- Imagens com `alt` descritivo e significativo para quem usa leitores de tela, principalmente em depoimentos e ícones.
- Elementos decorativos (ex: partículas flutuantes) devem ser ignorados pelos leitores de tela (ex: `aria-hidden="true"`).
- Para componentes interativos complexos (carrossel, acordeão, infográfico interativo), usar roles ARIA apropriados e anunciar mudanças de conteúdo dinamicamente para leitores de tela.

### E. Inclusão de texto alternativo e transcrição
- Vídeos (se houver) com legenda e texto transcrito.
- Ícones importantes acompanham texto ou descrição alternativa.
- Para infográficos interativos, garantir versões estáticas ou alternativas textuais descritivas acessíveis.

***

## 2. Sugestões Específicas para seu Design Atual

### Cabeçalho
- O botão de CTA pulsante: garantir que a animação não distraia e seja desativável para usuários sensíveis (uso de `prefers-reduced-motion`).
- Links com texto claro e descritivo — evitar termos genéricos e dar contexto no `aria-label`.

### Seção hero
- Título em fonte Coolvetica bonito, porém confirme que a fonte tem boa legibilidade e suporte para leitores de tela (algumas fonts display podem ser problemáticas em acessibilidade se usar só por estilo). Pode ser interessante combinar com fallback para sans-serif acessível.
- Use tags semânticas `<h1>` na headline principal.
- Os botões de CTA com foco de teclado visível e descrição clara.
- Evite text overlays em imagens complexas sem contraste suficiente — seu overlay gradiente ajuda, ótimo.

### Carrossel de depoimentos
- Controle acessível: botões “próximo”, “anterior” por teclado e que anunciema mudança para leitores de tela via `aria-live`.
- Considerar limite de autoplay — ou controle para pausar animação automática.
- Fotos dos clientes com `alt` descritivo (“Foto de [Nome do cliente]”).

### Seção de FAQ (Acordeão)
- Use elementos `<button>` para cabeçalhos, com estados corretos ARIA.
- A barra de busca para filtrar FAQ deve ser acessível via teclado e usar `aria-live` para anunciar resultados filtrados.
- O acordeão deve permitir abrir múltiplos itens (ou apenas um, dependendo do contexto), anunciado para leitor de tela.

### Infográfico/Diagrama Interativo
- Muito cuidado: componentes interativos devem ser completamente acessíveis. Testar com teclado e leitores de tela.
- Oferecer alternativa textual detalhada para o infográfico, visível de forma fácil (botão “Descrição detalhada”, fallback para texto).
- Animações devem considerar `prefers-reduced-motion`.

### Animações Gerais (Framer Motion)
- Incluir respeitar preferências de redução de animação (`prefers-reduced-motion`) para evitar desconforto e garantir foco acessível.

### Rodapé
- Links legais e sociais devem ser navegáveis e ter descrição acessível (`aria-label` com o nome completo da rede social).
- Ícones com texto associado para quem usa leitor de tela.

***

## 3. Ferramentas e Padrões para Medir e Garantir Acessibilidade

- **WCAG 2.1** (nível AA como padrão mínimo) é referência universal.
- Usar ferramentas como:
  - Lighthouse (Google Chrome DevTools)
  - Axe Accessibility (plugin para navegador)
  - WAVE Accessibility Evaluation Tool
  - Contrast Checker para cores
- Testes com leitores de tela (NVDA, VoiceOver, TalkBack).
- Teste real escola de usuário, se possível.

***

## 4. Recomendação de Documentos/Guia Rápido para o Time Frontend

- Documentação clara dos padrões de acessibilidade adotados.
- Checklist de acessibilidade para cada componente (botão, carrossel, acordeão, etc.)
- Style guide com exemplos de contraste, tamanhos de fonte, estados de foco.
- Uso consistente de roles e propriedades ARIA.
- Políticas claras para animações e efeitos (ex: “usar @media (prefers-reduced-motion: reduce)”).

***

## Resumo: O que Agregar ao Seu Padrão Hoje?

| Pilar | O que reforçar ou ampliar |
|-|-|
| Contraste | Garantir contraste suficiente e consistente em toda interface |
| Navegação teclado | 100% navegável e foco claro em todos botões, links, controles |
| ARIA/Semântica | Atributos para leitores de tela, roles ARIA corretos, labels contextuais |
| Texto alternativo | Em ícones, imagens, logos, elementos interativos |
| Animações | Respeitar `prefers-reduced-motion` e não criar distrações |
| Infográficos | Alternativas textuais completas e acessíveis independente da interação |
| Testes | Automatizados e manuais, inclusive em leitores de tela reais |
| Documentação | Guia claro para o time, integrando acessibilidade no processo |

***


### MOBILE PRINCIPLES

Para garantir uma **responsividade completa e excelentes práticas profissionais em mobile** para a landing page Salus Water, considere os seguintes pontos fundamentais que são adotados pelas grandes empresas e times de frontend senior:

***

## 1. Design Mobile-First

- Comece o desenvolvimento planejando para telas pequenas primeiro e escalando para telas maiores, garantindo que o conteúdo principal e funcionalidades essenciais estejam perfeitos no mobile.
- Simplifique a interface para dispositivos móveis, priorizando clareza, legibilidade e usabilidade.

## 2. Layout Fluido e Grid Responsivo

- Use unidades relativas como %, vw, vh, em e rem para tamanhos, margens e espaçamentos.
- Implemente um grid flexível (CSS Flexbox ou CSS Grid) para organizar os elementos, que se adapte a diferentes larguras de tela, evitando quebras ou necessidade excessiva de scroll horizontal.
- Garanta stack vertical de colunas quando a largura for reduzida (ex: cards na seção 'Como funciona' ficam empilhados).

## 3. Imagens e Mídia Otimizadas para Mobile

- Implemente imagens responsivas via `srcset` e `sizes` para carregar versões menores em dispositivos móveis, economizando dados e acelerando o carregamento.
- Use formatos modernos (WebP, AVIF) quando possível.
- Controle o tamanho máximo para evitar overflow e garanta que imagens respeitem o tamanho do contêiner.

## 4. Tipografia Adequada

- Ajuste tamanhos de fonte para telas pequenas sem perder legibilidade (ex: corpo do texto mínimo de 16px, títulos proporcionais).
- Use espaçamento confortável entre linhas (line-height) e parágrafos para leitura no mobile.
- Evite fonte muito condensada ou difícil de ler em telas pequenas.

## 5. Interatividade e Usabilidade Touch

- Botões, links e controles devem ter tamanho mínimo 44x44px (recomendado pela Apple e WCAG) para toque confortável.
- Espaçamento suficiente entre elementos clicáveis para evitar toques errados.
- Feedback visual claro em toque (efeitos de clique, foco).

## 6. Navegação Mobile

- O menu hambúrguer deve abrir e fechar com animação suave, ser facilmente acessível com o polegar e ter foco claro.
- Links dentro do menu devem ter espaçamento e tamanho para toque.
- O botão CTA no header deve continuar visível e fácil de acessar no mobile, sem sobrecarregar a interface.

## 7. Performance e Otimização

- Minimize CSS, JS e use carregamento assíncrono para scripts não essenciais.
- Evite grandes bibliotecas quando pequenas soluções nativas são suficientes.
- Priorize renderização rápida do conteúdo visível (First Contentful Paint).
- Utilize lazy loading em imagens e componentes abaixo da dobra da página.

## 8. Testes em Dispositivos Reais e Emuladores

- Teste em múltiplos dispositivos (iOS, Android), tamanhos e orientações (portrait, landscape).
- Utilize ferramentas como Chrome DevTools Device Mode para simular diferentes tamanhos.
- Avalie também em redes móveis lentas para ajustar performance e experiência.

## 9. Considerações para Layouts Específicos

- Seções com carrossel devem permitir navegação por swipe (toque deslizante).
- Layouts como o acordeão FAQ devem ser altamente usáveis em tela pequena com toque fácil na área do cabeçalho.
- Animações sutis devem ser otimizadas para não consumir muita bateria ou processamento em mobiles.

***


### Padrões Elevados e Melhores Práticas para Responsividade Mobile Completa em Landing Pages

A responsividade mobile não é apenas sobre "adaptar" o design; em 2025, é um requisito profissional impulsionado por big techs como Google e Apple, que priorizam mobile-first para capturar os ~60% de tráfego global vindo de dispositivos móveis. O padrão ouro continua sendo o **Mobile-First Design** combinado com WCAG para acessibilidade, mas evoluído com técnicas como CSS Grid/Flexbox, media queries otimizadas e performance focada em Core Web Vitals (LCP <2.5s, FID <100ms). Big techs como Google enfatizam layouts flexíveis que começam pequenos e escalam, evitando erros comuns como elementos fixos que causam overflow ou CTAs pequenos demais para toques. Exemplos excepcionais incluem landing pages do Google Cloud (simples, com navegação collapsível) e Apple Services (adaptáveis com dynamic type e touch-friendly).

Melhores práticas profissionais em 2025 incluem:
- **Mobile-First Approach:** Desenvolva para telas pequenas primeiro (ex: 320px), adicionando breakpoints para maiores (ex: 600px, 1024px). Use unidades relativas (%, em, rem) em vez de pixels fixos.
- **Layouts Adaptáveis:** Empregue Flexbox para alinhamentos unidimensionais e CSS Grid para grids bidimensionais, garantindo que conteúdo reordene logicamente em mobile (ex: stack vertical).
- **Imagens e Mídia:** Imagens responsivas com `max-width: 100%`, srcset para resoluções variadas, e lazy loading para performance.
- **Navegação e Interações:** Menus hambúrguer para mobile, touch targets ≥48x48px, e evite hover-dependentes (use :focus e :active).
- **Performance e SEO:** Meta viewport tag obrigatório (`<meta name="viewport" content="width=device-width, initial-scale=1">`), compressão de assets, e testes com Lighthouse para mobile scores >90.
- **Integração com Acessibilidade:** Combine com WCAG: contrastes mantidos em zoom, keyboard navigation em mobile views, e reduced motion para animações.
- **Testes Profissionais:** Use emuladores (Chrome DevTools Device Mode), testes reais em dispositivos variados (iOS/Android), e ferramentas como BrowserStack. Monitore com Google Analytics para bounce rates mobile.

Essas práticas elevam conversões em até 50% em landing pages, como visto em exemplos de OptinMonster e Unbounce, onde designs simplificados e rápidos dominam.

#### Análise e Sugestões para o Detalhamento UI/UX da Landing Page Salus Water (Foco em Mobile Responsividade)

Seu design atual já incorpora elementos responsivos, como menu hambúrguer e layouts que empilham em mobile, alinhando-se a práticas básicas. No entanto, para um nível profissional big tech, agregue mobile-first completo: comece codificando para mobile, teste performance rigorosamente e evite overflows ou toques imprecisos. Mantenha o visual clean, mas otimize para telas <600px, reduzindo complexidade (ex: menos animações em conexões lentas). Aqui vai uma revisão por seção, com o que manter, mudar ou agregar. Usei uma tabela para clareza.

| Seção | O que Está Bom (Alinhado com Práticas) | O que Mudar/Agregar/Direcionar (para Responsividade Mobile Excepcional) |
|-------|---------------------------------------|---------------------------------------------------------------|
| **Visão Geral do Estilo Visual** | Layout clean com espaço branco; animações sutis (Framer Motion); cores e tipografia escaláveis. Suporta mobile com sans-serif legíveis. | **Agregar:** Adote mobile-first CSS: estilos base para small screens, media queries para @media (min-width: 600px) adicionando complexidade. Use rem para fontes (base 16px, escalável até 200%). Para animações, adicione @prefers-reduced-motion: reduce { animation: none; }. Direção: Teste com Lighthouse mobile tab para scores >90 em performance. |
| **Cabeçalho (Header)** | Fundo transparente com blur; menu hambúrguer com animação suave; CTA visível. Bom para mobile navigation. | **Mudar:** Evite blur se causar lentidão em devices low-end (teste FPS). **Agregar:** Touch targets ≥48x48px para logo/links; use role="button" em hambúrguer com aria-expanded. Em mobile, priorize CTA acima do fold. Direção: Como Google, switch para hambúrguer em <600px, mantendo keyboard focus order lógico. |
| **Seção Hero** | Fundo com overlay e padrão de ondas; títulos/subtítulos animados; CTAs centralizados. Responsivo com fade-in. | **Mudar:** Partículas flutuantes – pause em mobile para economia de bateria. **Agregar:** Imagem de fundo com srcset (ex: <img srcset="hero-320w.jpg 320w, hero-600w.jpg 600w">); meta viewport para prevenir zoom inicial. Stack vertical em portrait. Direção: Otimize para LCP <2.5s com lazy loading; teste em 3G simulado. |
| **Seção de Prova Social/Credibilidade** | Carrossel horizontal; cards com fade-in; selos com tooltips. Alterna bem para stack em mobile. | **Agregar:** Carrossel touch-swipe enabled (use libraries como Swiper.js com aria-controls); imagens 'antes/depois' com aspect-ratio: auto para evitar distorção. Reduza cards por view em mobile (ex: 1 por slide). Direção: Evite auto-play; adicione botões next/prev ≥48px. Inspire-se em Unbounce para conversões mobile altas. |
| **Seção 'Como Funciona'** | Cards lado a lado em desktop, empilhados em mobile; infográfico interativo com animações sequenciais. Claro em small screens. | **Agregar:** Use CSS Grid (grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))) para auto-adjust; ícones SVG inline para scaling perfeito. Infográfico: Versão simplificada em mobile (ex: accordion para passos). Direção: Breakpoints baseados em conteúdo (ex: @media (max-width: 500px) { font-size: 14px; }) para legibilidade. |
| **Seção de FAQ** | Acordeão com expansão suave; barra de busca clean. Empilha naturalmente em mobile. | **Agregar:** Acordeão touch-friendly com padding extra em headers (≥44px height); busca com autocomplete para teclados mobile. Direção: Foque em keyboard + touch: use :active states; teste overflow em portrait. |
| **CTA Final** | Fundo vibrante; botão proeminente com pulsação. Chamativo em qualquer tela. | **Mudar:** Pulsação sutil – reduza frequência em mobile para evitar distração. **Agregar:** Botão full-width em <400px; touch target grande. Gatilho de urgência: Use timer acessível sem auto-refresh. Direção: Posicione acima do fold em mobile para conversões rápidas, como em OptinMonster examples. |
| **Rodapé (Footer)** | Colunas empilhadas em mobile; ícones com hover. Sólido e compacto. | **Agregar:** Stack vertical prioritário; links com line-height 1.5 para toques fáceis. Direção: Adicione "back to top" button em mobile, com smooth scroll. |
| **Elementos Visuais e Autoridade** | Caixas com fundos escuros; imagens de impacto; dados com ícones. Adaptam bem. | **Agregar:** Caixas com flex-wrap para wrap em mobile; imagens com object-fit: cover. Para alertas (bordas vermelhas), use media queries para espaçamento extra. Direção: Compressão de imagens (WebP format) para loads <1s; integre com acessibilidade (alt text escalável). |

**Direções Gerais para o Time Senior:**
- **Implementação Mobile-First:** Reestruture CSS: base styles para mobile, então @media (min-width) para desktop. Evite !important; use cascade natural.
- **Ferramentas e Testes:** Integre DevTools Device Mode para breakpoints; BrowserStack para devices reais. Monitore com GTmetrix para mobile speed.
- **Mudanças de Alto Impacto:** Adicione viewport meta global; otimize animações e imagens para <50kb por asset. Isso reduz bounce rates em 20-30%.
- **Agregações Estratégicas:** Suporte a orientação (portrait/landscape) com media queries; integre PWA features para offline mobile se aplicável. Foque em inclusividade: teste com usuários mobile diversos.

Isso garante uma landing page Salus Water profissional, rápida e conversora em mobile, alinhada a big techs. Se precisar de exemplos de código ou audits específicos, forneça mais detalhes!
