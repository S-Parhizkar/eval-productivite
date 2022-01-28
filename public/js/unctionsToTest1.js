
const multiplyAllByTwo = (arrayOfNumbers) => {
    let response
    if (
      arrayOfNumbers.constructor.prototype === new Array().constructor.prototype
    ) {
      response = arrayOfNumbers.map((val) => val * 2)
      console.log('arrayTimesTwo: ', arrayTimesTwo)
    } else {
      response = 'The argument is not an Array of numbers'
    }
    return response
  }
  
  exports.secondeFonction= multiplyAllByTwo;