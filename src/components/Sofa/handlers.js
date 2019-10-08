const onChangeCounter = ({
  oldValue,
  counterLength,
  newValue: { value, index } = {},
  callback
}) => {
  if (!counterLength && (!value || index === undefined))
    return false

  let newValue = [...oldValue]

  if (counterLength) {
    newValue.length < counterLength
      ? newValue.push(1)
      : newValue.pop()
  }

  newValue[index] = value

  return callback(newValue)
}

export { onChangeCounter }
