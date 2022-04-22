function Person(species) {
    this.species = species;
}
Person.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`
}

let person = new Person('Human');
console.log(person.species)
console.log(person.toSpeciesString());
