import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

import SearchBar from "../components/SearchBar";



const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
      <img
          src="./LOGO.png" // Ubah path menjadi absolut dengan menggunakan / sebagai awalan
          width="50" // Perbesar ukuran logo dengan nilai width yang lebih besar
          height="50" // Perbesar ukuran logo dengan nilai height yang lebih besar
          className="d-inline-block align-top mr-2"
          alt="Logo"
        />
      <span style={{ verticalAlign: "middle" }}>SinarDunia</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        
          <NavDropdown title="Kategori" id="basic-nav-dropdown">
          <Nav.Link href="/lifestyle">Lifestyle</Nav.Link>
          <Nav.Link href="/fashion-accessories">Fashion & Accessories</Nav.Link>
          <Nav.Link href="/technology">Technology</Nav.Link>
          <Nav.Link href="/business">Business</Nav.Link>
          <Nav.Link href="/novel">Novel</Nav.Link>
          </NavDropdown>
          
        </Nav>
        
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav">
        <SearchBar />
      </Navbar.Collapse>
      <Nav>
          <Nav.Link as={Link} to="/checkout" className="ml-auto">
            <FaShoppingCart /> Checkout
          </Nav.Link>
        </Nav>
    </Navbar>
  );
};

export default Header;
