//8kyu Function 1 - hello world
const greet = function() {
    return "hello world!"
  }
  
//7kyu Categorize New Member
/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.*/
function openOrSenior(data){
    return data.map(e => e[0] >= 55 && e[1] > 7 ? 'Senior' : 'Open')
  }
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])

//8kyu Reversing Words in a String
function reverse(string){
    return string.split(' ').reverse().join(' ')
  }
console.log(reverse('I am an expert at this'), 'this at expert an am I');
console.log(reverse('This is so easy'), 'easy so is This');
console.log(reverse('no one cares'), 'cares one no');
console.log(reverse(''), '');
console.log(reverse('CodeWars'), 'CodeWars');

//7kyu Small enough? - Beginner
function smallEnough(a, limit){
    a.sort((a,b) => a-b )
    return a[a.length-1] <= limit ? true : false
}
console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

//7kyu Summing a number's digits
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a, c) => a += +c, 0)
}
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);

//8kyu get character from ASCII Value
function getChar(c){
  return String.fromCharCode(c)
}
console.log(getChar(55),'7')
console.log(getChar(56),'8')
console.log(getChar(57),'9')
console.log(getChar(58),':')
console.log(getChar(59),';')
console.log(getChar(60),'<')
console.log(getChar(61),'=')
console.log(getChar(62),'>')
console.log(getChar(63),'?')
console.log(getChar(64),'@')
console.log(getChar(65),'A')

//8kyu The Wide-Mouthed frog!
function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}
console.log(mouthSize("toucan"),"wide")
console.log(mouthSize("ant bear"),"wide")
console.log(mouthSize("alligator"),"small")

//8kyu 
function mergeArrays(arr1, arr2) {
  let uniqueArray = new Set(arr1.concat(arr2))
  return Array.from(uniqueArray).sort((a, b) => a-b)
}
console.log(mergeArrays([], []), [], "Basic tests");
console.log(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8], "Basic tests");
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10], "Basic tests");
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");

//7kyu Simple Fun #176: Reverse Letter
function reverseLetter(str) {
  return str.split('').reverse().filter(a => a.match(/[a-z]/i)).join('')
}
console.log(reverseLetter("krishan"),"nahsirk")
console.log(reverseLetter("ultr53o?n"),"nortlu")
console.log(reverseLetter("ab23c"),"cba")
console.log(reverseLetter("krish21an"),"nahsirk")

//8kyu Reverse List Order
function reverseList(list) {
  return list.reverse()
}
console.log(reverseList([1,2,3,4]), [4,3,2,1]);
console.log(reverseList([3,1,5,4]), [4,5,1,3]);

//8kyu Grasshopper - Terminal game move function
function move (position, roll) {
  return position + roll * 2
}
console.log(move(0, 4), 8);
console.log(move(3, 6), 15);
console.log(move(2, 5), 12);

//6kyu Count the smiley faces!
function verifyRules(total, face, index) {
  return (face.length < 1 || face.length > 3) && (face[0] != ':' && face[0] !=';') || (face[face.length-1] != ')' && face[face.length-1] != 'D') ? total += 0 :
  face.length === 3 && face[1] != '-' && face[1] != '~' ? total += 0 : total += 1
}

function countSmileys(arr) {
  return arr.reduce(verifyRules, 0)
}

console.log(countSmileys([]                             ), 0);
console.log(countSmileys(['.D',':~)',';~D',':)']        ), 3);
console.log(countSmileys([':D',':~)',';~D',':)']        ), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']     ), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
