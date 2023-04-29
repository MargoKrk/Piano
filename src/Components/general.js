const PASSWORD = "0e8odfTcWoHB9E57"
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVramZsYWxseHliZWp5dXl3aWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4MDY4MjgsImV4cCI6MTk5ODM4MjgyOH0.HG3eUDigtVxH0-bCkumLRCA9OdhwKSn6ZtRxltceYK4"

export const NOTES = [
    {
        sound: "C3",
        key: "a",
        type: "white"
    },
    {
        sound: "cis3",
        key: "q",
        type: "black",
    },
    {
        sound: "D3",
        key: "s",
        type: "white",
    },
    {
        sound: "dis3",
        key: "w",
        type: "black",
    },
    {
        sound: "E3",
        key: "d",
        type: "white",
    },
    {
        sound: "none",
        key: "none1",
        type: "black"
    },
    {
        sound: "F3",
        key: "f",
        type: "white",
    },
    {
        sound: "fis3",
        key: "e",
        type: "black",
    },
    {
        sound: "G3",
        key: "g",
        type: "white",
    },
    {
        sound: "gis3",
        key: "r",
        type: "black",
    },
    {
        sound: "A3",
        key: "h",
        type: "white",
    },
    {
        sound: "ais3",
        key: "t",
        type: "black",
    },
    {
        sound: "B3",
        key: "j",
        type: "white",
    },
    {
        sound: "none",
        key: "none2",
        type: "black"
    },
    {
        sound: "C4",
        key: "k",
        type: "white",
    },
    {
        sound: "cis4",
        key: "y",
        type: "black",
    },
    {
        sound: "D4",
        key: "l",
        type: "white",
    },
    {
        sound: "dis4",
        key: "u",
        type: "black",
    },
    {
        sound: "E4",
        key: ";",
        type: "white",
    },
    {
        sound: "none",
        key: "none3",
        type: "black"
    },
    {
        sound: "F4",
        key: "'",
        type: "white",
    },
    {
        sound: "fis4",
        key: "i",
        type: "black",
    },
    {
        sound: "G4",
        key: "z",
        type: "white",
    },
    {
        sound: "gis4",
        key: "o",
        type: "black",
    },
    {
        sound: "A4",
        key: "x",
        type: "white",
    },
    {
        sound: "ais4",
        key: "p",
        type: "black",
    },
    {
        sound: "B4",
        key: "c",
        type: "white",
    },
    {
        sound: "none",
        key: "none4",
        type: "black"
    },
    {
        sound: "C5",
        key: "v",
        type: "white",
    },
    {
        sound: "cis5",
        key: "[",
        type: "black",
    },
    {
        sound: "D5",
        key: "b",
        type: "white",
    },
    {
        sound: "dis5",
        key: "]",
        type: "black",
    },
    {
        sound: "E5",
        key: "n",
        type: "white",
    },
    {
        sound: "none",
        key: "none5",
        type: "black"
    },
    {
        sound: "F5",
        key: "m",
        type: "white",
    },
    {
        sound: "fis5",
        key: "7",
        type: "black",
    },
    {
        sound: "G5",
        key: ",",
        type: "white",
    },
    {
        sound: "gis5",
        key: "8",
        type: "black",
    },
    {
        sound: "A5",
        key: ".",
        type: "white",
    },
    {
        sound: "ais5",
        key: "9",
        type: "black",
    },
    {
        sound: "B5",
        key: "/",
        type: "white",
    },

]


export const mapWhiteKeysToNote = {
    'a': 'C3',
    's': 'D3',
    'd': 'E3',
    'f': 'F3',
    'g': 'G3',
    'h': 'A3',
    'j': 'B3',

    'k': 'C4',
    'l': 'D4',
    ';': 'E4',
    "'": 'F4',
    'z': 'G4',
    'x': 'A4',
    'c': 'B4',

    'v': 'C5',
    'b': 'D5',
    'n': 'E5',
    'm': 'F5',
    ',': 'G5',
    '.': 'A5',
    '/': 'B5',
}

export const mapBlackKeysToNote = {
    'q': 'cis3',
    'w': 'dis3',
    'none1': '1',
    'e': 'fis3',
    'r': 'gis3',
    't': 'ais3',
    'none2': '2',

    'y': 'cis4',
    'u': 'dis4',
    'none3': '3',
    'i': 'fis4',
    'o': 'gis4',
    'p': 'ais4',
    'none4': '4',

    '[': 'cis5',
    ']': 'dis5',
    'none5': '5',
    '7': 'fis5',
    '8': 'gis5',
    '9': 'ais5'
}


export const noteNames = {...mapWhiteKeysToNote, ...mapBlackKeysToNote};
// const stringToFile = `../sound/C3.mp3`;
// let audio = new Audio(stringToFile);


export const playSound = (sound, volume) => {

    const stringToFile = `../sound/${sound}.mp3`;
    console.log(stringToFile);

    let audio = new Audio(stringToFile);
    audio.volume = volume
    return audio.play()
}

export const handlePianoKey = (indx, volume) => {

    console.log("zostałem dotknięty " + (indx));

    const noteToPlay = noteNames[indx];
    playSound(noteToPlay, volume)
}

export const handleRecord = () => {
    console.log("Naciśnięte nagrywanie")
}
