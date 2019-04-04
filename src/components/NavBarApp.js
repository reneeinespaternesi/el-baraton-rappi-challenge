import React, { Component } from "react";
import { Navbar, Button, Form } from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class NavBarApp extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand className="ml-5">
          <Link to="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="El Baraton"
              width="60"
              height="60"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className="ml-5">
          <Link to="/products">Products</Link>
        </Navbar.Brand>
        <Form inline className="ml-auto">
          <Link to="/cart">
            <Button variant="primary" size="lg">
              <i className="fas fa-shopping-cart" /> My Cart
            </Button>
          </Link>
        </Form>
      </Navbar>
    );
  }
}

export default NavBarApp;
