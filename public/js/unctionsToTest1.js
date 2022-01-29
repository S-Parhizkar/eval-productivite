
export const multiplyAllByTwo = (arrayOfNumbers) => {
    let response
    if (
      Array.isArray(arrayOfNumbers)
    ) {
      response = arrayOfNumbers.map((val) => val * 2)
    } else {
      response = 'The argument is not an Array of numbers'
    }
    return response
  }
  
  exports.secondeFonction= multiplyAllByTwo;

