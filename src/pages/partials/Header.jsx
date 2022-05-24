import { NavLink } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"

function Header() {
  return (
    <Navbar expand="lg">
      Logo
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto menu">
          <NavLink to="">Link1</NavLink>
          <NavLink to="">Link2</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
