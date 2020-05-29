import React, {useState} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import '@/scss/About.scss';

function About() {
  return (
    <Container fluid className="about-container h-100">
      <Row>
        <Col xs={12} className="text-center">
          <h1>About Flexhire</h1>
          <h2>This is where we tell our story</h2>
        </Col>
      </Row>
      <Row className="p-0 m-0">
        <Col xs={12} md={6} className="p-0 m-0">
          <Image src={process.env.PUBLIC_URL + '/images/about.jpg'} alt="About" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="about-text m-0 p-5">
          <h4>Our mission</h4>
          <p>
            With all of the options available in today’s market, it can be very confusing to choose the best equipment
            for your project I mean, let’s face it.
          </p>
          <h4>Our fleet of construction equipment</h4>
          <p>
            Flexible hire solutions for construction machinery. Supplying Scissor Lifts, Diggers and Forklifts to the
            Auckland area. Contact us today for more info{' '}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
