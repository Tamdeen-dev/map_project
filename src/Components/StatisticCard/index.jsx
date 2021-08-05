import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left:1%
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 250px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  margin: 0.5em;
  margin-bottom: 1.3em;
`;

export const TopContainer = styled.div`  
  width: 100%;

`;

export const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  font-weight: 900;
  color: #000;
  text-align: start;
`;

export const SpecialistName = styled.h4`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 18px;
  font-weight: 400;
`;