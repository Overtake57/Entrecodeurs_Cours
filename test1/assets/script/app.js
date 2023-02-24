// Transformer un nombre Romain en nombre decimal sachant que
// - ce nombre ne peut pas etre superieur a 3000
// - I = 1
// - V = 5
// - X = 10
// - L = 50
// - C = 100
// - D = 500
// - M = 1000
// - MMCMLXIV = 2964

function convertRomToDec(nb) {
    let res = 0;
    for (let i = 0; i<nb.length; i++) {
      switch(nb[i]) {
        case "I":
          if (nb[i+1] === "V" || nb[i+1] === "X") res -= 1;
          else res += 1;
          break;
        case "V": 
            res += 5;
          break;
        case "X": 
          if (nb[i+1] === "L" || nb[i+1] === "C") res -= 10;
          else res += 10;
          break;
        case "L": 
          res += 50;
          break;
        case "C": 
          if (nb[i+1] === "M" || nb[i+1] === "D") res -= 100;
          else res += 100;
          break;
        case "D": res += 500; break;
        case "M": res += 1000; break;
      }
    }
    return res;
  } 
  
  const nbRomain = "MMCMLXIV";
  const nb = convertRomToDec(nbRomain);
  console.log(nb);