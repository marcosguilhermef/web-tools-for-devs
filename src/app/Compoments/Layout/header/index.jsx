'use client'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.scss'
import Image from 'next/image';
import ga4 from "react-ga4";
import { useEffect } from 'react';
export default function Header() {
  ga4.initialize([{
    trackingId: "G-C6W5KW8XSJ",
    gaOptions: {
      anonymizeIp: false
    }
  }])


  useEffect(() => {
    ga4.send({ hitType: "pageview", page: window.location.href });

  })

  return (
    <header>
      <Navbar expand='lg' className="mb-3 navbar-color" >
        <Container>
          <Navbar.Brand href="/">
            <Image
              alt="Logo"
              src="/logob.png"
              width="75"
              height="75"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header >
  );
}
