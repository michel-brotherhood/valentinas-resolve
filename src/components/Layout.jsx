import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { 
  Phone, 
  Menu,
  X,
  MessageCircle,
  Heart,
  Users,
  ChevronUp
} from 'lucide-react'
import logo from '../assets/cropped-logo-1-web-640w.webp'

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setShowScrollTop(currentScrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navigation = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Contabilidade Integrada', path: '/contabilidade' },
    { name: 'Equipe', path: '/equipe' },
    { name: 'Trabalhe Conosco', path: '/vagas' },
    { name: 'Contato', path: '/contato' }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-black/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Valentinas Resolve" 
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 ${
                  scrollY > 50 ? 'text-gray-900' : 'text-yellow-500'
                }`}>
                  Valentina's Resolve
                </h1>
                <p className={`text-xs sm:text-sm transition-all duration-300 ${
                  scrollY > 50 ? 'text-gray-600' : 'text-yellow-400'
                }`}>Soluções Personalizadas</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-all duration-300 font-medium relative group py-2 px-1 ${
                    scrollY > 50 
                      ? `text-gray-700 hover:text-yellow-600 ${location.pathname === item.path ? 'text-yellow-600' : ''}`
                      : `text-yellow-400 hover:text-white ${location.pathname === item.path ? 'text-white' : ''}`
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    scrollY > 50 ? 'bg-yellow-600' : 'bg-white'
                  } ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <Link to="/contato">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ml-4">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="hidden xl:inline">Contratar Profissional</span>
                  <span className="xl:hidden">Contratar</span>
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                scrollY > 50 
                  ? 'hover:bg-gray-100 text-gray-700 hover:text-yellow-600' 
                  : 'hover:bg-white/10 text-yellow-400 hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : ''
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2.5' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className={`pb-6 pt-2 border-t transition-all duration-300 ${
              scrollY > 50 ? 'border-gray-200' : 'border-white/20'
            }`}>
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-left transition-all duration-300 py-3 px-4 rounded-lg ${
                      scrollY > 50 
                        ? `text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 ${
                            location.pathname === item.path ? 'text-yellow-600 bg-yellow-50 font-semibold' : ''
                          }`
                        : `text-yellow-400 hover:text-white hover:bg-white/10 ${
                            location.pathname === item.path ? 'text-white bg-white/10 font-semibold' : ''
                          }`
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link to="/contato">
                    <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Contratar Profissional
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="Valentinas Resolve" className="h-12 w-12 rounded-full" />
                <span className="text-2xl font-bold">Valentina's Resolve</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transformando casas em lares mais organizados, limpos e acolhedores 
                com soluções personalizadas e qualidade garantida.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-xl font-bold mb-6 text-yellow-500">Serviços</h5>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/servicos" className="hover:text-yellow-500 transition-colors duration-300">Limpeza Doméstica</Link></li>
                <li><Link to="/servicos" className="hover:text-yellow-500 transition-colors duration-300">Organização de Ambientes</Link></li>
                <li><Link to="/servicos" className="hover:text-yellow-500 transition-colors duration-300">Manutenção Residencial</Link></li>
                <li><Link to="/servicos" className="hover:text-yellow-500 transition-colors duration-300">Jardinagem e Paisagismo</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-xl font-bold mb-6 text-yellow-500">Empresa</h5>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/sobre" className="hover:text-yellow-500 transition-colors duration-300">Sobre Nós</Link></li>
                <li><Link to="/equipe" className="hover:text-yellow-500 transition-colors duration-300">Nossa Equipe</Link></li>
                <li><Link to="/vagas" className="hover:text-yellow-500 transition-colors duration-300">Trabalhe Conosco</Link></li>
                <li><Link to="/contato" className="hover:text-yellow-500 transition-colors duration-300">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-xl font-bold mb-6 text-yellow-500">Contato</h5>
              <ul className="space-y-3 text-gray-400">
                <li>CNPJ: 35.677.143/0001-17</li>
                <li>(69) 3333-4444</li>
                <li>contato@valentinasresolve.com.br</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Valentina's Resolve. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 opacity-90 hover:opacity-100"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        )}
        
        {/* WhatsApp Button */}
        <Button className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none">
          <MessageCircle className="w-7 h-7" />
        </Button>
      </div>
    </div>
  )
}

export default Layout

