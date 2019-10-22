import React from 'react'

import { Button, SofaStructure } from '../'

const SofaView = ({
  items,
  onChangePlaces,
  isSet,
  onChangeSet
}) => {
  return (
    <div className='SofaView'>
      {/* <Button
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
      </Button> */}

      <SofaStructure
        isSet={false}
        items={items}
        onChangePlaces={onChangePlaces}
      />
    </div>
  )
}

export { SofaView }
