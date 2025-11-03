import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import ContabilidadeIntegrada from './pages/ContabilidadeIntegrada'
import Equipe from './pages/Equipe'
import Vagas from './pages/Vagas'
import Contato from './pages/Contato'
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade'
import TermosDeUso from './pages/TermosDeUso'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <Loading size="large" text="Carregando página..." />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contabilidade" element={<ContabilidadeIntegrada />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/vagas" element={<Vagas />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  )
}

export default App

