import React from 'react'
import { TextBlock } from '../components/Title'
import { Button } from '../components/Button'
import { Items } from '../components/Items'
import { getLanguage, itemsList } from '../utils'
import './Form.scss'

class Form extends React.Component {
  state = {}

  render() {
    const {
      services: { impermeabilization, higienization },
      titles: {
        mainBlock: {
          title: mainTitle,
          subtitle: mainSubtitle
        },
        servicesBlock: { title: servicesTitle },
        itensBlock: { title: itensTitle }
      }
    } = getLanguage('pt-BR')

    return (
      <div className={Form.displayName}>
        <TextBlock title={mainTitle} text={mainSubtitle} />

        <TextBlock text={servicesTitle} />

        <div>
          <Button text={impermeabilization} />
          <Button text={higienization} />
        </div>

        <div>
          <TextBlock text={itensTitle} />

          <Items itemsList={itemsList} />
        </div>
      </div>
    )
  }
}

export default Form
