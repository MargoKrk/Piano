import React from 'react';
import WhiteKeys from "./WhiteKeys"
import BlackKeys from "./BlackKeys"
import './PianoTable.css';

function PianoTable() {


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
