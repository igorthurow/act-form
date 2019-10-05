import React from 'react'
import './Form.scss'
import { TextBlock } from '../components/Title'
import { Button } from '../components/Button'
import i18n from '../utils/i18n'

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
    } = i18n('pt-BR')

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
        </div>
      </div>
    )
  }
}

export default Form
