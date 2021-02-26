import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className="mb-0" style={{ backgroundImage: "url(/assets/images/providence-doucet-wPaBwop_rSo-unsplash.jpg)" }}>
                    <div className="container">
                        <div className="row text-md-left text-center">
                            <div className="col col-md-4 light-background">
                                <h1>Birdsall</h1>
                                <h2>Music Studios</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar sticky="top" expand="md" className="navbar-dark">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/music">
                                        <i className="fa fa-music fa-lg" /> Music
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/students">
                                        <i className="fa fa-book fa-lg" /> Students
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;