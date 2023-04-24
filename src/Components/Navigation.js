import React from "react";
import './Navigation.css';
import {handleVolume} from "./general";


const Navigation = ({selectSignature}) => {

    return (
        <>
            <div className="navigation">
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
                    >Keys</button>
                    <button
                        className="signature-button signature-button-none"
                        onClick={() => {
                            selectSignature('null')
                            console.log("usuwam sygn")
                        }}
                    ></button>
                </div>
                <div className="volume">
                    <span>Volume</span> <input
                    type="range"
                    className="volume-slider" min="0" max="1" step="0.5"
                    />
                </div>
                <div className="record">
                    <span>Record</span>
                    <button className="record-button"></button>
                </div>
            </div>
        </>
    )

}

export default Navigation