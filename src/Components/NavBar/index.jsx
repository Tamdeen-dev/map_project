import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../BrandLogo";
import {AccessMenu} from "../AccessMenu";
import {MapAccessMenu} from "../Maps/MapAccessMenu";
import {UnitAccessMenu} from "../Maps/UnitAccessMenu";


const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "rgba(245, 251, 253, 0.9)"};
`;


export function NavBar(props) {
  const { useTransparent,
          action, 
          newUnitElement,
          setAddElement,
          setPoints,
          setAction,
          point_radius,
          setRadius,
          unitForm,
          setUnitForm,
          set_draw,
          setDraw} = props;

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo/>
      {(action==="login") && (<AccessMenu />)}
      {(action==="map") && (<MapAccessMenu setAction={setAction}/>)} 
      {(action==="unit") && (<UnitAccessMenu newUnitElement={newUnitElement}
                                             setAddElement={setAddElement}
                                             setPoints={setPoints}
                                             setAction={setAction}
                                             point_radius={point_radius}
                                             setRadius={setRadius}
                                             unitForm={unitForm}
                                             setUnitForm={setUnitForm}
                                             set_draw={set_draw}
                                             setDraw={setDraw}
                                             />)} 
    </NavbarContainer>
  );
}
