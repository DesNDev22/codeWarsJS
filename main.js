function arrayDiff(a, b) {
    return(a.filter(item => !b.includes(item)))
  }
  
console.log(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

//

function XO(str) {
    //code here
  return (str.split("").filter(item => item.toLowerCase() == 'x').length == str.split("").filter(item => item.toLowerCase() == 'o').length)
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);

//

function longestConsec(strarr, k) {
    // your code
  let retString = ''
  let compString = ''
  
  if (k <= 0 || k > strarr.length || strarr.length === 0) {
    retString = '' 
  } else {
    for (let i = 0; i <= strarr.length-k; i++) {
      compString = ''
      for (let j = 0; j < k; j++) {
        compString += strarr[i+j]
      }
      retString.length < compString.length ? retString = compString : ''
    }
  }
  return retString
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3), "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
  
//

function sortArray(array) {
    // Return a sorted array.
	let oddArray = array.filter(a => a%2 ? a : 0).sort((a,b) => a-b)
  let finalArray = []
  for (let i=0, j=0; i<array.length;i++) {
    if (array[i]%2 == 0) {
      finalArray.push(array[i])
    } else {
       finalArray.push(oddArray[j])
       j++
    }
  }
  return(finalArray)
  }

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]),[]);

//

function simpleMultiplication(number) {
    // your code........
  return(number%2===0?number*8:number*9)
}

    console.log(simpleMultiplication(2),16,'Should return given argument times eight...')
    console.log(simpleMultiplication(1),9, 'Should return given argument times nine...')
    console.log(simpleMultiplication(8),64,'Should return given argument times eight...')
    console.log(simpleMultiplication(4),32,'Should return given argument times eight...')
    console.log(simpleMultiplication(5),45,'Should return given argument times nine...')

//

var countSheep = function (num){
    //your code here
    let string = ''
    for (i=1;i<=num;i++) {string += `${i} sheep...`}
    return(string)
  }
  
      console.log(countSheep(0), "");
      console.log(countSheep(1), "1 sheep...");
      console.log(countSheep(2), "1 sheep...2 sheep...");
      console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  
//

function rentalCarCost(d) {
  // Your solution here
  let total = d * 40;
  d >= 7 ? total -= 50 : d >= 3 ? total -= 20 : '';
  return total;
}

// Should work under 3 days
console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);
//Should work for under 7 days
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(4), 140);
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);
// Should work for 7 or more days
console.log(rentalCarCost(7), 230);
console.log(rentalCarCost(8), 270);
console.log(rentalCarCost(9), 310);
console.log(rentalCarCost(10), 350);    

//

function doubleChar(str) {
  // Your code here
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < 3; j++) {
      newStr += str[i]
    }
  }
  return newStr
}

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");
