import React, {useState, useEffect} from 'react';
import WhiteKeys from "./WhiteKeys"
import BlackKeys from "./BlackKeys"
import Navigation from "./Navigation"
import './PianoTable.css';
import {handlePianoKey} from "./general";
import supabase, {SUPABASE_KEY, supabaseKey, supabaseUrl} from "../config/supabaseClient";


let  ALL_KEYS = [];


function PianoTable() {
    const [signature, setSignature] = useState([]);
    const [volume, setVolume] = useState(50);
    const [songs, setSongs] = useState([]);

    const selectSignature = (type) => {
        setSignature(type)
    }

    const handleVolume = (e) => {

        let currentVolume = e.target.value
        setVolume(currentVolume)
        console.log(`zmieniam głośność ${currentVolume}`)
    }

    useEffect(() => {
        document.onkeydown = function handleKeydown(e) {
            console.log('key down');
            console.log(e);
            handlePianoKey(e.key, volume)
        }
    }, [volume])

    useEffect(() => {

        const fetchSongs = async () => {
            const { data, error } = await supabase
                .from('songs')
                .select()
            console.log({data})
            if(error){
                setSongs(null)
                console.log(error)
            }
            if(data) {
                setSongs(data)}
        }
        fetchSongs()
    }, [])

    // useEffect(() => {
    //     fetch(supabaseUrl, {
    //         headers: {
    //             Authorization: SUPABASE_KEY
    //         },
    //     })
    //         .then(response => {
    //             if(response.ok) {
    //                 return response.json()
    //             }
    //             throw Error(`${response.status} - ${response.statusText}`)
    //         }).then(data => {
    //             setSongs(data)
    //     }).catch(error => {
    //         console.error(error)
    //     })
    //
    // }, [])

    return (
        <div className="pianoTable">
            <Navigation
                selectSignature={selectSignature}
                handleVolume={handleVolume}
                songs={songs}
            />
            <div className="whiteKeysLayer">
                <WhiteKeys
                    signature={signature}
                    volume={volume}
                />
            </div>
            <div className="blackKeysLayer">
                <BlackKeys
                    signature={signature}
                    volume={volume}
                />
            </div>
        </div>
    );
}

export default PianoTable;
