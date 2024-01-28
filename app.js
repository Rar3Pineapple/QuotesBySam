function initialise(){let first_button =document.getElementById("first_button"); let second_button = document.getElementById("second_button");}

function transition(site) {
    document.body.style.animation = "fadeOut 1s ease-in 1"
    document.body.addEventListener("animationend", () => {
        window.location.replace(site);
    })
}

function hover_effect(state, caller) {
    let target =  caller == 1 ? first_button : second_button;
    let callmeister = caller == 1 ? second_button : first_button;
    if (state == true) {
        callmeister.style.fontSize = "4vw";
        callmeister.style.color = "#6bab57";
        callmeister.style.cursor = "grab"
        target.style.fontSize = "2.5vw";
        target.style.opacity = 0.7;
    } else {
        callmeister.style.fontSize = "3vw";
        callmeister.style.color = "#000";
        callmeister.style.cursor = "pointer"
        target.style.fontSize = "3vw";
        target.style.opacity = 1;
    }
}