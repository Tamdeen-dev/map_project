import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadUnit } from "../../Store/actions";
import Loading from "../Loading";
import ShowMessage from "../ShowMessage";
import  {FormStyles} from "../FormStyles";
import { Marginer } from "../Marginer";

const CreateUnit = ({
  newUnitElement,
  setAddElement,
  required_floor,
  setUnitForm,
  uploadUnit,
  errors,
  coding_data,
  setDraw,
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


  const cancelUnitForm = () => {
    setUnitForm(false)
  };


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
    
    <FormStyles>
      <div className="FormContainer">
      {loading && <Loading message={"Please wait...."} />}
      {openMessage && (
        <>
        <ShowMessage
          setMessageOpen={setUnitForm}
          message={"Unit uploaded successfully"}
          width={"w-25"}
        />
         {setDraw(false)}
        </>
      )}
       <Marginer direction="vertical" margin={20} />
       <div className="label">
           Unit Name
        </div>
        <div className="Input">
          <input
              className="form-control w-100"
              value={unit_name}
              type="text"
              onChange={(event) => setUnitName(event.target.value)}
          />
      </div>
      <Marginer direction="vertical" margin={4} />
      <div className="label">
           Unit Type
      </div>
        <div className="Input">
          <select
            className={`form-control w-75 ${
              errors.unit_type && "border border-danger"
            }`}
            value={unit_type || 0}
            name="unit_type"
            onChange={(event) => setUnitType(event.target.value)}
          >
            <option value={0}>-- select Unit Type --</option>
            {type_lookup.map((item) => (
              <option key={item.id} value={item.id} >
                {item.code_l_name}
              </option>
            ))}
          </select>
        </div>
        
        <Marginer direction="vertical" margin={4} />
      <div className="label">
           Unit Size
      </div>
      <div className="Input">
          <input
            className="form-control w-25"
            value={unit_size}
            type="number"
            onChange={(event) => setUnitSize(event.target.value)}
          />
      </div>
     
      <Marginer direction="vertical" margin={4} />
      <div className="label">
           Unit Shape
      </div>
      <div className="Input">
          <select
            className="form-control w-50"
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
    
        <Marginer direction="vertical" margin={4} />
      <div className="label">
           Trackable
      </div>
      <div className="Input">
          <select
            className="form-control w-25"
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

        <Marginer direction="vertical" margin={4} />
      <div className="label">
           Unit Classifications
      </div>
      <div className="Input">
          <select
             className="form-control w-50 "
            value={unit_classification || 0}
            name="unit_classification"
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

      <Marginer direction="vertical" margin={30} /> 
    <div className="BtnContainer justify-content-end">
      <button
        className="SubmitButton"
        onClick={() =>  !openMessage && cancelUnitForm()}
      >
        Cancel
      </button>

      <button
        className="SubmitButton"
        onClick={() =>  !openMessage && handleUnitUplode()}
      >
        Upload 
      </button>
    </div>
    </div>
    </FormStyles>
 
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