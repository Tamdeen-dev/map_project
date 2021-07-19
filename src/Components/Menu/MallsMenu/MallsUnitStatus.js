import React from "react";

const MallsUnitStatus = ({units_status,units_quantity,units_color})=> {
    
    return( 
        <div  className="table-responsive-sm">
            <table >
                <tbody>
                    <tr> 
                        <td id="status" style={{backgroundColor:'rgba('+units_color+')'}}> {units_status}</td>
                        <td id="qnty">{units_quantity}</td>
                    </tr>
                </tbody>
            </table>
        </div> 
       
    ) 
}
export default MallsUnitStatus;


      