// Ecrire la fonction "isPalindrome(word)" qui test si un mot est un palindrome. Si word m'est pas un palindrome alors retourner -1


//! - Loop For
// const word1 = "never odd or even".replace(/\s/g, '');

// function isPalindrom(word1) {
//     const len = word1.length;

//     for(let i = 0; i < len / 2; i++) {
//         if (word1[i] !== word1[len - 1 - i]) 
//         return 'it is not a palindrome ';
//         }
//     return 'It is a palindrome'
//  }
// const isPalindrome1 = isPalindrom(word1);
// console.log(isPalindrome1);

//! - Loop While

// const word2 = "racecar"

// function isPalindrom(word2) {
//     let left = 0;
//     let right = word2.length - 1;
  
//     while (left <= right) {
//       if (word2[left] !== word2[right]) return false;
//       left++;
//       right--;
//     }
  
//   return true;
//   }
// const isPalindrome2 = isPalindrom(word2);
// console.log(isPalindrome2);

//! - function recursive

// function isPalindrome(word,index){
//   if(index > word.length/2)
//     {return true;}
//    return word[index] === word[word.length-index-1] && isPalindrome(word, index+1)
//   }    
//      let str = "rotor";
//   let ans = isPalindrome(str, 0);
//   if (ans === true)
//       {
//           console.log("Yes");}
//   else
//       {
//           console.log("No");}


//! Corrections

const word = "kayak"

// i++ => i = i + 1 mais j assigne avant de faire le + 1
// ++i => i = i + 1 mais j assigne apres de faire le + 1 

function isPalindromRec(word, indexCourant = 0) {
    if (typeof word !== "string" || word.length < 2) return false;
    if (word[indexCourant] != word[word.length - 1 - indexCourant]) {
        return false;
    }
    if (indexCourant >= word.length/2) return true;
    return isPalindromRec(word, indexCourant + 1);
}

console.log(isPalindromRec(word));