import React from 'react';

export const BLACK_NOTES_NAMES = ["C_3", "D_3", "none1", "F_3", "G_3", "A_3", "none2", "C_4", "D_4", "none3", "F_4", "G_4", "A_4", "none4", "C_5", "D_5", "none5", "F_5", "G_5", "A_5"];
export const WHITE_NOTES_NAMES = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"];
export const noteNames = {white: WHITE_NOTES_NAMES, black: BLACK_NOTES_NAMES}
export const WHITE_KEYS = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
export const BLACK_KEYS = ["q", "w", "1", "e", "r", "t", "2", "y", "u", "3", "i", "o", "p", "4", "[", "]", "5", "7", "8", "9"]

export const handleClick = (color, i) => {
    console.log("zostałem dotknięty " + (i + 1), color);
}

export const playSound = (color, indx) => {

    const noteToPlay = noteNames[color][indx];
    const stringToFile = `../sound/${color}/${noteToPlay}.mp3`;
    console.log(stringToFile);

    let audio = new Audio(stringToFile);

    return audio.play()
}

export const attachKeyDownHandler = () => {
    document.onkeydown = function handleKeydown(e) {
        console.log('key down');
        console.log(e);
    };
}

export const getWhiteKeys = () => {
    return WHITE_KEYS
}

export const getBlackKeys = () => {
    return BLACK_KEYS
}
