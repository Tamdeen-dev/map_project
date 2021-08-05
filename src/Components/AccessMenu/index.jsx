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

export function AccessMenu() {
    return (
        <AccessibilityContainer>
          <Link to="/malls">
            <Button size={11} color={"#0000FF"} bcolor={"rgba(245, 251, 253, 0.85)"}>Signup</Button>
          </Link>
          <Marginer direction="horizontal" margin={8} />
          <AnchorLink to="/customer/access/signin">Login</AnchorLink>
        </AccessibilityContainer>
  );
}