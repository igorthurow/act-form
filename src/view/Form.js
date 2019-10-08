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

  onChangePlaces = sofaItems =>
    this.setState({
      sofa: {
        notSetView: {
          sofaItems
        }
      }
    })

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
        <TextBlock
          config={{ isPageTitle: true }}
          title={mainTitle}
          text={mainSubtitle}
        />

        <TextBlock
          config={{ textAlt: true }}
          text={servicesTitle}
        />

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
          onChangePlaces={this.onChangePlaces}
        />
      </div>
    )
  }
}

Form.displayName = 'Form'

export default Form
