import React from 'react'
import {
  TextBlock,
  Button,
  Items,
  ItemView
} from '../components'
import { getLanguage, itemsList } from '../utils'
import './Form.scss'

class Form extends React.Component {
  state = {
    isImpermeabilization: true,
    activeItem: 'sofa',
    sofa: {
      isSet: false,
      notSetView: {
        sofaItems: [1]
      }
    }
  }

  renderOptions = () => {
    const { activeItem: itemName } = this.state

    let props = {
      itemName
    }

    switch (itemName) {
      default:
      case 'sofa':
        const onChangePlaces = (sofaItems) =>
          this.setState({
            sofa: {
              ...this.state.sofa,
              notSetView: {
                sofaItems
              }
            }
          })

        const onChangeSet = (isSet) =>
          this.setState({
            sofa: {
              ...this.state.sofa,
              isSet
            }
          })

        const {
          sofa: {
            isSet,
            notSetView: { sofaItems }
          }
        } = this.state

        props = {
          ...props,
          items: sofaItems,
          onChangePlaces,
          onChangeSet,
          isSet
        }

        break
    }

    return <ItemView {...props} />
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
		
		const { isImpermeabilization } = this.state

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
            <Button isActive={isImpermeabilization}>
              {impermeabilization}
            </Button>
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
            onClick={(activeItem) =>
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
