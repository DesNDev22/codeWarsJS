//7kyu Check the exam
function checkExam(array1, array2) {
    let grade = array2.reduce((total, answer, ind) => answer === array1[ind] ? total + 4 : answer !== '' && answer !== array1[ind] ? total - 1 : total + 0, 0 )
    return grade >= 0 ? grade : 0
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  

//7kyu Form The Minimum
function minValue(values){
    return Number(values.filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b).join(''))
  }

console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);

//7kyu The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode &&  Date.parse(currentDate) <= Date.parse(expirationDate)
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);

//6kyu Take a Ten Minutes Walk
function isValidWalk(walk) {
    if (walk.length != 10) {
        return false
    } else {
        return walk.map(swapCardinalDirectionToValue).reduce((tot, curr) => tot + curr, 0) === 0
    }
}

function swapCardinalDirectionToValue(direction) {
    switch (direction) {
        case "n":
            return 1
            break;
        case "s":
            return -1
            break;
        case "e":
            return 5
            break;
        case "w":
            return -5
            break;
        default:
            return 100
            break
    }
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

//8kyu L1: Bartender, drinks!
function getDrinkByProfession(param){
    switch (param.toLowerCase()) {
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politician": return "Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
      }    
}
console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

//7kyu Count the Digit
function nbDig(n, d) {
    const nToSquare = squareNumbers(n)
    
    return nToSquare.reduce((acc, val) => {
      let foundDigitInStringValue = 0
      let stringValue = val.toString()
  
      if (stringValue.includes(d)) {
  
        //found the decimal in squared number
        for (let i = 0; i < stringValue.length; i++) {
          //Checking how many times the number "d" appears in the chain
          stringValue[i] != d ? 0 : foundDigitInStringValue++
        }
  
      }
  
      return acc + foundDigitInStringValue
  
    }, 0)
  }
  
  function squareNumbers(num) {
    const arrayPowered = []
  
      for (let i = 0; i <= num; i++) {
      arrayPowered.push(i**2)
    }
    
    return arrayPowered
  }

console.log(nbDig( 5750, 0),  4700, "n = 5750, d = 0");
console.log(nbDig(11011, 2),  9481, "n = 11011, d = 2");
console.log(nbDig(12224, 8),  7733, "n = 12224, d = 8");
console.log(nbDig(11549, 1), 11905, "n = 11549, d = 1");

//8kyu Bin to Decimal
function binToDec(bin){
    return bin.split('').reverse().reduce((acc, val, ind) => acc + (val*(2**ind)),0)
}

//8kyu Student's Final Grade
function finalGrade (exam, projects) {
    return exam > 90 || projects > 10 ? 100 :
              exam > 75 && projects >= 5 ? 90 :
                  exam > 50 && projects >= 2 ? 75 : 0
}

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);

//7kyu JavaScript Array Filter
function getEvenNumbers(numbersArray){
    return numbersArray.filter(item => item % 2 === 0)
}

console.log(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
console.log(getEvenNumbers([1,2]), [2])
console.log(getEvenNumbers([12,14,15]), [12,14])
console.log(getEvenNumbers([13,15]), [])
console.log(getEvenNumbers([1,3,9]), [])

//8kyu Printing Array elements with Comma delimiters
function printArray(array){
    return array.join(',')
}

//8kyu Parse nice int from char problem
function getAge(inputString){
    return parseInt(inputString)
}

console.log(getAge("4 years old"), 4);

//7kyu Number of People in the Bus
//const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
const number = function(busStops){
    return busStops.reduce((people, thisArray) => {
      const [peopleIn, peopleOut] = thisArray
      return people + (peopleIn - peopleOut)}, 0)
}

console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0,0]]),0);

//8kyu Training JS #5: Basic data types--Object
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}
  
console.log(animal({name:"dog",legs:4,color:"white"}),"This white dog has 4 legs.");
console.log(animal({name:"cock",legs:2,color:"red"}),"This red cock has 2 legs.");
console.log(animal({name:"rabbit",legs:4,color:"gray"}),"This gray rabbit has 4 legs.");

//8kyu Hex to Decimal
function hexToDec(hexString) {
    return parseInt(hexString, 16)
}

console.log(hexToDec("1"), 1);
console.log(hexToDec("a"), 10);
console.log(hexToDec("10"), 16);
console.log(hexToDec("FF"), 255);
console.log(hexToDec("-C"), -12);

//7kyu Flatten and sort an array
function flattenAndSort(array) {
    return array.flat(Infinity).sort((a,b) => a - b)
}

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], []]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

//8kyu Alan Partridge II - Apple Turnover
function apple(x){
    return x**2 > 1000 ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`
}

console.log(apple('50'), 'It\'s hotter than the sun!!'); 
console.log(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 

//8kyu Reversed sequence
const reverseSeq = n => {
    let reverseSeqArray = []
    if (n > 0) {
        for (let i = n; i > 0; i--) {
        reverseSeqArray.push(i)
        }
        return reverseSeqArray
    }
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);

//8kyu Sum of differences in array
function sumOfDifferences(arr) {
    let firstDifference = 0
    let sumDifference = 0
    
    if (arr.length > 0) {
      sumDifference = arr.sort((a,b) => b-a).reduce( (sum, value, ind, currArray) => ind > 0 ? sum + (currArray[ind-1] - value ) : sum, 0)
    }
    return sumDifference
}

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);

//7kyu Sum of Minimums!
function sumOfMinimums(arr) {
    return arr.map(innerArray => Math.min(...innerArray)).reduce((acu, val) => acu + val, 0)
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9);
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76);

//7kyu Largest pair sum in array
function largestPairSum (numbers) {
    return numbers.sort((a,b) => a - b).pop() + numbers.pop()
}

console.log(largestPairSum([10,14,2,23,19]), 42);
console.log(largestPairSum([-100,-29,-24,-19,19]), 0);
console.log(largestPairSum([1,2,3,4,6,-1,2]), 10);
console.log(largestPairSum([-10, -8, -16, -18, -19]), -18);

//8kyu 
function between(a, b) {
    const betweenArr = []
    if (a < b ) {
    	for (let i = a; i <= b; i++) {
        let lenArr = 0
        lenArr = betweenArr.push(i)
      }
    }
 		return betweenArr
}

console.log(between(1, 4), [1, 2, 3, 4])
console.log(between(-2, 2), [-2, -1, 0, 1, 2])
