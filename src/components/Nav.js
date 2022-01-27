import React, { Component } from 'react';
import {Container,Navbar} from 'react-bootstrap';

export default class Nav extends Component {
  render() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <span className='text-light'>{this.props.count}</span>
              
            </Container>
        </Navbar>
    )
  }
}
