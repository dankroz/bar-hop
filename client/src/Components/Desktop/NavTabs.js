import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap/';
import barhopLogo from "./assets/img/barhopLogo.png"


function NavTabs(props) {
  return (
     <Navbar className="shadow-md" collapseOnSelect expand="lg" bg="light" variant="light">
         <Navbar.Brand className="barhop" href="/"><img className="logo" src={barhopLogo} alt={"logo"} /></Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ml-auto">
                 <NavDropdown title="More Info" id="collasible-nav-dropdown">
                     <NavDropdown.Item href="https://github.com/HaroldBernard/bar-hop" target="_blank">Github</NavDropdown.Item>
                     {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                 </NavDropdown>

                <Nav.Link 
                    href="#about"
                    onClick={() => props.handlePageChange("About")}
                    className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
                    >
                    About
                </Nav.Link>

                 <Nav.Link  href="#features"
                    onClick={() => props.handlePageChange("Features")}
                    className={props.currentPage === "Features" ? "nav-link active" : "nav-link"}
                    >
                    Features
                </Nav.Link>

                <Nav.Link  href="#locations"
                    onClick={() => props.handlePageChange("Locations")}
                    className={props.currentPage === "Locations" ? "nav-link active" : "nav-link"}
                    >
                    Locations
                </Nav.Link>

             </Nav>
         </Navbar.Collapse>
     </Navbar>
  );
}

export default NavTabs;
