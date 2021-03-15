import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap-v5';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <div className="container-fluid">
        <NavbarBrand>큐새</NavbarBrand>
      </div>
    </Navbar>
  );
};

export default Header;
