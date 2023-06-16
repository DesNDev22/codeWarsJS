function gimme (triplet) {
    let max = Math.max(Number(triplet[0]),Number(triplet[1]),Number(triplet[2]))
    let min = Math.min(Number(triplet[0]),Number(triplet[1]),Number(triplet[2]))
    return (triplet.findIndex(num => num != max && num != min))
  }
  
gimme([-5.2, -10.6, 14])
/*		doTest([2, 3, 1], 0);
doTest([5, 10, 14], 1);
doTest([2.1, 3.2, 1.4], 0);
doTest([5.9, 10.4, 14.2], 1);
doTest([-2, -3, -1], 0);
doTest([-5, -10, -14], 1);
doTest([-2, -3.2, 1], 0);
doTest([-5.2, -10.6, 14], 0); */

//

function twoSort(s) { // const twoSort = (s) => s.sort()[0].split('').join('***')
	return s.sort()[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 

//

function fakeBin(x){
	return x.split('').map(a => a < 5 ? '0' : '1').join('')
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

//

function high(x){
  const words = x.split(' ')
  let maxScore = 0
  let highestWord = ''
  for (let word of words) {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96; // calculate score based on ASCII value
    }

    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');

//Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
const zero = value => typeof(value) != 'string' ? 0 : returnResult(`0 ${value}`)
const one = value => typeof(value) != 'string' ? 1 : returnResult(`1 ${value}`)
const two = value => typeof(value) != 'string' ? 2 : returnResult(`2 ${value}`)
const three = value => typeof(value) != 'string' ? 3 : returnResult(`3 ${value}`)
const four = value => typeof(value) != 'string' ? 4 : returnResult(`4 ${value}`)
const five = value => typeof(value) != 'string' ? 5 : returnResult(`5 ${value}`)
const six = value => typeof(value) != 'string' ? 6 : returnResult(`6 ${value}`)
const seven = value => typeof(value) != 'string' ? 7 : returnResult(`7 ${value}`)
const eight = value => typeof(value) != 'string' ? 8 : returnResult(`8 ${value}`)
const nine = value => typeof(value) != 'string' ? 9 : returnResult(`9 ${value}`)

function plus(value) {return `+ ${value}`}
function minus(value) {return `- ${value}`}
function times(value) {return `* ${value}`}
function dividedBy(value) {return `/ ${value}`}

function returnResult(statement) {
  const deconstruct = statement.split(' ')
  console.log(deconstruct)
  let value = 0
  switch(deconstruct[1]) {
    case '+':
      value = Math.floor(+deconstruct[0] + +deconstruct[2]);
      break;
    case '-':
      value = Math.floor(+deconstruct[0] - +deconstruct[2]);
      break;
    case '*':
      value = Math.floor(+deconstruct[0] * +deconstruct[2]);
      break;
    case '/':
      value = Math.floor(+deconstruct[0] / +deconstruct[2]);
      break;
    default:
      console.log('Condition error')
  }
  return value;
}
console.log(seven(times    (five ())), 35);
console.log(four (plus     (nine ())), 13);
console.log(eight(minus    (three())),  5);
console.log(six  (dividedBy(two  ())),  3);

// Turn array elements to object keys and counts occurrance of those keys in array
function count(string) {
  const object = string.split('').reduce((result, key) => {
  result[key] = (result[key] || 0) + 1;
  return result;
}, {});
  return object
}

console.log(count('carrera'), "{'c': 1, 'a': 2, 'r': 3, 'e': 1}");
console.log(count(''), "{}");
console.log(count('a'), "{'a': 1}");
console.log(count('ab'), "{'a': 1, 'b': 1}");
console.log(count('aba'), "{'a': 2, 'b': 1}");
console.log(count('ABC'), "{'A': 1, 'B': 1, 'C': 1}");

//Debugging sayHello function
function sayHello(name) {
  return `Hello, ${name}`
}
console.log(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
console.log(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
console.log(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
console.log(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')

//Sort array by string length
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
};
console.log(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);

//Convert number to reversed array of digits
function digitize(n) {
  return n.toString().split('').reverse().map(a => Number(a))
}
console.log(digitize(35231),[1,3,2,5,3]);
console.log(digitize(0),[0]);

//Grasshopper - Summation
function summation(num) {
	let result = 0
  for (let i = 1; i <= num; i++) {
    result += i
  }
   return result
}
console.log(summation(1),  1);
console.log(summation(2),  3);
console.log(summation(8), 36);

//7kyu Beginner Series #3 Sum of Numbers
function getSum(a, b) {
  
  let minus = (a <= -1 && b <= -1)
  let seriesOne = (Math.max(a,b) * (Math.abs(Math.max(a,b)) + 1)) / 2
  let seriesTwo = (Math.min(a,b) * (Math.abs(Math.min(a,b)) + 1)) / 2
  let resultSeries = seriesOne === seriesTwo ? a : 0

  if ((a >= 1 && b >= 1) || (a <= -1 && b <= -1)) {
    minus ? seriesOne = Math.max(a,b) - seriesOne : seriesTwo = Math.min(a,b) - seriesTwo
  }

  return resultSeries === 0 ? seriesOne + seriesTwo : resultSeries
}
console.log(getSum(0,-1), -1);
console.log(getSum(0, 1),  1);
console.log(getSum(2, 2),  2);
console.log(getSum(-3, 5),  9);
console.log(getSum(573, 573),  573);
console.log(getSum(505, 4),  127759);
console.log(getSum(-1, -5),  -15);
console.log(getSum(-163, -296),  -30753);

//8kyu Training JS #7: if..else and ternary operator
function saleHotdogs(n){
  return n < 5 ? n*100 : n >=5 && n < 10 ? n*95 : n*90
}
console.log(saleHotdogs(  1),  100);
console.log(saleHotdogs(  4),  400);
console.log(saleHotdogs(  5),  475);
console.log(saleHotdogs(  9),  855);
console.log(saleHotdogs( 10),  900);
console.log(saleHotdogs(100), 9000);

//8kyu What's the real floor?
function getRealFloor(n) {
  return n <= 0 ? n : n <= 12 ? n-1 : n-2
}
console.log(getRealFloor( 1),  0);
console.log(getRealFloor( 5),  4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);

//6kyu Simple Encryption #1 - Alternating Split odd indexed with even indexed
function encrypt(text, n) {
	let encrypted = text
  if (n > 0 && typeof text == 'string') {
    for (let i = 1; i <= n; i++) {
      encrypted = encrypted.split('').filter((elem, index) => index%2!=0).concat(encrypted.split('').filter((elem, index) => index%2==0)).join('')
    }
  } else {
    encrypted = text
  }
  return encrypted
}

function decrypt(encryptedText, n) {
	let decrypted = encryptedText
  let oddString = ''
  let evenString = ''
  if (n > 0 && typeof encryptedText == 'string') {
    for (let i = 1; i <= n; i++) { 
      oddString = decrypted.substring(Math.floor(encryptedText.length/2))
      evenString = decrypted.substring(0,Math.floor(encryptedText.length/2))
      decrypted = ''
      for (let j = 0; j < Math.floor(encryptedText.length/2); j++) {
        decrypted += oddString[j] + evenString[j]
      }
      evenString.length != oddString.length ? decrypted += oddString[evenString.length] : 0
    }
  } else {
    decrypted = encryptedText
  }
  return decrypted
}

console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");
console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
console.log(encrypt("Ths kata is very interesting!", 1), "h aai eyitrsigTskt svr neetn!"); 
console.log('*********** DECODING ***************')
console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
console.log(decrypt("h aai eyitrsigTskt svr neetn!", 1), "Ths kata is very interesting!");
console.log(encrypt("", 0), "");
console.log(decrypt("", 0), "");
console.log(encrypt(null, 0), null);
console.log(decrypt(null, 0), null);

//8kyu Count by X
function countBy(x, n) {
  let z = [];
	for (let i = x; i <= x*n; i+=x) {
    z.push(i)
  }
  return z;
}

console.log(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
console.log(countBy(2,5), [2,4,6,8,10], "Array does not match")

//8kyu Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
console.log(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
console.log(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
console.log(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
console.log(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');

//8kyu Lario and Muigi Pipe Problem
function pipeFix(numbers){
  let pipesFixed = []
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    pipesFixed.push(i)
  }
	return pipesFixed
}

console.log(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
console.log(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
console.log(pipeFix([6,9]),[6,7,8,9]);
console.log(pipeFix([-1,4]),[-1,0,1,2,3,4]);
console.log(pipeFix([1,2,3]),[1,2,3]);
console.log(pipeFix([3,12,1,2]),[1,2,3,4,5,6,7,8,9,10,11,12]);

//8kyu Sum Mixed Array
function sumMix(x){
  return x.reduce((prev, curr) => prev += +curr, 0)
}
console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
