const returnAnObject = (...args) => {
  let response = {}
  if (args.length) {
    let index = 0
    args.forEach((arg) => {
      response[index] = arg
      index++
    })
  } else {
    response = 'No argument was given to the function.'
  }
  return response
}

exports.premiereFonction = returnAnObject;
