# 🛍️ Loja Dev — Projeto Final (Frontend)

Projeto desenvolvido como trabalho final da **Trilha de Frontend** do **Projeto Desenvolve Itabira**.

A aplicação consiste em um e-commerce completo, desenvolvido com foco na simulação de um ambiente real de desenvolvimento frontend. O sistema permite a listagem de produtos consumidos de uma API externa, visualização detalhada de cada item e gerenciamento dinâmico de um carrinho de compras.

Além disso, o projeto foi estruturado com base em boas práticas de organização de código, componentização e separação de responsabilidades, visando não apenas o funcionamento da aplicação, mas também a qualidade, escalabilidade e manutenção do sistema.

---

## 🚀 Funcionalidades

* 📦 Listagem de produtos via API
* 🔍 Filtro por categorias
* 🔎 Busca em tempo real (com debounce)
* 📄 Página de detalhes do produto

### 🛒 Carrinho de compras

* Adição de produtos

* Controle de quantidade

* Remoção parcial ou total

* Limpeza completa do carrinho

* 💰 Cálculo automático do total

* 💾 Persistência com `localStorage`

* 🌙 Modo escuro (Dark Mode)

* 🔄 Feedback de carregamento e tratamento de erros

* 🎨 Interface responsiva e organizada

---

## 🛠️ Tecnologias Utilizadas

* React
* React Router DOM
* Context API (estado global)
* JavaScript (ES6+)
* HTML5
* CSS3

---

## 📦 API Utilizada
Os produtos são consumidos da API:
**Fake Store API**
https://fakestoreapi.com/

---

## ▶️ Como rodar o projeto

### 1. Clone o repositório
bash
git clone https://github.com/ruthiele-pd/desenvolve-loja

### 2. Acesse a pasta do projeto
bash
cd desenvolve-loja

### 3. Instale as dependências
bash
npm install

### 4. Execute o projeto
bash
npm run dev

### 5. Acesse no navegador
http://localhost:5173

---

## 📂 Estrutura do Projeto

src/
├── components/     # Componentes reutilizáveis (Header)
├── pages/          # Páginas principais (Home, Cart, ProductDetail)
├── context/        # Context API (CartContext)
├── services/       # Comunicação com API
├── styles/         # Estilos globais (CSS)
├── App.jsx         # Rotas da aplicação
├── main.jsx        # Entrada do React

---

## ⚙️ Funcionalidades Técnicas

* Uso de **Context API** para gerenciamento global do carrinho
* Implementação de **debounce** na busca para otimização
* Persistência de dados com **localStorage**
* Separação de responsabilidades por pastas (arquitetura organizada)
* Navegação SPA com **React Router** (sem reload de página)

---

## 📌 Observações

* O projeto foi desenvolvido com foco em boas práticas de organização e experiência do usuário
* Estrutura pensada para facilitar manutenção e escalabilidade
* Interface otimizada para navegação simples e intuitiva

---

## 📧 Contato (Ruthiele Couto Rosa)
* Email: ruthiele.rosa@pditabira.com.br
* Whatsapp: +55 31 9141-2473

---

## ✅ Conclusão

O desenvolvimento deste projeto permitiu consolidar conhecimentos fundamentais de frontend, como consumo de APIs, gerenciamento de estado global e criação de interfaces dinâmicas com React.

Além da implementação das funcionalidades propostas, houve uma preocupação com a organização do código, experiência do usuário e estrutura do projeto, aproximando-o de um padrão utilizado em aplicações reais.

Dessa forma, a aplicação final não apenas atende aos requisitos técnicos definidos, mas também demonstra uma evolução no desenvolvimento de soluções mais estruturadas, escaláveis e alinhadas às boas práticas do mercado.
