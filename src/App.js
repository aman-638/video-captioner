import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import VideoUploader from "./components/VideoUploader";
import CaptionEditor from "./components/CaptionEditor";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  const updateCurrentTime = (time) => {
    setCurrentTime(time);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/24405947/pexels-photo-24405947/free-photo-of-an-aurora-borealis-in-the-sky-with-colorful-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        resize: "contain",
      }}
    >
      <div className="content">
        <h1>Video Captioner</h1>
        <VideoUploader videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
        <CaptionEditor
          captions={captions}
          setCaptions={setCaptions}
          currentTime={currentTime}
        />
        <VideoPlayer
          videoUrl={videoUrl}
          captions={captions}
          onProgress={updateCurrentTime}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
