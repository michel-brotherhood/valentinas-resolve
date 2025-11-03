import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Calculator,
  FileText,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Zap,
  Phone,
  Mail,
  Loader2
} from 'lucide-react'

function ContabilidadeIntegrada() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)
      
      // Capturar checkboxes selecionados
      const interesseCheckboxes = formData.getAll('interesse')
      data.interesse = interesseCheckboxes.join(', ')

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contabilidade',
          formData: data
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        })
        e.target.reset()
      } else {
        throw new Error(result.error || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Regularização de CPF",
      description: "Auxílio completo para regularizar sua situação fiscal e manter seu CPF em dia.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Suporte Contábil para Autônomos",
      description: "Gestão fiscal especializada para profissionais autônomos e freelancers.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Integração Fiscal Completa",
      description: "Solução completa para empresas com integração total dos processos fiscais.",
      gradient: "from-purple-500 to-indigo-500"
    }
  ]

  const benefits = [
    "Profissionais especializados em contabilidade digital",
    "Atendimento personalizado via WhatsApp",
    "Documentação organizada e acessível",
    "Compliance fiscal garantido",
    "Suporte contínuo durante todo o ano",
    "Relatórios detalhados e transparentes"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm text-sm sm:text-base">
              💼 Contabilidade Integrada
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Contabilidade
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Integrada
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Soluções contábeis completas para clientes da plataforma, profissionais autônomos e empresas. 
              Regularize seu CPF, organize sua vida fiscal e tenha suporte especializado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#formulario">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Solicitar Atendimento
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
                </Button>
              </a>
              
              <a href="#servicos">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                >
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-800 border-blue-300 text-sm sm:text-base">
                Nossos Serviços
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Soluções Contábeis Completas
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0">
                Oferecemos suporte especializado para todas as suas necessidades fiscais e contábeis
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="formulario" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 bg-yellow-100 text-yellow-800 border-yellow-300 text-sm sm:text-base">
                Entre em Contato
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Solicite seu Atendimento Contábil
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 px-4 sm:px-0">
                Preencha o formulário e um especialista entrará em contato via WhatsApp ou e-mail
              </p>
            </div>

            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-6 sm:p-8">
                <form 
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input 
                        type="text" 
                        name="nome"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        name="telefone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+55 (11) 99999-9999"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Cidade de Residência
                      </label>
                      <select name="cidade" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                        <option>Selecione sua cidade</option>
                        <option>São Paulo - SP</option>
                        <option>Rio de Janeiro - RJ</option>
                        <option>Belo Horizonte - MG</option>
                        <option>Porto Alegre - RS</option>
                        <option>Outra</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de Interesse
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" name="interesse" value="cliente_cpf" className="mr-3 rounded" />
                        <span className="text-gray-700">Sou cliente da plataforma e quero regularizar meu CPF</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" name="interesse" value="autonomo_contabil" className="mr-3 rounded" />
                        <span className="text-gray-700">Sou profissional autônomo e quero suporte contábil</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" name="interesse" value="empresa_fiscal" className="mr-3 rounded" />
                        <span className="text-gray-700">Tenho empresa e quero integração fiscal completa</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Descreva brevemente sua necessidade
                    </label>
                    <textarea 
                      name="descricao"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      rows="4"
                      placeholder="Conte-nos mais sobre sua situação e como podemos ajudar..."
                      maxLength="400"
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-1">Máximo 400 caracteres</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Anexar Documento (opcional)
                    </label>
                    <input 
                      type="file" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <p className="text-sm text-gray-500 mt-1">Formatos aceitos: PDF, JPG, PNG</p>
                  </div>

                  {/* Status Messages */}
                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        ENVIANDO...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-3" />
                        ENVIAR MENSAGEM
                      </>
                    )}
                  </Button>

                  <p className="text-center text-gray-600 text-sm">
                    Após o envio, um especialista entrará em contato via WhatsApp ou e-mail.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-300">
                Vantagens
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por que Escolher Nossa Contabilidade?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para Organizar sua Vida Fiscal?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Entre em contato agora e receba atendimento especializado em contabilidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-3" />
                Falar via WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContabilidadeIntegrada

