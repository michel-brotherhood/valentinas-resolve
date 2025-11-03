import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge.jsx';

function TermosDeUso() {
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
              Termos de <span className="text-yellow-500">Uso</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Ao utilizar os serviços da Valentina's Resolve, você concorda com os termos e condições descritos abaixo.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar o site e os serviços da Valentina's Resolve, você concorda em cumprir e estar vinculado a estes Termos de Uso, à nossa Política de Privacidade e a todas as leis e regulamentos aplicáveis. Se você não concordar com qualquer um destes termos, está proibido de usar ou acessar este site.</p>

            <h2>2. Serviços Oferecidos</h2>
            <p>A Valentina's Resolve atua como uma plataforma que conecta clientes a profissionais autônomos e empresas parceiras que oferecem uma variedade de serviços domésticos, de manutenção, beleza, saúde, educacionais, automotivos, pets, eventos, criativos, construção, transporte, agricultura, personalizados, lazer e esportivos. Não somos responsáveis pela execução direta dos serviços, mas facilitamos a conexão entre as partes.</p>

            <h2>3. Cadastro e Conta do Usuário</h2>
            <ul>
              <li>Para solicitar serviços ou se candidatar a vagas, você pode precisar fornecer informações pessoais e criar uma conta.</li>
              <li>Você é responsável por manter a confidencialidade de suas informações de conta e por todas as atividades que ocorrem sob sua conta.</li>
              <li>Você concorda em fornecer informações precisas, completas e atualizadas.</li>
            </ul>

            <h2>4. Responsabilidades do Usuário</h2>
            <ul>
              <li>Utilizar os serviços de forma legal e ética, respeitando os direitos de terceiros.</li>
              <li>Não utilizar a plataforma para fins fraudulentos, ilegais ou não autorizados.</li>
              <li>Garantir que todas as informações fornecidas sejam verdadeiras e precisas.</li>
            </ul>

            <h2>5. Pagamento e Transações</h2>
            <p>Os pagamentos pelos serviços são acordados diretamente entre o cliente e o profissional/empresa parceira. A Valentina's Resolve não se responsabiliza por disputas de pagamento ou pela qualidade dos serviços prestados, embora nos esforcemos para garantir a satisfação de nossos usuários através de um processo de seleção rigoroso de profissionais.</p>

            <h2>6. Propriedade Intelectual</h2>
            <p>Todo o conteúdo presente no site da Valentina's Resolve, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Valentina's Resolve ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais e outras leis de propriedade intelectual.</p>

            <h2>7. Limitação de Responsabilidade</h2>
            <p>A Valentina's Resolve não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar nossos serviços, incluindo, mas não se limitando a, danos por perda de lucros, dados ou outras perdas intangíveis.</p>

            <h2>8. Links para Terceiros</h2>
            <p>Nosso site pode conter links para sites de terceiros que não são operados por nós. Não temos controle sobre o conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros e não assumimos responsabilidade por eles.</p>

            <h2>9. Alterações nos Termos de Uso</h2>
            <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. Seu uso continuado do site após a publicação de quaisquer modificações constituirá sua aceitação dessas modificações.</p>

            <h2>10. Lei Aplicável</h2>
            <p>Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, especificamente do estado de Rondônia, sem considerar seus conflitos de disposições legais.</p>

            <h2>11. Contato</h2>
            <p>Se tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:</p>
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

export default TermosDeUso;


