import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ImageMapper from "react-image-mapper";
import HoveredArea from "./HoveredArea"
import {fetchCoding,fetchDecisionTypes,retrieveContract} from "../../Store/actions";
import { InnerPageContainer, PageContainer } from "../PageContainer";
import { NavBar } from "../NavBar";
import { Marginer } from "../Marginer";
import  Mapstyles from "./MapStyles/"
import CreateUnit from "./CreateUnit";
import UnitContractDetails from "./UnitContractDetails";
import EmptyUnitDetails from "./EmptyUnitDetails";


export const Maps = ({fetchCoding,
                     fetchDecisionTypes,
                     retrieveContract,
                     status_data,
                     floors_data,
                     units_data,}) => {

  const {required_floor,} = useParams();
  
  const [hoveredArea, setArea] = useState(null);
  const [set_action, setAction] = useState(false); 
  const [newUnitElement, setAddElement] = useState([]); 
  const [pointsSquence, setPoints] = useState(""); 
  const [point_radius, setRadius] = useState(3);
  const [unitForm, setUnitForm] = useState(false);
  
  const [unitDetailForm,setUnitDetailForm] = useState(null);
  const [unitDetaiStatus, setUnitDetaiStatus]= useState(false);
  
  const [set_draw,setDraw ] = useState(false);
  const [required_floor_map,] =useState(floors_data.find((floor) => floor.id=== Number(required_floor)).floor_image);
  
  const units_floor= units_data.filter((unit) => (unit.floor===Number(required_floor)));


  const [, forceUpdate] = useReducer((x) => x + 1, 0);

   
  useEffect(() => {
    fetchDecisionTypes();
  }, [fetchDecisionTypes]);

  useEffect(() => {
    fetchCoding();
  }, [fetchCoding],);

  useEffect(() => {
    forceUpdate();
  }, [newUnitElement],[units_data],);

  
  const enterArea = (area) => {
    setArea(area);
  };
  const leaveArea = () => {
    setArea(null);
  };

  const getTipPosition = (area) => {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };
  
  const onimgClick = async (evt) => {
    
    if (!set_draw) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    let point = newUnitElement.concat({
      name: `(${coords.x},${coords.y})`,
      preFillColor: "red",
      fillColor: "green",
      shape: "circle",
      coords: [coords.x, coords.y, point_radius],
    });

   if (set_action) {
      setPoints(`${pointsSquence}(${coords.x},${coords.y})`);
      setAddElement(point);
   }
    }
  };

  const get_list_of_units= () => {return units_floor.map((unit,index) => {
        return {
          name: unit.unit_name,
          shape: unit.shape,
          coords:
            (!unit.coords && [unit.x_coord, unit.y_coord, unit.radius]) ||
            JSON.parse(`[${unit.coords}]`),
          preFillColor: 'rgba('+status_data.find((status) => status.status_desc=== unit.status).unit_color+')',
          fillColor: 'rgba('+status_data.find((status) => status.status_desc=== unit.status).unit_color+')',
          unit_id :unit.id,
          unit_color: 'rgba('+status_data.find((status) => status.status_desc=== unit.status).unit_color+')',
          unit_status: unit.status,
          unit_client: unit.client,
          unit_company:unit.company,
          unit_contract:unit.cnt_id,
          unit_size:unit.unit_size,
          unit_type:unit.unit_type,
          unit_utilization :unit.unit_classification,
        }
      })
    };
   
    const openUnitDetailForm = async (area)=> {
      setUnitDetaiStatus(true)
      if (area.unit_contract)
        { 
          (await retrieveContract(area.unit_contract));
          setUnitDetailForm(<UnitContractDetails unit={area} setUnitDetaiStatus= {setUnitDetaiStatus} setUnitDetailForm={setUnitDetailForm}/>);
        }
      else
        setUnitDetailForm(<EmptyUnitDetails unit={area} setUnitDetaiStatus= {setUnitDetaiStatus} setUnitDetailForm={setUnitDetailForm}/>);  
    };

    const clickArea = (area) => {
        (!unitDetaiStatus) && (!set_action) && openUnitDetailForm(area)
     };
   
    const access_menu = (unit_action)=>{return ((unit_action)? "unit":"map")}

    return (
         <PageContainer>
        <NavBar 
          useTransparent
          action= {access_menu(set_action)} 
          newUnitElement={newUnitElement}
          setAddElement={setAddElement}
          setPoints={setPoints}
          setAction={setAction}
          point_radius={point_radius}
          setRadius={setRadius}
          setUnitForm={setUnitForm}
          unitForm={unitForm}
          set_draw={set_draw}
          setDraw={setDraw}
          unitDetaiStatus={unitDetaiStatus}
            />
     <InnerPageContainer>
   <Mapstyles>
      <Marginer direction="vertical" margin={10} /> 

      {unitDetaiStatus &&  unitDetailForm}
      
      {unitForm && (
      <CreateUnit
        newUnitElement={newUnitElement}
        setAddElement={setAddElement}
        pointsSquence={pointsSquence}
        required_floor={Number(required_floor)}
        setUnitForm={setUnitForm}
        setDraw ={setDraw}
      />
    )}
    <div className={`map ${set_action && !set_draw && "crosshair"}`}>
        <ImageMapper 
          src={required_floor_map}
          width={1000}
          imgWidth={1000}
          map={{
            name: "my-map",
            areas: [
              ...newUnitElement,
              ...get_list_of_units(),
                   ],
            }}
          onImageClick={(evt) => onimgClick(evt)}
          onMouseEnter={(area) => enterArea(area)}
          onMouseLeave={() => leaveArea()}
          onClick={(area) => clickArea(area)}
        />
        {hoveredArea && (<HoveredArea hoveredArea={hoveredArea}
                                      getTipPosition={getTipPosition}
                         /> )}
       
    </div>
    </Mapstyles>
      </InnerPageContainer>
      </PageContainer>
      
    
  );
};

const mapStateToProps = ({malls}) => ({
  status_data:malls.status_details,
  floors_data:malls.floors_details,
  units_data:malls.units_details,
  
});

const mapDispatchToProps = {fetchCoding,fetchDecisionTypes,retrieveContract,};

export default connect(mapStateToProps,mapDispatchToProps)(Maps);