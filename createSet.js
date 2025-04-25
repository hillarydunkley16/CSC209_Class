function onSubmit(event){
    event.preventDefault(); 
    var inputNum = document.getElementById("numCards"); 
    numCards = inputNum.value;
    console.log(numCards); 
    generateCards(numCards);
    return numCards;
}


function generateCards(numCards) {
    let cardContainer = document.getElementById("cardContainer");

    for (let i = 0; i < numCards; i++) {
        let flashCard = document.createElement("div");

        let sideALabel = document.createElement("label");
        sideALabel.htmlFor = `term_${i}`;
        sideALabel.innerHTML = `Term ${i + 1}`;

        let sideAInput = document.createElement("input");
        sideAInput.type = "text";
        sideAInput.placeholder = "term";
        sideAInput.name = `flashCards[${i}][term]`;
        sideAInput.id = `term_${i}`;

        let sideBLabel = document.createElement("label");
        sideBLabel.htmlFor = `definition_${i}`;
        sideBLabel.innerHTML = `Definition ${i + 1}`;

        let sideBInput = document.createElement("input");
        sideBInput.type = "text";
        sideBInput.placeholder = "definition";
        sideBInput.name = `flashCards[${i}][definition]`;
        sideBInput.id = `definition_${i}`;

        flashCard.appendChild(sideALabel);
        flashCard.appendChild(sideAInput);
        flashCard.appendChild(sideBLabel);
        flashCard.appendChild(sideBInput);

        cardContainer.appendChild(flashCard);
    }

    if (!document.getElementById("cardContainerButton")) {
        let button = document.createElement("button");
        button.id = "cardContainerButton";
        button.type = "submit";
        button.innerHTML = "Submit";
        cardContainer.appendChild(button);
    }
}


function onSetSubmit(event){
    // event.preventDefault(); 
    console.log("set Submit function!")
}