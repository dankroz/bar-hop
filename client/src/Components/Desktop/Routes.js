import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./About";
import Features from "./Features";
import Locations from "./Locations";

class Nav extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Features") {
      return <Features />;
    } else if (this.state.currentPage === "Locations") {
      return <Locations />;
    } 
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Nav;
