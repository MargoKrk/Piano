import React from "react";
import './Navigation.css';


const Navigation = ({selectSignature}) => {

    const changeSignature = (type) => {

        selectSignature(type)
    }

    return (
        <>
            <div className="navigation">
                <div className="signatures-toggle">
                    <span>Signatures</span>
                    <button className="signature-button signature-button-C"
                            onClick={() => changeSignature('C')}
                    >C
                    </button>
                    <button className="signature-button signature-button-keys"
                            onClick={() => changeSignature('Keys')}
                    >Keys</button>
                    <button
                        className="signature-button signature-button-none"
                        onClick={() => changeSignature('null')}

                    ></button>
                </div>
                <div className="volume">
                    <span>Volume</span> <input type="range" className="volume-slider"/>
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