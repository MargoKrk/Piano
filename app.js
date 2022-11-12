function addPianoKey() {

    const newDiv = document.createElement("div");
    newDiv.classList.add("key");
    const pianoTableElement = document.querySelector(".pianoTable"); //robimy sobie odnośnik do pianoTable
    pianoTableElement.appendChild(newDiv); //dodanie elementu do pianoTable

}

let i=0;
const numberOfKeys=4
while (i<numberOfKeys) {
    addPianoKey();
    i++;
}


function addBlackKey () {

    const blackDiv = document.createElement("div");
    blackDiv.classList.add("blackKey");
    const pianoTableElement = document.querySelector(".pianoTable"); //robimy sobie odnośnik do pianoTable
    pianoTableElement.appendChild(blackDiv);
}

addBlackKey()

console.log(addBlackKey)

