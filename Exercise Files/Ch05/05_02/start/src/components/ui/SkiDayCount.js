import { PropTypes } from "prop-types";
import { MdTerrain as Terrain } from "react-icons/md";
import { TiWeatherSnow as SnowFlake } from "react-icons/ti";
import { FaCalendarAlt as Calendar } from "react-icons/fa";
import "../../stylesheets/SkiDayCount.scss";

const SkiDayCount = ({ total = 0, powder = 0, backcountry = 0 }) => (
  <div className="ski-day-count">
    <div className="total-days">
      <span>{total}</span>
      <Calendar />
      <span>days</span>
    </div>
    <div className="powder-days">
      <span>{powder}</span>
      <SnowFlake />
      <span>powder</span>
    </div>
    <div className="backcountry-days">
      <span>{backcountry}</span>
      <Terrain />
      <span>hiking</span>
    </div>
  </div>
);

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number
};

export default SkiDayCount;
