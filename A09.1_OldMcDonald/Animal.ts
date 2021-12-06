namespace Farm {

    export class Animal {
        species: string;
        name: string;
        food: string;
        amount: number;
        sound: string;

        constructor (_species: string, _name: string, _food: string, _amount: number, _sound: string) {
            this.species = _species;
            this.name = _name;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
        }

        eat (_food: string, _amount: number): string {

            let mealEaten: string = "I ate " + this.amount + " " + this.food + ".";
            return mealEaten;
        }

        sing (_sound: string): string {

            let lyrics: string = "Old McDonald has a plant-based farm. " + "*" + this.sound + "*" + " " + "*" + this.sound + "*";
            return lyrics;
        }
    }

}