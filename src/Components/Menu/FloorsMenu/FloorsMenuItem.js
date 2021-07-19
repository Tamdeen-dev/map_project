import React, { useState } from "react";
import MallsUnitStatus from "../MallsMenu/MallsUnitStatus"
import Maps from "../../Maps"
import "../MallsMenu/MallMenu.css"


const FloorsMenuItem = ({required_floor_id,required_floor_name,required_floor_img,floor_statistic})=> {

    const [activecomponent,SetActiveComponent] = useState("floor")
    const clickMall=() =>{SetActiveComponent("map")}
//
 if (activecomponent==="map") return (<div> <Maps required_floor_map={required_floor_img} 
                                                  required_floor={required_floor_id}
                                            /> 
                                        </div>);
    return( 
        <div>
            <div id="mal-lheader" >    
            <button className="btn" id="mall-txt"  onClick={clickMall} >{required_floor_name} </button>
            </div>        
            <div>
                {floor_statistic.map((status, index) =>(
                    <MallsUnitStatus  
                        units_status={status.status_desc} 
                        units_quantity={status.status_floor_quantity} 
                        units_color={status.status_color}
                        key={index}
                    />
                ))}
            </div>
         </div>
    )    
}

export default FloorsMenuItem;