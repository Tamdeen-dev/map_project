import React, { useState,} from "react";
import  {FormStyles} from "../../FormStyles";
import UnitDetailStyle from "../UnitContractDetails/UnitDetailStyles"
import { Marginer } from "../../Marginer"; 
import CreatUnit from "../UnitManagement/CreateUnit"
import UnitAccountManager from "../UnitManagement/UnitAccountManager";

const UnitManagement = ({
  unit,
  newUnitElement,
  setAddElement,
  required_floor,
  setUnitForm,
  setDraw,
}) => {

    const [accountManager, setAccountManager] = useState(false);
    
    return (   
      <UnitDetailStyle>                 
        <div className ="unit-form">
          <Marginer direction="vertical" margin={20}/>
          {(!accountManager) ? <CreatUnit 
                                  unit={unit}
                                  newUnitElement={newUnitElement}
                                  setAddElement={setAddElement}
                                  required_floor={Number(required_floor)}
                                  setUnitForm={setUnitForm}
                                  setDraw ={setDraw}
                                  setAccountManager={setAccountManager}
                                />
                              : <UnitAccountManager unit={unit}
                                                    setUnitForm={setUnitForm}
                                                    setAccountManager={setAccountManager}/>
          }
        </div>
    </UnitDetailStyle>  
  );
};


export default UnitManagement;