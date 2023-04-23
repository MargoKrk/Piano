import React, { useState, useEffect } from 'react';
import {handlePianoKey, NOTES} from "./general";

const BLACK_NOTES = NOTES.filter((key) => {
    return key.type === "black"
})


const BlackKeys = () => {


    return (
        <>
            {BLACK_NOTES.map((piano_key) => {
                return (
                    <div
                        className="blackKey"
                        key={piano_key.key}
                        onClick={() => {handlePianoKey(piano_key.key)}
                    }
                        ></div>

                )}
            )}
        </>
    )


}

export default BlackKeys