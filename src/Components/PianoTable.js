import React, { useState, useEffect } from 'react';
import WhiteKeys from "./WhiteKeys"
import BlackKeys from "./BlackKeys"
import Navigation from "./Navigation"
import './PianoTable.css';
import {handlePianoKey, noteNames, WHITE_NOTES_NAMES } from "./general";


function PianoTable() {
const [signature, setSignature] = useState([]);

    const selectSignature = (type) => {
        if (type === 'C') {
            setSignature([...WHITE_NOTES_NAMES])
        }
        if(type === 'Keys') {
            setSignature(Object.keys(noteNames))
        }
        if(type === "null") {
            setSignature([])
        }
    }

    useEffect(() => {
        document.onkeydown = function handleKeydown(e) {
            console.log('key down');
            console.log(e); // addEventHandler
            handlePianoKey(e.key)
        }
    }, [])

  return (
      <div className="pianoTable">
          <Navigation selectSignature={selectSignature}/>
          <div className="whiteKeysLayer">
              <WhiteKeys
                  type={signature}
              />
          </div>
          <div className="blackKeysLayer">
              <BlackKeys/>
          </div>
      </div>
  );
}

export default PianoTable;
