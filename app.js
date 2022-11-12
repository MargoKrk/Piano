function addPianoKey() {

    const newDiv = document.createElement("div");
    newDiv.classList.add("key");
    const whiteKeysLayerElement = document.querySelector(".whiteKeysLayer"); //robimy sobie odnośnik do pianoTable
    whiteKeysLayerElement.appendChild(newDiv); //dodanie elementu do pianoTable

}

function allWhiteKeys() {
    let i = 0;
    const numberOfKeys = 19
    while (i < numberOfKeys) {
        addPianoKey();
        i++;
    }
}

allWhiteKeys()

function addBlackKey () {

    const blackDiv = document.createElement("div");
    blackDiv.classList.add("blackKey");
    const blackKeysLayerElement = document.querySelector(".blackKeysLayer"); //robimy sobie odnośnik do pianoTable
    blackKeysLayerElement.appendChild(blackDiv);
}

function allBlackKeys() {
    let j = 0;
    const numberOfKeys = 18
    while (j < numberOfKeys) {
        addBlackKey();
        j++;
    }
}

allBlackKeys()

