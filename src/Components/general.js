import React from 'react';

export const WHITE_NOTES_NAMES = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"];
export const BLACK_NOTES_NAMES = ["cis3", "dis3", "none1", "fis3", "gis3", "ais3", "none2", "cis4", "dis4", "none3", "fis4", "gis4", "ais4", "none4", "cis5", "dis5", "none5", "fis5", "gis5", "ais5"];
export const noteNames = {white: WHITE_NOTES_NAMES, black: BLACK_NOTES_NAMES}
// export const WHITE_KEYS = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
// export const BLACK_KEYS = ["q", "w", "1", "e", "r", "t", "2", "y", "u", "3", "i", "o", "p", "4", "[", "]", "5", "7", "8", "9"]

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

export const handlePianoKey = (color, indx) => {

    console.log("zostałem dotknięty " + (indx + 1), color);

    const noteToPlay = noteNames[color][indx];
    const stringToFile = `../sound/${color}/${noteToPlay}.mp3`;
    console.log(stringToFile);

    let audio = new Audio(stringToFile);

    return audio.play()
}
