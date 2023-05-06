import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./Navigation.css";
import {Slider} from "@mui/material";
import {songNotesList} from "./general";
import supabase from "../config/supabaseClient";

const Navigation = ({ selectSignature, handleVolume, classRecordToggle, handleRecord, isRecordActive, songs, addNewSong }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(songNotesList);
    const [errors, setErrors] = useState([]);
    const [selected, setSelected] = useState("Happy Birthday");
    const [isPlayActive, setIsPlayActive] = useState(false)
    // const [selectedSong, setSelectedSong] = useState({})


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
            setContent([]);
            setErrors([]);
            addNewSong({title})
        }

    };

    const handleSelect = async (e) => {

        const thisSong = e.target.value

        // const { data } = await supabase
        //     .from('songs')
        //     .select()
        //     .eq('title', `${thisSong}`)
        //
        // if(data) {
        //     // setSelectedSong(data)
        //     console.log(data)
        // }

        setSelected(thisSong);

    }

    const classPlayToggle = () => {
        setIsPlayActive(prevIsPlayActive => !prevIsPlayActive)
        console.log(isPlayActive)
    }

    const handlePlay = async () => {

        const { data, error } = await supabase
            .from('songs')
            .select()
            .eq('title', {selected})

        console.log(data)
        console.log(selected)

    }

    const handleDelete = async () => {
        const { data, error } = await supabase
            .from('songs')
            .delete()
            .eq('title', {selected})

        console.log(data)
        console.log(selected)

        if(error) {
            console.log(error)
        }

        if(data) {
            console.log(data)
            console.log(selected)
        }
    }

    return (
        <>
            <div className="navigation">
                <div className="navigation-header">
                <select value={selected} onChange={handleSelect}>
                    {songs.map((song) => (
                        <option
                            value={song.title}
                            key={song.title}>
                            {song.title}
                        </option>
                    ))}
                </select>
                    <FontAwesomeIcon icon={faPlay} className={`play ${
                        isPlayActive ? "hide" : ""
                    }`} onClick={ () => {
                        handlePlay();
                        classPlayToggle()
                    }}/>
                    <FontAwesomeIcon icon={faPause} className={`play ${
                        !isPlayActive ? "hide" : ""
                    }`} on onClick={classPlayToggle}/>
                    <FontAwesomeIcon icon={faTrashCan} className="delete" onClick={handleDelete}/>
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
