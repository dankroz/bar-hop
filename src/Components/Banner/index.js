import React from "react";
// import "./style.css";
import "../Map/style.css";
import navImg from "../Map/greenBanner.png"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


function GreenBanner(props) {
return (
<div>
<Navbar className="p-0" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav title="Dropdown" id="basic-nav-dropdown" className="navPackage">
            <h1 className="p-4"><Navbar.Toggle aria-controls="basic-navbar-nav" />{props.children}</h1>
            <img className="greenBanner" src={navImg} alt={"nav"} />
        </Nav>
    </Navbar.Collapse>
</Navbar>
</div>
)
}
export default GreenBanner;