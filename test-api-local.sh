#!/bin/bash

echo "🧪 Teste da API Local - Valentinas Resolve"
echo "=========================================="
echo ""

# Verificar se o servidor está rodando
echo "📡 Verificando se o servidor está rodando..."
if ! curl -s http://localhost:5173 > /dev/null; then
    echo "❌ Servidor não está rodando!"
    echo "Execute: pnpm dev"
    exit 1
fi

echo "✅ Servidor está rodando"
echo ""

# Teste 1: Formulário de Contato
echo "📧 Teste 1: Formulário de Contato"
echo "----------------------------------"
response=$(curl -s -X POST http://localhost:5173/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contato",
    "formData": {
      "nome": "Teste Local",
      "email": "teste@example.com",
      "telefone": "(11) 99999-9999",
      "mensagem": "Teste de envio via script"
    }
  }')

echo "Resposta: $response"
echo ""

# Teste 2: Formulário de Contabilidade
echo "💼 Teste 2: Formulário de Contabilidade"
echo "---------------------------------------"
response=$(curl -s -X POST http://localhost:5173/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contabilidade",
    "formData": {
      "nome": "Teste Contabilidade",
      "email": "teste@example.com",
      "telefone": "(11) 99999-9999",
      "cidade": "São Paulo",
      "interesse": ["cliente_cpf", "autonomo_contabil"],
      "descricao": "Teste de solicitação contábil"
    }
  }')

echo "Resposta: $response"
echo ""

echo "✅ Testes concluídos!"
