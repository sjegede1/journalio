import React, { useState, useRef, useContext, useEffect } from 'react';
import { DBContext } from '../contexts/db_context';
import { v4 as uuid } from 'uuid';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  // const [audioBlob, setAudioBlob] = useState(null);
  const [newRecording,setNewRecording] = useState(false)
  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const {handleUpload, audioBlob, setAudioBlob, setAudioURL, audioURL} = useContext(DBContext)

  // JERRY_RIGGED TO set Audio URL
  useEffect(() => setAudioURL(audioURL), [isRecording])

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = handleDataAvailable;
        mediaRecorderRef.current.start();
        setIsRecording(true);
      })
      .catch((error) => console.error('Error accessing microphone:', error));
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      const chunks = [event.data];
      setAudioBlob(new Blob(chunks, { type: 'audio/wav' }));
    }
  };

  const handlePlayback = () => {
    if (audioBlob) {
      const audioURL = URL.createObjectURL(audioBlob);
      audioRef.current.src = audioURL;
      audioRef.current.play();
    }
    setNewRecording(true)
  };

  const handleNewRecording = () => {
    audioRef.current.src = ""
    setNewRecording(false)
  }


  return (
    <div className='audio-recorder'>
      <button type='button' onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button type='button' onClick={newRecording? handleNewRecording :handlePlayback} disabled={!audioBlob}>{newRecording ? "New Recording" :"Play Recording"}</button>
      <button type='button' onClick={() => {handleUpload(audioBlob)}} disabled={!audioBlob}>Upload to Firebase</button>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default AudioRecorder;
