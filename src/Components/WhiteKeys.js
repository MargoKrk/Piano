import React from 'react';
import { playSound, NOTES} from "./general";

const WHITE_NOTES = NOTES.filter((key) => {
    return key.type === "white"
})

const WhiteKeys = ({signature, volume}) => {

    return (
        <>
            {WHITE_NOTES.map((piano_key) => {
                return (
                    <div className="whiteKey"
                         key={piano_key.sound}
                         onClick={() => playSound(piano_key.sound, volume)}>
                        {signature === 'C' && piano_key.sound}
                        {signature === 'Keys' && piano_key.key}
                        {signature === 'null' && null}
                    </div>
                )
            })}
        </>
    )

}

export default WhiteKeys

