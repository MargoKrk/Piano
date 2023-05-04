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

const ALL_KEYBOARD_KEYS = NOTES.map((note) =>  note.key)
const ALL_SOUND = NOTES.map((note) => note.sound)

export const playSound = (sound, volume) => {

    const stringToFile = `../sound/${sound}.mp3`;
    console.log(stringToFile);

    let audio = new Audio(stringToFile);
    audio.volume = volume / 100;
    return audio.play()

}

export const handlePianoKey = (indx, volume) => {

    console.log("zostałem dotknięty " + (indx));

    if (ALL_KEYBOARD_KEYS.includes(indx)) {
        const objectToPlay = NOTES.filter((key) => {
                return key.key === indx
            }
        )

        const noteToPlay = objectToPlay[0].sound

        playSound(noteToPlay, volume)
    }
}

let recordingStartTime
let recordNoteTime
export let songNotesList = [];

export const startRecording = (note) => {
    recordingStartTime = Date.now();
    console.log("zaczynam nagrywać")
    recordNote(note)
}

export const recordNote = (note) => {

    recordNoteTime = Date.now()

    songNotesList.push(
        {
            key: note,
            startTime: (recordNoteTime - recordingStartTime)
        }
    )

    console.log("zapisuję nutkę")
}

export const stopRecording = () => {
    playSong()
    console.log("skończono nagrywać")
}

export const playSong = () => {
    console.log(songNotesList)
}

