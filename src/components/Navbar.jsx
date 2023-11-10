import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div>
      <footer className="navbar">
        <nav className="navbarNav">
          <ul className="navbarListItems">
            <li className="navbarListItem" onClick={() => navigate("/")}>
              <ExploreIcon
                fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
                width="36px"
                height="36px"
              />
              <p className={"navbarListItemName"}>Swipe</p>
            </li>
            <li className="navbarListItem" onClick={() => navigate("/liked")}>
              <OfferIcon
                fill={pathMatchRoute("/liked") ? "#2c2c2c" : "#8f8f8f"}
                width="36px"
                height="36px"
              />
              <p className={"navbarListItemName"}>Liked</p>
            </li>
            <li className="navbarListItem" onClick={() => navigate("/profile")}>
              <PersonOutlineIcon
                fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
                width="36px"
                height="36px"
              />
              <p className="navbarListItemName">Profile</p>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Navbar;
