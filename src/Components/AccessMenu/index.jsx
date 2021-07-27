import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Marginer } from "../Marginer";


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

export function AccessMenu(props) {
  const { useTransparent,action} = props;
  
  return (
        <AccessibilityContainer>
          <Link to="/malls">
            <Button size={11}>Signup</Button>
          </Link>
          <Marginer direction="horizontal" margin={8} />
          <AnchorLink to="/customer/access/signin">Login</AnchorLink>
        </AccessibilityContainer>
  );
}