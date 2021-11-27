"use strict";
/*
    Aufgabe08.2 Goldener Herbst von David Eichler. Implementation ist noch unfertig.
    Für Hintergrund, Berge und Wolken wurde sich am Lehrbeispiel von Jirka orientiert
    Bauminspiration aus: https://www.youtube.com/watch?v=Ymbv6m3EuNw&t=618s

 */
var GoldenAutmn;
(function (GoldenAutmn) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawCloud1({ x: 312.5, y: 100 }, { x: 325, y: 50 });
        drawCloud2({ x: 675, y: 100 }, { x: 200, y: 20 });
        drawMountain({ x: 0, y: 250 }, 75, 200, "grey", "white");
        drawMountain({ x: 0, y: 250 }, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 600, y: 400 });
        drawTrees({ x: 200, y: 400 });
        drawTrees({ x: -10, y: 400 });
        drawLeaf1({ x: 75, y: 350 });
        /*    drawLeaf2();
         drawLeaf3();
         drawSquirrel();  */
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#aba187");
        gradient.addColorStop(0.4, "#e6b93e");
        gradient.addColorStop(1, "#734040");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCloud1(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 80;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(132, 6%, 83%, 0.5)");
        gradient.addColorStop(1, "HSLA(132, 6%, 83%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawCloud2(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let radiusParticle = 30;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(132, 6%, 83%, 0.5)");
        gradient.addColorStop(1, "HSLA(132, 6%, 83%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 25, -75);
        //crown
        crc2.fillStyle = "orange";
        drawCircle(0, -100, 50);
        drawCircle(-20, -120, 50);
        drawCircle(-10, -140, 50);
        drawCircle(12.5, -160, 50);
        drawCircle(25, -100, 50);
        drawCircle(40, -130, 50);
        function drawCircle(_x, _y, _radius) {
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
            crc2.fill();
        }
        crc2.restore();
    }
    function drawLeaf1(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        console.log(_position.x, _position.y);
        crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "black";
        crc2.moveTo(0, 0);
        crc2.lineTo(50, 50);
        crc2.stroke();
        crc2.fillStyle = "#ab2b2b";
        crc2.moveTo(50, 50);
        crc2.bezierCurveTo(0, 100, 50, 150, 150, 150);
        crc2.moveTo(50, 50);
        crc2.bezierCurveTo(100, 0, 150, 50, 150, 150);
        crc2.stroke();
        crc2.fill();
    }
})(GoldenAutmn || (GoldenAutmn = {}));
//# sourceMappingURL=goldenHerbst.js.map