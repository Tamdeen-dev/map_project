import React ,{useState}from "react";
import { connect } from "react-redux";

export const UnitDetails = ({unit,coding_data,}) => {
    const[unitType,]=useState(coding_data.find((item) => (item.id===unit.unit_type)).code_l_name);
    const[unitUtilization,]=useState(coding_data.find((item) => (item.id===unit.unit_utilization)).code_l_name);

  return (
    <div>
      <div className="row mt2" style={{marginTop:"1vw",marginBottom:"2vw",fontSize:"4vw"}}>
        <div className="center-content ">
            <span style={{color:"white"}}> {unit.name} </span> 
        </div>
      </div>
      <div className= "frame center-content">
        <div className="row mt2">
          <div className="col-3 label">
            Type 
          </div>
          <div className="col-9" style={{textAlign:"center"}}>
            <div  className= "displayfield">
              <span style={{color:"blue"}}>{unit.unit_size} <span className="displayremark"> /M2.</span> </span>
            </div>
          </div>
        </div>

        <div className="row mt2">
          <div className="col-3 label">
            Type 
          </div>
          <div className="col-9" style={{textAlign:"center"}}>
            <div  className= "displayfield">
              <span style={{color:"blue"}}>{unitType} </span>
            </div>
          </div>
        </div>
        <div className="row mt1">
          <div className="col-3 label">
            Utilization
          </div>
          <div className="col-9" style={{textAlign:"center"}}>
            <div  className= "displayfield">
              <span style={{color:"blue"}}>{unitUtilization} </span>
            </div>
          </div>
        </div>
      </div>
     
      <div className= "frame center-content">
        <div className="row mt2">
          <div className="col-12">
            <div  className= "displayfield">
              <span style={{color:"blue"}}>{unit.account_manager_name} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({malls}) => ({
    coding_data:malls.coding_details,
  });
  
export default connect(mapStateToProps,)(UnitDetails);
