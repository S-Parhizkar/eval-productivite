/**
 * @description theses 2 functions are spouse to bet tested by jets UT
 * @param {any} args We can put any type as object in argument
 * @return {object} it should return an object fil up of any type put in argument. if args is empty, it will enter in ELSE and return the no valid message 
 */
export const returnAnObject = (...args) => {
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

/**
 *
 *
 * @param {arrayOfNumbers} arrayOfNumbers receive the numbers as array type, if nothings put in here it will enter in ELSE and return the no valid message
 * @return {arrayOfNumbers} [number] that we put as arrayOfNumbers arguments
 */
export const multiplyAllByTwo = (arrayOfNumbers) => {
  let response
  if (Array.isArray(arrayOfNumbers)) {
    response = arrayOfNumbers.map((val) => val * 2)
  } else {
    response = 'The argument is not an Array of numbers'
  }
  return response
}
