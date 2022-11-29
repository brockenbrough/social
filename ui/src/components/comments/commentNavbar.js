import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Here, we display our Navbar
export default function navbarComment() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/project-notes/contributors">Comments</Nav.Link>
          <Nav.Link href="/project-notes/create">Add Comment</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
