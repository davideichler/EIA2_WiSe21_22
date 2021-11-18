namespace Canvas {
    let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", hndLoad);

    function hndLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        crc2 = canvas.getContext("2d")!;
        console.log(crc2);

        for (let index: number = 0; index < 10; index++) {

            let y: number = 40 * index;
            let wobble1: number = Math.random() * index + Math.random() * 500;
            let wobble2: number = Math.random() * 400;
            //let x: number = MathRandom
            drawBackground(y, wobble1, wobble2);

        }

        function drawBackground(_y: number, _wobble1: number, _wobble2: number): void {
            crc2.beginPath();
            crc2.moveTo(300, _y);
            crc2.quadraticCurveTo(_wobble1, _wobble2, 400, _y);
            //crc2.quadraticCurveTo(_wobble1, _wobble2, 275, _y);
           /*  crc2.quadraticCurveTo(_wobble1, _wobble2, 425, _y);
            crc2.quadraticCurveTo(_wobble1, _wobble2, 500, _y); */
            crc2.quadraticCurveTo(_wobble1, _wobble2, 575, _y);


            crc2.strokeStyle = "#87CEEB60";
            crc2.stroke();
        }

        for (let index: number = 0; index < 150; index++) {

            let arcX: number = Math.floor(Math.random() * 600);
            let arcY: number = Math.floor(Math.random() * 600);
            let radius: number = Math.floor(Math.random() * 15);
            let opacity: number = Math.floor(Math.random() * 99);

            drawCirclesOrange(arcX, arcY, radius, opacity);
        }
        function drawCirclesOrange(_arcX: number, _arcY: number, _radius: number, _opacity: number): void {
            crc2.beginPath();
            crc2.arc(_arcX, _arcY, _radius, 0, Math.PI * 2 , true); 
            crc2.moveTo(25, 25);
            crc2.fillStyle = "#87ceff" + _opacity ;
            crc2.fill();

        }

        for (let index: number = 0; index < 100; index++) {

            let arcX: number = Math.floor(Math.random() * 500);
            let arcY: number = Math.floor(Math.random() * 600);
            let radius: number = Math.floor(Math.random() * 15);
            let opacity: number = Math.floor(Math.random() * 99);

            drawCirclesRed(arcX, arcY, radius, opacity);

            let r: number = Math.floor(Math.random() * 255);
            let g: number = Math.floor(Math.random() * 255);
            let b: number = Math.floor(Math.random() * 255);

            drawBoxes(r, g, b);
        }


        function drawCirclesRed(_arcX: number, _arcY: number, _radius: number, _opacity: number): void {
            crc2.beginPath();
            crc2.arc(_arcX, _arcY, _radius, 0, Math.PI * 2 , true); 
            crc2.moveTo(25, 25);
            crc2.fillStyle = "#FF4500" + _opacity ;
            crc2.fill();
        }

        
        function drawBoxes (_r: number, _g: number, _b: number): void {
            crc2.beginPath();
            crc2.fillRect(150, 100, 40, 40);
            crc2.rotate((Math.PI / 180) * Math.random() * 360);
            crc2.fillRect(200, 100, 40, 40);
            crc2.rotate((Math.PI / 180) * Math.random() * 360);
            crc2.fillStyle = "rgba(" + _r + "," + _g + "," + _b + ",1)"; 
            crc2.fillRect(200, 150, 40, 40);
            crc2.rotate((Math.PI / 180) * Math.random() * 360);
            crc2.fillStyle = "rgba(" + _r + "," + _g + "," + _b + ",1)"; 
            crc2.fillRect(250, 150, 40, 40);
            crc2.rotate((Math.PI / 180) * Math.random() * 360);
            crc2.fillStyle = "rgba(" + _r + "," + _g + "," + _b + ",1)"; 
            crc2.fillRect(250, 200, 40, 40);
            crc2.fill();
            
        }
    }
}