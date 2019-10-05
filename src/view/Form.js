import React from 'react'
import {
  TextBlock,
  Button,
  Items,
  Sofa
} from '../components'
import { getLanguage, itemsList } from '../utils'
import './Form.scss'

class Form extends React.Component {
  state = {
    sofa: {
      notSetView: {
        sofaItems: [1]
      }
    }
  }

  render() {
    const {
      sofa: {
        notSetView: { sofaItems }
      }
    } = this.state

    const {
      servicesType: { impermeabilization, higienization },
      mainBlock: {
        title: mainTitle,
        subtitle: mainSubtitle
      },
      servicesBlock: { title: servicesTitle },
      itemsBlock: { title: itemsTitle }
    } = getLanguage('pt-BR')

    return (
      <div className={Form.displayName}>
        <TextBlock title={mainTitle} text={mainSubtitle} />

        <TextBlock text={servicesTitle} />

        <div>
          <Button>{impermeabilization}</Button>
          <Button>{higienization}</Button>
        </div>

        <div>
          <TextBlock text={itemsTitle} />

          <Items itemsList={itemsList} />
        </div>

        <Sofa
          items={sofaItems}
          onChangePlaces={sofaItems =>
            this.setState({ sofaItems })
          }
        />
      </div>
    )
  }
}

export default Form
