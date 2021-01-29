
import React from "react";
import {Navbar,Nav} from "react-bootstrap";

import Logo from "../../assets/logos/logo.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar_style.css"

function NavBar(){

const [navstyle,setnavstyle]=React.useState("nav_bar");
const [nav_item,setnav_item]=React.useState("ml-auto nav_item")

const listenscroll= () =>{
  if(window.screen.width > 600){
    if(window.scrollY > 700){
      setnav_item("ml-auto nav_item_dark");
      return setnavstyle("nav_bar_dark");
    }else{
      setnav_item("ml-auto nav_item");
        return setnavstyle("nav_bar");
    }
  }else{
    if(window.scrollY > 480){
      setnav_item("ml-auto nav_item_dark");
      return setnavstyle("nav_bar_dark");
    }else{
      setnav_item("ml-auto nav_item");
        return setnavstyle("nav_bar");
    }
  }
}

const change_mob_nav =() =>{
  if(navstyle==="nav_bar"){
    setnavstyle("nav_bar_dark")
  }else{
    setnavstyle("nav_bar");
  }
}

React.useEffect(()=>{
    window.addEventListener('scroll', listenscroll);
    if(window.scrollY < 480){
    document.querySelector(".navbar-toggler-icon").addEventListener("click", change_mob_nav);
  }
});

  return <>
  <Navbar collapseOnSelect expand="lg"  variant="dark"  sticky="top" className={navstyle}>
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
        <Nav.Link href="/#about_us">About us</Nav.Link>
        <Nav.Link href="/#what_we_do">What we do</Nav.Link>
        <Nav.Link href="/#project">Projects</Nav.Link>
        <Nav.Link href="blogs">Blogs</Nav.Link>
        <Nav.Link href="team">Team</Nav.Link>
        <Nav.Link href="contact">Contact us</Nav.Link>
        <Nav.Link href="auth">Login</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
  </>
}

export default NavBar;
