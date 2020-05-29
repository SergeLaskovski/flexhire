import React, {useState} from 'react';
import '@/scss/Submenu.scss';

import {Container, Row, Col} from 'react-bootstrap';

//get data
import subSections from '@/data/subSections';

function SubMenu(props) {
  const {subSec} = props;

  return (
    <Container fluid>
      {subSections[subSec].map((subSection, index) => (
        <div>{subSection.title}</div>
      ))}
      <row>
        <col lg={4} md={6} sm={12}></col>
      </row>
    </Container>
  );
}

export default SubMenu;
