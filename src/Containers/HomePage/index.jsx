import React from "react";
import styled from "styled-components";
import { Marginer } from "../../Components/Marginer";
import { NavBar } from "../../Components/NavBar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../Components/PageContainer";
import { DeviceSize } from "../../Components/Responsive";
import { TopSection } from "./TopSection.jsx";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${DeviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  @media screen and (max-width: ${DeviceSize.mobile}px) {
    padding: 5px;
  }
`;

function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <NavBar useTransparent  action="login"/>
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
      
        </ContentContainer>
        <Marginer direction="vertical" margin="5em" />
      
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
    </PageContainer>
  );
}
export default HomePage;

