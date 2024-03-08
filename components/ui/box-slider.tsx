'use client';

import React from 'react';
import Slider from 'react-slick';

const BoxSlider = ({ boxes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <Slider {...settings}>
      {boxes.map((box, index) => (
        <div key={index}>
          <div className="box">
            {box.title}
            {box.description}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BoxSlider;