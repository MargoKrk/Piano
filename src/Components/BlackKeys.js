import React, { useState, useEffect } from 'react';
import {handlePianoKey, BLACK_NOTES_NAMES } from "./general";


const BlackKeys = () => {


    return (
        <>
            {BLACK_NOTES_NAMES.map((key, indx) => {
                console.log(key)
                return (
                    <div
                        className="blackKey"
                        key={key}
                        onClick={() => handlePianoKey(key)}
                        ></div>

                )}
            )}
        </>
    )


}

export default BlackKeys