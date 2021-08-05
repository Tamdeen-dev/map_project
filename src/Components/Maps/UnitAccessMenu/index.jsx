import styled from "styled-components"

const BtnNavBar = styled.button`
.btn {
  border: none;
  outline: none;
  color: #0000FF;
  padding: 6px 1em;
  font-size:11px;
  font-weight: 600;
  border-radius: 3px;
  background-color:#FFFFFF ;
  transition: all 200ms ease-in-out;
}
.btn:hover {
  background-color: #696969;
}
.btn:focus {
  outline: none;
}
`;

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
  setUnitForm,                           
  
}) => {
 
  const draw_unit = () => {
    // function to connect all points drew
    let area_from_points = [];
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
  };

  const clear = () => {
    // reset the zone coords points
    setAddElement([]);
    setPoints("");
  };

  const closeNav = () => {
    // reset the variables when closing the nav
    setAddElement([]);
    setPoints("");
    setAction(false);
    setUnitForm(false);

  };

  const openCreateUnitForm = () => {
    // reset the zone coords points
    setUnitForm(true);
  };


  const setPointSize = (value) => {
    if (!value || value < 1 || value > 20) setRadius(3);
    else setRadius(value);
  };
  return (
      <AccessibilityContainer>
      <BtnNavBar>
          <button className="btn" onClick={() => draw_unit()}> Draw Area </button>
          <button className="btn" onClick={() => clear()} > Clear Points </button>
          {newUnitElement.length === 1 && newUnitElement[0].coords.length > 3 && (
            <button className="btn" onClick={() => openCreateUnitForm()}> Create Unit </button>
          )}
          <button className="btn" onClick={() => closeNav()}>Cancel</button>
          
          
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
         </BtnNavBar>
         </AccessibilityContainer>
        
  );
};

export default UnitAccessMenu;
