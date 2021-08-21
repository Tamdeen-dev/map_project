import React,{ useEffect } from "react";
import { connect } from "react-redux";

import {fetchStatus,fetchMalls,fetchFloors,fetchUnits} from "../../Store/actions";
import MallsMenu from "../../Components/MallsMenu";


const Malls = ({fetchStatus,fetchMalls,fetchFloors,fetchUnits})=> {

  useEffect(() => {
    fetchStatus();
  }, );

  useEffect(() => {
    fetchMalls();
  }, );
  
  useEffect(() => {
    fetchFloors();
    }, );

  useEffect(() => {
    fetchUnits();
    }, );


  return (
    <div>
      <MallsMenu />
    </div>
   
  );
};

const mapDispatchToProps = {fetchStatus,fetchMalls,fetchFloors,fetchUnits};

export default connect(null,mapDispatchToProps)(Malls);
