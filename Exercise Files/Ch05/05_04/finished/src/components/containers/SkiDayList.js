import SkiDayList from "../ui/SkiDayList";
import { connect } from "react-redux";
import { removeDay } from "../../actions";

const mapStateToProps = (state, props) => ({
  days: state.allSkiDays,
  // NOTE: this is different from what was shown in the course
  // props.params.filter no longer works because props don't have params anymore
  filter: props.match.params.filter
});

const mapDispatchToProps = dispatch => ({
  onRemoveDay(date) {
    dispatch(removeDay(date));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList);
