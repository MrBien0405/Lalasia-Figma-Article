
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image from "../../assets/Rectangle 39.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CarouselSlider.scss"
function CarouselSlider() {
  return (
    <>
      <Carousel className='CarouselSlider'>
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' src={image} alt='First slide' />
        </Carousel.Item>
        
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' src={image} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' src={image} alt='First slide' />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselSlider;
