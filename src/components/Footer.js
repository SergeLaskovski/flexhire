import React from 'react';

import '@/scss/Footer.scss';

import {Container, Row, Col, Image, InputGroup, FormControl} from 'react-bootstrap';
import headerLogo from '@/assets/images/headerLogo.png';

function Footer() {
  return (
    <Container fluid>
      <Row className="footer-container justify-content-center">
        <Col md={3} sm={12} className="footer-logo">
          <div className="footer-logo-wrapper">
            <Image src={headerLogo} />
            ©Copyright 2020 Flexhire - Website
            <br /> Design & Development by The Web Guys
          </div>
        </Col>
        <Col md={2} className="footer-links">
          <h4>Links</h4>
          <a href="#">Earthmoving</a>
          <a href="#">Access Equipment</a>
          <a href="#">Forklifts</a>
        </Col>
        <Col md={2} className="footer-links">
          <h4>&nbsp;</h4>
          <a href="#">FAQ</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </Col>
        <Col md={2} className="footer-links">
          <h4>Social</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </Col>
        <Col md={2} className="footer-links">
          <h4>Contact</h4>
          <a href="mailto: ethan@flexhire.co.nz">ethan@flexhire.co.nz</a>
          <a href="#">09-0800-290</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
