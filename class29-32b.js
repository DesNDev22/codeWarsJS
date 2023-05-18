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