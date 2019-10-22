import React from 'react'
import { Counter, TextBlock } from '../'
import { onChangeCounter } from './handlers'
import './NotSetView.scss'

const NotSetView = ({ items, onChange }) => (
  <div className='NotSetView'>
    <div>
      <TextBlock text='Número de sofás' />
      <Counter
        onChange={(counterLength) =>
          onChangeCounter({
            oldValue: items,
            counterLength,
            callback: onChange
          })
        }
      >
        {items.length}
      </Counter>
    </div>

    <div>
      <TextBlock text='Número de lugares' />
      <div>
        {items.map((item, index) => (
          <Counter
            key={index}
            onChange={(value) =>
              onChangeCounter({
                oldValue: items,
                newValue: { value, index },
                callback: onChange
              })
            }
          >
            {item}
          </Counter>
        ))}
      </div>
    </div>
  </div>
)

export { NotSetView }
