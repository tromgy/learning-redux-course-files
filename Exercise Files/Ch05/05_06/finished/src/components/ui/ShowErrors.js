import { PropTypes } from "prop-types";
import { FaTimes as CloseButton } from "react-icons/fa";
import "../../stylesheets/ShowErrors.scss";

const ShowErrors = ({ errors = [], onClearError = f => f }) => (
  <div className="show-errors">
    {errors.length
      ? errors.map((message, i) => (
          <div key={i} className="error">
            <p>{message}</p>
            <CloseButton
              style={{ paddingRight: "0.5rem" }}
              onClick={() => onClearError(i)}
            />
          </div>
        ))
      : null}
  </div>
);

ShowErrors.propTypes = {
  errors: PropTypes.array,
  onClearError: PropTypes.func
};

export default ShowErrors;
