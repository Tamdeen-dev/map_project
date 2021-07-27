import React, { useState } from "react";
import CreateUnit from "./CreateUnit";

const AddUnitNav = ({
  newUnitElement,
  setAddElement,
  pointsSquence,
  setPoints,
  setAction,
  point_radius,
  setRadius,
  required_floor,
  
}) => {
 
  const [unitForm, setUnitForm] = useState(false); // variable used to show Zone form input for uploading

  const draw_unit = () => {
    // function to connect all points drew
    let area_from_points = [];
    newUnitElement.forEach((point) => {
      area_from_points.push(point.coords[0], point.coords[1]);
    });

    // if there are points drew
    area_from_points.length > 0 &&
      setAddElement([
        {
          name: "Customize Area",
          preFillColor: "MediumSeaGreen",
          fillColor: "blue",
          shape: "poly",
          coords: area_from_points,
        },
      ]);
  };

  const clear = () => {
    // reset the zone coords points
    setAddElement([]);
    setPoints("");
  };

  const closeNav = () => {
    // reset the variables when closing the nav
    setAddElement([]);
    setPoints("");
    setAction(false);
  };

  const setPointSize = (value) => {
    if (!value || value < 1 || value > 20) setRadius(3);
    else setRadius(value);
  };
  return (
    <div>
      {unitForm && (
        <CreateUnit
          newUnitElement={newUnitElement}
          setAddElement={setAddElement}
          pointsSquence={pointsSquence}
          setUnitForm={setUnitForm}
          required_floor={required_floor}
        />
      )}
       <div>
      <div className="bg-light-gray ba b--silver draw-nav">
        <input
          className="mr2 ml2"
          type="number"
          name="point_radius"
          value={point_radius}
          min={1}
          max={20}
          onChange={(event) => setPointSize(event.target.value)}
        />
        <button
          className={`ml2 mt2 f6 grow button no-underline br-pill ba bw1 ph3 pv2 mb2 dib black ttc mr3 button-filter bg-white`}
          onClick={() => draw_unit()}
        >
          Draw Area
        </button>
        <button
          className={`f6 grow button no-underline br-pill ba bw1 ph3 pv2 mb2 dib black ttc mr3 button-filter bg-white`}
          onClick={() => clear()}
        >
          Clear Points
        </button>

        {newUnitElement.length === 1 && newUnitElement[0].coords.length > 3 && (
          <button
            className={`f6 grow button no-underline br-pill ba bw1 ph3 pv2 mb2 dib black ttc mr3 button-filter bg-white`}
            onClick={() => setUnitForm(true)}
          >
            Create Unit
          </button>
        )}

        <button
          className={`f6 grow button no-underline br-pill ba bw1 ph3 pv2 mb2 dib black ttc mr3 button-filter bg-white`}
          onClick={() => closeNav()}
        >
          Cancel
        </button>

        <input
          disabled={true}
          value={pointsSquence}
          type="text"
          className="form-control"
        />
      </div>
      </div>
    </div>
  );
};

export default AddUnitNav;
