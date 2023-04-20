import React, { useState, useEffect } from 'react';
import {handlePianoKey, WHITE_NOTES_NAMES } from "./general";

const WhiteKeys = () => {


    return (
        <>
            {WHITE_NOTES_NAMES.map((key, indx) => {
            return (
                <div className="whiteKey"
                     key={key}
                onClick={() => handlePianoKey("white", indx)}
                >
                    {key}</div>
            )}
            )}
        </>
    )

}

export default WhiteKeys