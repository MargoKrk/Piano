import React, {useState} from "react";
import './Navigation.css';
import {Slider} from "@mui/material";
import { startRecording, stopRecording } from "./general"


const Navigation = ({selectSignature, handleVolume, songs}) => {
    const [isActive, setIsActive] = useState(false)

    const classRecordToggle = () => {
        setIsActive(!isActive)
    }

    const handleRecord = () => {
        if (!isActive === true) {
            startRecording()
        } else {
            stopRecording()
        }
    }


    return (
        <>
            <div className="navigation">
                <div className="songs-list">
                    {songs.map(song => (
                        <li key={song.title}>{song.title} <button className={`button button-play`}></button></li>
                    ))}
                </div>
                <div className="signatures-toggle">
                    <span>Signatures</span>
                    <button className="signature-button signature-button-C"
                            onClick={() => {
                                selectSignature('C')
                                console.log("zmieniam sygn na C")
                            }}
                    >C
                    </button>
                    <button className="signature-button signature-button-keys"
                            onClick={() => {
                                selectSignature('Keys')
                                console.log("zmieniam sygn na keys")
                            }}
                    >Keys
                    </button>
                    <button
                        className="signature-button signature-button-none"
                        onClick={() => {
                            selectSignature('null')
                            console.log("usuwam sygn")
                        }}
                    ></button>
                </div>
                <div className="volume-change">
                    <span>Volume</span>
                    <Slider className="volumeSlider"
                            defaultValue={50}
                            aria-label="Small"
                            size="small"
                            valueLabelDisplay="auto"
                            max={100}
                            step={10}
                            onChange={handleVolume}/>
                </div>
                <div className="record">
                    <span>Record</span>
                    <button
                        className={`button ${isActive ? "record-button active" : ""}`}
                        onClick={() => {
                            handleRecord();
                            classRecordToggle()
                        }}
                    ></button>
                </div>
            </div>
        </>
    )

}

export default Navigation