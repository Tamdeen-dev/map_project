import React,{ useEffect } from "react";
import { connect } from "react-redux";

import {fetchStatus,fetchMalls,fetchFloors,fetchUnits} from "../../Store/actions";
import MallsMenu from "../../Components/MallsMenu";


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
    <div>
      <MallsMenu />
    </div>
   
  );
};

const mapDispatchToProps = {fetchStatus,fetchMalls,fetchFloors,fetchUnits};

export default connect(null,mapDispatchToProps)(Home);
