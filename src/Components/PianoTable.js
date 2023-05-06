import React, {useState, useEffect} from 'react';
import WhiteKeys from "./WhiteKeys"
import BlackKeys from "./BlackKeys"
import Navigation from "./Navigation"
import "../scss/pianoTable.scss"
import {handlePianoKey, recordNote, startRecording, stopRecording} from "./general";
import supabase from "../config/supabaseClient";


function PianoTable() {
    const [signature, setSignature] = useState([]);
    const [volume, setVolume] = useState(50);
    const [songs, setSongs] = useState([]);
    const [isRecordActive, setIsRecordActive] = useState(false)

    const selectSignature = (type) => {
        setSignature(type)
    }

    const handleVolume = (e) => {

        let currentVolume = e.target.value
        setVolume(currentVolume)
        console.log(`zmieniam głośność ${currentVolume}`)
    }

    const classRecordToggle = () => {
        setIsRecordActive(prevIsRecordActive => !prevIsRecordActive)
        console.log(isRecordActive)
    }

    const handleRecord = (note) => {
        if (!isRecordActive) {
            startRecording(note)
        } else {
            stopRecording()
        }
    }

    useEffect(() => {
        document.onkeydown = function handleKeydown(e) {
            // console.log(e);
            handlePianoKey(e.key, volume);
            console.log(e.key);
            console.log(isRecordActive);
            if(isRecordActive)recordNote(e.key)
            // e.key.classList.add("active")
        }
    }, [volume, isRecordActive])


    const addNewSong = (newSong) => {
        setSongs(prevSongs => [...prevSongs, newSong])
    }

    useEffect(() => {

        const fetchSongs = async () => {
            const { data, error } = await supabase
                .from('songs')
                .select()
            if(error){
                setSongs(null)
                console.log(error)
            }
            if(data) {
                setSongs(data)}
        }
        fetchSongs()
    }, [])

    return (
        <div className="pianoTable">
            <Navigation
                selectSignature={selectSignature}
                handleVolume={handleVolume}
                songs={songs}
                classRecordToggle={classRecordToggle}
                handleRecord={handleRecord}
                isRecordActive={isRecordActive}
                addNewSong={addNewSong}
            />
            <div className="whiteKeysLayer">
                <WhiteKeys
                    signature={signature}
                    volume={volume}
                    isRecordActive={isRecordActive}
                />
            </div>
            <div className="blackKeysLayer">
                <BlackKeys
                    signature={signature}
                    volume={volume}
                    isRecordActive={isRecordActive}
                />
            </div>
        </div>
    );
}

export default PianoTable;
