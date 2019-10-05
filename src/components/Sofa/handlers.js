const onChangeCounter = ({
  oldValue,
  counterLength,
  newValue: { value, index } = {},
  callback
}) => {
  let newValue = [...oldValue]

  if (counterLength) {
    newValue.length < counterLength
      ? newValue.push(1)
      : newValue.pop()
  }

  if (index !== undefined) newValue[index] = value

  return callback(newValue)
}

export { onChangeCounter }
