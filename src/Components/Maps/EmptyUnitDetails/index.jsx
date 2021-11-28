import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import {fetchDecisionHistory, uploadDecision, } from "../../../Store/actions";
import {resetErrors} from "../../../Store/actions/errors"
import Loading from "../../Loading";
import ShowMessage from "../../ShowMessage";
import UnitDetailStyle from "../UnitContractDetails/UnitDetailStyles"
import UnitDecisionHistory from "./EmptyDesicionHistory"
import UnitDetails from "./UnitDetails"
import UnitDecisionControl from "./EmptyDesicionControl"



const EmptyUnitDetails = ({
    unit,
    setUnitDetaiStatus,
    setUnitDetailForm,
    decision_types_data,
    fetchDecisionHistory,
    uploadDecision,
  }) => {
    
    const [decision, setDecision] = useState(String(decision_types_data.find((item) => item.title==="General").id));
    const [comment, setComment] = useState("");
    const [legal_involved, setLegal] = useState(false);
    const [finance_involved, setFinance] = useState(false);
    const [followup, setfollowup] = useState(true);
    const [loading, setLoading] = useState(false);
    const [openMessage, setMessageOpen] = useState(false);
    const [displayHistory, setHistory] = useState(false);
    const [assignContract, setAssignContract] = useState(false);
    
    if (decision_types_data.length === 0)
        return <Loading message={"Loading decision types...."} />;  
    
    const handleHistory = async ()=> {
      if (displayHistory) 
       setHistory(false);
      else
        {await fetchDecisionHistory(31);
        setHistory(true)};                
    };

    const handleAssignContract = async ()=> {
      setAssignContract(true);                
    };

    const handleCancel = () => {
      setUnitDetaiStatus(false);
      setUnitDetailForm(null);
      resetErrors();
    };
   
    const handleConfirm = () => {
      uploadDecision(
              {
                unit:unit.unit_id,
                decision:{decision},
                comment,
                legal_involved,
                finance_involved,
                account_manager: unit.account_manager,
                decision_taker:unit.account_manager,
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
                {(assignContract) ? <UnitDecisionHistory/>
                                  :
                                  ((displayHistory) ? <UnitDecisionHistory/>
                                                    : (<>
                                                      <UnitDetails unit={unit} />
                                                      <UnitDecisionControl
                                                        finance_involved={finance_involved}
                                                        setFinance={setFinance}
                                                        legal_involved={legal_involved}
                                                        setLegal={setLegal}
                                                        comment={comment}
                                                        setComment={setComment}
                                                      />
                                                      </>)
                                  )
                };
                <div className="btnContainer ">
                  <div className="row"> 
                    <div>
                      <div>
                        <button
                          className="submitButton"
                          style={{color:"blue"}}
                          type="button"
                          onClick={() => handleAssignContract()}
                        >
                          Assign Contract
                        </button>
                      </div>

                      {(unit.decisions==="True")
                      ?
                        <div> 
                          <button
                            className="submitButton"
                            style={{color:"black"}}
                            type="button"
                            onClick={() => handleHistory()}
                          >
                            {(!displayHistory) ? "Decision History" : "Back"}
                          </button>
                        </div> 
                      :<div style={{ height: 60 }}/>}
                    </div>

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
    decision_types_data:malls.decision_types_details,
  });
  
  const mapDispatchToProps = {
    uploadDecision,
    resetErrors,
    fetchDecisionHistory,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(EmptyUnitDetails);