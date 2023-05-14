import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.scss'
import { useState } from 'react';

const sidebarEvent = ({ props }) => {
  const [ opened, setOpened ] = useState(true);
  return(
     console.log("teste")
  )
}

export default function Header() {
  return (
    <header>
        <Navbar expand='lg' className="mb-3 navbar-color" >
          <Container>
          <img
              alt=""
              src="/logob.png"
              width="75"
              height="75"
              className="d-inline-block align-top"
            />{' '}
          </Container>
        </Navbar>
    </header>
  );
}
