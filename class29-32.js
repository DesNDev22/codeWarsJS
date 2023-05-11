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
