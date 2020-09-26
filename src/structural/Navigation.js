// In App.js in a new project

import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Navigation() {
  return (
	<Navbar bg='light' expand='md'>
		<Navbar.Brand>E-Porfolio:Reinhardt van Wyk</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav'/>
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='mr-auto'>
				<Nav.Item><Link className='nav-link' exact to={'/'}>Home</Link></Nav.Item>
				<Nav.Item><Link className='nav-link' exact to={'/resume'}>Resume</Link></Nav.Item>
				<NavDropdown id='basic-nav-dropdown' title='Projects'>
					<NavDropdown.Item><Link className='nav-link' exact to={'/java'}>Java</Link></NavDropdown.Item>
					<NavDropdown.Item><Link className='nav-link' exact to={'/javascript'}>JavaScript</Link></NavDropdown.Item>
				</NavDropdown>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
  );
}

export default Navigation;