import React, { useState } from 'react';
import { Row, Col, Nav, NavLink, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand } from 'reactstrap';
import DailyImage from './DailyImage.jsx';

const Header = () => {

  
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <Row>
         <DailyImage />
          <Col>
            <Navbar id="navbar" bg="dark"  light fixed="top" >
              <NavbarBrand id="logo" href="/" className="mr-auto"> </NavbarBrand>
              <NavbarToggler  color="primary"  onClick={toggleNavbar} className="mr-2" />
              <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink id="navItem" href="https://space.com">Space.com</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink id="navItem" href="https://spacex.com">SpaceX</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink id="navItem" href="https://nasa.gov">NASA</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink id="navItem" href="https://www.esa.int">ESA</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink id="navItem" href="https://spotthestation.nasa.gov/sightings/index.cfm">ISS</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink id="navItem" href="https://github.com/Hubbsy">Project GitHub</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>    
    )
}




export default Header;