import React from 'react'
import { NotSetView } from './NotSetView'
import { SetView } from './SetView'
import { TextBlock } from '../'
import { getLanguage } from '../../utils'

const {
  itemsBlock: {
    itemsList: {
      sofa: { text, title: displayName }
    }
  }
} = getLanguage('pt-BR')

const Sofa = ({ isSet, items, onChangePlaces }) => {
  return (
    <div className={Sofa.displayName}>
      <TextBlock title={Sofa.displayName} text={text} />

      {isSet ? (
        <SetView />
      ) : (
        <NotSetView items={items} onChange={onChangePlaces} />
      )}
    </div>
  )
}

Sofa.displayName = displayName

export { Sofa }
