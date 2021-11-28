import React, { useState,useEffect } from "react";
import DualListBox from 'react-dual-listbox';
import { connect } from "react-redux";
import Loading from "../../Loading";
import ShowMessage from "../../ShowMessage";
import {uploadUnitAccountManager,} from "../../../Store/actions"
import { Marginer } from "../../Marginer"; 
import  'react-dual-listbox/lib/react-dual-listbox.css';


const UnitAccountManager = ({
                              unit,
                              setAccountManager,
                              setUnitForm,
                              uploadUnitAccountManager,
                              users_data,
                              unit_managers_data,}) => {

  const [options,setOptions] = useState([]);
  const[selected, setSelected] = useState([])
  const [loading, setLoading] = useState(false);
  const [openMessage, setMessageOpen] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    setOptions(users_data.map((users)=>({value:users.id,label:users.full_name}),));
    setSelected(unit_managers_data.map((users)=>(users.employee)));
  
  };

  const backToUnit = () => {
    setAccountManager(false)
  };

  const handleUnitAccountManager = async () => {

  await uploadUnitAccountManager(
      {
        unitID:unit.unit_id,
        unitManager:selected,
      },
      setLoading,
      setMessageOpen,
    );
  };

  return (
    <div>
      {loading && <Loading message={"Please wait...."} />}
      {openMessage && (
        <>
          <ShowMessage
            setMessageOpen={setUnitForm}
            message={"Unit uploaded successfully"}
            width={"w-60"}
          />
        </>
      )}
      <div className="row mt2" style={{marginTop:"1vw",marginBottom:"2vw",fontSize:"2vw"}}>
        <div className="center-content ">
            <span style={{color:"white"}}> {unit.name} </span> 
        </div>
      </div>

      <div className="center-content" style={{padding:"3% 5% 0% 5%"}}>
        <span style={{color:"blue",fontSize:"15px",fontWeight:"700", bottom:"1%"}}> Account Manager </span>
        <Marginer direction="vertical" margin={4}/>
        <DualListBox
                options={options}
                selected={selected} 
                icons={{
                  moveLeft: <span style={{color:"blue",fontSize:"12px",fontWeight:"900"}}> {`<`} </span>,
                  moveAllLeft: <span style={{color:"red",fontSize:"12px",fontWeight:"900"}}> {`<<`} </span>,
                  moveRight: <span style={{color:"blue",fontSize:"12px",fontWeight:"900"}}> {`>`} </span>,
                  moveAllRight: <span style={{color:"red",fontSize:"12px",fontWeight:"900"}}> {`>>`} </span>,
              }}
                onChange={setSelected} 
      />
      </div>

      <div className="btnContainer" style={{padding:"3% 5% 0% 5%"}}>
        <div className="row" style={{justifyContent:"space-between"}}>  
          <div> 
            <button
              className="submitButton"
              style={{color:"blue"}}
              type="button"
              onClick={() => !openMessage && backToUnit()}
            >
              Back
            </button>
          </div> 

          <div className="right-content"> 
            <button
              className="submitButton"
              style={{color: "green"}}
              type="button"
              onClick={() => !openMessage && handleUnitAccountManager()}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ malls,}) => ({
  users_data:malls.users_details,
  unit_managers_data:malls.unit_managers_details,
});
  
const mapDispatchToProps = {uploadUnitAccountManager,};

export default connect(mapStateToProps,mapDispatchToProps)(UnitAccountManager);
