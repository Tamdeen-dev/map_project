import React, { useState } from "react";

const ShowMessage = ({ setMessageOpen, message, width }) => {
  const [UploadMessage, setUploadMessage] = useState(message);

  const handleClick = () => {
    setMessageOpen(false);
    setUploadMessage("");
  };

  return (
    <div
      className={`tc pa3 ${width} br3 bg-moon-gray ba`}
      style={{ position: "absolute", zIndex: 50, left: "20%", top: "50%" }}
    >
      <div className="f4">{UploadMessage}</div>
      <div className="ph3">
        <button
          className={`f6 grow button no-underline br-pill ba bw1 ph3 pv2 mb2 dib black ttc mr4 button-filter bg-white`}
          onClick={() => handleClick()}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ShowMessage;
