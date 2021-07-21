import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import ImageMapper from "react-image-mapper";
import HoveredArea from "./HoveredArea"
import MapStyles from "./MapStyles";
import ActionNav from "./ActionNav";
import AddUnitNav from "./AddUnitNav";


export const Maps = ({units_data,status_data,required_floor_map,required_floor}) => {
  
  const [hoveredArea, setArea] = useState(null);
  const [open_unit_details, setOpenUnitDetails] = useState(false);
  const [set_action, setAction] = useState(false);
  const [newUnitElement, setAddElement] = useState([]);
  const [pointsSquence, setPoints] = useState(""); 
  const [point_radius, setRadius] = useState(20);


  const units_floor = units_data.filter((unit) => (unit.floor===required_floor))

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    // rerender page when adding zone coords points
    forceUpdate();
  }, [newUnitElement],);

  
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

  const get_list_of_zones = () => {
    // a function will return all zones recored in databse
    return units_floor.map((unit,index) => {
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
  return (
    <MapStyles>
      <ActionNav setAction={setAction}/>

      {set_action && (
            <AddUnitNav
              newUnitElement={newUnitElement}
              setAddElement={setAddElement}
              pointsSquence={pointsSquence}
              setPoints={setPoints}
              setAction={setAction}
              point_radius={point_radius}
              setRadius={setRadius}
              required_floor ={required_floor}
            />
          )}

      <div className={`map ${set_action && "crosshair"}`}>
        <ImageMapper 
          src={required_floor_map}
          width={1000}
          map={{
            name: "my-map",
            areas: [
              ...newUnitElement,
              ...get_list_of_zones(),
                   ],
            }}
          onImageClick={(evt) => onimgClick(evt)}
          onMouseEnter={(area) => enterArea(area)}
          onMouseLeave={() => leaveArea()}
        />
        {hoveredArea && (<HoveredArea
                                   hoveredArea={hoveredArea}
                                   getTipPosition={getTipPosition}
                         />)
        }
      </div>
    </MapStyles>
  )
}

const mapStateToProps = ({malls}) => ({
  status_data:malls.status_details,
  units_data:malls.units_details,
});

export default connect(mapStateToProps)(Maps);
