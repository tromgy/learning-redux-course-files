import { NavLink } from "react-router-dom";
import { FaHome as HomeIcon } from "react-icons/fa";
import { FaCalendarPlus as AddDayIcon } from "react-icons/fa";
import { FaTable as ListDaysIcon } from "react-icons/fa";
import "../../stylesheets/Menu.scss";

const Menu = () => (
  <nav className="menu">
    <NavLink to="/" activeClassName="selected">
      <HomeIcon />
    </NavLink>
    <NavLink to="/add-day" activeClassName="selected">
      <AddDayIcon />
    </NavLink>
    <NavLink to="/list-days" activeClassName="selected">
      <ListDaysIcon />
    </NavLink>
  </nav>
);

export default Menu;
