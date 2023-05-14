const updateLight = current => current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';

console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");

//

function alphabetPosition(text) {
    let charCodeString = ''
  
    for (let i = 0; i < text.length; i++) {
      let charcode = text[i].toUpperCase().charCodeAt(0)
      charcode > 64 && charcode < 91 ? charCodeString += charcode - 64 + ' ' : ''
    }
  
    return charCodeString.trim();
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

//

function bouncingBall(h,  bounce,  window) {
    // your code here
    let numOfBounces = 0
    let bounceHeight = h
    
    if (h > 0 && window < h && (bounce > 0 && bounce < 1)) {
      
      do {
        bounceHeight = bounceHeight * bounce;
        bounceHeight > window ? numOfBounces +=2 : numOfBounces += 1;
    } while (bounceHeight > window)
      
    } else { numOfBounces = -1 }
    
    return numOfBounces
  }

  console.log(bouncingBall(3.0, 0.66, 1.5), 3);
  console.log(bouncingBall(30.0, 0.66, 1.5), 15);
  console.log(bouncingBall(3.0, 1.0, 1.5), -1);

  //

  function sumDigPow(a, b) {
    // Your code here
    let result = 0
    let arr = []
    for (let i = a; i <= b; i++) {
      result = i.toString().split('').reduce((a, c, ind) => a + (c**(ind+1)), 0)
      i == result ? arr.push(result) : 0
    }
    return arr
  }
  
        console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
        console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
        console.log(sumDigPow(10, 100),  [89])
        console.log(sumDigPow(90, 100), [])
        console.log(sumDigPow(90, 150), [135])
        console.log(sumDigPow(50, 150), [89, 135])
        console.log(sumDigPow(10, 150), [89, 135])

//

function findUniq(arr) {
    // do magic
    return (arr.indexOf(Math.max(...arr)) != arr.lastIndexOf(Math.max(...arr)) ? Math.min(...arr) : Math.max(...arr))
  }
  
      console.log(findUniq([ 1, 0, 0 ]), 1);
      console.log(findUniq([ 0, 1, 0 ]), 1);
      console.log(findUniq([ 0, 0, 1 ]), 1);
      console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
      console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
      console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);
  
//

function findUniq(arr) {
    // do magic
    let num = arr[0]
    return (arr.includes(num,1)) ? Number(arr.filter((a) => a != num)) : Number(arr.filter((a) => a === num))
  }
  
      console.log(findUniq([ 1, 0, 0 ]), 1);
      console.log(findUniq([ 0, 1, 0 ]), 1);
      console.log(findUniq([ 0, 0, 1 ]), 1);
      console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
      console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
      console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);

//

const quarterOf = month => Math.trunc((month-1)/3)+1 // Math.ceil(m/3)

    console.log(quarterOf(3), 1)
    console.log(quarterOf(8), 3)
    console.log(quarterOf(11), 4)

  //

  const isSquare = num => Number.isInteger(Math.sqrt(num))

  console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
  console.log(isSquare( 0), true, "0 is a square number (0 * 0)");
  console.log(isSquare( 3), false, "3 is not a square number");
  console.log(isSquare( 4), true, "4 is a square number (2 * 2)");
  console.log(isSquare(25), true, "25 is a square number (5 * 5)");
  console.log(isSquare(26), false, "26 is not a square number");

//

const betterThanAverage = (classPoints, yourPoints) => ((classPoints.reduce((acc, curr) => acc + curr,0) + yourPoints) / (classPoints.length + 1)) < yourPoints

    console.log(betterThanAverage([2, 3], 5), true);
    console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
    console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
    console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
    console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);

//

const makeUpperCase = str => str.toUpperCase()

    console.log(makeUpperCase(""),           "");
    console.log(makeUpperCase("hello"), "HELLO");
    console.log(makeUpperCase("Hello"), "HELLO");
    console.log(makeUpperCase("HELLO"), "HELLO");

//

const repeatStr = (n, s) => s.repeat(n);

    console.log(repeatStr(3, "*"), "***");
    console.log(repeatStr(5, "#"), "#####");
    console.log(repeatStr(2, "ha "), "ha ha ");

//

function abbrevName(name){
  let nameArr = name.split(' ')
  let aName = ''
  for (let i = 0; i < nameArr.length; i++) {
    aName !== '' ? aName += '.' : ''
    aName += nameArr[i][0].toUpperCase()
	}
  return aName
}

    console.log(abbrevName("Sam Harris"), "S.H");
    console.log(abbrevName("Patrick Feenan"), "P.F");
    console.log(abbrevName("Evan Cole"), "E.C");
    console.log(abbrevName("P Favuzzi"), "P.F");
    console.log(abbrevName("David Mendieta"), "D.M");

//

function twoSum(numbers, target) {
  // ...
  let solutionArr = []
  numbers.forEach((num, ind, origArr) => {
    origArr.forEach((item, index) => {
      if (ind !== index) {
        if ((num + item) - target === 0) {
          solutionArr.length === 0 ? solutionArr.push(ind, index) : 0
        }
      }
    })
  })
  return solutionArr
}
  
    console.log(twoSum([1,2,3],4), '[0,2]')
    console.log(twoSum([1234,5678,9012], 14690), '[1,2]')
    console.log(twoSum([2,2,3],4), '[0,1]')
    console.log(twoSum([2,3,1],4), '[1,2]')

//

const checkForFactor = (base, factor) => base % factor === 0

console.log(checkForFactor(10,2), true)
console.log(checkForFactor(63,7), true)
console.log(checkForFactor(2450,5), true)
console.log(checkForFactor(24612,3), true)
console.log(checkForFactor(9,2), false)
console.log(checkForFactor(653,7), false)
console.log(checkForFactor(2453,5), false)
console.log(checkForFactor(24617,3), false)

//

function cockroachSpeed(s) { 
  //Good Luck!
  const centimetersInKilometers = 100000;
  const secondsInHour = 3600;
  return Math.floor(s * centimetersInKilometers / secondsInHour)
}

console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);

//

function switchItUp(number){
  //Write your own Code!
    const arrNumInWords = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    return arrNumInWords[number]
  }

console.log(switchItUp(1),"One");
console.log(switchItUp(3),"Three");
console.log(switchItUp(5),"Five");

//

const squareSum = numbers => numbers.reduce((a,c) => a + (c**2), 0)

console.log(squareSum([1,2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);

//

function highAndLow(numbers){
  // ...
  const arrNum = numbers.split(" ").sort((a,b) => b-a)
  let strReturn = ''
	arrNum.length > 1 ? strReturn = `${arrNum.shift().toString()} ${arrNum.pop().toString()}` : strReturn = `${numbers} ${numbers}`
  
  return strReturn
}

assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
assert.strictEqual(highAndLow("1 2 3"), "3 1");

//

function sumTwoSmallestNumbers(numbers) {  
  //Code here
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");

//

function findNeedle(haystack) {
  // your code here
  const position = haystack.indexOf('needle')
  return `found the needle at position ${position}`
}

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(findNeedle(haystack_1), 'found the needle at position 3')
console.log(findNeedle(haystack_2), 'found the needle at position 5') 
console.log(findNeedle(haystack_3), 'found the needle at position 30')

//

const removeEveryOther = arr => arr.filter((element, index) => index % 2 === 0)

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
