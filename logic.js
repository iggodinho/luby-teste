// Teste lógico - Igor Godinho



// 1)

const createArray = (number, letter) => {
  const newArray = []
  for (i = 1; i <= number; i++) {
    newArray.push(letter)
  }
  console.log('1)\t', newArray, '\n')
  return newArray
}

createArray(3, 'a')



//--------------------------------------------------



//2)

const reverseArray = (inputArray) => {
  const newArray = []
  for (i = inputArray.length - 1; i >= 0; i--) {
    newArray.push(inputArray[i])
  }
  console.log('2)\t', newArray, '\n')
  return newArray
}

reverseArray([1, 2, 3, 4])



//--------------------------------------------------



//3)

const cleanArray = (inputArray) => {
  const newArray = inputArray.filter(num => num >= 1)
  console.log('3)\t', newArray, '\n')
  return newArray
}

cleanArray([1, 2, '', undefined])



//--------------------------------------------------



//4)

const convertArray = (inputArray) => {
  const newArray = Object.fromEntries(inputArray)
  console.log('4)\t', newArray, '\n')
  return newArray
}

convertArray([["c", 2], ["d", 4]])



// ----------------------------------------



//5)

const searchRemoveArray = (inputArray, inputN1, inputN2) => {
  const newArray = inputArray.filter(array => array !== inputN1 && array !== inputN2)
  console.log('5)\t', newArray, '\n')
  return newArray
}

searchRemoveArray([5, 4, 3, 2, 5], 5, 3)


//----------------------------------------


//6)

const removeRepeatedItens = (inputArray) => {
  const newArray = []
  for (i of inputArray) {
    if (newArray.indexOf(i) === -1) {
      newArray.push(i)
    }
  }
  console.log('6)\t', newArray, '\n')
  return newArray
}


removeRepeatedItens([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])


//----------------------------------------


//7)

const compareArrays = (inputArray1, inputArray2) => {
  const compareValues = inputArray1.every(function (val, index) { return inputArray2[index] === val })
  const result = (inputArray1.length === inputArray2.length && compareValues)
  console.log('7)\t', result, '\n')
  return result
}


compareArrays([1, 2, 3, 4], [1, 2, 3, 4])


//------------------------------------------


//8)

const getArraysInside = (inputArray) => {
  const newArray = []
  const uniqueArray = inputArray.flat()
  console.log('8)\t', uniqueArray, '\n')
  return uniqueArray
}


getArraysInside([1, 2, [3], [4, 5]])


//----------------------------------


//9)

function splitArray(inputArray, inputNumber) {

  const newArray = new Array(Math.round(inputArray.length / inputNumber)).fill().map(
    () => inputArray.splice(0, inputNumber)
  )

  console.log('9)\t', newArray, '\n')
  return newArray

}

splitArray([1, 2, 3, 4, 5], 2)


//---------------------------------------


//10)

function getRepeatedItens(inputArray1, inputArray2) {
  const newArray = inputArray2.filter(value => inputArray1.includes(value))
  console.log('10)\t', newArray, '\n')
  return newArray
}

getRepeatedItens([6, 8], [8, 9])