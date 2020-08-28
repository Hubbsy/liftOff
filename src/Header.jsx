import React, { useState } from 'react';
import { Row, Jumbotron, Nav, NavLink, Navbar, NavbarToggler, Collapse, NavItem  } from 'reactstrap';


const Header = () => {

  
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (

    <Jumbotron >
       <Row>
        <Navbar id="navbar" bg="dark"  light fixed="top" >
          {/* <NavbarBrand id="navItem" href="/" className="mr-auto">LiftOff!</NavbarBrand> */}
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
      </Row> 
    </Jumbotron>
      
      
  )
}




export default Header;