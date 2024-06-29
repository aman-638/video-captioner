import React from "react";
import { FaVideo } from "react-icons/fa";
import "./VideoUploader.css";

const VideoUploader = ({ videoUrl, setVideoUrl }) => {
  return (
    <div className="video-uploader">
      <FaVideo size={24} />
      <input
        type="text"
        className="video-input"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
    </div>
  );
};

export default VideoUploader;
