import React from 'react'
import { Loader2 } from 'lucide-react'

function Loading({ size = 'default', text = 'Carregando...', className = '' }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-yellow-500`} />
        <div className="absolute inset-0 rounded-full bg-yellow-500/20 animate-pulse"></div>
      </div>
      {text && (
        <p className="text-gray-600 text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  )
}

export default Loading

