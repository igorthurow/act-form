import React from 'react'
import { NotSetView } from './NotSetView'
import { SetView } from './SetView'

const SofaStructure = ({
  isSet,
  items,
  onChangePlaces
}) => {
  return (
    <div className={SofaStructure.displayName}>
      {isSet ? (
        <SetView />
      ) : (
        <NotSetView
          items={items}
          onChange={onChangePlaces}
        />
      )}
    </div>
  )
}

SofaStructure.displayName = 'SofaStructure'

export { SofaStructure }
