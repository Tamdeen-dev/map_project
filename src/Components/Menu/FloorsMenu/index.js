import React from "react";
import { connect } from "react-redux";
import FloorsMenuItem from "./FloorsMenuItem"


const FloorsMenu = ({required_floor_mall,floors_data,floor_statistic})=> {  
    return( 
      <div className="container" style={{marginTop:10}}>
        <div className="rows">
          {floors_data.filter((floor_mall) => (floor_mall.mall===required_floor_mall))
          .map((floor, index) =>(
          <div className="row">
            <FloorsMenuItem 
              required_floor_id={floor.id} 
              required_floor_name={floor.floor_name} 
              required_floor_img = {floor.floor_image}
              floor_statistic={floor_statistic.filter((status) => (status.floor_id===floor.id))}
              key={index}/>
          </div>
          ))}
        </div>      
      </div>
    ) 
}

const mapStateToProps = ({malls}) => ({
  floors_data:malls.floors_details,
});

export default connect(mapStateToProps)(FloorsMenu);