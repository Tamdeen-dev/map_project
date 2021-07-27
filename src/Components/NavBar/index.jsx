import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { BrandLogo } from "../BrandLogo";
import { DeviceSize } from "../Responsive";
import { Button } from "../Button";
import { Marginer } from "../Marginer";
import {AccessMenu} from "../AccessMenu";

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

const AccessibilityContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`;

const AnchorLink = styled(Link)`
font-size: 12px;
color: #000000;
cursor: pointer;
text-decoration: none;
outline: none;
transition: all 200ms ease-in-out;

&:hover {
  filter: contrast(0.6);
}
`;

const Seperator = styled.div`
min-height: 35%;
width: 1px;
background-color: #fff;
`;

export function NavBar(props) {
  const { useTransparent,action} = props;
  
  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo/>
      {(action==="login") && (<AccessMenu />)}  
    </NavbarContainer>
  );
}
