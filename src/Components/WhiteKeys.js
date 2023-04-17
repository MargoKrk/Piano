import React, { useState, useEffect } from 'react';

const WHITE_NOTES_NAMES = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"];

const WhiteKeys = () => {


    const handleClick = (color, i) => {
        console.log("zostałem dotknięty " + (i + 1), color)
    }

    return (
        <>
            {WHITE_NOTES_NAMES.map((key, indx) => {
            return (
                <div className="whiteKey"
                     key={indx}
                onClick={() => handleClick("white", indx)}>
                    {key}</div>
            )}
            )}
        </>
    )

}

export default WhiteKeys