import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import RewardForm from "./reward_form";
import { postReward, clearErrors } from "../../actions/form_actions";
import { fundAmount } from "../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.sessionReducer.currentUser,
    errors: state.errorsReducer.formErrorsReducer,
    path: ownProps.match.params.path,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  postReward: (project) => dispatch(postReward(project)),
  clearErrors: () => dispatch(clearErrors()),
  fundAmount: (support) => dispatch(fundAmount(support)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RewardForm)
);
