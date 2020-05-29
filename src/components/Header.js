import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, InputGroup, FormControl} from 'react-bootstrap';

//Navigation
import Navigation from '@/components/Navigation';

import '@/scss/Header.scss';

import headerLogo from '@/assets/images/headerLogo.png';
//import searchIco from '@/assets/images/searchIco.png';
import phone from '@/assets/images/phone.png';

function Header() {
  return (
    <React.Fragment>
      <Navigation />
      <Container className="fluid header-placeholder"></Container>
      <Container className="header-sticky" fluid>
        <Row className="header-container align-items-end">
          <Col xs={8} className="header-logo-search">
            <span className="header-logo">
              <Link to="/">
                <Image src={headerLogo} />
              </Link>
            </span>
            {/*
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
            */}
          </Col>
          <Col xs={2} md={3} className="text-right header-phone">
            <a href="tel:0211312124">
              <Image src={phone} className="phoneIco" />
              <span className="d-md-inline d-none">021 131 2124</span>
            </a>
          </Col>
          <Col xs={2} md={1} className="text-right">
            &nbsp;
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Header;
