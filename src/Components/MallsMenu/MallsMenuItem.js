import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {selectedMall} from "../../Store/actions";
import { Marginer } from "../Marginer";
import TopSectionBackgroundImg from "../../Images/TmdLogo.png"
import MallsUnitStatus from "../Menu/MallsMenu/MallsUnitStatus"
import {CardContainer,TopContainer,ServiceThumbnail,ContentContainer,Title,SpecialistName} from "../StatisticCard"


const MallsMenuItem = ({selectedMall,malls_data,required_mall_id,required_mall_name,mall_statistic,})=> {       
  
  const storeMallData = () => {
    selectedMall(malls_data.filter((mall) => mall.id===required_mall_id))
  };

  return( 
    <CardContainer>
        <TopContainer>
            <ServiceThumbnail>
            <Link to={`/floors/${required_mall_id}`}>
                <img src={TopSectionBackgroundImg} alt={required_mall_name} onClick={() => storeMallData()} />
            </Link>
            </ServiceThumbnail>
        </TopContainer>
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

const mapStateToProps = ({malls}) => ({
  malls_data:malls.malls_details,
});

const mapDispatchToProps = {selectedMall};

export default connect(mapStateToProps,mapDispatchToProps) (MallsMenuItem);
