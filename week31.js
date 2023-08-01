//7kyu Check the exam
function checkExam(array1, array2) {
    let grade = array2.reduce((total, answer, ind) => answer === array1[ind] ? total + 4 : answer !== '' && answer !== array1[ind] ? total - 1 : total + 0, 0 )
    return grade >= 0 ? grade : 0
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  
