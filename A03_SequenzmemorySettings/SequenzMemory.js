"use strict";
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
    let startBtn = document.querySelector("button");
    let arrayOriginal;
    function handleLoad() {
        let form = document.querySelector("#formSettings");
        form.addEventListener("change", handleChange);
        let startBtn = document.querySelector("button");
        startBtn.addEventListener("click", createField);
        //Kann man bei einem EventListener den Funktionsaufruf an Beidingung knüpfen? --> Button in handleChange
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData.entries()) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            /* console.log(entry[0]); */
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
            /* console.log(timer); */
        }
    }
    function createField(_event) {
        console.log(gameWord);
        //Hide Settings Menu and show up the game field
        document.getElementById("formSettings").classList.add("isHidden");
        //Create new container
        let container = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);
        //Create 2 Array and shuffle one of them with the game Word
        let arrayShuffled = gameWord.split("");
        //Array shufflen
        arrayOriginal = gameWord.split("");
        console.log(arrayOriginal);
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
            setTimeout(function () {
                coverupCards();
            }, 2000);
        }
        //set Timeout for 2 seconds
    }
    function coverupCards() {
        let allCards = document.querySelector(".card");
        allCards.classList.add("hideCards");
        allCards.addEventListener("click", checkCard);
        // Damit wird komischerweise nur auf das erste DIV mit der Klasse "card" zugegriffen und verdeckt. Wieso ist das so? 
        // Wenn ich mit HTMLCollectionOf<HTMLDivElement> als Typ arbeite, kann ich weder eine neue Klasse installieren, noch einen Event Listener installieren.
        setTimer();
    }
    function setTimer() {
        let countdown = document.createElement("span");
        countdown.className = "timer";
        // when lost coverupCards()
    }
    function checkCard() {
        let cardClicked = document.querySelector(".card");
        cardClicked.classList.remove("hideCards");
        //check the elements with second Array
        /* console.log(cardClicked.innerHTML);
        console.log(arrayOriginal[0]); */
        if (cardClicked.innerHTML != arrayOriginal[0]) {
            window.alert("YOU LOST");
            coverupCards();
        }
    }
})(SequenzMemory || (SequenzMemory = {}));
/* > Kartengröße einstellen anhand Form eingabe
> Hintergrundfarbe anhand Form Eingabe
> Font einstellen anhand Form
 */ 
//# sourceMappingURL=SequenzMemory.js.map