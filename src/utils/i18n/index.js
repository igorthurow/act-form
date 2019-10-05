import { ptBR } from './pt-BR'

const i18n = lang => {
  switch (lang) {
    case 'pt-BR':
    default:
      return ptBR
  }
}

export default i18n
