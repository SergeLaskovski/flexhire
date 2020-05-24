import React, {useState} from 'react';
import '../scss/Carousel.scss';
import greyBlock from '../assets/images/greyBlock.png';
import bg1 from '../assets/images/bg-1.png';

import {Container, Button, Row, Col} from 'react-bootstrap';

//get data
import carouselData from '../data/carousel';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function MainPage() {
  console.log(carouselData);
  const [value, setValue] = useState(0);

  function slides(carouselData, selected) {
    const slidesArr = [];
    let selectedClass = '';
    carouselData.map((carouselItem, index) => {
      selectedClass = index === selected ? ' selected' : '';
      slidesArr.push(
        <div className="car-img-container" key={`carousel-div-img-${index}`}>
          <img src={carouselItem.img} alt={carouselItem.title} className={`carousel-img ${selectedClass}`} />
        </div>
      );
      return slidesArr;
    });
    return slidesArr;
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="text-center">
          <img src={greyBlock} className="grey-block" alt="grey block :)" />
          <h1 className="carousel-h1">{carouselData[value].title}</h1>
        </Col>
      </Row>
      <Row className="car-row">
        <Col xs={12}>
          <Carousel
            centered
            clickToChange
            slidesPerPage={2}
            value={value}
            onChange={(value) => setValue(value)}
            slides={slides(carouselData, value)}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className="dots-div">
          {carouselData.map((carouselItem, index) => (
            <span className={index === value ? 'dot-selected' : ''} key={`dot-span-${index}`}></span>
          ))}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button variant="primary">Hire now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
