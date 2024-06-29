import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CaptionEditor.css";

const CaptionEditor = ({ captions, setCaptions, currentTime }) => {
  const [currentCaption, setCurrentCaption] = useState({ text: "", time: "" });
  const [showAlert, setShowAlert] = useState(false);

  const addCaption = () => {
    if (currentCaption.time > currentTime) {
      setCaptions([...captions, currentCaption]);
      setCurrentCaption({ text: "", time: "" });
      setShowAlert(false);
      toast.success("Caption added successfully!");
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="caption-editor">
      <CSSTransition
        in={showAlert}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div className="alert">
          Caption time cannot be before the current video progress time.
        </div>
      </CSSTransition>
      <div className="input-group">
        <input
          type="text"
          className="caption-input"
          placeholder="Caption text"
          value={currentCaption.text}
          onChange={(e) =>
            setCurrentCaption({ ...currentCaption, text: e.target.value })
          }
        />
        <input
          type="number"
          className="caption-input"
          placeholder="Timestamp (in seconds)"
          value={currentCaption.time}
          onChange={(e) =>
            setCurrentCaption({ ...currentCaption, time: e.target.value })
          }
        />
        <button className="add-button" onClick={addCaption}>
          <FaPlay /> Add Caption
        </button>
      </div>
    </div>
  );
};

export default CaptionEditor;
