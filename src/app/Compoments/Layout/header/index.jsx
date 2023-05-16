'use client'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.scss'
import Image from 'next/image';

export default function Header() {
  return (
    <header>
        <Navbar expand='lg' className="mb-3 navbar-color" >
          <Container>
          <Image
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
