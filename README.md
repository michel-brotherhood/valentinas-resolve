# 🏢 Valentina's Resolve

**Plataforma Inteligente de Serviços**

Uma startup brasileira de tecnologia e intermediação de serviços, criada para conectar pessoas, negócios e soluções em um único ambiente digital.

## ✨ Sobre o Projeto

A Valentina's Resolve é uma plataforma que reúne mais de 200 tipos de serviços, integrando profissionais qualificados em diversas áreas — desde atendimento doméstico até demandas empresariais especializadas.

### 🎯 Missão
Conectar pessoas e empresas através de uma plataforma inteligente de integração de serviços, proporcionando soluções personalizadas que transformem necessidades em resultados excepcionais.

### 🔮 Visão
Ser a maior plataforma de integração de serviços do Brasil, reconhecida pela excelência, inovação e impacto positivo na vida das pessoas e no crescimento dos negócios.

### 💎 Valores
- **Inovação**: Sempre buscando novas tecnologias e soluções
- **Transparência**: Processos claros e comunicação honesta
- **Excelência**: Qualidade superior em todos os serviços
- **Confiabilidade**: Segurança e consistência em cada interação
- **Valorização Humana**: Respeito e desenvolvimento de pessoas
- **Sustentabilidade**: Responsabilidade social e ambiental

## 🚀 Tecnologias

### Frontend
- **React 19.1.0** - Framework principal
- **Vite 6.3.5** - Build tool e dev server
- **TailwindCSS 4.1.7** - Framework CSS
- **Radix UI** - Componentes acessíveis
- **Framer Motion** - Animações
- **React Router DOM** - Roteamento

### Backend/Integração
- **Resend** - Serviço de e-mail
- **Vercel Functions** - Serverless functions
- **React Hook Form + Zod** - Formulários e validação

### Ferramentas
- **PNPM** - Gerenciador de pacotes
- **ESLint** - Linting
- **GitHub** - Versionamento

## 📱 Funcionalidades

### 🏠 Páginas Principais
- **Home** - Apresentação da plataforma
- **Sobre** - História e valores da empresa
- **Serviços** - Catálogo completo de 200+ serviços
- **Contabilidade Integrada** - Serviços contábeis especializados
- **Equipe** - Profissionais qualificados
- **Trabalhe Conosco** - Oportunidades para profissionais
- **Contato** - Formulários de contato

### 📧 Sistema de E-mails
- **Integração Resend** - API de e-mail profissional
- **Roteamento inteligente**:
  - Contabilidade → `contabilidade@valentinasresolve.com.br`
  - Contato geral → `contato@valentinasresolve.com.br`
- **Templates HTML** - E-mails formatados profissionalmente
- **Validação robusta** - Client-side e server-side

### 🎨 UX/UI
- **Design responsivo** - Mobile-first
- **Animações suaves** - Framer Motion
- **Loading states** - Feedback visual
- **Tema escuro/claro** - Alternância automática
- **Acessibilidade** - WCAG compliant

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js 20+
- PNPM 10+

### Instalação
```bash
# Clone o repositório
git clone https://github.com/michel-brotherhood/valentinas-resolve.git

# Entre no diretório
cd valentinas-resolve

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview
```

### Variáveis de Ambiente
```bash
# .env (não incluído no repositório)
RESEND_API_KEY=your_resend_api_key_here
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório GitHub ao Vercel
2. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
3. Adicione a variável `RESEND_API_KEY` nas configurações
4. Deploy automático a cada push!

### Deploy Manual
1. Faça o build: `pnpm build`
2. Faça upload da pasta `dist` e `api/`

## 📊 Estrutura do Projeto

```
valentinas-resolve/
├── api/                   # Vercel API Routes
│   └── send-email.js     # Integração Resend
├── public/               # Arquivos estáticos
├── src/
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes UI base
│   │   ├── Layout.jsx   # Layout principal
│   │   ├── Loading.jsx  # Componente de loading
│   │   └── ErrorBoundary.jsx
│   ├── pages/           # Páginas da aplicação
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilitários
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Entry point
├── vercel.json          # Configuração Vercel
├── package.json
├── vite.config.js
└── README.md
```

## 📧 Configuração de E-mail

### Resend Integration
O projeto usa Resend para envio de e-mails através de Vercel API Routes:

- **Endpoint**: `/api/send-email`
- **Método**: POST
- **Headers**: CORS configurado
- **Validação**: Campos obrigatórios e formato

### Templates
- **Contabilidade**: Template específico para serviços contábeis
- **Contato**: Template geral para contatos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Valentina's Resolve. Todos os direitos reservados.

## 📞 Contato

- **Website**: [valentinasresolve.com.br](https://valentinasresolve.com.br)
- **E-mail**: contato@valentinasresolve.com.br
- **Contabilidade**: contabilidade@valentinasresolve.com.br

## 🏆 Status do Projeto

- ✅ **Frontend**: Completo e responsivo
- ✅ **Backend**: Integração Resend funcional
- ✅ **Deploy**: Pronto para Vercel
- ✅ **E-mails**: Configurados e testados
- ✅ **UX/UI**: Otimizada para conversão

---

**Desenvolvido com ❤️ para conectar pessoas e transformar negócios**

