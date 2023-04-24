import React, {useState, useEffect} from 'react';
import WhiteKeys from "./WhiteKeys"
import BlackKeys from "./BlackKeys"
import Navigation from "./Navigation"
import './PianoTable.css';
import { handlePianoKey } from "./general";


function PianoTable() {
    const [signature, setSignature] = useState([]);

    const selectSignature = (type) => {
        setSignature(type)
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
            <Navigation selectSignature={selectSignature}/>
            <div className="whiteKeysLayer">
                <WhiteKeys
                    signature={signature}
                />
            </div>
            <div className="blackKeysLayer">
                <BlackKeys
                    signature={signature}
                />
            </div>
        </div>
    );
}

export default PianoTable;
