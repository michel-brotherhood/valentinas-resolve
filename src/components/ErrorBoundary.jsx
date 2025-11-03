import React from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Algo deu errado
            </h1>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Encontramos um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={() => window.location.reload()} 
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Tentar Novamente
              </Button>
              
              <Link to="/" className="block">
                <Button variant="outline" className="w-full">
                  <Home className="w-4 h-4 mr-2" />
                  Voltar ao Início
                </Button>
              </Link>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Detalhes do erro (desenvolvimento)
                </summary>
                <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-xs overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

