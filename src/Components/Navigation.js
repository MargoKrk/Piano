import React, {useState} from "react";
import './Navigation.css';
import {Slider} from "@mui/material";
import {songNotesList} from "./general"
import supabase from "../config/supabaseClient";


const Navigation = ({selectSignature, handleVolume, classRecordToggle, handleRecord, isRecordActive, songs, addNewSong}) => {

    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState([]);
    const [content, setContent] = useState(songNotesList)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const validError = [];
        if (!title) {
            validError.push("Wprowadź tytuł")
        }

        const { data, error } = await supabase
            .from('songs')
            .insert([{ title, content }])

        if(data) {
            console.log(title); // handleAddNewSong
            setTitle(" ");
            setContent([])
            setErrors([])
        }
        if (error) {
            setErrors(validError)
        }
    }


    return (
        <>
            <div className="navigation">
                <div className="songs-list">
                    {songs.map(song => (
                        <li key={song.title}>{song.title}
                            <button className={`button button-play`}></button>
                        </li>
                    ))}
                </div>
                <div className="switches">
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
                            className={`button ${isRecordActive ? "record-button active" : ""}`}
                            onClick={() => {
                                console.log(isRecordActive)
                                classRecordToggle()
                                handleRecord()
                            }}
                        ></button>
                        {songNotesList.length > 0 &&
                            <form className="save"
                                onSubmit={handleSubmit}
                            >
                                <span>Save</span>
                                <input
                                    className="title"
                                    type="text"
                                    placeholder="Tytuł"
                                value={title}
                                onChange={e => setTitle(e.target.value)}/>
                                <button
                                    className={`button`}
                                ></button>
                                {errors.map((error, indx) => <span
                                    key={indx}
                                    style={{color: "white",   position: "absolute",
                                    bottom: -5,
                                }}>{error}</span>)}
                            </form>
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navigation