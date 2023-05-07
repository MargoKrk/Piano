import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import "../scss/navigation.scss"
import {Slider} from "@mui/material";
// import {songNotesList} from "./general";
import supabase from "../config/supabaseClient";

const Navigation = ({
                        selectSignature,
                        handleVolume,
                        classRecordToggle,
                        handleRecord,
                        isRecordActive,
                        songs,
                        addNewSong,
                        content,
                        handleSubmit,
                        errors,
                        title,
                        changeTitle
                    }) => {
    const [selected, setSelected] = useState();
    const [isPlayActive, setIsPlayActive] = useState(false)
    const [selectedSong, setSelectedSong] = useState({})



    const handleSelect = async (e) => {

        const thisSong = e.target.value


        console.log(`handle select`, thisSong, typeof thisSong)
        const {data} = await supabase
            .from('songs')
            .select()
            .eq('title', thisSong)

        if (data) {
            setSelectedSong(data)
            console.log(data)
        }

        setSelected(thisSong);
        console.log(thisSong)

    }

    const classPlayToggle = () => {
        setIsPlayActive(prevIsPlayActive => !prevIsPlayActive)
        console.log(isPlayActive)
    }

    const handlePlay = async () => {

        const {data, error} = await supabase
            .from('songs')
            .select()
            .eq('title', {selected})

        // console.log(data)
        // console.log(selected)

    }

    const handleDelete = async () => {
        console.log(`selected`, selected)
        console.log(selectedSong)


        console.log(`handle delete`, selected, typeof selected)

        const {data, error} = await supabase
            .from('songs')
            .delete()
            .eq('title', selected)

        console.log(data)
        console.log(selected)

        if (error) {
            console.log(error)
        }

        if (data) {
            console.log(data)
            console.log(selected)
            setSelected("Song List")
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
                    <FontAwesomeIcon
                        icon={faPlay}
                        className={`play ${isPlayActive === true && "hide"}`}
                        onClick={() => {
                            handlePlay();
                            classPlayToggle()
                        }}/>
                    <FontAwesomeIcon
                        icon={faPause}
                        className={`play ${isPlayActive === false && "hide"}`}
                        onClick={classPlayToggle}/>
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
                                isRecordActive ? "record-button" : ""
                            }`}
                            onClick={() => {
                                console.log(isRecordActive);
                                classRecordToggle();
                                handleRecord();
                            }}
                        ></button>
                        {content.length > 1 && (
                            <form className="save" onSubmit={handleSubmit}>
                                <span>Save</span>
                                <input
                                    className="title"
                                    type="text"
                                    placeholder="Tytuł"
                                    value={title}
                                    onChange={changeTitle}
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
