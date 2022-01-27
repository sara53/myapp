import React, { Component } from 'react';
import {Container,Navbar} from 'react-bootstrap';
import { Link ,Outlet} from "react-router-dom";


export default class Nav extends Component {
  render() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <span className='text-light'>{this.props.count}</span>
              <Link to="/">Home</Link>
              <Link to="about">About</Link>
            </Container>
            <Outlet/>
        </Navbar>
    )
  }
}
