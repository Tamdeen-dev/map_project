import styled from "styled-components"
import {Button} from "../../Button"

const AccessibilityContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`;

export const UnitAccessMenu = ({
  newUnitElement,
  setAddElement,
  setPoints,
  setAction,
  point_radius,
  setRadius,
  unitForm,
  setUnitForm, 
  set_draw,
  setDraw, 
  setSelectedUnit,                       
}) => {
 
  const draw_unit = () => {
    // function to connect all points drew
    let area_from_points = [];
    if (newUnitElement.length >2) {
    newUnitElement.forEach((point) => {
      area_from_points.push(point.coords[0], point.coords[1]);
    });

    // if there are points drew
    area_from_points.length > 0 &&
      setAddElement([
        {
          name: "Customize Area",
          preFillColor: "MediumSeaGreen",
          fillColor: "blue",
          shape: "poly",
          coords: area_from_points,
        },
      ]);
      setDraw(true);
      setSelectedUnit(null);
    }
  };

  const clear = () => {
    // reset the zone coords points
    setAddElement([]);
    setPoints("");
    setDraw(false);
    setSelectedUnit(null);
  };

  const closeNav = () => {
    // reset the variables when closing the nav
    setAddElement([]);
    setPoints("");
    setAction(false);
    setUnitForm(false);
    setDraw(false);
    setSelectedUnit(null);

  };

  const openCreateUnitForm = () => {
    // reset the zone coords points
    setUnitForm(true);
    setSelectedUnit(null);
  };


  const setPointSize = (value) => {
    if (!value || value < 1 || value > 20) setRadius(3);
    else setRadius(value);
  };
  return (
      <AccessibilityContainer>
        {!set_draw && (<Button size={11} color={"#0000FF"} clickBtn={() => draw_unit()}> Draw Area </Button>)}
        <Button size={11} color={"#0000FF"} clickBtn={() => !unitForm &&  clear()} > Clear Points </Button>
        {newUnitElement.length === 1 && newUnitElement[0].coords.length > 3 && (
            <Button size={11} color={"#0000FF"} clickBtn={() => !unitForm && openCreateUnitForm()}> Create Unit </Button>
        )}
        <Button size={11} color={"#0000FF"} clickBtn={() => !unitForm && closeNav()}> Cancel </Button>
          
        <input style={{ border:"none", 
                          color:"#FF0000", 
                          fontweight:"900",
                          fontSize:"18px",
                          backgroundcolor:"#FFFFFF",
                          textAlign: "center",
                        }}
            type="number"
            name="point_radius"
            value={point_radius}
            min={1}
            max={20}
            onChange={(event) => setPointSize(event.target.value)}
          />
         </AccessibilityContainer>
        
  );
};

export default UnitAccessMenu;
