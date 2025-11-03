# Guia Completo de Configuração no Vercel

## 🎯 Status Atual

✅ **Código corrigido e enviado para o GitHub**
- Commit: `e7fcf7d` - Fix: Corrigir sintaxe API route para CommonJS
- Repository: https://github.com/michel-brotherhood/valentinas-resolve

## 📋 Passo a Passo para Configuração

### 1. Acessar o Vercel Dashboard

1. Acesse: https://vercel.com/dashboard
2. Faça login com sua conta conectada ao GitHub

### 2. Verificar o Projeto

1. Procure pelo projeto **valentinas-resolve** no dashboard
2. Se o projeto já existe, clique nele
3. Se não existe, clique em **"Add New..."** → **"Project"**

### 3. Conectar o Repositório (se necessário)

1. Selecione **"Import Git Repository"**
2. Escolha **GitHub** como fonte
3. Procure por **michel-brotherhood/valentinas-resolve**
4. Clique em **"Import"**

### 4. Configurar Variáveis de Ambiente

**IMPORTANTE:** Esta é a etapa mais crítica!

1. No projeto, vá em **"Settings"** (Configurações)
2. No menu lateral, clique em **"Environment Variables"**
3. Adicione a seguinte variável:

   - **Name (Nome):** `RESEND_API_KEY`
   - **Value (Valor):** `re_HirwSpwh_E7GtECWbMxNayrVLABh1nRtv`
   - **Environment:** Selecione **Production**, **Preview** e **Development**

4. Clique em **"Save"** (Salvar)

### 5. Configurações de Build (Verificar)

Vá em **Settings** → **General** e verifique:

- **Framework Preset:** Vite
- **Build Command:** `pnpm build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`
- **Node.js Version:** 20.x (já configurado no vercel.json)

### 6. Fazer Redeploy

1. Vá na aba **"Deployments"**
2. Encontre o último deployment (commit `e7fcf7d`)
3. Se ainda não iniciou, aguarde o deploy automático
4. Se já falhou anteriormente, clique nos três pontos (**...**) → **"Redeploy"**

### 7. Monitorar o Deploy

1. Clique no deployment em andamento
2. Acompanhe os logs em tempo real
3. Aguarde a mensagem **"Build Completed"**
4. Verifique se aparece **"Deployment Ready"**

## 🔍 Verificações Pós-Deploy

### Verificar se o Site Está Online

1. Acesse a URL do projeto (ex: `https://valentinas-resolve.vercel.app`)
2. Navegue pelas páginas principais:
   - Home: `/`
   - Serviços: `/servicos`
   - Contabilidade: `/contabilidade-integrada`
   - Contato: `/contato`
   - Sobre: `/sobre`
   - Vagas: `/vagas`

### Testar a API Route

Você pode testar a API usando curl ou Postman:

```bash
curl -X POST https://valentinas-resolve.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contato",
    "formData": {
      "nome": "Teste",
      "email": "teste@example.com",
      "telefone": "(11) 99999-9999",
      "mensagem": "Teste de envio"
    }
  }'
```

**Resposta esperada:**
```json
{
  "success": true,
  "message": "E-mail enviado com sucesso!",
  "emailId": "..."
}
```

### Testar os Formulários

#### Formulário de Contabilidade
1. Acesse: `/contabilidade-integrada`
2. Preencha o formulário
3. Clique em "Enviar Solicitação"
4. Verifique se aparece mensagem de sucesso
5. Confira se o e-mail chegou em `contabilidade@valentinasresolve.com.br`

#### Formulário de Contato
1. Acesse: `/contato`
2. Preencha o formulário
3. Clique em "Enviar Mensagem"
4. Verifique se aparece mensagem de sucesso
5. Confira se o e-mail chegou em `contato@valentinasresolve.com.br`

## 🐛 Troubleshooting

### Se o Deploy Falhar

1. **Verificar logs de build:**
   - Clique no deployment com erro
   - Leia os logs completos
   - Procure por mensagens de erro em vermelho

