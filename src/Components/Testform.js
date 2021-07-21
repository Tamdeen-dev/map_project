import React,{ useEffect } from "react";
import { connect } from "react-redux";

import {fetchStatus,fetchMalls,fetchFloors,fetchUnits} from "../Store/actions";
import MallsMenu from "./Menu/MallsMenu"


const Home = ({fetchStatus,fetchMalls,fetchFloors,fetchUnits})=> {

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  useEffect(() => {
    fetchMalls();
  },[fetchMalls]);
  
  useEffect(() => {
    fetchFloors();
    }, [fetchFloors]);

  useEffect(() => {
    fetchUnits();
    }, [fetchUnits]);


  return (
      <div className="custom-zone-card ba b--silver pa2">
      
      <div className="row mt2">
        <div className="col-3 mt1 ml4 title">
          Unit Name <div className="fr">:</div>
        </div>
        <div className="col-8">
          <input
            value="yyyyyy"
            type="text"
          />
        </div>
      </div>
      
      <div className="row">
        <div className="col-3 mt3 ml4 title">
          Unit Type <div className="fr">:</div>
        </div>
        <div className="col-8">
          <select
            value={"PPPPP" || ""}
            name="unit_type"
          >
            <option value={""}>-- select --</option>
            {["lease", "special"].map((type, index) => (
              <option value={type} key={index}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

    </div>
   
  );
};

const mapDispatchToProps = {fetchStatus,fetchMalls,fetchFloors,fetchUnits};

export default connect(null,mapDispatchToProps)(Home);
