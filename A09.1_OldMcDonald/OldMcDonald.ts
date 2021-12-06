namespace Farm {

    window.addEventListener("load", handleLoad);
    let nHay: number = 200;
    let nCarrots: number = 30;
    let nGrass: number = 300;

    let horse: Animal = new Animal ("horse", "Angus", "hay", 20, "neigh");
    let cow: Animal = new Animal ("cow", "Clarabella", "grass", 50, "moo");
    let marmot: Animal = new Animal ("marmot", "Melvin", "carrots", 2, "chirp");
    let rabbit: Animal = new Animal ("rabbit", "Snowball", "carrots", 4, "purr");
    let reindeer: Animal = new Animal ("reindeer", "Rudolpho", "hay", 24, "red-nose-lights-up-sound");

    let animalArray: Animal[] = [horse, cow, marmot, rabbit, reindeer];

    function handleLoad (_event: Event): void {
        showAnimal();
    }

    function showAnimal(): void {

        for (let index: number = 0; index < animalArray.length; index++) {

            let accesString: string = animalArray[index].species + "Shed";
            let shedAccess: HTMLDivElement = document.querySelector("#" + accesString)!;

            let title: string = animalArray[index].name + " the " + animalArray[index].species;
            let song: string = animalArray[index].sing(animalArray[index].sound);
            let meal: string  = animalArray[index].eat(animalArray[index].food, animalArray[index].amount);

            shedAccess.innerHTML = title + "<br>" + "<br>" + "<br>" + song + "<br>" + "<br>" + "<br>" + meal;    
            updateStock(animalArray[index].food, animalArray[index].amount);
            
            //Hier sollte mit setTimeot jeder Schleifendurchlauf verzögert werden, damit die Tiere nacheinander singen. 
        } 
    
        let nextDayBtn: HTMLButtonElement = document.querySelector(".nextDay")!;
        nextDayBtn.classList.remove("isHidden");
        nextDayBtn.addEventListener("click", startNewDay);
    }

    function updateStock(_food: string, _amount: number): void {

        if (_food == "hay") {
            nHay -= _amount;            
        } else if (_food == "grass") {
            nGrass -= _amount;
        } else if (_food == "carrots") {
            nCarrots -= _amount;
        }

        document.querySelector("#hayBar")!.setAttribute("style", "height:" + (nHay / 200) * 100 + "%");
        document.querySelector("#grassBar")!.setAttribute("style", "height:" + (nGrass / 300) * 100 + "%");
        document.querySelector("#carrotBar")!.setAttribute("style", "height:" + (nCarrots / 30) * 100 + "%"); 
    } 

    function startNewDay(): void {

        let sheds: any = document.querySelectorAll(".sheds")!;
        sheds.innerHTML = "";
        let nextDayBtn: HTMLButtonElement = document.querySelector(".nextDay")!;
        nextDayBtn.classList.add("isHidden");
        
        showAnimal();
    }
}
