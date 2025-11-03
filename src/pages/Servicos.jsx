import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Sparkles, Home, Wrench, Leaf, CheckCircle, ArrowRight, Phone, Clock, Heart, Zap,
  BookOpen, Car, PawPrint, PartyPopper, Code, Building, Plane, Tractor, UserCheck, Sailboat, Bike
} from 'lucide-react'

function Servicos() {
  const serviceCategories = [
    {
      category: "Serviços Domésticos e Manutenção Residencial",
      icon: <Home className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      services: [
        "Faxina", "Limpeza de janelas e vidros", "Lavanderia e passadoria", 
        "Montagem e desmontagem de móveis", "Jardinagem", "Manutenção de piscinas",
        "Dedetização e controle de pragas", "Limpeza de estofados, tapetes e carpetes",
        "Reparos elétricos", "Reparos hidráulicos", "Pintura", "Pequenos consertos residenciais",
        "Serviço de chaveiro", "Conserto de eletrodomésticos"
      ]
    },
    {
      category: "Serviços de Beleza e Estética",
      icon: <Sparkles className="w-8 h-8" />,
      gradient: "from-pink-500 to-purple-500",
      services: [
        "Corte de cabelo", "Barba", "Maquiagem", "Penteado", "Manicure e pedicure", "Depilação",
        "Design de sobrancelhas", "Limpeza de pele", "Massagem relaxante e terapêutica",
        "Tratamentos estéticos faciais e corporais"
      ]
    },
    {
      category: "Serviços de Saúde e Bem-Estar",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      services: [
        "Consulta médica domiciliar", "Sessão de fisioterapia", "Consulta nutricional",
        "Consulta com psicólogo", "Sessão de acupuntura", "Massoterapia",
        "Terapias alternativas (reiki, aromaterapia)"
      ]
    },
    {
      category: "Serviços Jurídicos e Consultoria Especializada",
      icon: <Wrench className="w-8 h-8" />,
      gradient: "from-gray-600 to-gray-800",
      services: [
        "Advogado cível", "Advogado criminal", "Advogado trabalhista", "Advogado tributário",
        "Advogado imobiliário", "Advogado de família", "Advogado previdenciário", "Advogado empresarial",
        "Elaboração e revisão de contratos", "Consultoria contábil", "Consultoria financeira",
        "Consultoria tributária", "Consultoria em investimentos", "Consultoria agrícola e pecuária",
        "Auditoria de processos", "Consultoria em recursos humanos", "Consultoria em marketing e branding",
        "Coaching profissional e de carreira", "Coaching pessoal"
      ]
    },
    {
      category: "Serviços Educacionais",
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-indigo-500 to-blue-500",
      services: [
        "Reforço escolar", "Aulas de idiomas (inglês, espanhol, francês, etc.)",
        "Aulas de música (violão, piano, canto)", "Aulas de informática e programação",
        "Treinamento em softwares (Excel, Word, AutoCAD)", "Aulas de fotografia",
        "Aulas de artes (desenho, pintura)", "Aulas de culinária", "Orientação educacional e vocacional"
      ]
    },
    {
      category: "Serviços Automotivos",
      icon: <Car className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-500",
      services: [
        "Lavagem de veículos", "Higienização interna", "Polimento e pintura automotiva",
        "Troca de óleo e filtros", "Alinhamento e balanceamento", "Revisão mecânica",
        "Funilaria", "Instalação de som e acessórios", "Chaveiro automotivo", "Guincho, 24 horas"
      ]
    },
    {
      category: "Serviços para Pets",
      icon: <PawPrint className="w-8 h-8" />,
      gradient: "from-yellow-500 to-amber-500",
      services: [
        "Banho e tosa", "Consulta veterinária domiciliar", "Aplicação de medicamentos e vacinas",
        "Passeio de cães (dog walker)", "Adestramento de cães", "Pet sitter", "Transporte de pets"
      ]
    },
    {
      category: "Serviços de Eventos e Festas",
      icon: <PartyPopper className="w-8 h-8" />,
      gradient: "from-rose-500 to-red-500",
      services: [
        "Fotografia de eventos", "Filmagem de eventos", "Decoração de festas", "Buffet e catering",
        "Serviço de bartender", "Locação de mesas e cadeiras", "Locação de som e iluminação",
        "DJ", "Músicos ao vivo", "Recreação infantil", "Organização de eventos"
      ]
    },
    {
      category: "Serviços Criativos e Digitais",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-purple-600 to-indigo-600",
      services: [
        "Design gráfico", "Criação de identidade visual", "Redação de artigos e blogs",
        "Edição de fotos", "Edição de vídeos", "Produção de vídeos promocionais",
        "Ilustração personalizada", "Desenvolvimento de sites", "Consultoria em marketing digital",
        "Gestão de redes sociais", "Criação de conteúdo para redes sociais"
      ]
    },
    {
      category: "Serviços de Construção e Reforma",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-orange-600 to-yellow-600",
      services: [
        "Projeto arquitetônico", "Projeto de design de interiores", "Reforma residencial",
        "Reforma comercial", "Pintura de paredes e tetos", "Instalação elétrica",
        "Instalação hidráulica", "Colocação de pisos e revestimentos", "Marcenaria e carpintaria",
        "Serralheria", "Vidraçaria"
      ]
    },
    {
      category: "Serviços de Transporte e Logística",
      icon: <Plane className="w-8 h-8" />,
      gradient: "from-cyan-500 to-teal-500",
      services: [
        "Motorista particular", "Transporte escolar", "Frete e carretos", "Serviço de motoboy",
        "Transporte de cargas leves", "Transporte fluvial de passageiros", "Transporte fluvial de pequenas cargas",
        "Guincho, 24 horas"
      ]
    },
    {
      category: "Serviços de Agricultura e Pecuária",
      icon: <Tractor className="w-8 h-8" />,
      gradient: "from-lime-500 to-green-500",
      services: [
        "Consultoria em manejo agrícola", "Consultoria em pecuária", "Elaboração de projetos rurais",
        "Serviço de tratorista", "Serviço de colheita e plantio", "Transporte de animais",
        "Manutenção de cercas e pastagens"
      ]
    },
    {
      category: "Serviços Personalizados",
      icon: <UserCheck className="w-8 h-8" />,
      gradient: "from-fuchsia-500 to-purple-500",
      services: [
        "Personal shopper", "Organização de ambientes (closets, cozinhas, escritórios)",
        "Consultoria de imagem e estilo", "Assistência virtual (secretariado remoto)",
        "Pesquisa genealógica", "Coaching em metas pessoais"
      ]
    },
    {
      category: "Serviços de Lazer e Turismo",
      icon: <Sailboat className="w-8 h-8" />,
      gradient: "from-sky-500 to-blue-500",
      services: [
        "Guia turístico regional", "Passeios fluviais (barco e lancha)", "Aluguel de barcos e canoas",
        "Passeios em trilhas ecológicas", "Turismo de pesca esportiva", "Turismo rural e cultural"
      ]
    },
    {
      category: "Serviços Esportivos",
      icon: <Bike className="w-8 h-8" />,
      gradient: "from-red-600 to-rose-600",
      services: [
        "Treinador de Padel", "Treinador de Futebol", "Treinador de Goleiros", "Treinador de Atletismo",
        "Instrutor de Canoagem", "Treinamento Funcional", "Treinador de Tênis", "Treinador de Natação",
        "Treinador de Ciclismo (Mountain Bike e Estrada)", "Instrutor de Dança (Zumba, ritmos fitness, forró, sertanejo)",
        "Personal trainer", "Personal Fight"
      ]
    }
  ];

  const processSteps = [
    { 
      step: "1", 
      title: "Solicite o Serviço", 
      desc: "Entre em contato conosco pelo WhatsApp, telefone ou formulário online",
      icon: <Phone className="w-6 h-6" />
    },
    { 
      step: "2", 
      title: "Receba o Orçamento", 
      desc: "Orçamento personalizado com preço fixo e sem surpresas desagradáveis",
      icon: <CheckCircle className="w-6 h-6" />
    },
    { 
      step: "3", 
      title: "Agende o Atendimento", 
      desc: "Escolha o melhor dia e horário para sua conveniência e disponibilidade",
      icon: <Clock className="w-6 h-6" />
    },
    { 
      step: "4", 
      title: "Serviço Realizado", 
      desc: "Nossa equipe executa o serviço com qualidade garantida e total satisfação",
      icon: <Heart className="w-6 h-6" />
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
              Nossos Serviços
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Soluções Completas para <span className="text-yellow-500">Todas as Suas Necessidades</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Oferecemos uma vasta gama de serviços especializados para facilitar seu dia a dia. 
              Cada serviço é personalizado para atender suas necessidades específicas com a máxima qualidade.
            </p>
            <Link to="/contato">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-4 rounded-full">
                <Zap className="w-5 h-5 mr-2" />
                Contratar Profissional
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12">
              {serviceCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white">
                  <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`bg-gradient-to-r ${category.gradient} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-black">{category.category}</h3>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">{service}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link to="/contato">
                          <Button 
                            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-3 rounded-full"
                          >
                            Contratar Serviço desta Categoria
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Processo
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">Como Funciona</h2>
              <p className="text-xl text-gray-700">Processo simples, rápido e transparente</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto font-bold text-2xl text-black shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                      {item.icon}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-yellow-300 to-transparent"></div>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garantias */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Nossas Garantias
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                Sua Satisfação é Nossa Prioridade
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Satisfação Garantida</h3>
                  <p className="text-gray-700">
                    Se não ficar 100% satisfeito, refazemos o serviço sem custo adicional
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Orçamento Rápido</h3>
                  <p className="text-gray-700">
                    Receba um orçamento personalizado em até 2 horas durante o horário comercial
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Profissionais Qualificados</h3>
                  <p className="text-gray-700">
                    Equipe selecionada e treinada para oferecer o melhor atendimento e serviço
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6">
            Pronto para transformar sua <span className="text-yellow-500">rotina</span>?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Deixe-nos cuidar de tudo para você. Entre em contato e solicite um orçamento.
          </p>
          <Link to="/contato">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-3" />
              Solicitar Orçamento Agora
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Servicos

