import React, { useState, useEffect } from 'react';
import { playSound, NOTES} from "./general";

const WHITE_NOTES = NOTES.filter((key) => {
    return key.type === "white"
})

const WhiteKeys = ({signature}) => {

    ///* zamiast white notes names będzie odesłanie do mainList z odniesienie do sound/key/type*/
    return (
        <>
            {WHITE_NOTES.map((piano_key) => {
                return (
                    <div className="whiteKey"
                         key={piano_key.sound}
                         onClick={() => playSound(piano_key.sound)}>
                        {/*{signature === 'C' && key}*/}
                    </div>
                )
            })}
        </>
    )

}

export default WhiteKeys

