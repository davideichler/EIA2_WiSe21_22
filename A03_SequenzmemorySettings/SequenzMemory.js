"use strict";
/*
Leider ist es mir aufgrund von Zeitmangel nicht gelungen die Aufgabe vollständig fertigzustellen.
Ich habe versucht den gesamten Code in viele kleine Einzelproblme zu zerlegen. Ein paar dieser Einzelprobleme sind leider noch offen,
daher funktioniert die Anwendung nicht richtig. Ich habe an den jeweiligen Stellen ein Kommentar dazu hinterlassen.

An einigen Stellen habe ich mit Kriss und Herbert zusammengearbeitet.
*/
var SequenzMemory;
(function (SequenzMemory) {
    window.addEventListener("load", handleLoad);
    let gameWord;
    let cardSize;
    let backgroundColor;
    let cardColor;
    let fontColor;
    let font;
    let timer;
    let countdown;
    let startBtn = document.querySelector("button");
    let arrayOriginal;
    function handleLoad() {
        let form = document.querySelector("#formSettings");
        form.addEventListener("change", handleChange);
        let startBtn = document.querySelector("button");
        startBtn.addEventListener("click", createField);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData.entries()) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            switch (entry[0]) {
                case "size":
                    cardSize = Number(entry[1]);
                    break; //slider recherchieren
                case "backgroundColor":
                    backgroundColor = String(entry[1]);
                    break;
                case "cardColor":
                    cardColor = String(entry[1]);
                    break;
                case "fontColor":
                    fontColor = String(entry[1]);
                    break;
                case "font":
                    font = String(entry[1]);
                    break;
                case "time":
                    timer = Number(entry[1]);
                    break;
                case "gameWord":
                    gameWord = String(entry[1]);
                    break;
            }
        }
    }
    function createField(_event) {
        document.getElementById("formSettings").classList.add("isHidden");
        let container = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);
        let arrayShuffled = gameWord.split("");
        arrayOriginal = gameWord.split("");
        //Gibt es hier einen besseren Datentyp? Außer any habe ich nichts gefunden, was funktioniert.
        for (let index = 0; index < gameWord.length; index++) {
            let randomNumber = Math.floor(Math.random() * (arrayShuffled.length));
            console.log(arrayShuffled);
            let newCard = document.createElement("div");
            newCard.className = "card";
            newCard.id = String(index);
            container.appendChild(newCard);
            newCard.innerHTML = arrayShuffled[randomNumber];
            arrayShuffled.splice(randomNumber, 1);
            newCard.style.width = cardSize + "px";
            newCard.style.height = cardSize + "px";
            document.body.style.backgroundColor = backgroundColor;
            newCard.style.backgroundColor = cardColor;
            newCard.style.color = fontColor;
            newCard.style.fontFamily = font;
        }
        setTimeout(function () {
            coverupCards();
        }, 2000);
    }
    function coverupCards() {
        let cardArray = document.querySelectorAll(".card");
        //Hier fehlt die Typisierung. Alle die ich probiert habe, haben leider nicht funktioniert :D
        console.log(cardArray);
        let cardID = cardArray[0].id;
        console.log(cardID);
        for (let index = 0; index < cardArray.length; index++) {
            cardArray[index].classList.add("hiddenCard");
            cardArray[index].addEventListener("click", checkCard);
        }
        setTimer();
    }
    function checkCard(_event) {
        /* console.log(_event.target.id); */
        // Hier liegt das größte Problem. Ich versuche auf die ID der Karte (also des Targets) zuzugreifen. Jedoch kann ich darauf nicht zugreifen. Weshlab?
        // Mit dem Code unten scheint es so, als wenn der Event Listener nur auf jeweils dem ersten Feld installiert ist und immer dieselben Werte annimmt. 
        // Deshalb funktioniert das weitere Vorgehen nicht korrekt.
        let cardClicked = document.querySelector(".card");
        cardClicked.classList.remove("hiddenCard");
        console.log(cardClicked.innerHTML);
        console.log(arrayOriginal[0]);
        if (cardClicked.innerHTML != arrayOriginal[0]) {
            window.alert("YOU LOST");
            coverupCards();
        }
        else if (cardClicked.innerHTML == arrayOriginal[arrayOriginal.length]) {
            window.alert("YOU WON");
        }
    }
    function setTimer() {
        let countdown = document.createElement("div");
        countdown.className = "timer";
        document.body.appendChild(countdown);
        countdown.classList.add("countdown");
        // Den Timer habe ich aufgrund Zeitmangels auch nicht vollständig installieren können. Gleiches gilt auch für die Fontauswahl.
        // Sorry dafür. :(
    }
    // when lost coverupCards()
})(SequenzMemory || (SequenzMemory = {}));
//# sourceMappingURL=SequenzMemory.js.map