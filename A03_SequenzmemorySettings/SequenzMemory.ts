/*
Leider ist es mir aufgrund von Zeitmangel nicht gelungen die Aufgabe vollständig fertigzustellen.
Ich habe versucht den gesamten Code in viele kleine Einzelproblme zu zerlegen. Ein paar dieser Einzelprobleme sind leider noch offen,
daher funktioniert die Anwendung nicht richtig. Ich habe an den jeweiligen Stellen ein Kommentar dazu hinterlassen.

An einigen Stellen habe ich mit Kriss und Herbert zusammengearbeitet.
*/
namespace SequenzMemory {

    window.addEventListener("load", handleLoad);

    let gameWord: string;
    let cardSize: number;
    let backgroundColor: string;
    let cardColor: string;
    let fontColor: string;
    let font:  string;
    let timer: number;
    let countdown: HTMLDivElement;
    let startBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    let arrayOriginal: any;

    function handleLoad(): void {

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("#formSettings");
        form.addEventListener("change", handleChange);

        let startBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
        startBtn.addEventListener("click", createField); 
    }

    function handleChange(_event: Event): void {

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData.entries()) {

            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            
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

    function createField(_event: Event): void {

        (<HTMLElement>document.getElementById("formSettings")).classList.add("isHidden"); 
        let container: HTMLDivElement = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);

        let arrayShuffled: any = gameWord.split("");
        arrayOriginal = gameWord.split("");
        //Gibt es hier einen besseren Datentyp? Außer any habe ich nichts gefunden, was funktioniert.
        
        for (let index: number = 0; index < gameWord.length; index++) {

            let randomNumber: number = Math.floor(Math.random() * (arrayShuffled.length));
            console.log(arrayShuffled);
            let newCard: HTMLDivElement = document.createElement("div");
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

        setTimeout(function (): void {
                coverupCards();
            },     2000);

    }

    function coverupCards(): void {

        let cardArray = document.querySelectorAll(".card");
        //Hier fehlt die Typisierung. Alle die ich probiert habe, haben leider nicht funktioniert :D
        console.log(cardArray);
        let cardID: string = cardArray[0].id;
        console.log(cardID);

        

        for (let index: number = 0; index < cardArray.length; index++) {
            cardArray[index].classList.add("hiddenCard");
            cardArray[index].addEventListener("click", checkCard);
                        
        }
        setTimer();
    }


    function checkCard(_event: Event): void {

        /* console.log(_event.target.id); */
        // Hier liegt das größte Problem. Ich versuche auf die ID der Karte (also des Targets) zuzugreifen. Jedoch kann ich darauf nicht zugreifen. Weshlab?
        // Mit dem Code unten scheint es so, als wenn der Event Listener nur auf jeweils dem ersten Feld installiert ist und immer dieselben Werte annimmt. 
        // Deshalb funktioniert das weitere Vorgehen nicht korrekt.

        let cardClicked: HTMLDivElement = <HTMLDivElement>document.querySelector(".card");
        cardClicked.classList.remove("hiddenCard");

        console.log(cardClicked.innerHTML);
        console.log(arrayOriginal[0]);
        
        if (cardClicked.innerHTML != arrayOriginal[0]) {
            window.alert("YOU LOST");
            coverupCards();
        }   else if (cardClicked.innerHTML == arrayOriginal[arrayOriginal.length]) {
            window.alert("YOU WON");            
        }

    }


    function setTimer(): void {

        let countdown: HTMLDivElement = document.createElement("div");
        countdown.className = "timer";
        document.body.appendChild(countdown);
        countdown.classList.add("countdown");

        // Den Timer habe ich aufgrund Zeitmangels auch nicht vollständig installieren können. Gleiches gilt auch für die Fontauswahl.
        // Sorry dafür. :(
    }
        
       // when lost coverupCards()
    }
