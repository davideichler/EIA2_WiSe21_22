var A02_EventInspector;
(function (A02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
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
    function setInfoBox(_event) {
        // display mouse position and event's target in span-element
        var x = _event.clientX;
        var y = _event.clientY;
        var target = _event.target;
        var span = document.querySelector("span");
        span.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "target:" + target;
        // set style attributes top and left of span to mouseposition + offset
        span.style.left = x + 5 + "px";
        span.style.top = y + 10 + "px";
    }
    function logInfo(_event) {
        //log event's type, target, currentTarget and the whole event object to the browser console
        var type = _event.type;
        var target = _event.target;
        var currentTarget = _event.currentTarget;
        var eventObject = _event;
        console.log("Type is", type);
        console.log("Target is ", target);
        console.log("CurrentTarget is ", currentTarget);
        console.log("Whole Object is", eventObject);
    }
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=eventInspector.js.map