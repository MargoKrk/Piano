import React, { useState, useEffect } from 'react';
import {handlePianoClick, handlePianoKey, playSound, WHITE_NOTES_NAMES} from "./general";

const WhiteKeys = ({signature}) => {

    ///* zamiast white notes names będzie odesłanie do mainList z odniesienie do sound/key/type*/
    return (
        <>
            {WHITE_NOTES_NAMES.map((key, indx) => {
            return (
                <div className="whiteKey"
                     key={key}
                onClick={() => playSound(key) }
                >
                    {/*{signature === 'C' && key}*/}
                </div>
            )}
            )}
        </>
    )

}

export default WhiteKeys