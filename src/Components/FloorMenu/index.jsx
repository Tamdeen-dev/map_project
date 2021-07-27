import React from "react";
import { connect } from "react-redux";
import FloorsMenuItem from "./FloorsMenuItem";
import { useParams } from "react-router-dom";
import {NavBar} from "../NavBar"
import { PageContainer } from "../PageContainer";
import { Marginer } from "../Marginer";
import {ServicesContainer,ServicesWrapper} from "../StatisticCard"


const FloorsMenu = ({status_data,floors_data,units_data,})=> {  
    const {required_floor_mall,} = useParams();

    let floor_statistic_data=[];
    status_data.forEach((unit_status) => {
        const mall_floors = floors_data.filter((floor) => (floor.mall===Number(required_floor_mall)));
        mall_floors.forEach((floor) =>{
          let total_floor_unit = 0
          const status = units_data.filter((unit) => (unit.status===unit_status.status_desc && unit.floor===floor.id));
          total_floor_unit =total_floor_unit+status.length

          floor_statistic_data.push({"floor_id": floor.id,
                                     "floor_mall": floor.mall,
                                     "floor_name": floor.floor_name,
                                     "status_desc" : unit_status.status_desc,
                                     "status_color": unit_status.unit_color,
                                     "color_transparent":unit_status.unit_transparent_color,
                                     "status_floor_quantity":total_floor_unit,
                                    });
        });
      });
    
    return( 
    <PageContainer>
      <NavBar useTransparent  action="floor"/>
      <Marginer direction="vertical" margin={80} />
      <ServicesContainer>
        <ServicesWrapper>
          {floors_data.filter((floor_mall) => (floor_mall.mall===Number(required_floor_mall)))
          .map((floor, index) =>(
          <FloorsMenuItem 
            required_floor_id={floor.id} 
            required_floor_name={floor.floor_name} 
            required_floor_img = {floor.floor_image}
            floor_statistic={floor_statistic_data.filter((status) => (status.floor_id===floor.id))}
            key={index}/>
          ))}
        </ServicesWrapper>    
      </ServicesContainer>
    </PageContainer>
    ) 
}

const mapStateToProps = ({malls}) => ({
  status_data:malls.status_details,
  floors_data:malls.floors_details,
  units_data:malls.units_details,
});

export default connect(mapStateToProps)(FloorsMenu);