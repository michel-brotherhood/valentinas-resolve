import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  User,
  Briefcase,
  Zap,
  Upload,
  Clock,
  CheckCircle,
  Heart,
  Users,
  Loader2
} from 'lucide-react'

function Contato() {
  const [activeForm, setActiveForm] = useState('cliente') // 'cliente' ou 'profissional'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)

      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contato',
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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2 text-sm font-medium">
              Contato
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Entre em <span className="text-yellow-500">Contato</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Estamos prontos para atender você da melhor forma. Entre em contato conosco 
              para solicitar um orçamento ou para se candidatar a uma vaga em nossa equipe.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Forms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-4xl font-bold mb-8 text-black">Fale Conosco</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Nossa equipe está sempre disponível para esclarecer dúvidas, fornecer orçamentos 
                  ou receber candidaturas. Escolha a forma de contato que preferir.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mr-6">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">WhatsApp</p>
                      <p className="text-gray-600 mb-1">(69) 99271-5000</p>
                      <p className="text-sm text-gray-500">Resposta imediata • Disponível 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mr-6">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">Telefone</p>
                      <p className="text-gray-600 mb-1">(69) 3333-4444</p>
                      <p className="text-sm text-gray-500">Seg a Sex: 8h às 18h • Sáb: 8h às 14h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mr-6">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">Email</p>
                      <p className="text-gray-600 mb-1">contato@valentinasresolve.com.br</p>
                      <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mr-6">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">Localização</p>
                      <p className="text-gray-600 mb-1">Rondônia, Brasil</p>
                      <p className="text-sm text-gray-500">Atendemos toda a região metropolitana</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Siga-nos nas redes sociais</h3>
                  <div className="flex space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Forms Section */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl">
                {/* Form Toggle */}
                <div className="flex mb-8 bg-white rounded-xl p-1 shadow-inner">
                  <button
                    onClick={() => setActiveForm('cliente')}
                    className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      activeForm === 'cliente'
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <User className="w-5 h-5 mr-2" />
                    Sou Cliente
                  </button>
                  <button
                    onClick={() => setActiveForm('profissional')}
                    className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      activeForm === 'profissional'
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <Briefcase className="w-5 h-5 mr-2" />
                    Sou Profissional
                  </button>
                </div>

                {/* Formulário do Cliente */}
                {activeForm === 'cliente' && (
                  <div>
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold mb-4 text-black">Solicite seu Orçamento</h3>
                      <p className="text-gray-600">Preencha o formulário e receba um orçamento personalizado</p>
                    </div>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                          <input 
                            type="text" 
                            name="nome"
                            placeholder="Digite seu nome completo" 
                            className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone/WhatsApp *</label>
                          <input 
                            type="tel" 
                            name="telefone"
                            placeholder="(69) 99271-5000" 
                            className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          placeholder="seu@email.com" 
                          className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cidade/Bairro *</label>
                        <input 
                          type="text" 
                          name="cidade"
                          placeholder="Ex: São Paulo - Vila Madalena" 
                          className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Serviço Desejado *</label>
                        <select name="assunto" className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300" required>
                          <option value="">Selecione o serviço</option>
                          <option value="limpeza">Limpeza Doméstica</option>
                          <option value="organizacao">Organização</option>
                          <option value="manutencao">Manutenção</option>
                          <option value="jardinagem">Jardinagem</option>
                          <option value="multiplos">Múltiplos Serviços</option>
                          <option value="pacote">Pacote Completo</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Descrição do Serviço *</label>
                        <textarea 
                          name="mensagem"
                          placeholder="Descreva detalhadamente o que precisa ser feito, incluindo tamanho do ambiente, frequência desejada e observações especiais" 
                          rows="4"
                          className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300 resize-none"
                          required
                        ></textarea>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Local de Execução</label>
                        <input 
                          type="text" 
                          name="local"
                          placeholder="Endereço aproximado ou bairro onde será realizado o serviço" 
                          className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Urgência do Serviço *</label>
                        <div className="space-y-3">
                          <label className="flex items-center p-3 bg-white rounded-lg hover:bg-yellow-50 transition-colors cursor-pointer">
                            <input type="radio" name="urgencia" value="imediato" className="mr-3 text-yellow-500" required />
                            <div>
                              <span className="font-medium text-gray-700">Imediato</span>
                              <p className="text-sm text-gray-500">Preciso do serviço hoje ou amanhã</p>
                            </div>
                          </label>
                          <label className="flex items-center p-3 bg-white rounded-lg hover:bg-yellow-50 transition-colors cursor-pointer">
                            <input type="radio" name="urgencia" value="proximos_dias" className="mr-3 text-yellow-500" />
                            <div>
                              <span className="font-medium text-gray-700">Nos próximos dias</span>
                              <p className="text-sm text-gray-500">Dentro de uma semana</p>
                            </div>
                          </label>
                          <label className="flex items-center p-3 bg-white rounded-lg hover:bg-yellow-50 transition-colors cursor-pointer">
                            <input type="radio" name="urgencia" value="agendado" className="mr-3 text-yellow-500" />
                            <div>
                              <span className="font-medium text-gray-700">Agendado para data específica</span>
                              <p className="text-sm text-gray-500">Tenho uma data em mente</p>
                            </div>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Preferência de Contato</label>
                        <div className="flex flex-wrap gap-4">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2 text-yellow-500" />
                            <span className="text-gray-700">WhatsApp</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2 text-yellow-500" />
                            <span className="text-gray-700">Email</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2 text-yellow-500" />
                            <span className="text-gray-700">Telefone</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Tipo de Orçamento</label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input type="radio" name="orcamento" value="estimativa" className="mr-2 text-yellow-500" />
                            <span className="text-gray-700">Somente estimativa por telefone/WhatsApp</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="orcamento" value="detalhado" className="mr-2 text-yellow-500" />
                            <span className="text-gray-700">Orçamento detalhado com visita técnica</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                        <input type="checkbox" className="mr-3 mt-1 text-yellow-500" required />
                        <span className="text-sm text-gray-700">
                          Concordo em compartilhar meus dados com profissionais parceiros da plataforma para fins de orçamento e aceito os 
                          <a href="/termos-de-uso" className="text-yellow-600 hover:underline ml-1">termos de uso</a> e 
                          <a href="/politica-de-privacidade" className="text-yellow-600 hover:underline ml-1">política de privacidade</a>.
                        </span>
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
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-black font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Zap className="w-5 h-5 mr-2" />
                            Solicitar Orçamento Gratuito
                          </>
                        )}
                      </Button>
                      
                      <div className="text-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Resposta em até 2 horas durante horário comercial
                      </div>
                    </form>
                  </div>
                )}

                {/* Formulário do Profissional */}
                {activeForm === 'profissional' && (
                  <div>
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold mb-4 text-black">Cadastro de Profissional</h3>
                      <p className="text-gray-600">Faça parte da nossa equipe de especialistas</p>
                    </div>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                          <input 
                            type="text" 
                            name="nome"
                            placeholder="Digite seu nome completo" 
                            className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">CPF/CNPJ *</label>
                          <input 
                            type="text" 
                            name="documento"
                            placeholder="000.000.000-00" 
                            className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Data de Nascimento *</label>
                          <input 
                            type="date" 
                            name="nascimento" 
                            className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone/WhatsApp *</label>
                          <input 
                            type="tel" 
                            placeholder="(69) 99271-5000" 
                            className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                        <input 
                          type="email" 
                          placeholder="seu@email.com" 
                          className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Endereço (Cidade/Bairro) *</label>
                        <input 
                          type="text" 
                          placeholder="Ex: São Paulo - Vila Madalena" 
                          className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Área de Atuação *</label>
                        <select className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300" required>
                          <option value="">Selecione sua área</option>
                          <option value="limpeza">Limpeza Doméstica</option>
                          <option value="organizacao">Organização</option>
                          <option value="manutencao">Manutenção</option>
                          <option value="jardinagem">Jardinagem</option>
                          <option value="coordenacao">Coordenação/Gestão</option>
                          <option value="atendimento">Atendimento ao Cliente</option>
                          <option value="multiplas">Múltiplas Áreas</option>
                        </select>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Tempo de Experiência *</label>
                          <select className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300" required>
                            <option value="">Selecione</option>
                            <option value="menos-1">Menos de 1 ano</option>
                            <option value="1-2">1-2 anos</option>
                            <option value="3-5">3-5 anos</option>
                            <option value="5-10">5-10 anos</option>
                            <option value="mais-10">Mais de 10 anos</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Disponibilidade *</label>
                          <select className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300" required>
                            <option value="">Selecione</option>
                            <option value="integral">Tempo integral</option>
                            <option value="meio-periodo">Meio período</option>
                            <option value="fins-semana">Fins de semana</option>
                            <option value="freelancer">Freelancer</option>
                            <option value="projeto">Por projeto</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Formação/Certificações</label>
                        <input 
                          type="text" 
                          placeholder="Descreva sua formação, cursos e certificações relevantes" 
                          className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Atende em Domicílio? *</label>
                        <div className="flex space-x-6">
                          <label className="flex items-center">
                            <input type="radio" name="domicilio" value="sim" className="mr-2 text-yellow-500" required />
                            <span className="text-gray-700">Sim, atendo em domicílio</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="domicilio" value="nao" className="mr-2 text-yellow-500" />
                            <span className="text-gray-700">Não, apenas em local fixo</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Descrição dos Serviços *</label>
                        <textarea 
                          placeholder="Descreva brevemente os serviços que você presta, sua experiência e diferenciais" 
                          rows="4"
                          className="w-full p-4 rounded-xl border border-gray-200 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300 resize-none"
                          required
                        ></textarea>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Documentos *</label>
                        <div className="space-y-4">
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-yellow-500 transition-colors cursor-pointer bg-white">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <p className="text-sm text-gray-600 mb-1">Documento de Identificação (RG/CNH)</p>
                            <p className="text-xs text-gray-500">Clique para selecionar ou arraste o arquivo</p>
                          </div>
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-yellow-500 transition-colors cursor-pointer bg-white">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <p className="text-sm text-gray-600 mb-1">Comprovante de Residência</p>
                            <p className="text-xs text-gray-500">Clique para selecionar ou arraste o arquivo</p>
                          </div>
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-yellow-500 transition-colors cursor-pointer bg-white">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <p className="text-sm text-gray-600 mb-1">Certificados e Diplomas (opcional)</p>
                            <p className="text-xs text-gray-500">Clique para selecionar ou arraste os arquivos</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 p-4 bg-yellow-50 rounded-lg">
                        <div className="flex items-start">
                          <input type="checkbox" className="mr-3 mt-1 text-yellow-500" required />
                          <span className="text-sm text-gray-700">
                            Declaro que as informações fornecidas são verdadeiras e estou ciente de que informações falsas podem resultar na desqualificação do processo seletivo.
                          </span>
                        </div>
                        <div className="flex items-start">
                          <input type="checkbox" className="mr-3 mt-1 text-yellow-500" required />
                          <span className="text-sm text-gray-700">
                            Autorizo o uso dos meus dados conforme a 
                            <a href="/politica-de-privacidade" className="text-yellow-600 hover:underline ml-1">política de privacidade</a> da plataforma e aceito os 
                            <a href="/termos-de-uso" className="text-yellow-600 hover:underline ml-1">termos de uso</a>.
                          </span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <Briefcase className="w-5 h-5 mr-2" />
                        Enviar Cadastro
                      </Button>
                      
                      <div className="text-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                        Analisaremos seu perfil e entraremos em contato em até 5 dias úteis
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                Dúvidas Frequentes
              </Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Como funciona o orçamento?",
                  answer: "Nosso orçamento é gratuito e sem compromisso. Após receber suas informações, nossa equipe entrará em contato em até 2 horas para entender melhor suas necessidades e fornecer um valor personalizado."
                },
                {
                  question: "Vocês atendem em toda São Paulo?",
                  answer: "Sim, atendemos em toda a região metropolitana de São Paulo. Para locais mais distantes, pode haver uma taxa adicional de deslocamento que será informada no orçamento."
                },
                {
                  question: "Os profissionais são verificados?",
                  answer: "Todos os nossos profissionais passam por um rigoroso processo de seleção, incluindo verificação de antecedentes, referências e certificações. Sua segurança é nossa prioridade."
                },
                {
                  question: "Como posso me candidatar a uma vaga?",
                  answer: "Você pode se candidatar preenchendo o formulário de profissional nesta página ou enviando seu currículo para nosso email. Analisamos todos os perfis e entramos em contato com candidatos qualificados."
                },
                {
                  question: "Qual é a garantia dos serviços?",
                  answer: "Oferecemos garantia de satisfação em todos os nossos serviços. Se não ficar 100% satisfeito, refazemos o serviço sem custo adicional."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato

