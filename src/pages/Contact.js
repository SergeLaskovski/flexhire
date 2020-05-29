import React, {useState} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import '@/scss/Contact.scss';

function Contact() {
  return (
    <Container fluid className="contact-container h-100">
      <Row>
        <Col xs={12} className="text-center">
          <h1>Contact information</h1>
          <h2>Get in touch</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <div>
            {' '}
            <a href="mailto: info@flexhire.co.nz">info@flexhire.co.nz</a>
          </div>
          <div>
            {' '}
            <a href="tel: 021 131 2124">021 131 2124</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
