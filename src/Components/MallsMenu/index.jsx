import React from "react";
import styled from "styled-components";
import { connect} from "react-redux";
import Loading from "../Loading";
import MallsMenuItem from "../MallsMenu/MallsMenuItem";
import {NavBar} from "../NavBar"
import { PageContainer } from "../PageContainer";
import { Marginer } from "../Marginer";
import {ServicesContainer,ServicesWrapper} from "../StatisticCard"


const MallsMenu = ({status_data,malls_data,floors_data,units_data})=> {

  if (units_data.length === 0)
    return <Loading message={"Loading Uints...."} />;  
  if (floors_data.length === 0)
    return <Loading message={"Loading Floors...."} />;  
  if (malls_data.length === 0)
    return <Loading message={"Loading Malls...."} />;  
  if (status_data.length === 0)
    return <Loading message={"Loading Status...."} />;  


  let mall_statistic_data=[];
  
  status_data.forEach((unit_status) => {
    
    malls_data.forEach((mall) => {
      let total_mall_unit = 0;
      const mall_floors = floors_data.filter((floor) => (floor.mall===mall.id));
      mall_floors.forEach((floor) =>{
        const status = units_data.filter((unit) => (unit.status===unit_status.status_desc && unit.floor===floor.id));
        total_mall_unit =total_mall_unit+status.length
      });
      mall_statistic_data.push({"mall_id": mall.id,
                                "status_desc" : unit_status.status_desc,
                                "status_color": unit_status.unit_color,
                                "color_transparent":unit_status.unit_transparent_color,
                                "status_mall_quantity":total_mall_unit,
                              });
    });
    
  });
  return( 
    <PageContainer>
      <NavBar useTransparent  action="mall"/>
      <Marginer direction="vertical" margin={80} />
      <ServicesContainer>
        <ServicesWrapper>
            {malls_data.map((mall, index) =>(
                <MallsMenuItem 
                  required_mall_id={mall.id} 
                  required_mall_name={mall.mall_name}
                  mall_statistic={mall_statistic_data.filter((status) => (status.mall_id===mall.id))}
                  key={index}/>
            ))}
        </ServicesWrapper>
      </ServicesContainer>
    </PageContainer>
    );
}

const mapStateToProps = ({malls}) => ({
    status_data:malls.status_details,
    malls_data:malls.malls_details,
    floors_data:malls.floors_details,
    units_data:malls.units_details,
  });

export default connect(mapStateToProps)(MallsMenu);
