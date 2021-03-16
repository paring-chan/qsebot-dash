import React from 'react'
import {
  Dropdown,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from 'react-bootstrap-v5'

const Header = ({ user }: any) => {
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <div className="container-fluid">
        <NavbarBrand>큐새</NavbarBrand>
        <Nav className="d-flex">
          {user && (
            <NavDropdown id="nav_user_dropdown" title={user.id}>
              <Dropdown.Item href="/auth/logout">로그아웃</Dropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </div>
    </Navbar>
  )
}

export default Header
