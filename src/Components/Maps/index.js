import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ImageMapper from "react-image-mapper";
import HoveredArea from "./HoveredArea"
import {fetchCoding,} from "../../Store/actions";
import { InnerPageContainer, PageContainer } from "../PageContainer";
import { NavBar } from "../NavBar";
import { ServicesContainer } from "../StatisticCard";
import { Marginer } from "../Marginer";
import  Mapstyles from "./MapStyles/"
import CreateUnit from "./CreateUnit";


export const Maps = ({fetchCoding,status_data,floors_data,units_data,}) => {

  const {required_floor,} = useParams();
  
  const [hoveredArea, setArea] = useState(null);
   const [set_action, setAction] = useState(false); // if user click 'add unit' 
  const [newUnitElement, setAddElement] = useState([]); // variable used to fill in the points sequence
  const [pointsSquence, setPoints] = useState(""); 
  const [point_radius, setRadius] = useState(3);
  const [unitForm, setUnitForm] = useState(false);
  
  const [required_floor_map,] =useState(floors_data.find((floor) => floor.id=== Number(required_floor)).floor_image);
  const [units_floor,] = useState(units_data.filter((unit) => (unit.floor===Number(required_floor))));


  const [, forceUpdate] = useReducer((x) => x + 1, 0);

   
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
        }
      })
    }
   
    const access_menu = (unit_action)=>{return ((unit_action)? "unit":"map")}

    return (
      <PageContainer>
        <InnerPageContainer>
        <NavBar 
          useTransparent
          action= {access_menu(set_action)} 
          newUnitElement={newUnitElement}
          setAddElement={setAddElement}
          pointsSquence={pointsSquence}
          setPoints={setPoints}
          setAction={setAction}
          point_radius={point_radius}
          setRadius={setRadius}
          setUnitForm={setUnitForm}
          unitForm={unitForm}
          required_floor = {Number(required_floor)}
            />
      <Marginer direction="vertical" margin={5} />
      <ServicesContainer>
      {unitForm && (
      <CreateUnit
        newUnitElement={newUnitElement}
        setAddElement={setAddElement}
        pointsSquence={pointsSquence}
        required_floor={Number(required_floor)}
        setUnitForm={setUnitForm}
      />
    )}
    <Mapstyles>
    <div className={`map ${set_action && "crosshair"}`}>
        <ImageMapper 
          src={required_floor_map}
          width={1000}
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
        />
        {hoveredArea && (<HoveredArea hoveredArea={hoveredArea}
                                      getTipPosition={getTipPosition}
                         /> )}
       
    </div>
      </Mapstyles>
      </ServicesContainer>
    </InnerPageContainer>
    </PageContainer>
  );
};

const mapStateToProps = ({malls}) => ({
  status_data:malls.status_details,
  floors_data:malls.floors_details,
  units_data:malls.units_details,
});

const mapDispatchToProps = {fetchCoding,};

export default connect(mapStateToProps,mapDispatchToProps)(Maps);
