import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import {
  Users,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Target,
  Eye,
  Heart,
  CheckCircle
} from 'lucide-react'

function Sobre() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Inovação",
      description: "Buscamos continuamente novas formas de simplificar e aprimorar a experiência dos usuários.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparência",
      description: "Agimos com ética, clareza e responsabilidade em todas as relações.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelência",
      description: "Entregamos resultados com qualidade, segurança e comprometimento.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Confiabilidade",
      description: "Cada serviço é realizado com profissionais verificados e comprometidos.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Valorização Humana",
      description: "Acreditamos que o sucesso nasce de pessoas — nossos clientes, parceiros e colaboradores.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sustentabilidade",
      description: "Atuamos de forma consciente, incentivando o uso responsável de recursos e oportunidades.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ]

  const achievements = [
    { number: "500+", label: "Clientes Satisfeitos", description: "Famílias que confiam em nossos serviços" },
    { number: "1000+", label: "Serviços Realizados", description: "Projetos concluídos com sucesso" },
    { number: "5", label: "Anos de Experiência", description: "Consolidando nossa expertise no mercado" },
    { number: "98%", label: "Taxa de Satisfação", description: "Clientes que recomendam nossos serviços" },
    { number: "24h", label: "Tempo de Resposta", description: "Agilidade no atendimento e orçamentos" },
    { number: "100%", label: "Garantia", description: "Satisfação garantida em todos os serviços" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2 text-sm font-medium">
              Sobre a Empresa
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Conheça a <span className="text-yellow-500">Valentina's Resolve</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Somos uma empresa de serviços guiada pela visão e paixão de duas empreendedoras, Daiane Amaral e Kellen Cristina Amaral. 
              Combinando a vasta experiência de ambas, buscamos oferecer soluções franquia baseada no serviço de recrutamento, seleção, 
              treinamento e assessoramento tanto às profissionais tendo como objetivo a formalização de contratos entre as partes. 
              Mão-de-obra treinada e qualificada para realização de serviços domésticos e para residência, apresentamos um diferencial 
              competitivo sobre as demais profissionais existentes no mercado. Especializada em manutenção, limpeza, lavanderia e serviços 
              de beleza, a Valentina's Resolve garante atendimento rápido e eficiente em diversas localidades do Brasil. Com uma equipe de 
              profissionais qualificados, a empresa promete satisfação e praticidade para o cotidiano dos seus clientes, oferecendo mais 
              de 150 tipos de serviços para atender às necessidades variadas do lar.
            </p>
            <Link to="/contato">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-4 rounded-full">
                Fale Conosco
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Nossos Pilares
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                Missão, Visão e Valores
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Missão */}
              <Card className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Missão</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Conectar pessoas e empresas por meio de uma plataforma inteligente e segura, 
                    oferecendo soluções completas em serviços, produtos e equipamentos. Transformar 
                    a maneira como o mercado consome e oferece serviços, promovendo praticidade, 
                    eficiência e confiança em cada interação.
                  </p>
                </CardContent>
              </Card>

              {/* Visão */}
              <Card className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Visão</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ser reconhecida como a maior e mais inovadora plataforma de integração de serviços 
                    do Brasil, referência em tecnologia, qualidade e credibilidade, expandindo nossa 
                    atuação para todos os estados e alcançando o mercado internacional.
                  </p>
                </CardContent>
              </Card>

              {/* Valores */}
              <Card className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Valores</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Inovação, transparência, excelência, confiabilidade, valorização humana e 
                    sustentabilidade são os valores que guiam cada ação e decisão em nossa empresa.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Valores Detalhados */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-r ${value.gradient} w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-black mb-2">{value.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Números e Conquistas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Nossos Números
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                Conquistas que nos Orgulham
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Cada número representa famílias que confiaram em nosso trabalho e tiveram suas vidas transformadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                      {achievement.number}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {achievement.label}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Diferenciais
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                Por que Escolher a <span className="text-yellow-500">Valentina's Resolve</span>?
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  "Equipe altamente qualificada e treinada",
                  "Produtos ecológicos e de alta qualidade",
                  "Preços fixos e transparentes",
                  "Garantia de satisfação em todos os serviços",
                  "Atendimento personalizado e humanizado",
                  "Flexibilidade de horários e agendamentos"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Compromisso com a Excelência</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Nosso compromisso vai além da prestação de serviços. Buscamos criar relacionamentos 
                    duradouros baseados na confiança, qualidade e satisfação total de nossos clientes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Cada projeto é único e recebe nossa atenção personalizada, garantindo que as 
                    necessidades específicas de cada família sejam atendidas com excelência.
                  </p>
                  <Link to="/equipe">
                    <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold">
                      Conheça Nossa Equipe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
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
            Pronto para conhecer nossos <span className="text-yellow-500">serviços</span>?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descubra como podemos transformar sua casa em um lar mais organizado e acolhedor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/servicos">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-8 py-4 rounded-full"
              >
                Ver Nossos Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold text-lg px-8 py-4 rounded-full"
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre


