import React, {useState} from 'react';
import '@/scss/Carousel.scss';
import greyBlock from '@/assets/images/greyBlock.png';

import {Container, Button, Row, Col} from 'react-bootstrap';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

//get data
import carouselData from '@/data/carousel';

function MainPage() {
  const [value, setValue] = useState(0);

  function slides(carouselData, selected) {
    const slidesArr = [];
    let selectedClass = '';
    carouselData.map((carouselItem, index) => {
      selectedClass = index === selected ? ' selected' : '';
      slidesArr.push(
        <div className="carousel-img-container" key={`carousel-div-img-${index}`}>
          <img src={carouselItem.img} alt={carouselItem.title} className={`carousel-img ${selectedClass}`} />
        </div>
      );
      return slidesArr;
    });
    return slidesArr;
  }

  function drawDots(quantity, selected) {
    let dots = [];
    let selectedClass = '';
    for (let i = 0; i < quantity; i++) {
      selectedClass = i === selected ? 'dot-selected' : '';
      dots.push(<span className={selectedClass} key={`dot-span-${i}`}></span>);
    }
    console.log(dots);
    return dots.map((dot) => dot);
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="text-center">
          <img src={greyBlock} className="grey-block" alt="grey block :)" />
          <h1 className="carousel-h1">{carouselData[value].title}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Carousel
            centered
            clickToChange
            slidesPerPage={2}
            value={value}
            onChange={(value) => setValue(value)}
            slides={slides(carouselData, value)}
          ></Carousel>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className="dots-div">
          {drawDots(carouselData.length, value)}
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
