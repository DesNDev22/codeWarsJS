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
