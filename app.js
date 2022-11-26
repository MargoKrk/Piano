function addPianoKey() {

    const newDiv = document.createElement("div");
    newDiv.classList.add("key");
    const whiteKeysLayerElement = document.querySelector(".whiteKeysLayer"); //robimy sobie odnośnik do pianoTable
    whiteKeysLayerElement.appendChild(newDiv); //dodanie elementu do pianoTable

}

function allWhiteKeys(numberOfKeys) {
    let i = 0;
    while (i < numberOfKeys) {
        addPianoKey();
        i++;
    }
}

function allBlackKeys(numberOfKeys) {
    let i = 0;
    while (i < numberOfKeys) {
        addBlackKey();
        i++;
    }
}

allWhiteKeys(21)
allBlackKeys(21)

function addBlackKey () {

    const blackDiv = document.createElement("div");
    blackDiv.classList.add("blackKey");
    const blackKeysLayerElement = document.querySelector(".blackKeysLayer"); //robimy sobie odnośnik do pianoTable
    blackKeysLayerElement.appendChild(blackDiv);
}


