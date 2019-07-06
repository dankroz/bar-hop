import React from "react";
// import "./style.css";
import "../Map/style.css";
import navImg from "./greenBanner.png"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


function GreenBanner(props) {
return (
<div>
<Navbar className="p-0" expand="lg" style={{background: "transparent"}}>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav title="Dropdown" id="basic-nav-dropdown" className="navPackage">
            <h1 className="p-0"><Navbar.Toggle className="mr-2" aria-controls="basic-navbar-nav" /><div>{props.children}</div></h1>
            <img className="greenBanner" src={navImg} alt={"nav"} />
        </Nav>
    </Navbar.Collapse>
    Need a Hint?
</Navbar>
</div>
)
}
export default GreenBanner;