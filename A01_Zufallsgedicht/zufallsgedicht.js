var gedicht;
(function (gedicht) {
    var subjektArray = ["Luna", "Umbridge", "Kreacher", "Fawkes", "Tom Riddle", "Fluffy der dreiköpfige Hund", "Der Ghul im Pyjama", "Fred", "Der Muggel-Premierminister"];
    var verbArray = ["verhext", "kauft", "betrachtet", "beleidigt", "bewundert", "verabscheut", "beseitigt", "wirft den Elderstab auf", "vergöttert"];
    var objektArray = ["den tropfenden Kessel", "Squibs", "Ravenclaw", "Dumbledores Wasserspeier", "die fette Dame", "Slughorns Schüler Sammlung", "Feuerwhiskey", "Flitwicks Chorgruppe", "Quidditch"];
    for (var index = subjektArray.length; index >= 1; index--) {
        // console.log(index);
        var wertFeedback = getVerse(subjektArray, verbArray, objektArray);
        console.log(wertFeedback);
    }
    function getVerse(_subjekt, _verb, _objekt) {
        var vers = "";
        var zufallsSubjekt = Math.floor(Math.random() * _subjekt.length);
        var zufallsVerb = Math.floor(Math.random() * _verb.length);
        var zufallsObjektt = Math.floor(Math.random() * _objekt.length);
        // console.log(zufallsSubjekt);
        vers += subjektArray.splice(zufallsSubjekt, 1) + " ";
        vers += verbArray.splice(zufallsVerb, 1) + " ";
        vers += objektArray.splice(zufallsObjektt, 1) + " ";
        return (vers);
    }
})(gedicht || (gedicht = {}));
//# sourceMappingURL=zufallsgedicht.js.map