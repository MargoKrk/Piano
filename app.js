function addPianoKey() {

    const newDiv = document.createElement("div");
    newDiv.classList.add("key");
    const pianoTableElement = document.querySelector(".pianoTable"); //robimy sobie odnośnik do pianoTable
    pianoTableElement.appendChild(newDiv); //dodanie elementu do pianoTable

    console.log("ass");
}



addPianoKey()
addPianoKey()
addPianoKey()
addPianoKey()

