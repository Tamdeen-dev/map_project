import React , {useEffect, useState} from "react";
import { connect } from "react-redux";


export const DecisionControl = ({
  finance_involved,
  setFinance,
  legal_involved,
  setLegal,
  comment,
  setComment,
  errors,

}) => {

return (
      <div className= "frame center-content"style={{marginBottom: 0}}>
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

const mapStateToProps = ({errors}) => ({
  errors,
});

export default connect(mapStateToProps,)(DecisionControl);