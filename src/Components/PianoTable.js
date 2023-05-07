import React, {useState, useEffect} from 'react';
import WhiteKeys from "./WhiteKeys"
import BlackKeys from "./BlackKeys"
import Navigation from "./Navigation"
import "../scss/pianoTable.scss"
import { handlePianoKey } from "./general";
import supabase from "../config/supabaseClient";


function PianoTable() {
    const [signature, setSignature] = useState([]);
    const [volume, setVolume] = useState(50);
    const [songs, setSongs] = useState([]);
    const [isRecordActive, setIsRecordActive] = useState(false);
    const [recordingStartTime, setRecordingStartTime] = useState({});
    const [recordNoteTime, setRecordNoteTime] = useState({});
    const [content, setContent] = useState([]);
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState([]);
    // const [isKeyPressed, setIsKeyPressed] = useState(false)

    const selectSignature = (type) => {
        setSignature(type)
    }

    const handleVolume = (e) => {

        let currentVolume = e.target.value
        setVolume(currentVolume)
        // console.log(`zmieniam głośność ${currentVolume}`)
    }

    const classRecordToggle = () => {
        setIsRecordActive(prevIsRecordActive => !prevIsRecordActive)
        // console.log(isRecordActive)
    }

    const handleRecord = (note) => {
        if (!isRecordActive) {
            startRecording(note)
        } else {
            stopRecording()
        }
    }

    const startRecording = (note) => {
        setRecordingStartTime(Date.now());
        console.log("zaczynam nagrywać", recordingStartTime, typeof recordingStartTime)
        recordNote(note)
    }

    const recordNote = (note) => {

        setRecordNoteTime(Date.now())

        setContent(prevSetContent => [...prevSetContent,
            {
                key: note,
                startTime: (recordNoteTime - recordingStartTime)
            }])

        // console.log(`zapisuję nutkę`, recordNoteTime, typeof recordNoteTime)
    }

    const stopRecording = () => {
        playSong()
        console.log("skończono nagrywać")
    }

    const playSong = () => {
        console.log(content)
    }

    const addNewSong = (newSong) => {
        setSongs(prevSongs => [...prevSongs, newSong])
    }


    useEffect(() => {
        document.onkeydown = function handleKeydown(e) {
            // console.log(e);
            handlePianoKey(e.key, volume);
            // console.log(e.key);
            // console.log(isRecordActive);
            if (isRecordActive) recordNote(e.key)

            // e.target.classList.add("active")
            // console.log(`e target`, e.target)
            // console.log(`e target class list`, e.target.classList)
        }
    }, [volume, isRecordActive])


    useEffect(() => {

        const fetchSongs = async () => {
            const {data, error} = await supabase
                .from('songs')
                .select()
            if (error) {
                setSongs(null)
                console.log(error)
            }
            if (data) {
                setSongs(data)
            }
        }
        fetchSongs()
    }, [])


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

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }


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
                songNotesList={content}
                handleSubmit={handleSubmit}
                errors={errors}
                title={title}
                content={content}
                changeTitle={changeTitle}
            />
            <div className="whiteKeysLayer">
                <WhiteKeys
                    signature={signature}
                    volume={volume}
                    isRecordActive={isRecordActive}
                    recordNote={recordNote}
                />
            </div>
            <div className="blackKeysLayer">
                <BlackKeys
                    signature={signature}
                    volume={volume}
                    isRecordActive={isRecordActive}
                    recordNote={recordNote}
                />
            </div>
        </div>
    );
}

export default PianoTable;
