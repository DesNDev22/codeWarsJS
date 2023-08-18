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
