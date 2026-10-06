let thumb1 = document.getElementById("thumb1")
let thumb2 = document.getElementById("thumb2")
let thumb3 = document.getElementById("thumb3")
let thumb4 = document.getElementById("thumb4")

let changingImage = (event) => {
    console.log(event.target)

    if(event.target == thumb1){
        bigImage.src = "images/bake1.jpg";
        bigImage.alt = "chocolate brownies";
    }
    if(event.target == thumb2){
        bigImage.src = "images/bake2.jpg";
        bigImage.alt = "chocolate chip cookies";
    }
    if(event.target == thumb3){
        bigImage.src = "images/bake3.jpg";
        bigImage.alt = "cinnamon rolls";
    }
    if(event.target == thumb4){
        bigImage.src = "images/bake4.jpg";
        bigImage.alt = "banana bread";
    }
}

thumb1.addEventListener("click", changingImage)
thumb2.addEventListener("click", changingImage)
thumb3.addEventListener("click", changingImage)
thumb4.addEventListener("click", changingImage)