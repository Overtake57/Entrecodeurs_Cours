const student = {
  firstName: "Jordan",
  gender: "male",
  js: {
    mark: 12,
    rate: 3,
  },
  english: {
    mark: 4,
    rate: 2,
  },
};

const dw1 = [
  {
    firstName: "Jean",
    gender: "male",
    js: {
      mark: 12,
      rate: 3,
    },
    english: {
      mark: 7,
      rate: 2,
    },
  },
  {
    firstName: "Marc",
    gender: "male",
    js: {
      mark: 9,
      rate: 3,
    },
    english: {
      mark: 19,
      rate: 2,
    },
  },
  {
    firstName: "Amar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3,
    },
    english: {
      mark: 2,
      rate: 2,
    },
  },
  {
    firstName: "Oscar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3,
    },
    english: {
      mark: 12,
      rate: 2,
    },
  },
  {
    firstName: "Juliette",
    gender: "female",
    js: {
      mark: 10,
      rate: 3,
    },
    english: {
      mark: 11,
      rate: 2,
    },
  },
];
const dw2 = [
  {
    firstName: "Jordan",
    gender: "male",
    js: {
      mark: 12,
      rate: 3,
    },
    english: {
      mark: 4,
      rate: 2,
    },
  },
  {
    firstName: "Baptiste",
    gender: "male",
    js: {
      mark: 12,
      rate: 3,
    },
    english: {
      mark: 9,
      rate: 2,
    },
  },
  {
    firstName: "Hélène",
    gender: "female",
    js: {
      mark: 13,
      rate: 3,
    },
    english: {
      mark: 20,
      rate: 2,
    },
  },
  {
    firstName: "Paola",
    gender: "female",
    js: {
      mark: 12,
      rate: 3,
    },
    english: {
      mark: 7,
      rate: 2,
    },
  },
];

// Cette deuxieme partie concerne les tableaux, attention ces tableaux contiennent des objets.
// Vous pourrez utiliser les boucles for afin de traiter chaque element des tableaux
// Une autre solution que la boucle for sont les fonctions "map" et "forEach" utilisable sur un tableau (voir doc cdn)

// 1. Combien y a t il d'élève dans la classe dw1 puis dw2 et dans toutes les classes ?

console.log(
  "Il y a " +
    dw1.length +
    " eleves dans la classe dw1 et " +
    dw2.length +
    " eleves dans la classe dw2"
);
console.log("il y a donc " + (dw1.length + dw2.length) + " eleves present");

// 2. Lister l'ensemble des élèves des deux classes dans l'ordre alphabétique

const studentt = dw1.concat(dw2);
console.log(studentt.sort((a, b) => a.firstName.localeCompare(b.firstName)));

// 3. Prendre les 3 premiers élèves de la classe dw1

const firstOfDw1 = dw1.slice(0, 3);
console.log(firstOfDw1);

// 4. Prendre le dernier élève de la classe dw1

const lastOfDw1 = dw1.slice(-1);
console.log(lastOfDw1);

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
const moyenneJsOfDw1 = dw1.sort((a, b) => {
  return a.js.mark > b.js.mark ? 1 : -1;
});
console.log(moyenneJsOfDw1[0].firstName, moyenneJsOfDw1[0].js.mark);

// 9. Meilleur élève des deux classes
const toutesMesClasses = dw2.concat(dw1).sort((a, b) => {
  return a.js.mark < b.js.mark ? 1 : -1;
});
console.log(toutesMesClasses[0].firstName, toutesMesClasses[0].js.mark);
// 10. Meilleure fille des deux classes en anglais
console.log(
  dw2
    .concat(dw1)
    .filter((student) => student.gender === "female")
    .sort((a, b) => (a.english.mark > b.english.mark ? 1 : -1))[0]
);

// 11. Meilleur garcon en moyenne générale
const garcons = dw2
  .concat(dw1)
  .filter((student) => student.gender === "male")
  .map((student) => {
    const jsMark = student.js.mark;
    const jsRate = student.js.rate;
    const englishMark = student.english.mark;
    const englishRate = student.english.rate;
    const moyenneGenerale =
      (jsMark * jsRate + englishMark * englishRate) / (jsRate + englishRate);
    return {
      firstName: student.firstName,
      moyenneGenerale: moyenneGenerale,
    };
  });

const filles = dw1
  .filter((student) => student.gender === "female")
  .map((student) => {
    const jsMark = student.js.mark;
    const jsRate = student.js.rate;
    const englishMark = student.english.mark;
    const englishRate = student.english.rate;
    const moyenneGenerale =
      (jsMark * jsRate + englishMark * englishRate) / (jsRate + englishRate);
    return {
      firstName: student.firstName,
      moyenneGenerale: moyenneGenerale,
    };
  });

garcons.sort((a, b) => b.moyenneGenerale - a.moyenneGenerale);
const meilleurGarcon = garcons[0];
console.log(
  meilleurGarcon.firstName +
    " est le meilleur garçon avec une moyenne générale de " +
    meilleurGarcon.moyenneGenerale.toFixed(2) +
    "."
);

// 12. Qui a la note médiane en anglais parmi dw1 ?
const englishMarks = dw1.map((student) => student.english.mark);
englishMarks.sort((a, b) => a - b);
const middle = Math.floor(englishMarks.length / 2);
const medianEnglishMark =
  englishMarks.length % 2 === 0
    ? (englishMarks[middle - 1] + englishMarks[middle]) / 2
    : englishMarks[middle];
const studentWithMedianEnglishMark = dw1.find(
  (student) => student.english.mark === medianEnglishMark
);
console.log(
  studentWithMedianEnglishMark.firstName +
    " a la note médiane en anglais dans dw1."
);

// 12.a. Donner sa position dans la classe


// 13. Qui a la moyenne médiane générale dw1 + dw2 ?
const students = dw1.concat(dw2);

// Calculer la moyenne générale de chaque étudiant
const averages = students.map(student => {
  const sum = Object.values(student).reduce((acc, cur) => {
    if (typeof cur === 'object') {
      return acc + (cur.mark / cur.rate);
    } else {
      return acc;
    }
  }, 0);
  return sum / 2;
});

// Calculer la médiane des moyennes
averages.sort((a, b) => a - b);
const medianIndex = Math.floor(averages.length / 2);
const median = (averages.length % 2 === 0) ? 
              (averages[medianIndex] + averages[medianIndex - 1]) / 2 :
              averages[medianIndex];

// Trouver les étudiants dont la moyenne générale est égale à la moyenne médiane générale
const studentsWithMedianAverage = students.filter((student, index) => {
  const average = averages[index];
  return average === median;
});

// Afficher les noms des étudiants qui ont la moyenne médiane générale
const names = studentsWithMedianAverage.map(student => student.firstName);
console.log("L' étudiants qui a la moyenne médiane générale est : " + names.join(", "));

// 14. Moyenne générale des filles et moyenne générale des garcons ?

// 15. Qui sont les meilleurs en js, les filles ou les garcons ?

// 16. Récupérer les filles des classes dw1 et dw2 et les classer dans l'ordre de leurs moyennes générales
