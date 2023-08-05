import React, { useState, useRef } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);

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
  };

  const handleUpload = () => {
    // Here you can implement the Firebase upload logic
    // Create a Firebase storage reference and use put() to upload the Blob
    // Example code:
    // const storageRef = firebase.storage().ref();
    // const audioFileRef = storageRef.child('audio-files/audio.wav');
    // audioFileRef.put(audioBlob).then((snapshot) => {
    //   console.log('Audio uploaded successfully!');
    // }).catch((error) => {
    //   console.error('Error uploading audio:', error);
    // });
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button onClick={handlePlayback} disabled={!audioBlob}>Play Recording</button>
      <button onClick={handleUpload} disabled={!audioBlob}>Upload to Firebase</button>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default AudioRecorder;
