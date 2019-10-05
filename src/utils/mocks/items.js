import almofadaIcon from '../../assets/almofada-01.svg'
import colchaoIcon from '../../assets/colchao-01.svg'
import cadeiraIcon from '../../assets/cadeira-01.svg'
import sofaIcon from '../../assets/sofa-01.svg'
import carroIcon from '../../assets/carro-01.svg'
import poltronaIcon from '../../assets/poltrona-01.svg'
import puffIcon from '../../assets/puff-01.svg'
import tapeteIcon from '../../assets/tapete-01.svg'
import chaiseIcon from '../../assets/chaise-01.svg'
import recamierIcon from '../../assets/recamier-01.svg'
import divaIcon from '../../assets/diva-01.svg'
import cortinaIcon from '../../assets/cortina-01.svg'
import { getLanguage } from '../i18n'

const {
  itemsBlock: {
    itemsList: {
      almofada: { title: almofada },
      colchao: { title: colchao },
      cadeira: { title: cadeira },
      sofa: { title: sofa },
      carro: { title: carro },
      poltrona: { title: poltrona },
      puff: { title: puff },
      tapete: { title: tapete },
      chaise: { title: chaise },
      recamier: { title: recamier },
      diva: { title: diva },
      cortina: { title: cortina }
    }
  }
} = getLanguage('pt-BR')

const itemsList = [
  { title: almofada, icon: almofadaIcon },
  { title: colchao, icon: colchaoIcon },
  { title: cadeira, icon: cadeiraIcon },
  { title: sofa, icon: sofaIcon },
  { title: carro, icon: carroIcon },
  { title: poltrona, icon: poltronaIcon },
  { title: puff, icon: puffIcon },
  { title: tapete, icon: tapeteIcon },
  { title: chaise, icon: chaiseIcon },
  { title: recamier, icon: recamierIcon },
  { title: diva, icon: divaIcon },
  { title: cortina, icon: cortinaIcon }
]

export { itemsList }
