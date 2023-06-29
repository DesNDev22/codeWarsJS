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
  