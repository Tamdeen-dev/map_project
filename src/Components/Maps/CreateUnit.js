import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadUnit } from "../../Store/actions";
import Loading from "../Loading";
import ShowMessage from "../ShowMessage";

const CreateUnit = ({
  newUnitElement,
  setAddElement,
  pointsSquence,
  uploadUnit,
  required_floor,
  setUnitForm,
  errors,
  
}) => {
  const [unit_name, setUnitName] = useState("");
  const [unit_type, setUnitType] = useState("");
  const [unit_size, setUnitSize] = useState("");
  const [unit_shape, setUnitShape] = useState("");
  const [trackable, setUnitTrackable] = useState(true);
  const [unit_classification, setUnitClassification] = useState("");
  const [loading, setLoading] = useState(false);
  const [openMessage, setMessageOpen] = useState(false);

  const handleUnitUplode = async () => {
    let coords_string = await "";

    await newUnitElement[0].coords.forEach((point) => {
      coords_string += `${point}, `;
    });

    await uploadUnit(
      {
        unit_name,
        unit_type,
        unit_size,
        unit_shape,
        trackable,
        unit_classification,
        x_coord: 0,
        y_coord: 0,
        radius: 0,
        coords: coords_string.slice(0, -2),
        required_floor,
      },
      setLoading,
      setUnitName,
      setUnitType,
      setUnitSize,
      setUnitShape,
      setUnitTrackable,
      setUnitClassification,
      setMessageOpen,
      setAddElement,
    );
  };
  return (
    <div className="custom-zone-card ba b--silver pa2">
      {loading && <Loading message={"Please wait...."} />}
      {openMessage && (
        <ShowMessage
          setMessageOpen={setUnitForm}
          message={"Unit uploaded successfully"}
          width={"w-60"}
        />
      )}
      <div className="row mt2">
        <div className="col-3 mt1 ml4 title">
          Unit Name <div className="fr">:</div>
        </div>
        <div className="col-8">
          <input
            value={unit_name}
            type="text"
            className={`form-control ${errors.unit_name && "border border-danger"}`}
            onChange={(event) => setUnitName(event.target.value)}
          />
          {/* show error message if name is blank when user clicks on 'Upload button' */}
          {errors.name && <small className="error_text">{errors.unit_name}</small>}
        </div>
      </div>
      
      <div className="row">
        <div className="col-3 mt3 ml4 title">
          Unit Type <div className="fr">:</div>
        </div>
        <div className="col-8">
          <select
            className={`form-control w-100 f2 mt3 ba b--black-20 bg-white title ${
              errors.unit_type && "border border-danger"
            }`}
            value={unit_type || ""}
            name="unit_type"
            onChange={(event) => setUnitType(event.target.value)}
          >
            <option value={""}>-- select --</option>
            {["lease", "special"].map((type, index) => (
              <option value={type} key={index}>
                {type}
              </option>
            ))}
          </select>
          <div>
            {errors.unit_type && (
              <small className="error_text">{errors.unit_type}</small>
            )}
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-3 mt1 ml4 title">
          Unit Size <div className="fr">:</div>
        </div>
        <div className="col-8">
          <input
            value={unit_size}
            type="number"
            className={`form-control ${errors.unit_size && "border border-danger"}`}
            onChange={(event) => setUnitSize(event.target.value)}
          />
        </div>
      </div>

      <div className="row mt2">
        <div className="col-3 mt1 ml4 title">
          Zone Coords <div className="fr">:</div>
        </div>
        <div className="col-8">
          <input
            disabled={true}
            value={pointsSquence}
            type="text"
            className={`form-control ${
              errors.coords && "border border-danger"
            }`}
          />
          {errors.coords && (
            <small className="error_text">{errors.coords}</small>
          )}
        </div>
      </div>

     
      
      <div className="row">
        <div className="col-3 mt3 ml4 title">
         Trackable <div className="fr">:</div>
        </div>
        <div className="col-8">
          <select
            className={`form-control w-100 f2 mt3 ba b--black-20 bg-white title`}
            value={trackable || ""}
            name="trackable"
            onChange={(event) => setUnitTrackable(event.target.value)}
          >
            <option value={""}>-- select --</option>
            {["Yes", "No"].map((type, index) => (
              <option value={type} key={index}>
                {type}
              </option>
            ))}
          </select>
          
        </div>
      </div>
   
      <div className="row">
        <div className="col-3 mt3 ml4 title">
        Unit Classification <div className="fr">:</div>
        </div>
        <div className="col-8">
          <select
            className={`form-control w-100 f2 mt3 ba b--black-20 bg-white title`}
            value={unit_classification || ""}
            name="unit_classification"
            onChange={(event) => setUnitClassification(event.target.value)}
          >
            <option value={""}>-- select --</option>
            {["Yes", "No"].map((type, index) => (
              <option value={type} key={index}>
                {type}
              </option>
            ))}
          </select>
          <div>
            {errors.unit_classification && (
              <small className="error_text">{errors.unit_classification}</small>
            )}
          </div>
        </div>
      </div>

      <button
        className={`ml3 mt2 f6 button grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black ttc mr4 button-filter bg-white`}
        onClick={() => setUnitForm(false)}
      >
        Cancel
      </button>

      <button
        className={`ml1 mt2 f6 button grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black ttc mr4 button-filter bg-white`}
        onClick={() => handleUnitUplode()}
      >
        Upload Unit
      </button>
    </div>
  );
};

const mapStateToProps = ({errors }) => ({
  errors,
});

const mapDispatchToProps = {
  uploadUnit,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUnit);