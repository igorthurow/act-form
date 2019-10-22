import React from 'react'
import { words as capitalize } from 'capitalize'
import { TextBlock, SofaView } from '..'
import { getLanguage } from '../../utils/i18n'

const {
  itemsBlock: { itemsList }
} = getLanguage('pt-BR')

const renderItemView = (props) => {
  const { itemName } = props

  switch (itemName) {
    case 'sofa':
      return <SofaView {...props} />

    default:
      return null
  }
}

const ItemView = (props) => {
  const { itemName } = props

  const { title, text } = itemsList[itemName]

  return (
    <div className={capitalize(title)}>
      <TextBlock title={capitalize(title)} text={text} />

      {renderItemView(props)}
    </div>
  )
}

export { ItemView }
