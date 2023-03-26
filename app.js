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

allWhiteKeys(21)
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

    // let audio = new Audio("./sound/white/1.C3.mp3");

    let audio = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");

        return audio.play()
}


