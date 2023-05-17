'use client'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.scss'
import Image from 'next/image';
import ga4 from 'react-ga4';
export default function Header() {
  ga4.initialize("G-C6W5KW8XSJ")
  ga4.send({ hitType: "pageview", page: window.location.href });

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
