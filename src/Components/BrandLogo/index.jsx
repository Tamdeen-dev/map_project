import React from "react";
import styled from "styled-components";

import LogoImg from "../../Images/GROUP E LOGO.png"
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "5em")};
  height: ${({ size }) => (size ? size + "px" : "3.3em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#A9A9A9")};
  font-weight: 900;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props;

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Tamdeen logo" />
          </LogoImage>
        </Link>
      )}
      <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>
          Tamdeen Group
        </LogoTitle>
      </StyledLink>
    </BrandLogoContainer>
  );
}
