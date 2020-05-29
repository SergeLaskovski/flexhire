import React, {useState} from 'react';
import '@/scss/MainPage.scss';

import {Container, Row, Col} from 'react-bootstrap';

//get data
import mainSections from '@/data/mainSections';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function MainPage() {
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
          <h1 className="carousel-h1">{mainSections[value].title} for hire</h1>
        </Col>
      </Row>
      <Row className="car-row">
        <Col xs={12}>
          <Carousel
            breakpoints={{
              640: {
                slidesPerPage: 1,
                arrows: true,
                centered: false,
              },
            }}
            centered
            clickToChange
            slidesPerPage={2}
            value={value}
            onChange={(value) => setValue(value)}
            slides={slides(mainSections, value)}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className="dots-div">
          {mainSections.map((carouselItem, index) => (
            <span className={index === value ? 'dot-selected' : ''} key={`dot-span-${index}`}></span>
          ))}
        </Col>
      </Row>
      {/*
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button variant="primary">Hire now</Button>
        </Col>
      </Row>
      */}
    </Container>
  );
}

export default MainPage;
