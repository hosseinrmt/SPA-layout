import { NavLink, withRouter } from "react-router-dom";

const items = [
  { name: "Home", to: "/", exact: true },
  { name: "About Us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="active"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
