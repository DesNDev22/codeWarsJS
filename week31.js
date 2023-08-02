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
