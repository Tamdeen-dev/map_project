import React from "react";
import { connect } from "react-redux";
import Loading from "react-loading";


const ContractDecisionHistory = ({
  decision_types_data,
  decisions_history_data,
}) => {
  
    if (decisions_history_data.length === 0)
    return <Loading message={"Loading decision history...."} />;  
    
  return (
    <div className="pa4">
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white br tc pa3">
                Decision
              </th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white br tc pa3">
                Account Manager
              </th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white br tc pa3">
                Legal Involved
              </th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white br tc pa3">
                Finance Involved
              </th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white br tc pa3">
                Decision Date
              </th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {decisions_history_data.map((decision, index) => (
              <tr key={index}>
                <td className="pv3 pr3 bb b--black-20  bg-white tc br">
                  {decision_types_data.find((type) => type.id===decision.decision).title}
                </td>
                <td className="pv3 pr3 bb b--black-20  bg-white tc br">
                  {decision.account_manager}
                </td>
                <td className="pv3 pr3 bb b--black-20  bg-white tc br">
                  {decision.legal_involved.toString()}
                </td>
                <td className="pv3 pr3 bb b--black-20  bg-white tc br">
                  {decision.finance_involved.toString()}
                </td>
                <td className="pv3 pr3 bb b--black-20  bg-white tc br">
                  {decision.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = ({malls}) => ({
  decisions_history_data:malls.decision_history_details,
  decision_types_data:malls.decision_types_details,
});
  
 
export default connect(mapStateToProps)(ContractDecisionHistory);
