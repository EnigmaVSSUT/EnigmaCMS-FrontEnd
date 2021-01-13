import React from "react";
import {Navbar,Nav} from "react-bootstrap";

import Logo from "../../assets/logos/logo.jpg"

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
  <Navbar collapseOnSelect expand="lg"  variant="dark"  fixed="top" className={navstyle}>
  <Navbar.Brand href="#home" className="logo_img ml-3">
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
        <Nav.Link href="#Aboutus">About us</Nav.Link>
        <Nav.Link href="#Demo1">Demo1</Nav.Link>
        <Nav.Link href="#Demo2">Demo2</Nav.Link>
        <Nav.Link href="#Demo3">Demo3</Nav.Link>
        <Nav.Link href="#Demo4">Demo4</Nav.Link>
        <Nav.Link href="#Demo5">Demo5</Nav.Link>
        <Nav.Link href="#Demo6">Demo6</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
  </>
}

export default NavBar;
