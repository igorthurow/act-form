import React from 'react'
import { TextBlock, Button, Items } from '../components'
import { getLanguage, itemsList } from '../utils'
import { itemsOptionsViews } from '../components/handlers'
import './Form.scss'

class Form extends React.Component {
  state = {
    activeItem: 'sofa',
    sofa: {
      isSet: false,
      notSetView: {
        sofaItems: [1]
      }
    }
  }

  onChangePlaces = sofaItems =>
    this.setState({
      sofa: {
        ...this.state.sofa,
        notSetView: {
          sofaItems
        }
      }
    })

  onChangeSet = isSet =>
    this.setState({
      sofa: {
        ...this.state.sofa,
        isSet
      }
    })

  renderOptions = () => {
    const {
      activeItem,
      sofa: {
        isSet,
        notSetView: { sofaItems }
      }
    } = this.state

    const itemView = itemsOptionsViews(activeItem)

    switch (activeItem) {
      case 'sofa':
        return itemView({
          isSet,
          items: sofaItems,
          onChangePlaces: this.onChangePlaces,
          onChangeSet: this.onChangeSet
        })
    }
  }

  render() {
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
          className='headline'
          config={{ isPageTitle: true }}
          title={mainTitle}
          text={mainSubtitle}
        />

        <div className='services'>
          <TextBlock
            config={{ textAlt: true }}
            text={servicesTitle}
          />
          <div className='services__options'>
            <Button>{impermeabilization}</Button>
            <Button>{higienization}</Button>
          </div>
        </div>

        <div className='items'>
          <TextBlock
            config={{
              textAlt: true
            }}
            text={itemsTitle}
          />

          <Items
            activeItem={this.state.activeItem}
            onClick={activeItem =>
              this.setState({
                activeItem
              })
            }
            itemsList={itemsList}
          />
        </div>

        <div className='options'>
          {this.renderOptions()}
        </div>
      </div>
    )
  }
}

Form.displayName = 'Form'

export default Form
