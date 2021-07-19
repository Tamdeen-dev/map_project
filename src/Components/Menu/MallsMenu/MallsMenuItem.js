import React, { useState } from "react";
import MallsUnitStatus from "./MallsUnitStatus"
import FloorsMenu from "../FloorsMenu/"
import "./MallMenu.css"


const MallsMenuItem = ({required_mall_id,required_mall_name,mall_statistic,floors_statistic})=> {
    
    const [activecomponent,SetActiveComponent] = useState("mall")
    
    const clickMall=() =>{SetActiveComponent("floor")}


    
    if (activecomponent==="floor") return(<div> <FloorsMenu required_floor_mall ={required_mall_id}
                                                            floor_statistic={floors_statistic}
                                                /> 
                                                </div>)
    return( 
        <div>
            <div id="mal-lheader">    
            <button className="btn" id="mall-txt" onClick={clickMall} > {required_mall_name} </button>
            </div>        
            <div>
                {mall_statistic.map((status, index) =>(
                    <MallsUnitStatus  
                        units_status={status.status_desc} 
                        units_quantity={status.status_mall_quantity} 
                        units_color={status.status_color}
                        key={index}
                    />
                ))}
            </div>
         </div>
    )    
}

export default MallsMenuItem;
