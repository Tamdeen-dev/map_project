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
  coding_data,
  
  
}) => {
  const [unit_name, setUnitName] = useState("");
  const [unit_type, setUnitType] = useState("");
  const [unit_size, setUnitSize] = useState("");
  const [unit_shape, setUnitShape] = useState("");
  const [trackable, setUnitTrackable] = useState(true);
  const [unit_classification, setUnitClassification] = useState("");
  const [loading, setLoading] = useState(false);
  const [openMessage, setMessageOpen] = useState(false);

  if (coding_data.length === 0)
  return <Loading message={"Loading ...."} />;  

  const type_lookup = coding_data.filter((item) => (item.code_header==="Unit Types"));
  const yesno_lookup = [{display:"Yes", value:true}, {display:"No" ,value:false}];
  const shape_lookup = coding_data.filter((item) => (item.code_header==="Unit Shapes"));
  const Classification_lookup = coding_data.filter((item) => (item.code_header==="Unit Classifications"));


  const handleUnitUplode = async () => {

    let coords_string = await "";
    await newUnitElement[0].coords.forEach((point) => {
      coords_string += `${point}, `;
    });

    await uploadUnit(
      {
        floor:required_floor,
        unit_name,
        unit_size,
        x_coord: 0,
        y_coord: 0,
        radius: 0,
        coords: coords_string.slice(0, -2),
        unit_shape,
        unit_type,
        trackable,
        unit_classification,
      },
      setUnitName,
      setUnitType,
      setUnitSize,
      setUnitShape,
      setUnitTrackable,
      setUnitClassification,
      setLoading,
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
          Name <div className="fr">:</div>
        </div>
        <div className="col-8">
          <input
            value={unit_name}
            type="text"
            className="form-control "
            onChange={(event) => setUnitName(event.target.value)}
          />
        </div>
      </div>
      
      <div className="row">
        <div className="col-3 mt3 ml4 title">
          Type <div className="fr">:</div>
        </div>
        <div className="col-8">
          <select
            className={`form-control w-100 f2 mt3 ba b--black-20 bg-white title ${
              errors.unit_type && "border border-danger"
            }`}
            value={unit_type || 0}
            name="unit_type"
            onChange={(event) => setUnitType(event.target.value)}
          >
            <option value={0}>-- select --</option>
            {type_lookup.map((item) => (
              <option key={item.id} value={item.id} >
                {item.code_l_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-3 mt1 ml4 title">
          Size <div className="fr">:</div>
        </div>
        <div className="col-8">
          <input
            value={unit_size}
            type="number"
            className="form-control"
            onChange={(event) => setUnitSize(event.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-3 mt3 ml4 title">
          Shape <div className="fr">:</div>
        </div>
        <div className="col-8">
          <select
            value={unit_shape || 0}
            name="unit_shape"
            onChange={(event) => setUnitShape(event.target.value)}
          >
            <option value={0}>-- select --</option>
            {shape_lookup.map((item) => (
              <option key={item.id} value={item.id} >
                {item.code_l_name}
              </option>
            ))}
          </select>
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
          />
        </div>
      </div>

      <div className="row">
        <div className="col-3 mt3 ml4 title">
         Trackable <div className="fr">:</div>
        </div>
        <div className="col-8">
          <select
            className="form-control w-100 f2 mt3 ba b--black-20 bg-white title"
            value={trackable || true}
            name="trackable"
            onChange={(event) => setUnitTrackable(event.target.value)}
          >
            {yesno_lookup.map((item, index) => (
              <option value={item.value} key={index}>
                {item.display}
              </option>
            ))}
          </select>
        </div>
      </div>
   
      <div className="row">
        <div className="col-3 mt3 ml4 title">
          Dedicated to <div className="fr">:</div>
        </div>
        <div className="col-8">
          <select
            value={unit_classification || 0}
            name="unit_type"
            onChange={(event) => setUnitClassification(event.target.value)}
          >
            <option value={0}>-- select --</option>
            {Classification_lookup.map((item) => (
              <option key={item.id} value={item.id} >
                {item.code_l_name}
              </option>
            ))}
          </select>
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
        onClick={() =>  handleUnitUplode()}
      >
        Upload Unit
      </button>
    </div>
  );
};

const mapStateToProps = ({ malls, errors }) => ({
  coding_data:malls.coding_details,
  errors,
});

const mapDispatchToProps = {
  uploadUnit,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUnit);