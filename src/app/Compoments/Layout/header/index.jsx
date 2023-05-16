'use client'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.scss'


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
