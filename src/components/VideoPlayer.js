import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./VideoUploader.css";

const VideoPlayer = ({ videoUrl, captions, onProgress }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentCaption, setCurrentCaption] = useState("");

  useEffect(() => {
    const activeCaption = captions.find((caption) => {
      return (
        caption.time <= currentTime &&
        (captions.indexOf(caption) === captions.length - 1 ||
          captions[captions.indexOf(caption) + 1].time > currentTime)
      );
    });
    setCurrentCaption(activeCaption ? activeCaption.text : "");
  }, [currentTime, captions]);

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
    onProgress(state.playedSeconds);
  };

  return (
    <div
      className="video-player"
      style={{ position: "relative", maxWidth: "100%" }}
    >
      <ReactPlayer url={videoUrl} controls onProgress={handleProgress} />
      {currentCaption && <div className="caption">{currentCaption}</div>}
    </div>
  );
};

export default VideoPlayer;
