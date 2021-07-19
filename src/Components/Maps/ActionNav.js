import React from "react";
const ActionNav = ({setAction,}) => {
  return (
    <div className="bg-light-gray ba b--silver draw-nav">
        <button
          className={`ml1 mt2 f6 grow button no-underline br-pill ba bw1 ph3 pv2 mb2 dib black ttc mr2 button-filter bg-white`}
          onClick={() => setAction(true)}
        >
          Add unit
        </button>
    </div>
  );
};

export default ActionNav;
