import React from "react";
import { connect } from "react-redux";

export const ContractDetail = ({unit,contract_data}) => {

  const clientName = () => {
    return(
   (unit.unit_company) 
    ? (unit.unit_company + " - " + unit.unit_client) 
    : (unit.unit_client) )
  }

  return (
    <div>
      <div className= "frame center-content">
        <div className="row mt2 ">
          <div className="col-12">
            <div  className= "displayfield">
              <span style={{color:"blue"}}> {clientName()} </span> 
            </div>
          </div>
        </div>
     
        <div className="row mt2 ">
           <div className="col-8">
            <div  className= "displayfield">
              <span style={{color:"blue"}}> {contract_data.units} </span> 
            </div>
          </div>
          <div className="col-4" style={{textAlign:"center"}}>
              <div  className= "displayfield">
              <span style={{color:"blue"}}>{contract_data.rented_size} <span className="displayremark"> /M2.</span> </span>
            </div>
          </div>
        </div>
      </div>

      <div className= "frame center-content">
        <div className="row mt2">
          <div className="col-3 label">
            Rate 
          </div>
          <div className="col-9" style={{textAlign:"center"}}>
            <div  className= "displayfield">
              <span style={{color:"blue"}}>{contract_data.rate} <span className="displayremark"> KD/M2</span> </span>
            </div>
          </div>
        </div>

        <div className="row mt1">
          <div className="col-3 label">
            Services
          </div>
          <div className="col-9" style={{textAlign:"center"}}>
            <div  className= "displayfield">
              <span style={{color:"blue"}}>{contract_data.service_charge} <span className="displayremark">%</span> </span>
            </div>
          </div>
        </div>

        <div className="row mt1">
          <div className="col-3 label">
            Market levy
          </div>
          <div className="col-9" style={{textAlign:"center"}}>
            <div  className= "displayfield">
              <span style={{color:"blue"}}>{contract_data.marketing_levy} <span className="displayremark"> KD/M2</span> </span>
            </div>
          </div>
        </div>


        <div className="row mt2">
          <div className="col-3 label">
            Total Rent
          </div>
          <div className="col-9" style={{textAlign:"center"}}>
            <div  className= "displayfield">
              <span style={{color:"blue"}}>{contract_data.rent_amount} <span className="displayremark"> KD</span> </span>
            </div>
          </div>
        </div>
      </div>

      <div className= "frame center-content">
        <div className="row mt2">
          <div className="col-3 label">
            Expiry
          </div>
          <div className="col-9">
            <div className= "displayfield">
              <span style={{color:"blue"}}>{contract_data.expiry_date} &nbsp;&nbsp; 
                <span className="displayremark"> 
                  After
                </span>
                <span style={{color:"blue"}}>
                &nbsp; {contract_data.months_left_bofore_expiry_date} &nbsp;
                </span>
                <span className="displayremark">
                 month(s).
                </span> 
              </span>
              </div>
          </div>
        </div>

        <div className="row mt2">
          <div className="col-3 label">
            Notification
          </div>
          <div className="col-9">
            <div className= "displayfield">
              <span style={{color:"blue"}}>{contract_data.notification_date} &nbsp;&nbsp; 
                <span className="displayremark"> 
                  After
                </span>
                <span style={{color:"blue"}}>
                  &nbsp; {contract_data.notification_period} &nbsp;
                </span>
                <span className="displayremark">
                 month(s)
                </span> 
              </span>
            </div>
          </div>
        </div>
      </div>
     
      <div className= "frame center-content">
        <div className="row mt2">
          <div className="col-12">
            <div  className= "displayfield">
              <span style={{color:"blue"}}>{contract_data.account_manager_name} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({malls}) => ({
    contract_data:malls.contract_details,
  });
  
export default connect(mapStateToProps,)(ContractDetail);
