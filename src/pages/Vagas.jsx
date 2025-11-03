import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Briefcase,
  Users,
  Award,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  MapPin,
  DollarSign,
  Heart,
  Star,
  Target,
  TrendingUp
} from 'lucide-react'

function TrabalheConosco() {
  const openPositions = [
    {
      title: "Especialista em Limpeza",
      type: "Tempo Integral",
      location: "São Paulo, SP",
      salary: "R$ 2.500 - R$ 3.500",
      description: "Buscamos profissional experiente em limpeza doméstica para integrar nossa equipe. Oportunidade de crescimento e desenvolvimento profissional.",
      requirements: [
        "Experiência mínima de 2 anos em limpeza doméstica",
        "Conhecimento em produtos ecológicos",
        "Disponibilidade para trabalhar em domicílio",
        "Boa comunicação e relacionamento interpessoal",
        "Pontualidade e responsabilidade"
      ],
      benefits: [
        "Salário competitivo",
        "Vale transporte",
        "Vale alimentação",
        "Plano de saúde",
        "Treinamentos especializados"
      ],
      gradient: "from-blue-500 to-cyan-500",
      urgent: true
    },
    {
      title: "Técnico em Manutenção",
      type: "Freelancer",
      location: "Grande São Paulo",
      salary: "R$ 80 - R$ 150/hora",
      description: "Oportunidade para técnicos experientes em elétrica e hidráulica. Trabalhe com flexibilidade e autonomia em projetos diversos.",
      requirements: [
        "Conhecimentos em elétrica e/ou hidráulica",
        "Ferramentas próprias básicas",
        "Experiência comprovada na área",
        "Disponibilidade de horários flexíveis",
        "Veículo próprio (desejável)"
      ],
      benefits: [
        "Pagamento por hora trabalhada",
        "Flexibilidade de horários",
        "Projetos variados",
        "Suporte técnico da empresa",
        "Oportunidade de crescimento"
      ],
      gradient: "from-orange-500 to-red-500",
      urgent: false
    },
    {
      title: "Consultor de Organização",
      type: "Meio Período",
      location: "São Paulo, SP",
      salary: "R$ 1.800 - R$ 2.800",
      description: "Procuramos consultor especializado em organização de ambientes. Ideal para quem tem paixão por transformar espaços e ajudar pessoas.",
      requirements: [
        "Formação em áreas afins (desejável)",
        "Experiência com método Marie Kondo ou similar",
        "Habilidades de comunicação e consultoria",
        "Criatividade e senso estético",
        "Disponibilidade para meio período"
      ],
      benefits: [
        "Horário flexível",
        "Comissões por projeto",
        "Treinamento especializado",
        "Ambiente colaborativo",
        "Crescimento profissional"
      ],
      gradient: "from-purple-500 to-pink-500",
      urgent: false
    },
    {
      title: "Paisagista",
      type: "Por Projeto",
      location: "São Paulo e Região",
      salary: "R$ 100 - R$ 200/hora",
      description: "Oportunidade para paisagistas criativos trabalharem em projetos residenciais únicos. Liberdade criativa e projetos desafiadores.",
      requirements: [
        "Conhecimento em botânica e paisagismo",
        "Portfolio de trabalhos realizados",
        "Disponibilidade para viagens na região",
        "Criatividade e visão estética",
        "Conhecimento em irrigação (desejável)"
      ],
      benefits: [
        "Pagamento por projeto",
        "Liberdade criativa",
        "Projetos únicos",
        "Networking profissional",
        "Reconhecimento do trabalho"
      ],
      gradient: "from-green-500 to-emerald-500",
      urgent: false
    },
    {
      title: "Coordenador de Equipe",
      type: "Tempo Integral",
      location: "São Paulo, SP",
      salary: "R$ 3.500 - R$ 4.500",
      description: "Vaga para profissional experiente em gestão de equipes. Oportunidade de liderar e desenvolver nossa equipe de especialistas.",
      requirements: [
        "Experiência em gestão de equipes",
        "Conhecimento em serviços domésticos",
        "Habilidades de liderança e comunicação",
        "Formação superior (desejável)",
        "Disponibilidade integral"
      ],
      benefits: [
        "Salário atrativo",
        "Plano de saúde e odontológico",
        "Vale refeição",
        "Participação nos lucros",
        "Oportunidade de crescimento"
      ],
      gradient: "from-indigo-500 to-purple-500",
      urgent: true
    },
    {
      title: "Atendente de Customer Success",
      type: "Tempo Integral",
      location: "São Paulo, SP (Híbrido)",
      salary: "R$ 2.000 - R$ 3.000",
      description: "Buscamos profissional para cuidar da experiência dos nossos clientes, garantindo satisfação e fidelização.",
      requirements: [
        "Experiência em atendimento ao cliente",
        "Excelente comunicação verbal e escrita",
        "Conhecimento em CRM (desejável)",
        "Proatividade e empatia",
        "Ensino médio completo"
      ],
      benefits: [
        "Trabalho híbrido",
        "Vale transporte e alimentação",
        "Plano de saúde",
        "Comissões por performance",
        "Ambiente jovem e dinâmico"
      ],
      gradient: "from-teal-500 to-cyan-500",
      urgent: false
    }
  ]

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reconhecimento",
      description: "Valorização do seu trabalho e crescimento profissional constante"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipe Unida",
      description: "Ambiente colaborativo com apoio mútuo e trabalho em equipe"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Flexibilidade",
      description: "Horários flexíveis e oportunidades diversas de trabalho"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Crescimento",
      description: "Plano de carreira estruturado e oportunidades de desenvolvimento"
    }
  ]

  const companyStats = [
    { number: "50+", label: "Colaboradores", description: "Equipe em constante crescimento" },
    { number: "4.8★", label: "Avaliação", description: "Satisfação dos funcionários" },
    { number: "95%", label: "Retenção", description: "Taxa de permanência na empresa" },
    { number: "15", label: "Benefícios", description: "Pacote completo de vantagens" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2 text-sm font-medium">
              Trabalhe Conosco
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Faça Parte da Nossa <span className="text-yellow-500">Equipe</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Estamos sempre em busca de profissionais qualificados e apaixonados por transformar 
              casas em lares mais organizados e acolhedores. Venha crescer conosco e fazer a diferença 
              na vida das pessoas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-4 rounded-full">
                <Briefcase className="w-5 h-5 mr-2" />
                Ver Vagas Abertas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/contato">
                <Button 
                  variant="outline" 
                  className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 rounded-full font-bold"
                >
                  Enviar Currículo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-black mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Vagas Abertas
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                Oportunidades Disponíveis
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Encontre a vaga ideal para você e comece uma nova jornada profissional conosco
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-white relative">
                  {position.urgent && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-red-500 text-white font-bold animate-pulse">
                        URGENTE
                      </Badge>
                    </div>
                  )}
                  <div className={`h-2 bg-gradient-to-r ${position.gradient}`}></div>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-black mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-yellow-100 text-yellow-800">{position.type}</Badge>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {position.salary}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {position.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3">Requisitos:</h4>
                        <div className="space-y-2">
                          {position.requirements.slice(0, 3).map((req, idx) => (
                            <div key={idx} className="flex items-start text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </div>
                          ))}
                          {position.requirements.length > 3 && (
                            <div className="text-sm text-gray-500">
                              +{position.requirements.length - 3} outros requisitos
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3">Benefícios:</h4>
                        <div className="space-y-2">
                          {position.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-start text-sm text-gray-700">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                          {position.benefits.length > 3 && (
                            <div className="text-sm text-gray-500">
                              +{position.benefits.length - 3} outros benefícios
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <Link to="/contato">
                      <Button 
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold py-3 rounded-full"
                      >
                        <Briefcase className="w-4 h-4 mr-2" />
                        Candidatar-se a Esta Vaga
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Por que trabalhar conosco?
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                Benefícios de Fazer Parte da Nossa Equipe
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Oferecemos muito mais que um emprego - proporcionamos uma carreira com propósito e crescimento
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Benefits */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Benefícios Oferecidos</h3>
                <div className="space-y-4">
                  {[
                    "Salário competitivo e compatível com o mercado",
                    "Vale transporte e vale alimentação",
                    "Plano de saúde e odontológico",
                    "Participação nos lucros da empresa",
                    "Treinamentos e capacitações regulares",
                    "Ambiente de trabalho colaborativo",
                    "Flexibilidade de horários (quando aplicável)",
                    "Oportunidades de crescimento interno",
                    "Reconhecimento por performance",
                    "Eventos e confraternizações da equipe"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Processo de Contratação</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Candidatura</h4>
                        <p className="text-gray-700 text-sm">Envie seu currículo através do nosso formulário ou email</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Triagem</h4>
                        <p className="text-gray-700 text-sm">Análise do perfil e adequação à vaga disponível</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Entrevista</h4>
                        <p className="text-gray-700 text-sm">Conversa com RH e gestor da área para conhecer melhor o candidato</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Teste Prático</h4>
                        <p className="text-gray-700 text-sm">Avaliação prática das habilidades técnicas (quando aplicável)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Contratação</h4>
                        <p className="text-gray-700 text-sm">Formalização da contratação e início do treinamento</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from Employees */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Depoimentos
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                O que nossos <span className="text-yellow-500">colaboradores</span> dizem
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Ana Silva",
                  role: "Especialista em Limpeza",
                  comment: "Trabalhar na Valentina's Resolve mudou minha vida profissional. Aqui encontrei reconhecimento, crescimento e uma equipe que se tornou uma família.",
                  avatar: "AS",
                  time: "2 anos na empresa"
                },
                {
                  name: "Carlos Santos",
                  role: "Técnico em Manutenção",
                  comment: "A flexibilidade e autonomia que tenho aqui é incrível. Posso conciliar minha vida pessoal com um trabalho que amo fazer.",
                  avatar: "CS",
                  time: "3 anos na empresa"
                },
                {
                  name: "Maria Costa",
                  role: "Consultora de Organização",
                  comment: "Nunca imaginei que poderia transformar minha paixão por organização em uma carreira tão gratificante. A empresa investe no nosso desenvolvimento.",
                  avatar: "MC",
                  time: "1 ano na empresa"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                  <CardContent className="p-8">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-black">{testimonial.name}</p>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        <p className="text-gray-500 text-xs">{testimonial.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6">
            Pronto para fazer parte da nossa <span className="text-yellow-500">equipe</span>?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Envie seu currículo e comece uma nova jornada profissional conosco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Briefcase className="w-5 h-5 mr-3" />
                Enviar Currículo
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
            <Link to="/equipe">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-lg px-10 py-6 rounded-full font-bold"
              >
                <Users className="w-5 h-5 mr-3" />
                Conhecer a Equipe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrabalheConosco

