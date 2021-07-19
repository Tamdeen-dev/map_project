import React from "react";

const HoveredArea = ({ hoveredArea, getTipPosition }) => {
  return (
    <span
      className="unit-description"
      style={{
        ...getTipPosition(hoveredArea),
      }}
    >
      <div style={{fontSize:15}}>
        <div>Unit: {hoveredArea.name}</div>
        {hoveredArea.unit_client && (
          <div>
            {hoveredArea.unit_company && (<div> Tenant: {hoveredArea.unit_company} </div> )}
            <div>Brand: {hoveredArea.unit_client}</div>
          </div>
        )}
      </div>
    </span>
  );
};

export default HoveredArea;