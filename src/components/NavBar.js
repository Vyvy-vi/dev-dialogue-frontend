import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setName(JSON.parse(storedUser).username);
    }
  }, [localStorage.getItem("user")]);

  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="ic_qna.png"
            alt="qna logo"
            width="40"
            height="30"
            className="d-inline-block align-top"
          />
          {"  "}
          DevDialogue
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
          </Nav>
          {name !== "" ? (
            <Nav>
              <Nav.Link as={Link} to="/profile">
                Welcome {name}!
              </Nav.Link>
              <Nav.Link as={Link} to="/logout" className="btn btn-danger">
                Log Out
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/signup" className="btn btn-primary">
                Sign Up
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/login"
                className="btn btn-outline-primary"
              >
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
