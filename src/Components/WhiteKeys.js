import React, { useState, useEffect } from 'react';
import {handleClick, WHITE_NOTES_NAMES, playSound, attachKeyDownHandler} from "./general";

const WhiteKeys = () => {


    return (
        <>
            {WHITE_NOTES_NAMES.map((key, indx) => {
            return (
                <div className="whiteKey"
                     key={key}
                onClick={() => handleClick("white", indx)}
                onClick={() => playSound("white", indx)}
                     onKeyDown={() => attachKeyDownHandler()}
                >
                    {key}</div>
            )}
            )}
        </>
    )

}

export default WhiteKeys