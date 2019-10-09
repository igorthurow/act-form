import React from 'react'
import { SofaStructure, TextBlock, Button } from '../../'
import { getLanguage } from '../../../utils/i18n'

const {
  itemsBlock: { itemsList }
} = getLanguage('pt-BR')

const itemsOptionsViews = itemName => {
  const itemTexts = itemsList[itemName]

  const renderItemView = props => {
    switch (itemName) {
      case 'sofa':
        const {
          items,
          onChangePlaces,
          isSet,
          onChangeSet
        } = props

        return (
          <>
            <Button
              isActive={isSet}
              onClick={() => onChangeSet(true)}
            >
              Sim
            </Button>

            <Button
              isActive={!isSet}
              onClick={() => onChangeSet(false)}
            >
              Não
            </Button>

            <SofaStructure
              isSet={isSet}
              items={items}
              onChangePlaces={onChangePlaces}
            />
          </>
        )

      default:
        return () => null
    }
  }

  return props => (
    <div className={itemTexts.title}>
      <TextBlock
        title={itemTexts.title}
        text={itemTexts.text}
      />

      {renderItemView(props)}
    </div>
  )
}

export { itemsOptionsViews }
