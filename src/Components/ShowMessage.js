import React, { useState } from "react";

const ShowMessage = ({ setMessageOpen, message,width}) => {
  const [UploadMessage, setUploadMessage] = useState(message);

  const handleClick = () => {
    setMessageOpen(false);
    setUploadMessage("");
  };

  return (
    <div className="container" >
      <div className="row justify-content-md-center">
        <div className={`col-md-auto  ${width}p-3  bg-info text-black`}
             style={{ position: "absolute", zIndex: 50, top: "50%" }}
        >
          <div> {UploadMessage} </div>
        <br/>
          <button
            className={`bg-info text-white`}
              style={{border:"0"}}
              onClick={() => handleClick()}
          > 
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowMessage;
