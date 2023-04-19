import React, { useState, useEffect } from 'react';
import {handleClick, BLACK_NOTES_NAMES, playSound, attachKeyDownHandler} from "./general";


const BlackKeys = () => {


    return (
        <>
            {BLACK_NOTES_NAMES.map((key, indx) => {
                return (
                    <div
                        className="blackKey"
                        key={key}
                        onClick={() => handleClick("black", indx)}
                        onClick={() => playSound("black", indx)}
                    onKeyDown={() => attachKeyDownHandler()}
                        ></div>
                )}
            )}
        </>
    )


}

export default BlackKeys