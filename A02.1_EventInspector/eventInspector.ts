namespace A02_EventInspector {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        //install mouse move listener on document
        document.addEventListener("mousemove", setInfoBox);

        //install click- and keyup-listeners on document, body and all divs
        document.addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector("div").addEventListener("click", logInfo);

        document.addEventListener("keyup", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector("div").addEventListener("keyup", logInfo);
        
    }

    function setInfoBox (_event: MouseEvent): void {
        // display mouse position and event's target in span-element
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let target: EventTarget = _event.target;
        let span: HTMLElement = document.querySelector("span");
        span.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "target:" + target;

        // set style attributes top and left of span to mouseposition + offset
        span.style.left = x + 5 + "px";
        span.style.top = y + 10 + "px";
    
    }

    function logInfo (_event: Event): void {

        //log event's type, target, currentTarget and the whole event object to the browser console
        let type: string = _event.type;
        let target: EventTarget = _event.target;
        let currentTarget: EventTarget = _event.currentTarget;
        let eventObject: Object = _event;

        console.log("Type is", type);
        console.log("Target is ", target);
        console.log("CurrentTarget is ", currentTarget);
        console.log("Whole Object is",  eventObject);

    }


}