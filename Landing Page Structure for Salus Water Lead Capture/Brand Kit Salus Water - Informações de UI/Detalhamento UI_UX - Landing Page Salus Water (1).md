# Detalhamento UI/UX - Landing Page Salus Water

## Visão geral do estilo visual

A Landing Page da Salus Water será inspirada no estilo visual do material de workshop, caracterizado por:

- **Cores:** Predominância de tons de azul (Salus Blue, Salus Teal, Salus Navy) e branco, com toques de verde (Mint) e laranja (Orange) para CTAs e destaques. O azul transmite pureza, confiança e tecnologia.
- **Tipografia:** Uso da fonte Coolvetica para títulos e elementos de destaque, conferindo um ar moderno e profissional. Fontes sans-serif limpas e legíveis para o corpo do texto, garantindo acessibilidade.
- **Elementos Gráficos:** Ondas, padrões aquáticos e texturas sutis de água serão utilizados como fundos e elementos de transição entre as seções, reforçando a identidade da marca.
- **Layout:** Clean, minimalista e com bastante espaço em branco para focar a atenção no conteúdo. Uso de caixas de texto com fundos sólidos (principalmente azul escuro) para destacar informações importantes e transmitir autoridade.
- **Imagens:** Visuais de alta qualidade, que transmitam bem-estar, saúde e tecnologia, alinhados com a proposta da Salus Water.
- **Animações:** Animações sutis e fluidas (Framer Motion) para elementos como botões, cards e seções, proporcionando uma experiência de usuário moderna e dinâmica.

## Detalhamento UI/UX por seção

### 1. Cabeçalho (header) 

- **Layout:** Fixo no topo da página, com um fundo transparente que se torna branco translúcido (com `backdrop-filter: blur`) ao rolar a página, mantendo a visibilidade do conteúdo abaixo.
- **Logo:** No canto superior esquerdo, o logo da Salus Water (verde e azul) em tamanho proeminente, clicável para a página inicial.
- **Navegação (Opcional/Mínima):** Links discretos para seções âncora da página (ex: 



'Como Funciona', 'Depoimentos', 'FAQ'), com transições suaves ao clicar.
- **Botão CTA:** Um botão proeminente "Fale Conosco" (cor Salus Blue, texto branco, com animação sutil de pulsação) no canto superior direito, visível em todas as páginas.
- **Responsividade:** Menu hambúrguer para dispositivos móveis, com animação de abertura e fechamento suave, revelando os links de navegação e o CTA.

### 2. Seção hero (específica por rota) 

- **Fundo:** Imagem de alta qualidade relacionada ao tema da rota (cabelo, pele, rins, prevenção) com um overlay de gradiente azul escuro (`salus-navy`) para azul claro (`salus-blue` ou `salus-teal`) com 70% de opacidade, criando um efeito de profundidade e foco no texto. O fundo terá um sutil padrão de ondas ou bolhas de água para reforçar a marca.
- **Título:** Grande, impactante, em `font-coolvetica` (cor branca), centralizado e com animação de fade-in e slide-up. Ex: "Cansado(a) de Cabelos Fracos e sem Vida?"
- **Subtítulo:** Texto persuasivo (cor cinza claro), abaixo do título, com animação de fade-in e slide-up, explicando brevemente a solução da Salus Water.
- **CTA Primário:** Botão "Quero [Benefício]! Fale com a Salus Water" (cor Salus Blue, texto branco, com animação de pulsação suave e efeito de 'bounce' sutil para chamar a atenção). Posicionado abaixo do subtítulo, centralizado.
- **CTA Secundário (Saiba Mais):** Botão com estilo `outline` (borda branca, texto branco, fundo transparente, hover para fundo azul marinho e texto branco) para guiar o usuário para a próxima seção, com um ícone de seta para baixo e animação de scroll-down.
- **Elementos Visuais:** Pequenas partículas de água ou bolhas animadas flutuando suavemente no fundo para adicionar dinamismo.

### 3. Seção de prova social/credibilidade

