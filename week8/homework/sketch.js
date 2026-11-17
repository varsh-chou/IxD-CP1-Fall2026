let numCols = 16;
let numRows = 12;

function setup() {
    createCanvas(800, 600)

    colorMode(HSB, TWO_PI, 1, 1, 1)
}

function draw() {
    background(3.8, 0.8, 0.2); // dark blue

    noStroke()

    //for each column
    for(let i = 0; i < numCols; i++){
        //for each row
        for(let j = 0; j < numRows; j++){
            let wave = sin(millis()*0.002 + j*0.5 - abs(i - 7.5)*0.5) // starts in the middle (7.5) so both sides match

            fill(3.1 + j*0.08, 0.7, 1 - j*0.05) // each row is bluer and darker, like deeper water

            push()
            translate(i*50 + 25, j*50 + 25 + wave*15) // wave moves each circle up and down
            circle(0, 0, 30)
            pop()
        }
    }
}