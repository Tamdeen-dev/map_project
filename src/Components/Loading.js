
import React from "react";
const Loading = ({ message }) => {
  return (
    <div  style={{ position: "absolute", left: "43%", top: "50%" }}> 
      {message}
      <div className="spinner-border" role="status"> </div>
    </div>
    )
 };
 export default Loading;