- **Fundo:** Um fundo sutilmente texturizado com um padrão de água ou um gradiente muito suave de branco para um azul claríssimo, transmitindo leveza e pureza.
- **Título:** "O que nossos clientes dizem" ou "Confiança que você pode sentir" (cor `salus-navy`, `font-coolvetica`), centralizado.
- **Depoimentos e 'Antes e Depois':** Exibidos em um carrossel horizontal, alternando entre depoimentos de clientes e imagens de 'antes e depois' (como a do slide 30). Os cards de depoimento terão o formato já descrito, enquanto os de 'antes e depois' mostrarão a transformação de forma impactante, com os selos 'Antes' e 'Depois' em destaque. Cada card terá:
    - **Fundo:** Branco ou um gradiente muito suave de branco para azul claro.
    - **Borda:** Uma borda fina e sutil em `salus-blue` ou `salus-teal`.
    - **Conteúdo:** Foto do cliente (circular), nome, texto do depoimento (entre aspas, em `font-sans`, cor `gray-700`), e avaliação em estrelas (ícones de estrela dourados).
    - **Animação:** Cards aparecendo com fade-in e leve slide-up ao entrar na viewport.
- **Selos de Certificação/Reconhecimento:** Uma linha de logos de certificações (ex: NSF, WQA, etc.) e prêmios, em tons de cinza ou com um leve brilho metálico, posicionados abaixo dos depoimentos. Ao passar o mouse, um tooltip com o nome da certificação aparece.
- **Mídia:** Se houver menções na mídia, logos de veículos de comunicação em tons de cinza, com um link para a matéria ao clicar.
- **Google Reviews:** Um grande destaque para "5 Stars Google Reviews" (conforme slide 4 do PDF), com o logo do Google e estrelas douradas proeminentes, reforçando a autoridade e a confiança.

### 4. Seção 'Como funciona' (solução geral) 

