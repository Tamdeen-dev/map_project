import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Button } from "../../Button";
import { DeviceSize } from "../../Responsive";

const AccessibilityContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`;

const Seperator = styled.div`
min-height: 22%;
width: 1px;
background-color: #C1C1C1;
`;

export function MapAccessMenu(props) {
  const {setAction,} = props;
  
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const clickBtn =()=>{setAction(true)};
               
  return (
    <>
    {!isMobile && (
    <AccessibilityContainer>
        <Button size={11} color={"#0000FF"} clickBtn={clickBtn} >Add Unit</Button>
        <Seperator />
        <Button size={11}  color={"#0000FF"} > Booking </Button>
        <Seperator />
        <Button size={11}  color={"#0000FF"}> Contracts </Button>
    </AccessibilityContainer>)}
    </>
  )
}