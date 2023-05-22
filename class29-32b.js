function stray(numbers) {
    numbers.sort((a,b) => a-b)
    return (numbers[0] !== numbers[1] ? numbers.shift() : numbers.pop())
  }
  
console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);

//

function likes(names) {
    let likers = 'no one likes this'
    names.length === 1 ? likers = `${names[0]} likes this` :
    names.length === 2 ? likers = `${names[0]} and ${names[1]} like this` :
    names.length === 3 ? likers = `${names[0]}, ${names[1]} and ${names[2]} like this` :
    names.length > 3 ? likers = `${names[0]}, ${names[1]} and ${names.length -2} others like this` : ''
    return likers
  
  }
  
  console.log(likes([]), 'no one likes this');
  console.log(likes(['Peter']), 'Peter likes this');
  console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
  console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');

  //

const evenOrOdd = (number)  => number % 2 === 0 ? 'Even' : 'Odd'	

console.log(evenOrOdd(2), "Even");
console.log(evenOrOdd(7), "Odd");
console.log(evenOrOdd(-42), "Even");
console.log(evenOrOdd(-7), "Odd");
console.log(evenOrOdd(0), "Even");

//

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");

//

function domainName(url){
  let strippedUrl
  strippedUrl = url.replace(/http:\/\//gi, '')
  strippedUrl = strippedUrl.replace(/https:\/\//gi, '')
  strippedUrl = strippedUrl.replace(/www\./gi, '')
  return strippedUrl.substring(0, strippedUrl.indexOf('.'))
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("https://www.soddfhsud9849340kbjwwwiu8998.com"), "youtube");

//

function isIsogram(str){
  const letters = new Set(str.toLowerCase().split(''))
  return letters.size === str.length
}

console.log( isIsogram("Dermatoglyphics"), true );
console.log( isIsogram("isogram"), true );
console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"), false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"), false );
console.log( isIsogram(""), true, "an empty string is a valid isogram" );

//

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) { return false}
  const pinArray = pin.trim().split('').filter(a => a != ' ' && Number(a) >= 0 && Number(a) <= 9)
  if (pinArray.length === pin.length) {
    return(true)
  } else {
    return(false)
  }
}

console.log(validatePIN("1"),false, "Wrong output for '1'")
console.log(validatePIN("12"),false, "Wrong output for '12'")
console.log(validatePIN("123"),false, "Wrong output for '123'")
console.log(validatePIN("12345"),false, "Wrong output for '12345'")
console.log(validatePIN("1234567"),false, "Wrong output for '1234567'")
console.log(validatePIN("-1234"),false, "Wrong output for '-1234'")
console.log(validatePIN("1.234"),false, "Wrong output for '1.234'")
console.log(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
console.log(validatePIN("00000000"),false, "Wrong output for '00000000'")
console.log(validatePIN("1234"),true, "Wrong output for '1234'");
console.log(validatePIN("0000"),true, "Wrong output for '0000'");
console.log(validatePIN("1111"),true, "Wrong output for '1111'");
console.log(validatePIN("123456"),true, "Wrong output for '123456'");
console.log(validatePIN("098765"),true, "Wrong output for '098765'");
console.log(validatePIN("000000"),true, "Wrong output for '000000'");
console.log(validatePIN("123456"),true, "Wrong output for '123456'");
console.log(validatePIN("090909"),true, "Wrong output for '090909'");
console.log(validatePIN("a234"),false, "Wrong output for 'a234'")
console.log(validatePIN(".234"),false, "Wrong output for '.234'")
console.log(validatePIN("12345."),false, "Wrong output for '12345.'");
console.log(validatePIN("123456"),true, "Wrong output for '123456'");
console.log(validatePIN("12 4"),false, "Wrong output for '12 4'");
/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/ 
//const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin)

//

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    return length * width * height
  }
}

console.log(Kata.getVolumeOfCuboid(1,2,2),  4);
console.log(Kata.getVolumeOfCuboid(6,2,5), 60);


//

const areaOrPerimeter = (l , w) => l === w ? l * w : (l * 2) + (w * 2)

console.log(areaOrPerimeter(3,  3),  9);
console.log(areaOrPerimeter(6, 10), 32);

//

function isPangram(string){
  //...
  return (new Set(string.toLowerCase().split('').filter(ele => ele.match(/[a-z]/))).size === 26 ? true : false)
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true)
console.log(isPangram("This is not a pangram."), false)

//

const friend = friends => friends.filter(name => name.length === 4)

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])


//

function hoopCount (n) {
  return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks'   
}

console.log(hoopCount(3),"Keep at it until you get it" ) 
console.log(hoopCount(11),"Great, now move on to tricks" )

//

function expandedForm(num) {
  // Your code here
  return (num.toString().split('').map((ele, index, arr) => ele = ele + '0'.repeat(arr.length - (index + 1))).filter(a => Number(a) != 0).join(' + '))
  
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
console.log(expandedForm(70004), '70000 + 4');

//

function solution(str){
  return str.split('').reverse().join('')
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');

//

function descendingOrder(n){
  //...
  return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(111), 111)
console.log(descendingOrder(15), 51)
console.log(descendingOrder(1021), 2110)
console.log(descendingOrder(123456789), 987654321)

