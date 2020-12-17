export default function Sketch(p, valu) {

    let r = 200;
    let g = 100;
    let b = 10;
    p.setup = () => {
        p.createCanvas(800, 800);
        p.background(0);
        r = Math.floor(p.random(0, 255));
        g = Math.floor(p.random(0, 255));
        b = Math.floor(p.random(0, 255));
    }

    p.draw = () => {


        p.fill(r, g, b)
        p.ellipse(p.mouseX, p.mouseY, valu, valu);
    }

    p.keyPressed = () => {
        p.background(Math.floor(p.random(0, 255)), Math.floor(p.random(0, 255)), Math.floor(p.random(0, 255)));
    }
};
