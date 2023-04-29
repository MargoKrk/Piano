import React, {useState, useEffect} from 'react';
import WhiteKeys from "./WhiteKeys"
import BlackKeys from "./BlackKeys"
import Navigation from "./Navigation"
import './PianoTable.css';
import { handlePianoKey } from "./general";


function PianoTable() {
    const [signature, setSignature] = useState([]);
    const [volume, setVolume] = useState(50);

    const selectSignature = (type) => {
        setSignature(type)
    }

    const handleVolume = (e) => {

        let currentVolume = e.target.value
        setVolume(currentVolume)
        console.log(`zmieniam głośność ${currentVolume}`)
    }

    useEffect(() => {
        document.onkeydown = function handleKeydown(e) {
            console.log('key down');
            console.log(e); // addEventHandler?
            handlePianoKey(e.key)
        }
    }, [])

    return (
         <div className="pianoTable">
            <Navigation selectSignature={selectSignature}
            handleVolume={handleVolume}/>
            <div className="whiteKeysLayer">
                <WhiteKeys
                    signature={signature}
                    volume={volume}
                />
            </div>
            <div className="blackKeysLayer">
                <BlackKeys
                    signature={signature}
                    volume={volume}
                />
            </div>
        </div>
    );
}

export default PianoTable;
