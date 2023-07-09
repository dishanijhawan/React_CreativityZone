import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" height="500px" />

          <p className="legend">First Picture</p>
        </div>
        <div>
          <img src={img2} alt="Item3" height="500px" />
          <p className="legend">Second Picture</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
