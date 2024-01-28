function transition(site) {
    document.body.style.animation = "fadeOut 1s ease-in 1"
    document.body.addEventListener("animationend", () => {
        window.location.replace(site);
    })
}

function generate_quote() {
    fetch("./quotations.json")
    .then((response) => response.json())
    .then((json) => { 
        const quotations = JSON.parse(JSON.stringify(json))
        const random_number = Math.floor(Math.random() * Object.keys(quotations.quotations).length)
        create_quote(quotations.quotations[random_number])
    })
}

function create_quote(key) {
    document.getElementsByClassName('quote')[0].remove()
    document.getElementsByClassName('reference')[0].remove()

    const quote = document.createElement("span")
    quote.classList.add("quote")
    const reference = document.createElement("span")
    reference.classList.add('reference')

    document.getElementById("main").appendChild(quote)
    document.getElementById("main").appendChild(reference)

    quote.textContent = key.quote
    reference.textContent = key.reference
}

function hover_effect(state, caller) {
    let target =  caller == 1 ? first_button : second_button;
    let callmeister = caller == 1 ? second_button : first_button;
    if (state == true) {
        callmeister.style.fontSize = "3vw";
        callmeister.style.color = "#6bab57";
        callmeister.style.cursor = "grab"
        target.style.fontSize = "1vw";
        target.style.opacity = 0.7;
    } else {
        callmeister.style.fontSize = "2vw";
        callmeister.style.color = "#000";
        callmeister.style.cursor = "pointer"
        target.style.fontSize = "2vw";
        target.style.opacity = 1;
    }
}


generate_quote()