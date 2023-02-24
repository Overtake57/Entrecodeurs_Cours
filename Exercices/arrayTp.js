const student = {
  firstName: "Jordan",
  gender: "male",
  js: {
    mark: 12,
    rate: 3
  },
  english: {
    mark: 4,
    rate: 2
  }
};

const dw1 = [
  {
    firstName: "Jean",
    gender: "male",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 7,
      rate: 2
    }
  },
  {
    firstName: "Marc",
    gender: "male",
    js: {
      mark: 9,
      rate: 3
    },
    english: {
      mark: 19,
      rate: 2
    }
  },
  {
    firstName: "Amar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3
    },
    english: {
      mark: 2,
      rate: 2
    }
  },
  {
    firstName: "Oscar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3
    },
    english: {
      mark: 12,
      rate: 2
    }
  },
  {
    firstName: "Juliette",
    gender: "female",
    js: {
      mark: 10,
      rate: 3
    },
    english: {
      mark: 11,
      rate: 2
    }
  }
];
const dw2 = [
  {
    firstName: "Jordan",
    gender: "male",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 4,
      rate: 2
    }
  },
  {
    firstName: "Baptiste",
    gender: "male",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 9,
      rate: 2
    }
  },
  {
    firstName: "Hélène",
    gender: "female",
    js: {
      mark: 13,
      rate: 3
    },
    english: {
      mark: 20,
      rate: 2
    }
  },
  {
    firstName: "Paola",
    gender: "female",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 7,
      rate: 2
    }
  }
];

// Cette deuxieme partie concerne les tableaux, attention ces tableaux contiennent des objets. 
// Vous pourrez utiliser les boucles for afin de traiter chaque element des tableaux
// Une autre solution que la boucle for sont les fonctions "map" et "forEach" utilisable sur un tableau (voir doc cdn) 


// 1. Combien y a t il d'élève dans la classe dw1 puis dw2 et dans toutes les classes ?

console.log('Il y a ' + dw1.length + ' eleves dans la classe dw1 et ' + dw2.length + ' eleves dans la classe dw2');
console.log("il y a donc " + (dw1.length + dw2.length) + " eleves present");


// 2. Lister l'ensemble des élèves des deux classes dans l'ordre alphabétique

const students = dw1.concat(dw2);
console.log(students.sort((a, b) => a.firstName.localeCompare(b.firstName)))


// 3. Prendre les 3 premiers élèves de la classe dw1

const firstOfDw1 = dw1.slice(0,3)
console.log(firstOfDw1)


// 4. Prendre le dernier élève de la classe dw1

const lastOfDw1 = dw1.slice(-1)
console.log(lastOfDw1)

// 5. Moyenne générale de chaque élève

// const average = students.map((student) =>{
//   return (student.js.mark * student.js.rate) / (student.js.rate + student.english.rate);});
//   console.log(average)

const getStudentsNotesAverage = (students) => {
  const notesAverageStudents = [];
  for (let student in students) {
    notesAverageStudents.push({
      name: students[student].firstName,
      notesAverage:
        (students[student]?.js?.mark * students[student]?.js?.rate +
          students[student]?.english?.mark * students[student]?.english?.rate) /
        (students[student]?.js?.rate + students[student]?.english?.rate),
    });
  }
  return notesAverageStudents;
};
console.log(getStudentsNotesAverage(dw1));
console.log(getStudentsNotesAverage(dw2));

// 6. Moyenne de la classe dw1 en js ?

// 7. Moyenne des deux classes en js ?

// 8. Meilleure moyenne de la classe en js ?
const moyenneJsOfDw1 =dw1.sort((a,b) => {
  return a.js.mark > b.js.mark ? 1 : -1;
});
console.log(moyenneJsOfDw1[0].firstName, moyenneJsOfDw1[0].js.mark);

// 9. Meilleur élève des deux classes
const toutesMesClasses = dw2.concat(dw1).sort((a,b) => {
  return a.js.mark < b.js.mark ? 1 : -1;
})
console.log(
  toutesMesClasses[0].firstName,
  toutesMesClasses[0].js.mark
)
// 10. Meilleure fille des deux classes en anglais
console.log(
  dw2
  .concat(dw1)
  .filter(student => student.gender === 'female')
  .sort ((a, b) => a.english.mark > b.english.mark ? 1 : -1)[0]
);

// 11. Meilleur garcon en moyenne générale
console.log(
  dw2
  .concat(dw1)
  .filter(student => student.gender === 'male')
  .sort ((a, b) => a.english.mark > b.english.mark ? 1 : -1)[0]
);

// 12. Qui a la note médiane en anglais parmi dw1 ?

// 12.a. Donner sa position dans la classe

// 13. Qui a la moyenne médiane générale dw1 + dw2 ?

// 14. Moyenne générale des filles et moyenne générale des garcons ?

// 15. Qui sont les meilleurs en js, les filles ou les garcons ?

// 16. Récupérer les filles des classes dw1 et dw2 et les classer dans l'ordre de leurs moyennes générales