//8kyu Do you speak "English"?
function spEng(sentence){
    return sentence.toLowerCase().includes('english')
}

console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);

//8kyu Cat years, Dog years
const humanYearsCatYearsDogYears = function(humanYears) {
    const agesArray = []
    //the first number in the array is the humanYears
     agesArray.push(humanYears)
    
    switch(humanYears) {
      case 1:
          agesArray.push(15)
          agesArray.push(15)
        break;
      case 2:
          agesArray.push(24)
          agesArray.push(24)
        break;
      default:
            //second is cat years 1st year = 15 years, 2nd add 9 years, 3rd and up add 4 years
        agesArray.push(24 + ((humanYears-2)*4))
            //third is dog years 1st year = 15 years, 2nd add 9 years, 3rd and up add 4 years
        agesArray.push(24 + ((humanYears-2)*5))
      }
    
     return agesArray;
}

console.log(humanYearsCatYearsDogYears(1), [1,15,15]);
console.log(humanYearsCatYearsDogYears(2), [2,24,24]);
console.log(humanYearsCatYearsDogYears(10), [10,56,64]);

//7kyu Row Weights
function rowWeights(array){
    let teamOne = 0
    let teamtwo = 0
    const resultArray = [0, 0]
    
    for (let i = 0; i < array.length; i++) {
      i % 2 === 0 ? teamOne += array[i] : teamtwo += array[i]
    }
 		resultArray[0] = teamOne
  	resultArray[1] = teamtwo
  	return resultArray
}

console.log(rowWeights([80]), [80,0]);
console.log(rowWeights([100,50]), [100,50]);
console.log(rowWeights([50,60,70,80]), [120,140]);
console.log(rowWeights([13,27,49]), [62,27]);
console.log(rowWeights([70,58,75,34,91]), [236,92]);
console.log(rowWeights([29,83,67,53,19,28,96]), [211,164]);
console.log(rowWeights([0]), [0,0]);
console.log(rowWeights([100,51,50,100]), [150,151]);
console.log(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);
console.log(rowWeights([0,1,0]), [0,1]);

//8kyu Find the Remainder
function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    return Math.min(n,m) != 0 ? Math.max(n,m) % Math.min(n,m) : NaN
}

console.log(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
console.log(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter');
console.log(remainder(1, 0), 'Divide by zero should return NaN');
console.log(remainder(0, 0), 'Divide by zero should return NaN');

//7kyu Round up to the next multiple of 5
function roundToNext5(n){
    // ...
}

console.log(roundToNext5(0),0)
console.log(roundToNext5(1),5)
console.log(roundToNext5(-1),0)
console.log(roundToNext5(-5),-5)
console.log(roundToNext5(3),5)
console.log(roundToNext5(5),5)
console.log(roundToNext5(7),10)
console.log(roundToNext5(20),20)
console.log(roundToNext5(39),40)
console.log(roundToNext5(990),990)
console.log(roundToNext5(121),125)
console.log(roundToNext5(555),555)
