import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Zap,
  ArrowRight,
  Star,
  Users,
  Shield,
  Clock,
  Award
} from 'lucide-react'

function Home() {
  const stats = [
    { number: "500+", label: "Clientes Satisfeitos" },
    { number: "1000+", label: "Serviços Realizados" },
    { number: "5", label: "Anos de Experiência" },
    { number: "98%", label: "Taxa de Satisfação" }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      comment: "Excelente serviço! Minha casa ficou impecável e o atendimento foi muito profissional. Recomendo de olhos fechados!",
      avatar: "MS",
      location: "Vila Madalena, SP"
    },
    {
      name: "João Santos",
      rating: 5,
      comment: "Recomendo muito! Preço justo e qualidade excepcional. Já contratei várias vezes e sempre superam as expectativas.",
      avatar: "JS",
      location: "Pinheiros, SP"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Equipe muito dedicada e cuidadosa. Transformaram completamente minha casa! Profissionalismo nota 10.",
      avatar: "AC",
      location: "Jardins, SP"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Video_de_Profissionais_em_Ação.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced overlay with stronger shadow for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-15"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-200 rounded-full opacity-20 animate-bounce z-30" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full opacity-30 animate-bounce z-30" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full opacity-25 animate-bounce z-30" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute top-1/2 right-8 w-8 h-8 bg-yellow-500 rounded-full opacity-15 animate-pulse z-30" style={{animationDelay: '1.5s'}}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-40">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-6 sm:mb-8 bg-yellow-100/90 text-yellow-800 border-yellow-300 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              ✨ Negócios que conectam. Resultados que transformam.
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                PLATAFORMA
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                INTELIGENTE
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                DE SERVIÇOS
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              A Valentina's Resolve é uma <span className="font-semibold text-yellow-400">plataforma inteligente</span> de 
              integração de serviços, criada para transformar a forma como pessoas e empresas se conectam às 
              <span className="font-semibold text-yellow-400"> soluções que precisam</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
              <Link to="/contato">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group w-full sm:w-auto"
                >
                  <Zap className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                  CONTRATAR PROFISSIONAL
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/servicos">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-black bg-white/90 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm w-full sm:w-auto"
                >
                  Ver Nossos Serviços
                </Button>
              </Link>
            </div>

            {/* Stats section disabled as requested - no indicators at launch */}
            {/* 
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2 drop-shadow-lg">{stat.number}</div>
                  <div className="text-white font-medium drop-shadow-lg text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Sobre Preview Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-500 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <Badge className="mb-4 sm:mb-6 bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2">
                Sobre Nós
              </Badge>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Conheça a <span className="text-yellow-500">Valentina's Resolve</span>
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
                A Valentina's Resolve é uma startup brasileira de tecnologia e intermediação de serviços, 
                criada com o propósito de conectar pessoas, negócios e soluções em um único ambiente digital. 
                Nossa plataforma reúne mais de 200 tipos de serviços, integrando profissionais qualificados 
                em diversas áreas — desde o atendimento doméstico até demandas empresariais especializadas.
              </p>
              <Link to="/sobre">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
                  Saiba Mais Sobre Nós
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
                <CardContent className="p-6 sm:p-8 text-center relative">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Equipe Especializada</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Profissionais treinados, experientes e comprometidos com a excelência em cada serviço prestado.
                  </p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
                <CardContent className="p-6 sm:p-8 text-center relative">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Qualidade Garantida</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Satisfação do cliente em primeiro lugar com garantia total em todos os nossos serviços.
                  </p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden md:col-span-2 lg:col-span-1">
                <CardContent className="p-6 sm:p-8 text-center relative">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Pontualidade</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Sempre no horário combinado, respeitando seu tempo e sua rotina diária.
                  </p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Mission Statement */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-black relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-full"></div>
              </div>
              <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 relative z-10" />
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 relative z-10">Nossa Missão</h4>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto relative z-10">
                Proporcionar soluções personalizadas que transformem sua casa em um lar mais organizado, 
                limpo e acolhedor, superando expectativas e criando experiências memoráveis para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
              Depoimentos
            </Badge>
            <h3 className="text-5xl font-bold text-black mb-6">
              O que nossos <span className="text-yellow-500">clientes</span> dizem
            </h3>
            <p className="text-xl text-gray-700">Mais de 500 clientes satisfeitos em toda São Paulo</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-5xl font-bold mb-6">
            Pronto para transformar <span className="text-yellow-500">sua casa</span>?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado sem compromisso
          </p>
          <Link to="/contato">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-3" />
              Contratar Profissional Agora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

