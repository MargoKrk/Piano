import React, { useState, useEffect } from 'react';

const BLACK_NOTES_NAMES = ["C_3", "D_3", "none1", "F_3", "G_3", "A_3", "none2", "C_4", "D_4", "none3", "F_4", "G_4", "A_4", "none4", "C_5", "D_5", "none5", "F_5", "G_5", "A_5"];


const BlackKeys = () => {

    const handleClick = (color, i) => {
        console.log("zostałem dotknięty " + (i + 1), color)
    }


    return (
        <>
            {BLACK_NOTES_NAMES.map((key, indx) => {
                return (
                    <div
                        className="blackKey"
                        key={indx}
                        onClick={() => handleClick("black", indx)}></div>
                )}
            )}
        </>
    )


}

export default BlackKeys