import React , {useEffect, useState} from "react";
import { connect } from "react-redux";


export const ContractDecisionControl = ({
  unit,
  decision,
  setDecision,
  finance_involved,
  setFinance,
  legal_involved,
  setLegal,
  comment,
  setComment,
  decision_types_data,
  selectedMall_data,
  selectedFloor_data,
  contract_data,
  errors,

}) => {

  const [decisionLookup,setDecisionLookup] = useState([]);
  
  const DecisionSource = async ()=>{
    let tempSource =[];
    (unit.unit_status==="Empty") 
      ? tempSource = await decision_types_data.filter((type) => type.empty===true)
      : (unit.unit_status==="Near Expiry" || unit.unit_status==="Expired" ) 
      ? tempSource = await decision_types_data.filter((type) => type.nearly_expired===true)
      : (unit.unit_status==="Leased" || unit.unit_status==="Agreement") 
      ? tempSource = await decision_types_data.filter((type) => type.lease===true)
      : tempSource = await decision_types_data.filter((type) => type.others===true)

    tempSource = tempSource.filter((type) => (type.months===0) ||(type.months < contract_data.notification_period));
    setDecisionLookup(tempSource);
};

useEffect(() => {
  DecisionSource();
}, [],);


const handleComment = async (selectedValue)=>{
  let preDefinedComment = await decision_types_data.find((item) => item.id===Number(selectedValue)).description;
  let newFollowUp = await decision_types_data.find((item) => item.id===Number(selectedValue)).months; 

  if (preDefinedComment)
      setComment(
        preDefinedComment
          .replace("XXXUNITNAME", unit.name)
          .replace("XXXMALLNAME", selectedMall_data[0].mall_name)
          .replace("XXXFLOORNAME", selectedFloor_data[0].floor_name)
          .replace("XXXCLIENTNAME", unit.unit_client)
          .replace("XXXNUMBEROFMONTH",newFollowUp));
  else setComment("");      
};


const handleDecisionValue = (selectedValue)=>{

  setDecision(selectedValue);
  handleComment(selectedValue) 
};

return (
      <div className= "frame center-content"style={{marginBottom: 0}}>
        <div className="row mt2 ">
          <div className="col-12">
            <select
              className={`input ${
                errors.decision && "border border-danger"
              }`}
              value={decision || 0}
              name="decision"
              onChange={(event) => handleDecisionValue(event.target.value)}
            >
              <option value={0}>-- select decision--</option>
              {decisionLookup.map((item) => (
                <option key={item.id} value={item.id} >
                  {item.title}
                </option>
              ))}
            </select>
            {errors.decision && (
              <small className="error_text">{errors.decision}</small>
            )}
          </div>
        </div>
        <div className="row mt2">
          <div className="col-6" style={{textAlign:"center"}}>
            <input
              type="checkbox"
              name="finance_involved"
              value={finance_involved}
              onChange={() => setFinance(!finance_involved)}
            />
              <label className="ml2 check-box">Involve finance</label>
          </div>
          <div className="col-6" style={{textAlign:"center"}}>
            <input
              type="checkbox"
              name="legal_involved"
              value={legal_involved}
              onChange={() => setLegal(!legal_involved)}
            />
            <label className="ml2 check-box">Involve legal</label>
          </div>
        </div>
        <div className="row">
          <textarea
            className= {`col-11 db w-90 pa2 br2 b--black-20 ba f6 center-content ${
            errors.comment && "border border-danger"
            }`}
            rows="3"
            placeholder="Write any comment here...."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          {errors.comment && (
          <small className="error_text ml5">{errors.comment}</small>
          )}
        </div>
      </div>
  );
};

const mapStateToProps = ({malls , errors}) => ({
  selectedMall_data:malls.selected_mall_details,
  selectedFloor_data:malls.selected_floor_details,
  decision_types_data:malls.decision_types_details,
  contract_data:malls.contract_details,
  errors,
});

export default connect(mapStateToProps,)(ContractDecisionControl);