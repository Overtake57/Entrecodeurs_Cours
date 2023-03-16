// 3. Ecrire une application pour gerer une bibliotheque de livres. Les livres sont divisés en
// deux categories: les livres audios et les livres papiers.

// class Book
// title: string - le titre
// author: string - l'auteur
// synopsis: string - une description
// hasRead: () => boolean - fonction qui renvoie si un lecteur a lu/ecoute le livre ou non

// class PaperBook
// pages: number - le nombre total de pages
// currentPage: number - la page où se trouve le lecteur actuellement (entre 1 et pages)

// class AudioBook
// minutes: number - nombre de minutes du livre audio
// currentMinutes: number - nombre de minutes ecoutees par le "lecteur"
// url: string - lien du livre audio a ecouter

class Book {
    constructor(title, author, synopsis) {
      this.title = title;
      this.author = author;
      this.synopsis = synopsis;
      
    }
    hasRead() { 
      if(this.CurrentMinutes >= this.minutes || this.currentPage >= this.pages){
        console.log('Livre lu')
      } else {
        console.log('Lecture en cours')
   }
  } 
}
  class PaperBook extends Book {
    constructor(title, author, synopsis,pages, currentPage) {
      super(title, author, synopsis);
      this.pages = pages;
      this.currentPage = currentPage;
    }
  }
  
  
  class AudioBook extends Book {
    constructor(title, author, synopsis, minutes, currentMinutes) {
      super(title, author, synopsis);
      this.minutes = minutes;
      this.currentMinutes = currentMinutes;
      
    }
  }
 
 

 const book1 = new PaperBook("The Lord of the Rings", "J.R.R. Tolkien", "A classic fantasy novel.",200,250);
 const book2 = new AudioBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "The first book in the Harry Potter series.",100,200);
 
 console.log(book1);
 book1.hasRead();
 console.log(book2);
 book2.hasRead();

