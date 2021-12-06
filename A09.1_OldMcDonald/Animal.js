"use strict";
var Farm;
(function (Farm) {
    class Animal {
        constructor(_species, _name, _food, _amount, _sound) {
            this.species = _species;
            this.name = _name;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
        }
        eat(_food, _amount) {
            let mealEaten = "I ate " + this.amount + " " + this.food + ".";
            return mealEaten;
        }
        sing(_sound) {
            let lyrics = "Old McDonald has a plant-based farm. " + "*" + this.sound + "*" + " " + "*" + this.sound + "*";
            return lyrics;
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map