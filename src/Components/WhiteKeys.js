import React from "react";
import { playSound, NOTES } from "./general";

const WHITE_NOTES = NOTES.filter((key) => {
  return key.type === "white";
});

const WhiteKeys = ({ signature, volume, isRecordActive, recordNote }) => {
  return (
    <>
      {WHITE_NOTES.map((piano_key) => {
        return (
          <div
            className={`whiteKey ${piano_key.name}`}
            key={piano_key.name}
            onMouseDown={() => {
              playSound(piano_key.sound, volume);
              if (isRecordActive) recordNote(piano_key.name);
            }}
          >
            {signature === "C" && piano_key.name}
            {signature === "Keys" && piano_key.key}
            {signature === "null" && null}
          </div>
        );
      })}
    </>
  );
};

export default WhiteKeys;
