import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Award,
  Star,
  ArrowRight,
  Users,
  Heart,
  Shield,
  Zap,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react'

function Equipe() {
  const teamMembers = [
    {
      name: "Daiane Amaral",
      role: "Co-fundadora e Especialista em Gestão da Qualidade",
      experience: "Mais de 10 anos de experiência",
      description: "Olá, meu nome é Daiane Amaral. Desde jovem, sempre busquei novas oportunidades e o aprendizado de diferentes culturas. Aos 18 anos, com o desejo de expandir meus horizontes, decidi emigrar para a Espanha, onde vivi por três anos e meio. Essa experiência foi um marco no meu crescimento pessoal e profissional, me ensinando a importância do aprendizado contínuo e da adaptação a novas realidades. Ao retornar ao Brasil, investi na minha formação acadêmica, iniciando a graduação em Engenharia de Produção e, posteriormente, Educação Física. No entanto, foi no Sistema de Gestão da Qualidade que encontrei minha verdadeira paixão, o que me levou a me formar nesta área. Durante mais de 10 anos, trabalhei em um grupo de inspeção veicular acreditado pelo INMETRO. Comecei como recepcionista e, ao longo do tempo, me apaixonei pela área de gestão da qualidade. Tive a oportunidade de atuar em diferentes estados do Brasil, o que me proporcionou uma compreensão profunda de como processos bem estruturados podem transformar organizações e serviços. Após essa experiência, decidi me aventurar no empreendedorismo. Ao retornar ao Brasil, abri um bar e restaurante. Embora o negócio não tenha prosperado como eu esperava, a vivência no setor me trouxe valiosas lições sobre gestão, resiliência e adaptação. Em 2018, fui para a Bélgica, onde vivi por dois anos e meio. Com a pandemia, retornei ao Brasil e decidi empreender novamente, criando um sistema de delivery de macarrão e também me envolvendo na venda de produtos capilares. Essas novas experiências me permitiram explorar diferentes áreas do empreendedorismo e sempre buscar soluções inovadoras para os consumidores. Hoje, moro em Portugal, onde trabalho na área de hotelaria como Housekeeping Lead. Juntamente com minha irmã, Kellen Amaral, que é minha sócia, e Andressa Melo, minha contadora e também minha sócia, fundamos o Valentinas Resolve, uma plataforma digital que conecta clientes e profissionais de maneira simples e eficiente. Acreditamos que essa plataforma tem o potencial de transformar a forma como as pessoas contratam serviços, promovendo confiança e praticidade em um mundo digital. Além disso, estou cursando Direito em Portugal. A minha experiência como imigrante me fez perceber as dificuldades que muitas pessoas enfrentam ao tentar regularizar sua situação em outro país. Por isso, decidi estudar Direito para poder oferecer suporte e orientação, ajudando essas pessoas a se estabelecerem de maneira mais segura e tranquila.",
      specialties: ["Gestão da Qualidade", "Empreendedorismo", "Hotelaria", "Direito"],
      certifications: ["Sistema de Gestão da Qualidade", "Housekeeping Lead", "Cursando Direito"],
      avatar: "DA",
      gradient: "from-purple-500 to-pink-500",
      rating: 5.0,
      completedJobs: 500
    },
    {
      name: "Kellen Cristina",
      role: "Co-fundadora",
      experience: "37 anos de experiência de vida",
      description: "Minha jornada tem sido repleta de desafios e aprendizados constantes. Com 37 anos, estou comprometida em impactar positivamente a vida das pessoas ao meu redor, criando soluções que melhorem a vida das pessoas com excelência, resiliência e transformação.",
      specialties: ["Liderança", "Transformação", "Excelência", "Resiliência"],
      certifications: ["Experiência em Gestão", "Desenvolvimento Pessoal"],
      avatar: "KC",
      gradient: "from-green-500 to-emerald-500",
      rating: 5.0,
      completedJobs: 300
    },
    {
      name: "Andressa Ferreira Melo",
      role: "Especialista Contábil e Sócia",
      experience: "7 anos de experiência",
      description: "Andressa Ferreira Melo, tenho 33 anos e sou natural de Cacoal, Rondônia. Sou formada em Ciências Contábeis desde 2018 e atuo na área contábil desde 2017. Desde o início de minha trajetória profissional, sempre me identifiquei com o ramo contábil, com um interesse genuíno em entender e solucionar as questões que envolvem o comércio e a gestão das empresas. Em 2020, tomei a decisão de empreender na área contábil, iniciando meu próprio escritório. Desde então, tenho dedicado minha carreira ao apoio a empresas de diversos portes e segmentos, oferecendo soluções financeiras de qualidade e sempre com foco no crescimento e na sustentabilidade dos negócios. A oportunidade de integrar a equipe da Valentina's Resolve surgiu como uma extensão natural do meu desejo de impactar o mercado com soluções inovadoras. Juntamente com minhas sócias Kellem Amaral, Daiane Amaral e Elaine Bessa, estamos comprometidas em transformar a forma de intermediação de serviços entre profissionais e clientes, trazendo propostas diferenciadas, práticas e eficientes. Acredito no potencial da Valentina´s e no alcance dos nossos objetivos. Estamos motivadas com a jornada que estamos trilhando e com a missão de entregar aos nossos clientes um serviço de excelência, baseado na transparência, eficiência e comprometimento.",
      specialties: ["Ciências Contábeis", "Gestão Empresarial", "Soluções Financeiras", "Empreendedorismo"],
      certifications: ["Formada em Ciências Contábeis", "Proprietária de Escritório Contábil"],
      avatar: "AM",
      gradient: "from-blue-500 to-cyan-500",
      rating: 4.9,
      completedJobs: 250
    },
    {
      name: "Janaina Pimenta",
      role: "Especialista em Marketing e Sócia",
      experience: "32 anos de experiência de vida",
      description: "Janaina Pimenta, tenho 32 anos e resido em Cacoal, Rondônia. Concluí o ensino médio e iniciei a graduação em Marketing, área pela qual me interesso e que contribui para ampliar minha visão estratégica e empreendedora. Minha trajetória profissional passou por diferentes experiências. Atuei como freelancer na Contável Contabilidade, o que me proporcionou aprendizado e abriu portas para novos projetos. Atualmente, sou sócia do Valentinas Resolve, empresa que administro em parceria com Andressa Mello, Daiane Amaral e Kellen Amaral, oferecendo soluções práticas e confiáveis para diferentes demandas. Paralelamente, colaboro no negócio da minha família, junto ao meu pai, e também apoio as atividades de transporte rodoviário realizadas pelo meu esposo, que atua com caminhão próprio. Sou uma pessoa dedicada, organizada e comprometida, que valoriza a família e alia responsabilidade, profissionalismo e espírito empreendedor em cada etapa da vida.",
      specialties: ["Marketing", "Gestão Empresarial", "Empreendedorismo", "Organização"],
      certifications: ["Graduando em Marketing", "Experiência em Freelancer"],
      avatar: "JP",
      gradient: "from-orange-500 to-red-500",
      rating: 4.8,
      completedJobs: 180
    }
  ]

  const stats = [
    { number: "4", label: "Especialistas" },
    { number: "500+", label: "Clientes Satisfeitos" },
    { number: "1000+", label: "Serviços Realizados" },
    { number: "98%", label: "Taxa de Satisfação" }
  ]

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelência",
      description: "Buscamos sempre superar expectativas em cada serviço prestado"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cuidado",
      description: "Tratamos cada casa com carinho e atenção aos detalhes"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confiança",
      description: "Profissionais verificados e comprometidos com a qualidade"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Parceria",
      description: "Trabalhamos em equipe para alcançar os melhores resultados"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2 text-sm font-medium">
              Nossa Equipe
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Conheça Nossos <span className="text-yellow-500">Especialistas</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Uma equipe de profissionais qualificados, experientes e apaixonados por transformar 
              casas em lares mais organizados, limpos e acolhedores. Cada membro é cuidadosamente 
              selecionado e treinado para oferecer o melhor serviço.
            </p>
            <Link to="/vagas">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-4 rounded-full">
                <Users className="w-5 h-5 mr-2" />
                Trabalhe Conosco
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-white">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className={`bg-gradient-to-r ${member.gradient} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-3xl group-hover:scale-110 transition-transform duration-300`}>
                        {member.avatar}
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                      <p className="text-yellow-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                      
                      {/* Rating and Stats */}
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm font-semibold">{member.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {member.completedJobs} serviços
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-center mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-black mb-3">Especialidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-3">Certificações:</h4>
                      <div className="space-y-2">
                        {member.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Nossos Valores
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                O que nos Move
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Nossa equipe é guiada por valores sólidos que garantem a excelência em cada serviço
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training and Development */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                  Treinamento
                </Badge>
                <h2 className="text-4xl font-bold text-black mb-6">
                  Desenvolvimento Contínuo
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Investimos constantemente no desenvolvimento de nossa equipe através de 
                  treinamentos especializados, certificações e atualizações técnicas.
                </p>
                <div className="space-y-4">
                  {[
                    "Treinamentos mensais de atualização",
                    "Certificações em áreas específicas",
                    "Workshops de atendimento ao cliente",
                    "Cursos de segurança no trabalho",
                    "Desenvolvimento de liderança",
                    "Avaliações de desempenho regulares"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6 text-center">
                    Processo de Seleção
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Análise de Currículo</h4>
                        <p className="text-gray-700 text-sm">Avaliação de experiência e qualificações</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Entrevista Técnica</h4>
                        <p className="text-gray-700 text-sm">Teste de conhecimentos específicos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Verificação de Referências</h4>
                        <p className="text-gray-700 text-sm">Checagem de antecedentes e referências</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Treinamento Inicial</h4>
                        <p className="text-gray-700 text-sm">Capacitação nos padrões da empresa</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
              Contato
            </Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Fale com Nossa Equipe
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Tem alguma dúvida ou gostaria de conhecer melhor nossos profissionais? 
              Entre em contato conosco!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Telefone/WhatsApp</h3>
                  <p className="text-gray-700 mb-4">(11) 99999-9999</p>
                  <p className="text-sm text-gray-600">
                    Atendimento de segunda a sábado, das 8h às 18h
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Email</h3>
                  <p className="text-gray-700 mb-4">equipe@valentinasresolve.com.br</p>
                  <p className="text-sm text-gray-600">
                    Resposta em até 24 horas
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-4 rounded-full"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Contratar Profissional
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/vagas">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 rounded-full font-bold"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Trabalhe Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6">
            Pronto para conhecer nossos <span className="text-yellow-500">profissionais</span>?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para transformar sua casa com qualidade e dedicação
          </p>
          <Link to="/contato">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-3" />
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Equipe

