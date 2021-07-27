import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Marginer } from "../Marginer";
import MallsUnitStatus from "../Menu/MallsMenu/MallsUnitStatus";
import {CardContainer,TopContainer,ServiceThumbnail,ContentContainer,Title,SpecialistName} from "../StatisticCard"


const FloorsMenuItem = ({required_floor_id,required_floor_name,required_floor_img,floor_statistic})=> {
    return( 
        <CardContainer>
        <Link to={`/maps/${required_floor_id}`}>
          <TopContainer>
              <ServiceThumbnail>
                  <img src={required_floor_img} alt={required_floor_name} />
              </ServiceThumbnail>
          </TopContainer>
         </Link>
         <ContentContainer>
         <Title>{required_floor_name}</Title>
         <Marginer direction="vertical" margin={12} />
         <SpecialistName>
                {floor_statistic.map((status, index) =>(
                    <MallsUnitStatus  
                        units_status={status.status_desc} 
                        units_quantity={status.status_floor_quantity} 
                        units_color={status.status_color}
                        key={index}
                    />
                ))}
             </SpecialistName>
       </ContentContainer>
      </CardContainer>
    )    
}

export default FloorsMenuItem;