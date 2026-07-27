<div align="center">

# Grana 💸

### Dashboard de finanças pessoais construído com Next.js, TypeScript e Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Recharts](https://img.shields.io/badge/Recharts-8884d8?style=flat-square)](https://recharts.org)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[**🔗 Ver deploy ao vivo**](https://grana-dashboard.vercel.app) · [Reportar bug](https://github.com/TiagoAlmeida13/grana-dashboard/issues)

</div>

---

## Sobre o projeto

**Grana** é um dashboard de finanças pessoais que permite registrar receitas e despesas, visualizar o saldo em tempo real e acompanhar os gastos por categoria em um gráfico. É o projeto mais completo do meu portfólio em termos de gerenciamento de estado: envolve CRUD, persistência local dos dados e regras de negócio que conectam formulário, lista e visualização gráfica.

O objetivo foi simular o tipo de funcionalidade cobrada em testes técnicos de front-end júnior/pleno — não só estilizar uma interface, mas fazer diferentes partes da aplicação reagirem de forma consistente às mudanças de estado.

## Preview

![Preview do dashboard de finanças Grana](https://api.microlink.io/?url=https://grana-dashboard.vercel.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=900)

## Funcionalidades

- **Cadastro de transações** (receita ou despesa), com descrição, valor, categoria e data
- **Categorias contextuais**: as opções de categoria mudam automaticamente conforme o tipo selecionado (receita ou despesa), evitando combinações sem sentido
- **Resumo em tempo real**: cards de receitas, despesas e saldo, recalculados a cada alteração
- **Gráfico de pizza** com a distribuição de despesas por categoria (Recharts)
- **Exclusão de transações**, com atualização imediata de todos os totais e do gráfico
- **Persistência local**: os dados são salvos no `localStorage` do navegador e continuam disponíveis após recarregar a página
- **Totalmente responsivo**

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [Next.js](https://nextjs.org) | Framework React, App Router |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática dos dados financeiros |
| [Tailwind CSS](https://tailwindcss.com) | Estilização utilitária |
| [Recharts](https://recharts.org) | Gráfico de despesas por categoria |
| React Hooks | `useState`, `useEffect` e hook customizado (`useTransactions`) para CRUD e persistência |
| [Vercel](https://vercel.com) | Deploy e hospedagem |

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/TiagoAlmeida13/grana-dashboard.git

# Entre na pasta do projeto
cd grana-dashboard

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Estrutura do projeto

```
grana-dashboard/
├── app/
│   ├── components/
│   │   ├── SummaryCards.tsx      # Cards de receitas, despesas e saldo
│   │   ├── TransactionForm.tsx   # Formulário com categorias contextuais
│   │   ├── TransactionList.tsx   # Lista de transações com exclusão
│   │   └── CategoryChart.tsx     # Gráfico de pizza por categoria
│   ├── lib/
│   │   ├── types.ts               # Tipagem de transações e categorias
│   │   └── useTransactions.ts    # Hook customizado: CRUD + localStorage
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── package.json
```

## Autor

**Tiago Machado**
Desenvolvedor Front-end

[Portfólio](https://whoami-tiago.vercel.app) · [GitHub](https://github.com/TiagoAlmeida13) · [tyygo@live.com](mailto:tyygo@live.com)

---

<div align="center">
<sub>Projeto desenvolvido para fins de portfólio.</sub>
</div>
