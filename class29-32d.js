function gimme (triplet) {
    let max = Math.max(Number(triplet[0]),Number(triplet[1]),Number(triplet[2]))
    let min = Math.min(Number(triplet[0]),Number(triplet[1]),Number(triplet[2]))
    return (triplet.findIndex(num => num != max && num != min))
  }
  
gimme([-5.2, -10.6, 14])
/*		doTest([2, 3, 1], 0);
doTest([5, 10, 14], 1);
doTest([2.1, 3.2, 1.4], 0);
doTest([5.9, 10.4, 14.2], 1);
doTest([-2, -3, -1], 0);
doTest([-5, -10, -14], 1);
doTest([-2, -3.2, 1], 0);
doTest([-5.2, -10.6, 14], 0); */

//

function twoSort(s) { // const twoSort = (s) => s.sort()[0].split('').join('***')
	return s.sort()[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 

//

function fakeBin(x){
	return x.split('').map(a => a < 5 ? '0' : '1').join('')
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
