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
