import GoalProgress from "../ui/GoalProgress";
import { connect } from "react-redux";
import { setGoal } from "../../actions";

const mapStateToProps = state => ({
  goal: state.goal,
  current: state.allSkiDays.length
});

const mapDispatchToProps = dispatch => ({
  onNewGoal(goal) {
    dispatch(setGoal(goal));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalProgress);
