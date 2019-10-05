import { ptBR } from './index'

const getLanguage = lang => {
  switch (lang) {
    case 'pt-BR':
    default:
      return ptBR
  }
}

export { getLanguage }
