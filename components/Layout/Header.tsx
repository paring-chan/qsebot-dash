import React from 'react'
import {
  Dropdown,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from 'react-bootstrap-v5'
import Link from 'next/link'

const Header = ({ user }: any) => {
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <div className="container-fluid">
        <Link href="/views/Index" as="/">
          <NavbarBrand style={{ cursor: 'pointer' }}>큐새</NavbarBrand>
        </Link>
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
