import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge.jsx';

function PoliticaDePrivacidade() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2 text-sm font-medium">
              Legal
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Política de <span className="text-yellow-500">Privacidade</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A Valentina's Resolve está comprometida com a proteção dos seus dados pessoais. 
              Esta política descreve como coletamos, usamos e protegemos suas informações.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <h2>1. Coleta de Informações Pessoais</h2>
            <p>Coletamos informações que você nos fornece diretamente ao usar nossos serviços, como ao preencher formulários de contato, solicitar orçamentos ou se candidatar a vagas. As informações podem incluir:</p>
            <ul>
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone/WhatsApp</li>
              <li>Endereço e localização</li>
              <li>Informações sobre o serviço desejado ou área de atuação</li>
              <li>Dados de documentos (CPF/CNPJ, RG/CNH) e certificações (para profissionais)</li>
            </ul>

            <h2>2. Uso das Informações</h2>
            <p>Utilizamos as informações coletadas para:</p>
            <ul>
              <li>Processar suas solicitações de orçamento e agendamento de serviços.</li>
              <li>Avaliar candidaturas de profissionais e facilitar o contato para vagas.</li>
              <li>Melhorar nossos serviços e personalizar sua experiência.</li>
              <li>Comunicar sobre atualizações, promoções e informações relevantes.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2>3. Compartilhamento de Informações</h2>
            <p>Suas informações podem ser compartilhadas com:</p>
            <ul>
              <li><strong>Profissionais Parceiros:</strong> Para que possam entrar em contato e fornecer os serviços solicitados.</li>
              <li><strong>Prestadores de Serviço:</strong> Empresas que nos auxiliam na operação do site e na prestação de serviços (ex: hospedagem, análise de dados).</li>
              <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger nossos direitos.</li>
            </ul>
            <p>Garantimos que o compartilhamento de dados é feito de forma segura e apenas quando estritamente necessário para a finalidade informada.</p>

            <h2>4. Proteção de Dados</h2>
            <p>Implementamos medidas de segurança técnicas e administrativas para proteger suas informações contra acesso não autorizado, uso indevido, alteração ou destruição. No entanto, nenhuma transmissão de dados pela internet é 100% segura, e não podemos garantir a segurança absoluta das informações transmitidas ao nosso site.</p>

            <h2>5. Seus Direitos</h2>
            <p>Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através dos canais disponíveis em nossa página de Contato.</p>

            <h2>6. Cookies e Tecnologias Semelhantes</h2>
            <p>Nosso site pode utilizar cookies e outras tecnologias de rastreamento para melhorar a experiência do usuário, analisar o tráfego do site e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.</p>

            <h2>7. Alterações nesta Política de Privacidade</h2>
            <p>Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página, e a data da última atualização será revisada. Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.</p>

            <h2>8. Contato</h2>
            <p>Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:</p>
            <p>Email: contato@valentinasresolve.com.br</p>
            <p>Telefone: (11) 3333-4444</p>

            <p className="text-sm text-gray-500 mt-12">Última atualização: 04 de Setembro de 2025</p>
            <div className="mt-8 text-center">
              <Link to="/contato" className="text-yellow-600 hover:underline font-semibold">
                Voltar para Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PoliticaDePrivacidade;


