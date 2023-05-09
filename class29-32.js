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
  