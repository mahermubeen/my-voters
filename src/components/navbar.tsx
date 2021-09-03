import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Icon from "../styles/Icon";
import SelectProfile from "./generic/input/selectProfile";
import { useHistory } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavbarCom() {
  const history = useHistory();
  const [nav, setNav] = React.useState(false);
  const onNavOpen = () => {
    var el = document.getElementById("cst-sidebar");
    console.log(el);
    if (nav == false) {
      el ? (el.style.left = "0px") : console.log();
    } else {
      el ? (el.style.left = " -350px") : console.log();
    }
    setNav(!nav);
  };

  return (
    <div className="cst-nav-parrent ">
      <Icon name="bell" />
      <SelectProfile
        items={[
          {
            id: 0,
            title: "Profile",
            onClick: () => history.push("staff"),
          },
          {
            id: 1,
            title: "Account",
            onClick: () => history.push("staff"),
          },
          {
            id: 2,
            title: "Settings",
            onClick: () => history.push("staff"),
          },
          { id: 0, title: "Staff", onClick: () => history.push("staff") },
          {
            id: 0,
            title: "Logout",
            onClick: () => {
              localStorage.clear("token");
              window.location.href = "/";
            },
          },
        ]}
      />
      <button className="btn ml-2 btn-nav-st" onClick={() => onNavOpen()}>
        <AiOutlineMenu color="white" />
      </button>
    </div>
  );
}
