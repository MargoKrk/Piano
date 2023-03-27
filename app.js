function addPianoKey(i) {

    const newDiv = document.createElement("div");//tu się tworzy div
    newDiv.classList.add("whiteKey");//nadanie klasy
    newDiv.classList.add("key_number_" + i);//nadanie klasy z numerem

    newDiv.addEventListener("click", function () {
        handleClick("white", i);
        addSound()
    }); // nadanie funkcji po kliknięciu przycisku, robimy to w funkcji aby móc nadać argumenty
    const whiteKeysLayerElement = document.querySelector(".whiteKeysLayer"); //robimy sobie odnośnik do pianoTable
    whiteKeysLayerElement.appendChild(newDiv); //dodanie elementu do pianoTable
}

function allWhiteKeys(numberOfKeys) {
    let i = 0;
    while (i < numberOfKeys) {
        addPianoKey(i);
        i++;
    }
}

function allBlackKeys(numberOfKeys) {
    let i = 0;
    while (i < numberOfKeys) {
        addBlackKey(i);
        i++;
    }
}

allWhiteKeys(21);
allBlackKeys(21)

function addBlackKey(i) {

    const blackDiv = document.createElement("div");
    blackDiv.classList.add("blackKey");
    blackDiv.addEventListener("click", function () {
        handleClick("black", i);
        addSound()
    });

    const blackKeysLayerElement = document.querySelector(".blackKeysLayer"); //robimy sobie odnośnik do pianoTable
    blackKeysLayerElement.appendChild(blackDiv);
}


function handleClick(color, i) {

    console.log("zostałem dotknięty " + (i + 1), color)
}

function addSound () {

    let audio = new Audio("./sound/white/1. C3.mp3");

        return audio.play()
}

function addNoteNameToWhiteKeys() {

    const noteNames = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"];
    const allWhiteKeys = document.querySelectorAll(".whiteKey");

    allWhiteKeys.forEach((whiteKey, i) => {

        whiteKey.innerHTML = noteNames[i];
        whiteKey.classList.add(noteNames[i])
    })
}

function addNoteNameToBlackKeys() {

    const noteNames = ["C#3", "D#3", "", "F#3", "G#3", "A#3", " ", "C#4", "D#4", " ", "F#4", "G#4", "A#4", " ", "C#5", "D#5", " ", "F#5", "G#5", "A#5", " ",];
    const allBlackKeys = document.querySelectorAll(".blackKey");

    allBlackKeys.forEach((blackKey, i) => {

        blackKey.innerHTML = noteNames[i];
        blackKey.classList.add(noteNames[i])
    })
}


addNoteNameToWhiteKeys();
addNoteNameToBlackKeys();


