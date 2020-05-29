import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import '@/scss/Footer.scss';

import headerLogo from '@/assets/images/headerLogo.png';

function Footer() {
  return (
    <Container fluid>
      <Row className="footer-container justify-content-center">
        <Col md={3} sm={12} className="footer-logo">
          <div className="footer-logo-wrapper">
            <Image src={headerLogo} className="d-block" />
            ©Copyright 2020 Flexhire - Website
            <br /> Design & Development by{' '}
            <a href="https://thewebguys.co.nz/" title="Design & Development The Web Guys">
              The Web Guys
            </a>
          </div>
        </Col>
        <Col md={2} className="footer-links">
          {/*
          <h4>Links</h4>
          <a href="#">Earthmoving</a>
          <a href="#">Access Equipment</a>
          <a href="#">Forklifts</a>
          */}
        </Col>
        <Col md={2} className="footer-links"></Col>
        <Col md={2} className="footer-links">
          {/*
          <a href="#">FAQ</a>
          */}
          <h4>Links</h4>
          <a href="/about">About us</a>
          <a href="/contact">Contact</a>
        </Col>
        <Col md={2} className="footer-links">
          <h4>Contact</h4>
          <a href="mailto: info@flexhire.co.nz">info@flexhire.co.nz</a>
          <a href="tel: 021 131 2124">021 131 2124</a>
          <a href="https://www.facebook.com/flexhirenz/" title="FlexHire Facebook">
            Facebook
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
