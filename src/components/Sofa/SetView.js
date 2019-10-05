import React from 'react'
import { Button } from '../'

const SetView = () => {
  return (
    <div className={SetView.displayName}>
      <div>
        <Button>2 e 3 lugares</Button>
        <Button>2 e 4 lugares</Button>
      </div>
      <div>
        <Button>Comum</Button>
        <Button>Retrátil</Button>
      </div>
    </div>
  )
}

SetView.displayName = 'SetView'

export { SetView }
