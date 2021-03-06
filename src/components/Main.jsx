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
import Restaurant from 'components/Restaurant.jsx';
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
                    <Navbar color="faded" light expand="md">
                        <NavbarBrand className='text-info title' href="/">THE FOOD</NavbarBrand>
                        <NavbarToggler className="mr-2" onClick={this.handleNavbarToggle}/>
                        <Collapse isOpen={this.state.navbarToggle} navbar>
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
                                    <NavLink className='hoverDay navbar-text' tag={Link} to='/signOut'>Sign Up</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <Route exact path="/" render={() => (<Home/>)}/>
                <Route exact path="/restaurant" render={() => (
                    <Restaurant/>
                    )}/>
            </div>

        </Router>);
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

}
