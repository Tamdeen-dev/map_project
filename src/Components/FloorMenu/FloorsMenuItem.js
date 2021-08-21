import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {selectedFloor} from "../../Store/actions"
import { Marginer } from "../Marginer";
import MallsUnitStatus from "../Menu/MallsMenu/MallsUnitStatus";
import {CardContainer,TopContainer,ServiceThumbnail,ContentContainer,Title,SpecialistName} from "../StatisticCard"



const FloorsMenuItem = ({selectedFloor,
                         floors_data,
                         required_floor_id,
                         required_floor_name,
                         required_floor_img,
                         floor_statistic})=> {

    const storeFlore = () => {
        selectedFloor(floors_data.filter((floor) => floor.id===required_floor_id))
      };

    return( 
        <CardContainer>
          <TopContainer>
              <ServiceThumbnail>
              <Link to={`/maps/${required_floor_id}`}>
                  <img src={required_floor_img} alt={required_floor_name} onClick={() => storeFlore()} />
              </Link>
              </ServiceThumbnail>
          </TopContainer>
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

const mapStateToProps = ({malls}) => ({
    floors_data:malls.floors_details,
  });
  
  const mapDispatchToProps = {selectedFloor,};
  
  export default connect(mapStateToProps,mapDispatchToProps)(FloorsMenuItem);