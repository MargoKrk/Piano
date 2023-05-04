import React from 'react';
import { NOTES, playSound, recordNote} from "./general";

const BLACK_NOTES = NOTES.filter((key) => {
    return key.type === "black"
})


const BlackKeys = ({signature, volume, isRecordActive}) => {


    return (
        <>
            {BLACK_NOTES.map((piano_key) => {
                    return (
                        <div
                            className={`blackKey ${piano_key.sound}`}
                            key={piano_key.key}
                            onMouseDown={() => {
                                playSound(piano_key.sound, volume)
                                if(isRecordActive)recordNote(piano_key.sound, true)
                            }}>
                            {signature === 'Keys' && piano_key.key}
                            {signature === 'null' && null}
                        </div>

                    )
                }
            )}
        </>
    )


}

export default BlackKeys