import React from 'react';

import '../scss/Header.scss';

import {Container, Row, Col, Image, InputGroup, FormControl} from 'react-bootstrap';
import headerLogo from '../assets/images/headerLogo.png';
import searchIco from '../assets/images/searchIco.png';
import phone from '../assets/images/phone.png';
import hamburger from '../assets/images/hamburger.png';

function Header() {
  return (
    <Container fluid>
      <Row className="header-container align-items-end">
        <Col xs={8} className="header-logo-search">
          <span className="header-logo">
            <Image src={headerLogo} />
          </span>
          <span className="d-md-inline-block d-none">
            <InputGroup className="search-input">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <Image src={searchIco} className="search-ico" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
            </InputGroup>
          </span>
          <span className="d-md-none d-inline-block float-right">
            <Image src={searchIco} className="search-ico" />
          </span>
        </Col>
        <Col xs={2} md={3} className="text-right header-phone">
          <a href="tel:0224576739">
            <Image src={phone} className="phoneIco" />
            <span className="d-md-inline d-none">022 457 67 39</span>
          </a>
        </Col>
        <Col xs={2} md={1} className="text-right">
          <Image src={hamburger} className="hamburger" />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
