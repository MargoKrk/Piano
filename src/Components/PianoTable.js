import React, { useState, useEffect } from 'react';
import WhiteKeys from "./WhiteKeys"
import BlackKeys from "./BlackKeys"
import './PianoTable.css';
import {handlePianoKey } from "./general";


function PianoTable() {


    useEffect(() => {
        document.onkeydown = function handleKeydown(e) {
            console.log('key down');
            console.log(e);
            handlePianoKey()
        }
    }, [])

  return (
      <div className="pianoTable">
          <div className="whiteKeysLayer">
              <WhiteKeys/>
          </div>
          <div className="blackKeysLayer">
              <BlackKeys/>
          </div>
      </div>
  );
}

export default PianoTable;
