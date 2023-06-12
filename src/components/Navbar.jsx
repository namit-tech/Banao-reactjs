import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"
import {FaSearch} from "react-icons/fa"
import Login from './Login';
function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container  >
                <Navbar.Brand href="#">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </Navbar.Brand>
                <Form className="form">
                    <FaSearch className='search'/>    
            <Form.Control
              type="search"
              placeholder="Search"
              className="mx-1"
              aria-label="Search"
              ></Form.Control>
          </Form>
       <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='navbar'>
            <Login/>
<NavDropdown title="It's free!" id="basic-nav-dropdown" active></NavDropdown>
          </Nav>
          </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavBar