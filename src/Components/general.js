import C3 from "../sound/C3.mp3";
import cis3 from "../sound/cis3.mp3";
import D3 from "../sound/D3.mp3";
import dis3 from "../sound/dis3.mp3";
import E3 from "../sound/E3.mp3";
import F3 from "../sound/F3.mp3";
import fis3 from "../sound/fis3.mp3";
import G3 from "../sound/G3.mp3";
import gis3 from "../sound/gis3.mp3";
import A3 from "../sound/A3.mp3";
import ais3 from "../sound/ais3.mp3";
import B3 from "../sound/B3.mp3";
import C4 from "../sound/C4.mp3";
import cis4 from "../sound/cis4.mp3";
import D4 from "../sound/D4.mp3";
import dis4 from "../sound/dis4.mp3";
import E4 from "../sound/E4.mp3";
import F4 from "../sound/F4.mp3";
import fis4 from "../sound/fis4.mp3";
import G4 from "../sound/G4.mp3";
import gis4 from "../sound/gis4.mp3";
import A4 from "../sound/A4.mp3";
import ais4 from "../sound/ais4.mp3";
import B4 from "../sound/B4.mp3";
import C5 from "../sound/C5.mp3";
import cis5 from "../sound/cis5.mp3";
import D5 from "../sound/D5.mp3";
import dis5 from "../sound/dis5.mp3";
import E5 from "../sound/E5.mp3";
import F5 from "../sound/F5.mp3";
import fis5 from "../sound/fis5.mp3";
import G5 from "../sound/G5.mp3";
import gis5 from "../sound/gis5.mp3";
import A5 from "../sound/A5.mp3";
import ais5 from "../sound/ais5.mp3";
import B5 from "../sound/B5.mp3";

export const NOTES = [
  {
    sound: C3,
    name: "C3",
    key: "a",
    type: "white",
  },
  {
    sound: cis3,
    name: "cis3",
    key: "q",
    type: "black",
  },
  {
    sound: D3,
    name: "D3",
    key: "s",
    type: "white",
  },
  {
    sound: dis3,
    name: "dis3",
    key: "w",
    type: "black",
  },
  {
    sound: E3,
    name: "E3",
    key: "d",
    type: "white",
  },
  {
    sound: "none",
    key: "none1",
    type: "black",
  },
  {
    sound: F3,
    name: "F3",
    key: "f",
    type: "white",
  },
  {
    sound: fis3,
    name: "fis3",
    key: "e",
    type: "black",
  },
  {
    sound: G3,
    name: "G3",
    key: "g",
    type: "white",
  },
  {
    sound: gis3,
    name: "gis3",
    key: "r",
    type: "black",
  },
  {
    sound: A3,
    name: "A3",
    key: "h",
    type: "white",
  },
  {
    sound: ais3,
    name: "ais3",
    key: "t",
    type: "black",
  },
  {
    sound: B3,
    name: "B3",
    key: "j",
    type: "white",
  },
  {
    sound: "none",
    key: "none2",
    type: "black",
  },
  {
    sound: C4,
    name: "C4",
    key: "k",
    type: "white",
  },
  {
    sound: cis4,
    name: "cis4",
    key: "y",
    type: "black",
  },
  {
    sound: D4,
    name: "D4",
    key: "l",
    type: "white",
  },
  {
    sound: dis4,
    name: "dis4",
    key: "u",
    type: "black",
  },
  {
    sound: E4,
    name: "E4",
    key: ";",
    type: "white",
  },
  {
    sound: "none",
    key: "none3",
    type: "black",
  },
  {
    sound: F4,
    name: "F4",
    key: "'",
    type: "white",
  },
  {
    sound: fis4,
    name: "fis4",
    key: "i",
    type: "black",
  },
  {
    sound: G4,
    name: "G4",
    key: "z",
    type: "white",
  },
  {
    sound: gis4,
    name: "gis4",
    key: "o",
    type: "black",
  },
  {
    sound: A4,
    name: "A4",
    key: "x",
    type: "white",
  },
  {
    sound: ais4,
    name: "ais4",
    key: "p",
    type: "black",
  },
  {
    sound: B4,
    name: "B4",
    key: "c",
    type: "white",
  },
  {
    sound: "none",
    key: "none4",
    type: "black",
  },
  {
    sound: C5,
    name: "C5",
    key: "v",
    type: "white",
  },
  {
    sound: cis5,
    name: "cis5",
    key: "[",
    type: "black",
  },
  {
    sound: D5,
    name: "D5",
    key: "b",
    type: "white",
  },
  {
    sound: dis5,
    name: "dis5",
    key: "]",
    type: "black",
  },
  {
    sound: E5,
    name: "E5",
    key: "n",
    type: "white",
  },
  {
    sound: "none",
    key: "none5",
    type: "black",
  },
  {
    sound: F5,
    name: "F5",
    key: "m",
    type: "white",
  },
  {
    sound: fis5,
    name: "fis5",
    key: "7",
    type: "black",
  },
  {
    sound: G5,
    name: "G5",
    key: ",",
    type: "white",
  },
  {
    sound: gis5,
    name: "gis5",
    key: "8",
    type: "black",
  },
  {
    sound: A5,
    name: "A5",
    key: ".",
    type: "white",
  },
  {
    sound: ais5,
    name: "ais5",
    key: "9",
    type: "black",
  },
  {
    sound: B5,
    name: "B5",
    key: "/",
    type: "white",
  },
];

const ALL_KEYBOARD_KEYS = NOTES.map((note) => note.key);
const ALL_SOUND = NOTES.map((note) => note.name);

export const playSound = (name, volume) => {
  const stringToFile = `${name}`;
  console.log(stringToFile);

  let audio = new Audio(stringToFile);
  audio.volume = volume / 100;
  return audio.play();
};

export const handlePianoKey = (indx, volume) => {
  console.log("zostałem dotknięty " + indx);

  if (ALL_KEYBOARD_KEYS.includes(indx)) {
    const objectToPlay = NOTES.filter((key) => {
      return key.key === indx;
    });

    const noteToPlay = objectToPlay[0].sound;

    playSound(noteToPlay, volume);
  }
};
