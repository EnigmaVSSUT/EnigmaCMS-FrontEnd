import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import Logo from "../../assets/logos/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar_style.css";

function NavBar() {
  const [navstyle, setnavstyle] = React.useState("nav_bar");
  const [nav_item, setnav_item] = React.useState("ml-auto nav_item");

  const navs = [

    { name: "Home", path: "/"},
    { name: "About Us", path:"/aboutus"},
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact Us", path: "/contact" },
    // { name: "Login", path: "auth" },
  ];

  const listenscroll = () => {
    if (window.screen.width > 600) {
      if (window.scrollY > 120) {
        setnav_item("ml-auto nav_item_dark");
        return setnavstyle("nav_bar_dark");
      } else {
        setnav_item("ml-auto nav_item");
        return setnavstyle("nav_bar");
      }
    } else {
      if (window.scrollY > 80) {
        setnav_item("ml-auto nav_item_dark");
        return setnavstyle("nav_bar_dark");
      } else {
        setnav_item("ml-auto nav_item");
        return setnavstyle("nav_bar");
      }
    }
  };

  const change_mob_nav = () => {
    if (navstyle === "nav_bar") {
      setnavstyle("nav_bar_dark");
    } else {
      setnavstyle("nav_bar");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenscroll);
    if (window.scrollY < 480) {
      document
        .querySelector(".navbar-toggler-icon")
        .addEventListener("click", change_mob_nav);
    }
  });

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className={navstyle}
      >
        <Navbar.Brand href="/" className="logo_img ml-3">
          <img
            src={Logo}
            width="40"
            height="30"
            className="d-inline-block align-top"
            alt="Enigma Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={nav_item}>
            {navs.map((nav) => (
              <Nav.Link href={`${nav.path}`}>{nav.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