- **Fundo:** Um fundo limpo e claro, talvez com um padrão geométrico sutil em tons de azul claro ou cinza, que remeta à tecnologia e precisão.
- **Título:** "Como a Salus Water transforma sua água" (cor `salus-navy`, `font-coolvetica`), centralizado.
- **Explicação Simplificada (3 Passos):** Apresentada em 3 cards ou blocos distintos, lado a lado em desktop e empilhados em mobile. Cada bloco terá:
    - **Ícone:** Um ícone grande e claro (ex: gota d'água, filtro, torneira) representando o passo, em `salus-blue` ou `salus-mint`.
    - **Título do Passo:** Curto e direto (ex: "Purificação", "Alcalinização", "Hidratação").
    - **Descrição:** Breve texto explicando o passo e seus benefícios.
    - **Animação:** Cada bloco aparece com um delay sutil, um após o outro, com fade-in e slide-up.
- **Infográfico/Diagrama:** Um infográfico detalhado e visualmente rico, inspirado nos slides da apresentação (como o slide do sistema de purificação e do espectro de pH). O infográfico deve ser interativo, com animações que destacam cada etapa do processo de purificação e os benefícios associados. A paleta de cores deve ser vibrante e informativa, como visto nos exemplos.
- **Benefícios Gerais:** Uma lista de 3-4 benefícios chave da água Salus Water, apresentados em formato de ícone + texto, com animações de entrada.

### 5. Seção de perguntas frequentes (FAQ) 

- **Fundo:** Um fundo neutro, talvez um branco puro ou um cinza muito claro, para focar na legibilidade do texto.
- **Título:** "Perguntas frequentes" (cor `salus-navy`, `font-coolvetica`), centralizado.
- **Formato Acordeão:** Utilizar o componente `Accordion` detalhado na arquitetura. Cada item do acordeão terá:
    - **Cabeçalho:** Fundo branco, texto da pergunta em `salus-navy`, com um ícone de seta (`ChevronDown`) que gira ao abrir/fechar.
    - **Corpo:** Fundo `gray-50` (muito claro), texto da resposta em `gray-700`, com animação suave de expansão/colapso.
    - **Busca:** Uma barra de busca no topo da seção para filtrar as perguntas, com ícone de lupa (`Search`) e estilo clean.
- **Categorização:** Se houver muitas FAQs, considerar abas ou filtros para categorias (ex: Geral, Produto, Saúde, Instalação).

### 6. Chamada para ação (CTA) final

- **Fundo:** Um fundo vibrante, talvez um gradiente de `salus-blue` para `salus-orange` ou `salus-mint`, para criar um contraste forte e chamar a atenção. Pode ter um padrão de ondas estilizadas.
- **Título:** "Pronto para transformar sua saúde com a Salus Water?" (cor branca, `font-coolvetica`), centralizado e grande.
- **Subtítulo:** "Fale conosco agora e descubra a diferença que a água pura e alcalina pode fazer na sua vida." (cor branca, `font-sans`), centralizado.
- **Botão de WhatsApp:** O CTA principal, grande e proeminente, com texto "Fale Conosco no WhatsApp" ou "Quero Água Pura e Saudável!" (cor `salus-orange` ou `salus-blue`, texto branco, com animação de pulsação e hover effect). Centralizado.
- **Gatilho de Urgência/Escassez (Opcional):** Se aplicável, um pequeno texto abaixo do botão (ex: "Oferta válida por tempo limitado!") em cor branca ou amarela clara.

### 7. Rodapé (footer) 

- **Fundo:** `salus-navy` (azul marinho escuro), transmitindo solidez e confiança.
- **Layout:** Dividido em colunas (informações da empresa, contato, links úteis, redes sociais) para desktop, empilhadas em mobile.
- **Informações de Contato:** Ícones (`Phone`, `Mail`, `MapPin`) em `salus-blue` ou `salus-mint` ao lado das informações de contato.
- **Links Legais:** Política de Privacidade, Termos de Uso, em texto cinza claro, com hover para branco.
- **Redes Sociais:** Ícones (`Instagram`, `Facebook`, `Youtube`, `Linkedin`) em `salus-blue` ou `salus-mint`, com hover effect para um fundo `salus-blue` mais escuro.
- **Copyright:** Texto em cinza claro, no final do rodapé.

## Elementos visuais e detalhes de autoridade

### Caixas de texto e fundos

- **Textos de Destaque:** Para frases de impacto ou dados importantes (como os da página 3 do PDF: "Levamos saúde através de uma água de qualidade para as famílias"), utilizar caixas retangulares com fundo `salus-navy` (azul marinho escuro) e texto branco. Essas caixas podem ter bordas arredondadas e uma sombra sutil para dar profundidade. Animações de entrada (fade-in, slide-from-left) serão aplicadas.
- **Citações/Depoimentos:** Os cards de depoimento terão um fundo branco ou muito claro, com uma borda sutil em `salus-blue` e uma sombra leve. O texto do depoimento será em `gray-700` com a fonte `sans-serif` padrão, e o nome do cliente em `font-coolvetica`.
- **Informações de Risco/Problema:** Nas seções que abordam os problemas (ex: queda de cabelo, problemas renais), o texto descritivo pode estar em um bloco de fundo branco ou cinza claro, com uma borda superior em `salus-red` para indicar um alerta ou problema, e o título da seção em `salus-red`.

### Transmitindo autoridade e profundidade intelectual

- **Dados e Estatísticas:** Quando apresentar dados (ex: "Mais de 4.000 famílias conscientizadas"), usar um estilo visual similar às caixas de texto de destaque, com fundo `salus-navy` e texto branco, com ícones relevantes ao lado dos números para visualização rápida.
- **Certificações e Prêmios:** Exibir os logos das certificações de forma proeminente na seção de Prova Social, com um design clean e profissional. Considerar um efeito de hover que revele um tooltip com mais informações sobre a certificação.
- **Google Reviews:** A seção de Google Reviews será um ponto focal visual, com o logo do Google e as estrelas douradas em destaque, transmitindo imediatamente a credibilidade. Os cards de review terão um design limpo e legível.
- **Linguagem:** A linguagem utilizada nos textos será persuasiva, mas baseada em fatos e na autorreflexão, como "O que a sua água revela sobre o seu corpo?" (conforme slide 5 do PDF). Isso será reforçado visualmente com fundos que evocam a pureza da água e elementos gráficos que sugerem a reflexão.
- **Imagens de Impacto:** Utilizar imagens que mostrem os problemas causados pela água de má qualidade (ex: tubulações enferrujadas, como nos slides 17 e 18, pele irritada) de forma impactante, mas profissional, para criar a conexão emocional e a necessidade da solução. Essas imagens podem ser apresentadas em cards com bordas arredondadas e sombras, sobre um fundo neutro, com um título descritivo em `salus-red` para alertar sobre o problema.
- **Solução Visual:** A seção da solução deve ter um visual limpo e tecnológico, com diagramas claros, reforçando a eficácia e a modernidade da Salus Water.

Esta descrição detalhada da UI/UX, inspirada nos materiais fornecidos, garantirá que a Landing Page da Salus Water transmita profissionalismo, autoridade e uma experiência visualmente impactante para o usuário, reforçando a mensagem de saúde e qualidade de vida através da água pura.

