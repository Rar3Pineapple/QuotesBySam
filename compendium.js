initialise();

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
        callmeister.style.fontSize = "5vw";
        callmeister.style.color = "#6bab57";
        callmeister.style.cursor = "grab"
        target.style.fontSize = "2vw";
        target.style.opacity = 0.7;
    } else {
        callmeister.style.fontSize = "3vw";
        callmeister.style.color = "#000";
        callmeister.style.cursor = "pointer"
        target.style.fontSize = "3vw";
        target.style.opacity = 1;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function create_page() {
    // ensure the full link is placed eventually; this may not work.
    fetch("./quotations.json")
        .then((response) => response.json())
        .then((json) => { 
            const quotations = JSON.parse(JSON.stringify(json))
            for (const key in quotations.quotations) {
                create(quotations.quotations[key], key)
            }
        })
}

function create(iteration, key) {
    setTimeout(function() {
        // create list element
        const new_list_element = document.createElement("li")
        new_list_element.classList.add("list_element")
        document.getElementById("main_body").appendChild(new_list_element)

        // create quotation
        const quote = document.createElement("span")
        new_list_element.appendChild(quote)
        quote.textContent = iteration.quote;
        quote.classList.add("quote")
        // console.log(iteration.quote);

        // create reference
        const reference = document.createElement("span")
        new_list_element.appendChild(reference)
        reference.textContent = iteration.reference;
        reference.classList.add("reference")

        }, 500 * key);
}

function initialise(){
    // buttons for transitions
    let first_button =document.getElementById("first_button"); 
    let second_button = document.getElementById("second_button");

    // Parse list of quotations
    create_page()
}