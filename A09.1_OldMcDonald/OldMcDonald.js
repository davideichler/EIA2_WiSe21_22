"use strict";
var Farm;
(function (Farm) {
    window.addEventListener("load", handleLoad);
    let nHay = 200;
    let nCarrots = 30;
    let nGrass = 300;
    let horse = new Farm.Animal("horse", "Angus", "hay", 20, "neigh");
    let cow = new Farm.Animal("cow", "Clarabella", "grass", 50, "moo");
    let marmot = new Farm.Animal("marmot", "Melvin", "carrots", 2, "chirp");
    let rabbit = new Farm.Animal("rabbit", "Snowball", "carrots", 4, "purr");
    let reindeer = new Farm.Animal("reindeer", "Rudolpho", "hay", 24, "red-nose-lights-up-sound");
    let animalArray = [horse, cow, marmot, rabbit, reindeer];
    function handleLoad(_event) {
        showAnimal();
    }
    function showAnimal() {
        for (let index = 0; index < animalArray.length; index++) {
            let accesString = animalArray[index].species + "Shed";
            let shedAccess = document.querySelector("#" + accesString);
            let title = animalArray[index].name + " the " + animalArray[index].species;
            let song = animalArray[index].sing(animalArray[index].sound);
            let meal = animalArray[index].eat(animalArray[index].food, animalArray[index].amount);
            shedAccess.innerHTML = title + "<br>" + "<br>" + "<br>" + song + "<br>" + "<br>" + "<br>" + meal;
            updateStock(animalArray[index].food, animalArray[index].amount);
            //Hier sollte mit setTimeot jeder Schleifendurchlauf verzögert werden, damit die Tiere nacheinander singen. 
        }
        let nextDayBtn = document.querySelector(".nextDay");
        nextDayBtn.classList.remove("isHidden");
        nextDayBtn.addEventListener("click", startNewDay);
    }
    function updateStock(_food, _amount) {
        if (_food == "hay") {
            nHay -= _amount;
        }
        else if (_food == "grass") {
            nGrass -= _amount;
        }
        else if (_food == "carrots") {
            nCarrots -= _amount;
        }
        document.querySelector("#hayBar").setAttribute("style", "height:" + (nHay / 200) * 100 + "%");
        document.querySelector("#grassBar").setAttribute("style", "height:" + (nGrass / 300) * 100 + "%");
        document.querySelector("#carrotBar").setAttribute("style", "height:" + (nCarrots / 30) * 100 + "%");
    }
    function startNewDay() {
        let sheds = document.querySelectorAll(".sheds");
        sheds.innerHTML = "";
        let nextDayBtn = document.querySelector(".nextDay");
        nextDayBtn.classList.add("isHidden");
        showAnimal();
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=OldMcDonald.js.map