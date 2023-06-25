import React, { useState, useEffect } from "react";
import WhiteKeys from "./WhiteKeys";
import BlackKeys from "./BlackKeys";
import Navigation from "./Navigation";
import "../scss/pianoTable.scss";
import { handlePianoKey, playSound } from "./general";
import supabase from "../config/supabaseClient";

function PianoTable() {
  const [signature, setSignature] = useState([]);
  const [volume, setVolume] = useState(50);
  const [songs, setSongs] = useState([]);
  const [isRecordActive, setIsRecordActive] = useState(false);
  const [recordingStartTime, setRecordingStartTime] = useState(Number);
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState([]);
  // const [isKeyPressed, setIsKeyPressed] = useState(false)

  const selectSignature = (type) => {
    setSignature(type);
  };

  const handleVolume = (e) => {
    let currentVolume = e.target.value;
    setVolume(currentVolume);
  };

  const classRecordToggle = () => {
    setIsRecordActive((prevIsRecordActive) => !prevIsRecordActive);
  };

  const handleRecord = () => {
    if (!isRecordActive) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    setRecordingStartTime(Date.now());
  };

  const recordNote = (note) => {
    setContent((prevSetContent) => [
      ...prevSetContent,
      {
        key: note,
        startTime: Date.now() - recordingStartTime,
      },
    ]);
  };

  const stopRecording = () => {
    console.log(content);
    console.log("skończono nagrywać");
  };

  const playSong = (arr) => {
    arr.forEach((note) => {
      setTimeout(() => {
        playSound();
      });
    });
  };

  const addNewSong = (newSong) => {
    setSongs((prevSongs) => [...prevSongs, newSong]);
  };

  const reloadSongList = (title) => {
    setSongs((prevSetSongs) => {
      return prevSetSongs.filter((song) => {
        return song.title !== title;
      });
    });
  };

  useEffect(() => {
    document.onkeydown = function handleKeydown(e) {
      // console.log(e);
      handlePianoKey(e.key, volume);
      // console.log(e.key);
      // console.log(isRecordActive);
      if (isRecordActive) recordNote(e.key);

      // e.target.classList.add("active")
      // console.log(`e target`, e.target)
      // console.log(`e target class list`, e.target.classList)
    };
  }, [volume, isRecordActive]);

  useEffect(() => {
    const fetchSongs = async () => {
      const { data, error } = await supabase.from("songs").select();
      if (error) {
        setSongs(null);
        console.log(error);
      }
      if (data) {
        setSongs(data);
      }
    };
    fetchSongs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      setErrors(["Wprowadź tytuł"]);
      console.log(setErrors);
      return;
    }

    const { data, error } = await supabase
      .from("songs")
      .insert([{ title, content }])
      .select();

    console.log(data, error);

    if (error) {
      setErrors(["Wprowadź tytuł"]);
      console.log(error);
    }

    if (data) {
      console.log(title, content);
      setTitle("");
      setContent([]);
      setErrors([]);
      addNewSong({ title });
    }
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="pianoTable">
      <Navigation
        selectSignature={selectSignature}
        handleVolume={handleVolume}
        songs={songs}
        classRecordToggle={classRecordToggle}
        handleRecord={handleRecord}
        isRecordActive={isRecordActive}
        stopRecording={stopRecording}
        addNewSong={addNewSong}
        songNotesList={content}
        handleSubmit={handleSubmit}
        errors={errors}
        title={title}
        content={content}
        changeTitle={changeTitle}
        reloadSongList={reloadSongList}
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
