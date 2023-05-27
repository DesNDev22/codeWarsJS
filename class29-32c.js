function accum(s) {
	// your code
  return s.toUpperCase().split('').map((item, index) => item += item.toLowerCase().repeat(index)).join('-')
}

console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

//

function greet(language) {
	switch (language) {
      case 'english':
      	return 'Welcome'
      	break;
      case 'czech':
      	return 'Vitejte'
      	break;
      case 'danish':
      	return 'Velkomst'
      	break;
      case 'dutch':
      	return 'Welkom'
      	break;
      case 'estonian':
      	return 'Tere tulemast'
      	break;
      case 'finnish':
      	return 'Tervetuloa'
      	break;
      case 'flemish':
      	return 'Welgekomen'
      	break;
      case 'french':
      	return 'Bienvenue'
      	break;
      case 'german':
      	return 'Willkommen'
      	break;
      case 'irish':
      	return 'Failte'
      	break;
      case 'italian':
      	return 'Benvenuto'
      	break;
      case 'latvian':
      	return 'Gaidits'
      	break;
      case 'lithuanian':
      	return 'Laukiamas'
      	break;
      case 'polish':
      	return 'Witamy'
      	break;
      case 'spanish':
      	return 'Bienvenido'
      	break;
      case 'swedish':
      	return 'Valkommen'
      	break;
      case 'welsh':
      	return 'Croeso'
      	break;
    	default:
      	return 'Welcome'
  }
}

console.log(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
console.log(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
console.log(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");

//

function expressionMatter(a, b, c) {
	let expArr = [a+b+c,a+b*c,a*b*c,a*b+c,(a+b)*c,a*(b+c)]
	return expArr.sort((a,b) => a-b).pop()
  }
  
  
  console.log(expressionMatter(2, 1, 2), 6);
  console.log(expressionMatter(2, 1, 1), 4);
  console.log(expressionMatter(1, 1, 1), 3);
  console.log(expressionMatter(1, 2, 3), 9);
  console.log(expressionMatter(1, 3, 1), 5);
  console.log(expressionMatter(2, 2, 2), 8);
  console.log(expressionMatter(5, 1, 3), 20);
  console.log(expressionMatter(3, 5, 7), 105);
  console.log(expressionMatter(5, 6, 1), 35);
  console.log(expressionMatter(1, 6, 1), 8);
  console.log(expressionMatter(2, 6, 1), 14);
  console.log(expressionMatter(6, 7, 1), 48);
  console.log(expressionMatter(2, 10, 3), 60);
  console.log(expressionMatter(1, 8, 3), 27);
  console.log(expressionMatter(9, 7, 2), 126);
  console.log(expressionMatter(1, 1, 10), 20);
  console.log(expressionMatter(9, 1, 1), 18);
  console.log(expressionMatter(10, 5, 6), 300);
  console.log(expressionMatter(1, 10, 1), 12);

  //

  const paperwork = (n, m) => n > 0 && m > 0 ? n*m : 0

  console.log(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
  console.log(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
  console.log(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
  console.log(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
  console.log(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');

  //

  String.prototype.toAlternatingCase = function () {
	// Define your method here :)
	return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
  }
  
  console.log("hello world".toAlternatingCase(), "HELLO WORLD");
  console.log("HELLO WORLD".toAlternatingCase(), "hello world");
  console.log("hello WORLD".toAlternatingCase(), "HELLO world");
  console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
  console.log("12345".toAlternatingCase(), "12345");
  console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
  console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
  console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
  
  //

  function litres(time) {
    return Math.floor(time * .5)
  }
  
  console.log(litres(2), 1, 'should return 1 litre');
  console.log(litres(1.4), 0, 'should return 0 litres');
  console.log(litres(12.3), 6, 'should return 6 litres');
  console.log(litres(0.82), 0, 'should return 0 litres');
  console.log(litres(11.8), 5, 'should return 5 litres');
  console.log(litres(1787), 893, 'should return 893 litres');
  console.log(litres(0), 0, 'should return 0 litres');

  //

  function sumStr(a,b) {
    return (+a + +b).toString()
  }
  
  console.log(sumStr("4","5"), "9");
  console.log(sumStr("34","5"), "39");

  //

  function otherAngle(a, b) {
    return 180 - (a + b);
  }
  
  console.log(otherAngle(30, 60), 90);
  console.log(otherAngle(60, 60), 60);
  console.log(otherAngle(43, 78), 59);
  console.log(otherAngle(10, 20), 150);
  