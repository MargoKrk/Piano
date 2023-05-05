import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import "./Navigation.css";
import {Slider} from "@mui/material";
import {songNotesList} from "./general";
import supabase from "../config/supabaseClient";

const Navigation = ({ selectSignature, handleVolume, classRecordToggle, handleRecord, isRecordActive, songs, addNewSong }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState([]);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setErrors(["Wprowadź tytuł"])
            console.log(setErrors)
            return
        }

        const {data, error} = await supabase
            .from('songs')
            .insert([{title, content}])
            .select()

            console.log(data, error)

        if (error) {
            setErrors(["Wprowadź tytuł"])
            console.log(error)
        }

        if (data) {
            console.log(title, content);
            setTitle("");
            songNotesList = [];
            setErrors([]);
            addNewSong({title})
        }

    };

    return (
        <>
            <div className="navigation">
                <div className="navigation-header">
                <select>
                    {songs.map((song) => (
                        <option value={song.title} key={song.title}>
                            {song.title}
                        </option>
                    ))}
                </select>
                    <button className={"button-play button"}><div className="play"></div></button>
                    <FontAwesomeIcon icon={faCirclePlay} className="play" />
                </div>
                <div className="switches">
                    <div className="signatures-toggle">
                        <span>Signatures</span>
                        <button
                            className="signature-button signature-button-C"
                            onClick={() => {
                                selectSignature("C");
                                console.log("zmieniam sygn na C");
                            }}
                        >
                            C
                        </button>
                        <button
                            className="signature-button signature-button-keys"
                            onClick={() => {
                                selectSignature("Keys");
                                console.log("zmieniam sygn na keys");
                            }}
                        >
                            Keys
                        </button>
                        <button
                            className="signature-button signature-button-none"
                            onClick={() => {
                                selectSignature("null");
                                console.log("usuwam sygn");
                            }}
                        ></button>
                    </div>
                    <div className="volume-change">
                        <span>Volume</span>
                        <Slider
                            className="volumeSlider"
                            defaultValue={50}
                            aria-label="Small"
                            size="small"
                            valueLabelDisplay="auto"
                            max={100}
                            step={10}
                            onChange={handleVolume}
                        />
                    </div>
                    <div className="record">
                        <span>Record</span>
                        <button
                            className={`button ${
                                isRecordActive ? "record-button active" : ""
                            }`}
                            onClick={() => {
                                console.log(isRecordActive);
                                classRecordToggle();
                                handleRecord();
                            }}
                        ></button>
                        {songNotesList.length > 1 && (
                            <form className="save" onSubmit={handleSubmit}>
                                <span>Save</span>
                                <input
                                    className="title"
                                    type="text"
                                    placeholder="Tytuł"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <button className={`button`}></button>
                                {errors.map((error, indx) => (
                                    <span
                                        key={indx}
                                        style={{color: "white", position: "absolute", bottom: -5}}
                                    >
                                    {error}</span>
                                ))}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
