namespace gedicht {

    let subjektArray: string[] = ["Luna", "Umbridge", "Kreacher", "Fawkes", "Tom Riddle", "Fluffy der dreiköpfige Hund", "Der Ghul im Pyjama", "Fred", "Der Muggel-Premierminister"];
    let verbArray: string [] = ["verhext", "kauft", "betrachtet", "beleidigt", "bewundert", "verabscheut", "beseitigt", "wirft den Elderstab auf", "vergöttert"];
    let objektArray: string [] =  ["den tropfenden Kessel", "Squibs", "Ravenclaw", "Dumbledores Wasserspeier", "die fette Dame", "Slughorns Schüler Sammlung", "Feuerwhiskey", "Flitwicks Chorgruppe", "Quidditch"];

   
    for (let index: number = subjektArray.length; index >= 1 ; index--) {
    
        // console.log(index);
        let wertFeedback: string = getVerse(subjektArray, verbArray, objektArray);
        console.log(wertFeedback);
    }

    
    function getVerse (_subjekt: string[], _verb: string[], _objekt: string[]): string {

        let vers: string = "";
        let zufallsSubjekt: number = Math.floor(Math.random() * _subjekt.length);
        let zufallsVerb: number = Math.floor(Math.random() * _verb.length);
        let zufallsObjektt: number = Math.floor(Math.random() * _objekt.length);

        // console.log(zufallsSubjekt);

        vers += subjektArray.splice(zufallsSubjekt, 1) + " ";
        vers += verbArray.splice(zufallsVerb, 1) + " ";
        vers += objektArray.splice(zufallsObjektt, 1) + " ";

        return (vers);
    }

}
