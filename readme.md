# Projeto PD Clínica

# 1. Visão Geral do Projeto
Este documento descreve os requisitos funcionais, não funcionais, técnicos e de qualidade para o desenvolvimento de um site institucional e funcional de uma Clínica Médica.
O sistema será exclusivamente front-end, sem integração com backend real, simulando funcionalidades comuns encontradas em sistemas de clínicas médicas modernas.


# 2. Objetivos do Sistema

## 2.1 Objetivo Geral
Desenvolver um site web profissional, acessível e responsivo, que represente uma Clínica Médica moderna, oferecendo informações institucionais, apresentação de especialidades, conteúdos médicos e áreas simuladas de interação com o paciente.

# 3. Escopo do Projeto

## 3.1 Dentro do Escopo
✔ Site institucional completo
✔ Área do paciente simulada
✔ Agendamento fictício
✔ Conteúdo informativo
✔ Dashboard administrativo simulado
✔ Responsividade total

## 3.2 Fora do Escopo

❌ Backend real
❌ Banco de dados
❌ Autenticação real
❌ Envio real de formulários
❌ Integração com APIs externas

## 4. Público-Alvo

- Pacientes da clínica

- Visitantes interessados em especialidades médicas

- Profissionais da saúde

- Administradores (simulado)

## 5. Requisitos Funcionais (RF)
### RF01 — Página Inicial

Apresentar a clínica

Destaque para especialidades

Botões de ação (agendar, contato)

Carousel institucional

### RF02 — Institucional

Informações sobre a clínica

Missão, visão e valores

Estrutura física e história

### RF03 — Especialidades Médicas

Listagem de especialidades

Página individual para cada especialidade

Informações, médicos e serviços

### RF04 — Área do Paciente (Simulada)

Tela de login

Tela de cadastro

Perfil do paciente

Recuperação de senha

### RF05 — Agendamento Médico (Simulado)

Seleção de especialidade

Seleção de data e horário

Confirmação visual do agendamento

Validação de formulário

### RF06 — Conteúdo Informativo

Blog com listagem de artigos

Página individual de artigo

FAQ médico

Convênios aceitos

### RF07 — Contato

Formulário de contato

Validação de campos

Feedback visual de envio

### RF08 — Trabalhe Conosco

Formulário de envio de currículo (simulado)

Validação de dados

### RF09 — Localização

Endereço completo

Mapa incorporado

Informações de horário de atendimento

### RF10 — Área Administrativa (Simulada)

Dashboard

Agenda médica

Relatórios

Configurações

## 6. Requisitos Não Funcionais (RNF)
### RNF01 — Responsividade

Layout adaptável para mobile, tablet e desktop

Sem scroll horizontal

### RNF02 — Usabilidade

Navegação intuitiva

Feedback visual em ações

Layout consistente

### RNF03 — Acessibilidade

Uso de label

Textos alternativos

Contraste adequado

Navegação por teclado

### RNF04 — Performance

Imagens otimizadas

Código organizado

Carregamento rápido

## 7. Requisitos Técnicos (RT)
### RT01 — Tecnologias Permitidas

HTML5

CSS3

Bootstrap 5

JavaScript (ES6)

### RT02 — Tecnologias Proibidas

❌ Frameworks JS (React, Vue, etc.)
❌ Templates prontos
❌ CMS

### RT03 — Organização do Código

CSS externo

JS externo

Pastas organizadas

Nomes semânticos

## 8. Requisitos de Interface (UI/UX)

- Paleta de cores coerente

- Tipografia consistente

- Componentes reutilizáveis

- Espaçamentos adequados

- Layout profissional

## 9. Requisitos de Responsividade (Detalhado)
Dispositivo	Largura	Comportamento
Mobile	≤ 576px	Layout em coluna
Tablet	768px	Layout híbrido
Desktop	≥ 992px	Layout completo
## 10. Requisitos de JavaScript

- Validação de formulário

- Simulação de login

- Filtro de especialidades

- Dark mode

- Toasts e alerts

## 11. Fluxograma, Wireframe e Prototipagem
Deve ser desenvolvido em equipe com o trabalho de todos os integrantes. As páginas devem ser componentizadas e seguidas fielmente no desenvolvimento.


## 👨‍💻 Divisão de Módulos e Requisitos (RFs)

### 1. Pedro: Módulo de Sistemas e Lógica
**Foco:** Funcionalidades interativas, fluxos de dados simulados e reatividade do sistema.
* **RF04 — Área do Paciente:** Telas de Login, Cadastro, Perfil e Recuperação de Senha.
* **RF05 — Agendamento Médico:** Formulário interativo com seleção de especialidade/data e confirmação visual via JS.
* **RF10 — Área Administrativa:** Dashboard funcional com alternância de abas (Agenda, Relatórios e Configurações).
* **Scripts Globais:** Criação dos arquivos `.js` que controlam a inteligência do sistema.

### 2. Rafael: Módulo Institucional e Conteúdo
**Foco:** Apresentação da clínica, autoridade médica e páginas informativas.
* **RF02 — Institucional:** Páginas de Missão, Visão, Valores, Estrutura e História.
* **RF03 — Especialidades Médicas:** Listagem geral e páginas individuais para as 5 especialidades.
* **RF06 — Conteúdo Informativo:** Estrutura do Blog, Artigos Médicos, FAQ e Convênios.


### 3. Pablo: Módulo de Conversão e UI/UX
**Foco:** Design do sistema, suporte ao cliente e padronização visual (CSS).
* **RF01 — Página Inicial:** Home completa com Carousel institucional e destaques.
* **RF07 — Contato:** Formulário de contato com validações de campos.
* **RF08 — Trabalhe Conosco:** Página de envio de currículo simulada.
* **RF09 — Localização:** Informações de atendimento e Mapa (Google Maps Iframe).
* **Design System:** Criação do `global.css` (Cores, Fontes, Botões, Header e Footer padrão).
---

