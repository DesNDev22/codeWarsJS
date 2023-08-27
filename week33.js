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
  return Math.ceil(n/5) * 5
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

//7kyu Money, Money, Money
function calculateYears(principal, interestRate, taxRate, desired) {
  let yearsOfInvestment = 0
  let accruedInterest = 0
  let taxOwed = 0
  let newBalance = principal
  
  if (newBalance < desired) {
  	  while (newBalance < desired) {
       	accruedInterest = newBalance * interestRate //Interest for the year
        taxOwed = accruedInterest * taxRate //Tax owed on accrued interest for the year
        newBalance += accruedInterest - taxOwed
        yearsOfInvestment++
      }
  }
  
  return yearsOfInvestment
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3)
console.log(calculateYears(1000,0.01625,0.18,1200), 14)
console.log(calculateYears(1000,0.05,0.18,1000), 0)

//8kyu Correct the mistakes of the character recognition software
function correct(string) {
  return string.replace(/[510]/g, match => {
    switch (match) {
      case "5":
        return "S";
      case "1":
        return "I";
      case "0":
        return "O";
      default:
        return match; // Return the matched character unchanged
    }
  });
}

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");

//8kyu How many stairs will Suzuki climb in 20 years?
function stairsIn20(s) {
  //your code here
}

let sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
  7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
  5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
  6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
  6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
  5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
  7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
   7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
   7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
   5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
     5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
     5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
     9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
    9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
    9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
    7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
    5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
    5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
    7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

let stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

console.log(stairsIn20(stairs), 54636040);

//8kyu 
function noBoringZeros(n) {
  let sign = 0
  n < 0 ? sign = -1 : sign = 1

  return sign * parseInt(parseInt(n.toString().split('').reverse().join('')).toString().split('').reverse().join(''))
}

console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)

//8kyu No Loops 2 - You only need one
function check(a,x){ return a.includes(x) };

console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);