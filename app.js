function addPianoKey(i) {

    const newDiv = document.createElement("div");//tu się tworzy div
    newDiv.classList.add("whiteKey");//nadanie klasy
    newDiv.classList.add("key_number_" + i);//nadanie klasy z numerem

    newDiv.addEventListener("click",  (e) => {
        handleClick("white", i, e);
        console.log(e.target.id)
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
    blackDiv.addEventListener("click",  (e) => {
        handleClick("black", i, e);
        console.log(e.target.id)
    });

    const blackKeysLayerElement = document.querySelector(".blackKeysLayer"); //robimy sobie odnośnik do pianoTable
    blackKeysLayerElement.appendChild(blackDiv);
}


function handleClick(color, i) {

    playSound(color, i)
    console.log("zostałem dotknięty " + (i + 1), color)
}

function playSound (color, i) {

    const noteToPlay = noteNames[color][i];
    const stringToFile = `./sound/${color}/${noteToPlay}.mp3`;
    console.log(stringToFile);

    let audio = new Audio(stringToFile);

        return audio.play()
}

const whiteNoteNames = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"];
const blackNoteNames = ["C_3", "D_3", "none1", "F_3", "G_3", "A_3", "none2", "C_4", "D_4", "none3", "F_4", "G_4", "A_4", "none4", "C_5", "D_5", "none5", "F_5", "G_5", "A_5"];
const noteNames = {white: whiteNoteNames, black: blackNoteNames}

function addNoteNameToWhiteKeys() {

    const allWhiteKeys = document.querySelectorAll(".whiteKey");

    allWhiteKeys.forEach((whiteKey, i) => {

        whiteKey.innerHTML = whiteNoteNames[i];
        whiteKey.id = whiteNoteNames[i];
    })
}

function addNoteNameToBlackKeys() {

    const allBlackKeys = document.querySelectorAll(".blackKey");

    allBlackKeys.forEach((blackKey, i) => {

        blackKey.innerHTML = blackNoteNames[i];
        blackKey.classList.add(blackNoteNames[i])
    })
}


addNoteNameToWhiteKeys();
addNoteNameToBlackKeys();


