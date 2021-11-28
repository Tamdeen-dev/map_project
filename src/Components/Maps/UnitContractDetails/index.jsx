import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import {fetchDecisionHistory, uploadDecision, } from "../../../Store/actions";
import {resetErrors} from "../../../Store/actions/errors"
import Loading from "../../Loading";
import ShowMessage from "../../ShowMessage";
import UnitDetailStyle from "./UnitDetailStyles"
import ContractDecisionHistory from "./ContractDecisionHistory"
import ContractDetails from "./ContractDetails"
import ContractDecisionControl from "./ContractDecisionControl"
import TopSectionBackgroundImg from "../../../Images/TmdLogo.png"


const UnitContractDetails = ({
    unit,
    setUnitDetaiStatus,
    setUnitDetailForm,
    contract_data,
    decision_types_data,
    fetchDecisionHistory,
    uploadDecision,
  }) => {
    
    const [decision, setDecision] = useState("");
    const [comment, setComment] = useState("");
    const [legal_involved, setLegal] = useState(false);
    const [finance_involved, setFinance] = useState(false);
    const [followup, setfollowup] = useState(true);
    const [loading, setLoading] = useState(false);
    const [openMessage, setMessageOpen] = useState(false);
    const [displayHistory, setHistory] = useState(false);
    
    if (decision_types_data.length === 0)
        return <Loading message={"Loading decision types...."} />;  
    if (contract_data.length === 0)
        return <Loading message={"Loading contract details...."} />;  

    const handleHistory = async ()=> {
      if (displayHistory) 
       setHistory(false);
      else
        {await fetchDecisionHistory(unit.unit_contract);
        setHistory(true)};                
    };

    const handleCancel = () => {
      setUnitDetaiStatus(false);
      setUnitDetailForm(null);
      resetErrors();
    };
   
    const handleConfirm = () => {
      uploadDecision(
              {
                decision,
                comment,
                legal_involved,
                finance_involved,
                contract: unit.unit_contract,
                unit:unit.unit_id,
                account_manager: contract_data.account_manager,
                decision_taker:contract_data.account_manager,
                followup,
              },
              setDecision,
              setComment,
              setLegal,
              setFinance,
              setLoading,
              setfollowup,
              setMessageOpen,
            );
          };

     return (
            <UnitDetailStyle>
              <div className ="unit-form" >
                {loading && <Loading message={"Please wait...."} />}
                {openMessage && (
                  <ShowMessage
                    setMessageOpen={setUnitDetaiStatus}
                    message={`Decision has been noted:\n"${comment}"`}
                    width={"w-60"}
                  />
                )}
               
                <img
                  src={(contract_data.brand_image) ? contract_data.brand_image:TopSectionBackgroundImg }
                  className="db w-95"
                  alt={`${unit.unit_client}`}
                  style={{ height:320,padding:"10px 10px 10px 10px"}}
                />
                {(displayHistory) ? <ContractDecisionHistory/>
                                  : (<>
                                      <ContractDetails unit={unit} />
                                      <ContractDecisionControl
                                          unit = {unit}
                                          decision={decision}
                                          setDecision={setDecision}
                                          finance_involved={finance_involved}
                                          setFinance={setFinance}
                                          legal_involved={legal_involved}
                                          setLegal={setLegal}
                                          comment={comment}
                                          setComment={setComment}
                                      />
                                    </>)
                }
                <div className="btnContainer ">
                  <div className="row"> 
                    {(contract_data.decisions==="True")
                    ?
                      <div > 
                        <button
                          className="submitButton"
                          style={{color:"black"}}
                          type="button"
                          onClick={() => handleHistory()}
                        >
                          {(!displayHistory) ? "Decision History" : "Back"}
                        </button>
                      </div> 
                    : <div style={{ height: 60 }} />}

                    <div className="right-content"> 
                      <button
                        className="submitButton"
                        style={{color: "red"}}
                        type="button"
                        onClick={() => handleCancel()}
                      >
                        Cancel
                      </button>

                      {!displayHistory && (
                        <button
                          className="submitButton"
                          style={{color:"green"}}
                          type="button"
                          onClick={() => handleConfirm()}
                        >
                          Confirm
                        </button>
                      )}
                    </div>
                  </div>  
                </div>
              </div>
            </UnitDetailStyle>
          );
  }

  const mapStateToProps = ({malls}) => ({
    contract_data:malls.contract_details,
    decision_types_data:malls.decision_types_details,
  });
  
  const mapDispatchToProps = {
    uploadDecision,
    resetErrors,
    fetchDecisionHistory,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(UnitContractDetails);