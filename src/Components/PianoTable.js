import React, {useState, useEffect} from 'react';
import WhiteKeys from "./WhiteKeys"
import BlackKeys from "./BlackKeys"
import Navigation from "./Navigation"
import './PianoTable.css';
import {handlePianoKey, startRecording, stopRecording} from "./general";
import supabase from "../config/supabaseClient";


function PianoTable() {
    const [signature, setSignature] = useState([]);
    const [volume, setVolume] = useState(50);
    const [songs, setSongs] = useState([]);
    const [isRecordActive, setIsRecordActive] = useState(false)
    // const [keyDownTime, setKeyDownTime] = useState(null);
    // const [keyUpTime, setKeyUpTime] = useState(null);

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

    const handleRecord = (note, value) => {
        if (isRecordActive === value) {
            startRecording(note)
        } else {
            stopRecording()
        }
    }

    // const handleKeyDown = (e) => {
    //     setKeyDownTime(e.timeStamp)
    // }
    //
    // const handleKeyUp = (e) => {
    //     setKeyUpTime(e.timeStamp);
    //     const timeDiff = keyUpTime - keyDownTime;
    //     console.log(`czas pomiędzy naciśnięciem a puszczeniem to ${timeDiff} `)
    //
    // }


    useEffect(() => {
        document.onkeydown = function handleKeydown(e) {
            // console.log(e);
            handlePianoKey(e.key, volume);
            console.log(e.key);
            console.log(isRecordActive);
            handleRecord(e.key, true);
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
                    handleRecord={handleRecord}
                    isRecordActive={isRecordActive}
                />
            </div>
            <div className="blackKeysLayer">
                <BlackKeys
                    signature={signature}
                    volume={volume}
                    handleRecord={handleRecord}
                    isRecordActive={isRecordActive}
                />
            </div>
        </div>
    );
}

export default PianoTable;
