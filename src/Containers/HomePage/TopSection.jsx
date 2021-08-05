import React from "react";
import styled from "styled-components";
import { Marginer } from "../../Components/Marginer";
import { DeviceSize } from "../../Components/Responsive";

import TopSectionBackgroundImg from "../../Images/HomeBackground.jpg"

const TopSectionContainer = styled.div`
  width: 100%;
  height: 950px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;
  

  @media screen and (max-width: ${DeviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(245, 251, 253, 0.85);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 5%;
  justify-content: space-between;
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
   
  @media screen and (max-width: ${DeviceSize.mobile}px) {
    align-items: center;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #000000;
  font-weight: 700;
  font-size: 35px;

  @media screen and (max-width: ${DeviceSize.mobile}px) {
  font-size: 24px;
  }
`;

const BrandText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #000000;
  font-weight: 700;
  font-size: 50px;

  @media screen and (max-width: ${DeviceSize.mobile}px) {
  font-size: 39px;
  }
`;

export function TopSection(props) {
  const { children } = props;

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandText>Tamdeen Group</BrandText>
            <Marginer direction="vertical" margin={1} />
            <SloganText>Deliver the promise</SloganText>
          </LogoContainer>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
