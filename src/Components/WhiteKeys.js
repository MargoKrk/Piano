import React from 'react';
import { playSound, NOTES} from "./general";

const WHITE_NOTES = NOTES.filter((key) => {
    return key.type === "white"
})

const WhiteKeys = ({ signature, volume, handleRecord }) => {

    return (
        <>
            {WHITE_NOTES.map((piano_key) => {
                return (
                    <div
                        className={`whiteKey ${piano_key.sound}`}
                         key={piano_key.sound}
                         onMouseDown={() => {
                             playSound(piano_key.sound, volume)
                             handleRecord(piano_key.sound, true)
                         }}>
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

