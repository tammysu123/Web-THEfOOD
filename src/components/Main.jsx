import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import './styles/Main.css';

import Home from 'components/Home.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unit: 'metric',
            navbarToggle: false
        };

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
    }

    render() {
        return (<Router>
            <div className={`main bg-faded`}>
                <div className='container'>
                    <Navbar color="faded" light="light" expand="md">
                        <NavbarBrand className='text-info' href="/">THE FOOD</NavbarBrand>
                        <NavbarToggler className="mr-2" onClick={this.handleNavbarToggle}/>
                        <Collapse isOpen={this.state.navbarToggle} navbar="navbar">
                            <Nav >
                                <NavItem >
                                    <NavLink className='hoverDay navbar-text' tag={Link} to='/'>Home</NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className='hoverDay navbar-text' tag={Link} to='/Stores'>Stores</NavLink>
                                </NavItem>
                            </Nav >
                            <Nav className='ml-auto'>
                                <NavItem>
                                    <NavLink className='hoverDay navbar-text' tag={Link} to='/signIn'>Sign In</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='hoverDay navbar-text' tag={Link} to='/signOut'>Sign Out</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <Route exact="exact" path="/" render={() => (<Home/>)}/>
            </div>

        </Router>);
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

}
