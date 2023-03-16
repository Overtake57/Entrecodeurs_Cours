// Créez une classe Animal qui a un constructeur prenant deux paramètres: name et sound. Le constructeur devrait initialiser les propriétés this.name et this.sound avec les valeurs des paramètres.
// Ajoutez une méthode makeSound() à la classe Animal qui affiche sur la console le nom de l'animal et le son qu'il fait.
// Créez une classe Dog qui étend la classe Animal. La classe Dog devrait avoir un constructeur prenant trois paramètres : name, sound et breed. Le constructeur devrait appeler le constructeur de la classe Animal en passant les paramètres name et sound et initialiser la propriété this.breed avec la valeur du paramètre.
// Ajoutez une méthode bark() à la classe Dog qui affiche sur la console le nom du chien et le son qu'il fait, en ajoutant le mot "Woof!" à la fin.
// Créez une instance de la classe Animal avec les paramètres "Chat" et "Miaou", puis appelez sa méthode makeSound().
// Créez une instance de la classe Dog avec les paramètres "Rex", "Wouf" et "Berger allemand", puis appelez sa méthode makeSound() et sa méthode bark().
// Utilisez la méthode console.log() pour afficher le nombre de propriétés de chaque instance (l'instance de Animal et l'instance de Dog).

//? On defini la classe `Animal` avec les parametres `name` et `sound`, qui initialise les proprietes `this.name` et `this.sound`.

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.name + " says " + this.sound);
  }
}

//? On defini la classe `Dog` , qui etend la classe `Animal`. la classe `Dog` appelle la classe `Animal` en utilisant `super()` et initialise la propriete `this.breed` 
//? avec la valeur `breed`.
class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.breed = breed;
  }
//? On ajoute une methode `bark()` a la classe `Dog` qui affiche le nom du chien et le son qu'il fait.
  bark() {
    console.log(this.name) + "says" + this.sound + "Bark!";
  }
}
//? On cree l'instance de la classe `Animal` en utilisant les parametres `Kitten` et `Meow` pour le nom et le son, et appele sa methode `makeSound()`.
const animal = new Animal("Kitten", "Meow");
animal.makeSound();

//? On cree une instance de la classe Dog en utilisant les parametres `Rex`, `Bark` et `German Shepherd` pour le nom, le son et la race.
const dog = new Dog("Rex", "Bark", "German Shepherd");

//? On appele la methode `makeSound()` et la methode `bark()`.
dog.makeSound();
dog.bark();

//? On utilise la methode `Object.keys()` pour afficher le nombre de propriétés de chaque instance (l'instance de `Animal` et l'instance de `Dog`)
console.log(Object.keys(dog).length);
