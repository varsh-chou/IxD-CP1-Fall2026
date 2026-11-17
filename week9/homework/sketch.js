let planetColor
let starX = -50       // shooting star starts off screen
let starY = 100

function setup() {
    createCanvas(800, 600)
    colorMode(HSB, TWO_PI, 1, 1, 1)

    planetColor = color(3.8, 0.8, 0.9)   // start with blue

    setInterval(newPlanetColor, 2000)    // new planet color every 2 seconds
    setInterval(launchStar, 3000)        // new shooting star every 3 seconds
}

function draw() {
    background(0)
    noStroke()

    // sun
    fill(0.7, 0.9, 1)   // orange
    circle(400, 300, 100)

    // planet goes around the sun
    let planetX = 400 + cos(millis() * 0.001) * 200
    let planetY = 300 + sin(millis() * 0.001) * 200
    fill(planetColor)
    circle(planetX, planetY, 40)

    // moon goes around the planet, 4 times faster
    let moonX = planetX + cos(millis() * 0.004) * 40
    let moonY = planetY + sin(millis() * 0.004) * 40
    fill(0, 0, 0.8)     // gray
    circle(moonX, moonY, 12)

    // shooting star moves to the right
    starX += 10
    fill(0, 0, 1)       // white
    circle(starX, starY, 10)
}

// pick a random color for the planet
function newPlanetColor() {
    planetColor = color(random(TWO_PI), 0.8, 0.9)
}

// send the shooting star back to the left at a random height
function launchStar() {
    starX = -50
    starY = random(50, 550)
}