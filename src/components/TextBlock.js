import React from 'react'
import './TextBlock.scss'

const TextBlock = ({
  title,
  text,
  config: { isPageTitle, textAlt } = {}
}) => {
  const { displayName } = TextBlock

  const renderTitle = () => {
    if (!isPageTitle && !title) return null

    if (isPageTitle) {
      return (
        <h1 className={`${displayName}__title--main`}>
          {title}
        </h1>
      )
    }

    return (
      <h3 className={`${displayName}__title`}>{title}</h3>
    )
  }

  const renderText = () =>
    text && (
      <span
        className={
          !textAlt
            ? `${displayName}__text`
            : `${displayName}__text--alt`
        }
      >
        {text}
      </span>
    )

  return (
    <div className={displayName}>
      {renderTitle()}

      {renderText()}
    </div>
  )
}

TextBlock.displayName = 'TextBlock'

export { TextBlock }
