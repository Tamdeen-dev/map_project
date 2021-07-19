
import React from "react";
import { connect } from "react-redux";
import Loading from "../../Loading";
import MallsMenuItem from "./MallsMenuItem"
import "./MallMenu.css"

const MallsMenu = ({status_data,malls_data,floors_data,units_data})=> {

  if (units_data.length === 0)
    return <Loading message={"Loading Uints...."} />;  
  if (floors_data.length === 0)
    return <Loading message={"Loading Floors...."} />;  
  if (malls_data.length === 0)
    return <Loading message={"Loading Malls...."} />;  
  if (status_data.length === 0)
    return <Loading message={"Loading Status...."} />;  


  let mall_statistic_data=[];
  let floor_statistic_data=[];
  
  status_data.forEach((unit_status) => {
    
    malls_data.forEach((mall) => {
      let total_mall_unit = 0;
      const mall_floors = floors_data.filter((floor) => (floor.mall===mall.id));
      mall_floors.forEach((floor) =>{
        let total_floor_unit = 0
        const status = units_data.filter((unit) => (unit.status===unit_status.status_desc && unit.floor===floor.id));
        total_floor_unit =total_floor_unit+status.length
        total_mall_unit =total_mall_unit+status.length

        floor_statistic_data.push({"floor_id": floor.id,
                                   "floor_mall": floor.mall,
                                   "floor_name": floor.floor_name,
                                   "status_desc" : unit_status.status_desc,
                                   "status_color": unit_status.unit_color,
                                   "color_transparent":unit_status.unit_transparent_color,
                                   "status_floor_quantity":total_floor_unit,
                                  });
      });
      mall_statistic_data.push({"mall_id": mall.id,
                                "status_desc" : unit_status.status_desc,
                                "status_color": unit_status.unit_color,
                                "color_transparent":unit_status.unit_transparent_color,
                                "status_mall_quantity":total_mall_unit,
                              });
    });
    
  });
  return( 
    <div className="container" style={{marginTop:10}}>
      <div className="rows">
        {malls_data.map((mall, index) =>(
          <div className="row">
            <MallsMenuItem 
              required_mall_id={mall.id} 
              required_mall_name={mall.mall_name}
              mall_statistic={mall_statistic_data.filter((status) => (status.mall_id===mall.id))}
              floors_statistic={floor_statistic_data.filter((status) => (status.floor_mall===mall.id))}
              key={index}/>
          </div>
          ))}
        </div>      
      </div>
    ) 
}

const mapStateToProps = ({malls}) => ({
    status_data:malls.status_details,
    malls_data:malls.malls_details,
    floors_data:malls.floors_details,
    units_data:malls.units_details,
  });

export default connect(mapStateToProps)(MallsMenu);