2. **Verificar variável de ambiente:**
   - Settings → Environment Variables
   - Confirme que `RESEND_API_KEY` está configurada
   - Certifique-se de que está ativa em todos os ambientes

3. **Verificar configuração do Vercel:**
   - Confirme que `vercel.json` está no repositório
   - Verifique se não há erros de sintaxe JSON

### Se a API Não Funcionar

1. **Verificar logs da função:**
   - Deployments → Clique no deployment ativo
   - Vá em "Functions" → `api/send-email.js`
   - Clique em "View Logs"

2. **Verificar CORS:**
   - Abra o DevTools do navegador (F12)
   - Vá na aba "Console"
   - Procure por erros de CORS

3. **Verificar Resend:**
   - Acesse: https://resend.com/dashboard
   - Vá em "Logs" para ver tentativas de envio
   - Verifique se há erros ou bloqueios

### Se os E-mails Não Chegarem

1. **Verificar configuração do domínio no Resend:**
   - Acesse: https://resend.com/domains
   - Confirme que `valentinasresolve.com.br` está verificado
   - Verifique os registros DNS (SPF, DKIM, DMARC)

2. **Verificar caixa de spam:**
   - Cheque a pasta de spam/lixo eletrônico
   - Adicione `noreply@valentinasresolve.com.br` aos contatos

3. **Verificar logs do Resend:**
   - Dashboard → Logs
   - Procure pelos e-mails enviados
   - Verifique o status de entrega

## 📊 Monitoramento Contínuo

### Logs do Vercel
- **Acesso:** Deployments → [Deployment ativo] → Functions
- **Frequência:** Verificar após cada envio de formulário

### Dashboard Resend
- **Acesso:** https://resend.com/dashboard
- **Monitorar:** Taxa de entrega, bounces, reclamações

### Analytics (Opcional)
- Considere adicionar Google Analytics ou Vercel Analytics
- Monitore conversões de formulários

## 🔐 Segurança

### Variáveis de Ambiente
- ✅ API key está em variável de ambiente (não no código)
- ✅ `.env` está no `.gitignore`
- ✅ Nunca commitar chaves de API

### Headers de Segurança
Já configurados no `vercel.json`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### CORS
- Configurado para aceitar requisições de qualquer origem
- Para produção, considere restringir ao domínio específico

## 📞 Suporte

### Problemas com Vercel
- Documentação: https://vercel.com/docs
- Support: https://vercel.com/support

### Problemas com Resend
- Documentação: https://resend.com/docs
- Support: https://resend.com/support

### Problemas com o Código
- Repository: https://github.com/michel-brotherhood/valentinas-resolve
- Issues: https://github.com/michel-brotherhood/valentinas-resolve/issues

## ✅ Checklist Final

Antes de considerar o deploy completo, verifique:

- [ ] Projeto importado no Vercel
- [ ] Variável `RESEND_API_KEY` configurada
- [ ] Deploy bem-sucedido (status verde)
- [ ] Site acessível na URL do Vercel
- [ ] Todas as páginas carregando corretamente
- [ ] Formulário de Contabilidade funcionando
- [ ] Formulário de Contato funcionando
- [ ] E-mails chegando nos destinatários corretos
- [ ] Responsividade testada em mobile
- [ ] Logs sem erros críticos

## 🎉 Próximos Passos

Após tudo funcionando:

1. **Configurar domínio customizado** (opcional)
   - Settings → Domains
   - Adicionar `www.valentinasresolve.com.br`

2. **Configurar SSL** (automático no Vercel)
   - Vercel fornece SSL gratuito via Let's Encrypt

3. **Monitorar performance**
   - Vercel Analytics (opcional, mas recomendado)

4. **Backup regular**
   - O código já está no GitHub
   - Considere backup do banco de dados (se houver)

---

**Última atualização:** 03/11/2025  
**Versão do código:** e7fcf7d  
**Status:** Pronto para deploy ✅

