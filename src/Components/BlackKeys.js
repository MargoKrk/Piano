import React, { useState, useEffect } from 'react';
import {handlePianoKey, BLACK_NOTES_NAMES } from "./general";


const BlackKeys = () => {


    return (
        <>
            {BLACK_NOTES_NAMES.map((key, indx) => {
                return (
                    <div
                        className="blackKey"
                        key={key}
                        onClick={() => handlePianoKey("black", indx)}
                        ></div>
                )}
            )}
        </>
    )


}

export default BlackKeys