// Ecrire la fonction "length(word)" qui calcule la taille d'un mot. Si word m'est pas un mot alors retourner -1

// - Loop while
  
function length(word) {
    var i = 0;
    while (word[i] != undefined) {
      i++;
    }
    return i;
  }
  
  console.log(length("hello"));
  
// - Loop for

    // - Correction - //
  const word = "Equaria"

  function getLenghtFor(word) {
    let sizeOfword;

    for(i=0; i<50; i++){
      console.log(word[i]);
      if (word[i]){
        sizeOfword ++
      }
    }
    return sizeOfword
  }

  const wordLength = getLenghtFor(word);
  console.log(wordLength);

  // const length = (word) => {
  //   if (typeof word !== "string") return -1;
  
  //   let length = 0;
  //   for (let letter in word) {
  //     length++;
  //   }
  
  //   return length;
  // };
  
  // console.log(length("hello"));
