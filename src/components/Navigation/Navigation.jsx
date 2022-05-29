import { NavLink } from "react-router-dom";
import "./navigation.scss";

export default function Navigation() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="messages"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tasks"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              2
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
