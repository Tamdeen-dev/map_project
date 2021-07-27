import React from "react";
import { Link } from "react-router-dom";
import { Marginer } from "../Marginer";
import TopSectionBackgroundImg from "../../Images/TmdLogo.png"
import MallsUnitStatus from "../Menu/MallsMenu/MallsUnitStatus"
import {CardContainer,TopContainer,ServiceThumbnail,ContentContainer,Title,SpecialistName} from "../StatisticCard"


const MallsMenuItem = ({required_mall_id,required_mall_name,mall_statistic,})=> {                                              

  return( 
    <CardContainer>
      <Link to={`/floors/${required_mall_id}`}>
        <TopContainer>
            <ServiceThumbnail>
                <img src={TopSectionBackgroundImg} alt={required_mall_name} />
            </ServiceThumbnail>
        </TopContainer>
       </Link>
         <ContentContainer>
         <Title>{required_mall_name}</Title>
         <Marginer direction="vertical" margin={12} />
         <SpecialistName>
                {mall_statistic.map((status, index) =>(
                    <MallsUnitStatus  
                        units_status={status.status_desc} 
                        units_quantity={status.status_mall_quantity} 
                        units_color={status.status_color}
                        key={index}
                    />
                ))}
        </SpecialistName>
       </ContentContainer>
      </CardContainer>
    ); 
}

export default MallsMenuItem;
