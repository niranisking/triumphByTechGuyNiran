import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css"; // Make sure your CSS is correctly linked
import oilerImage from "./assets/images/fill-station.jpg";
import fillStationImage from "./assets/images/car.jpg";
import sideImage from "./assets/images/why-nnpc.ba1fe63.svg";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(249, 231, 69)" }}
      onClick={onClick}
    ></div>
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(249, 231, 69)" }}
      onClick={onClick}
    ></div>
  );
}

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Autoplay disabled for manual navigation
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="home-container">
      <div className="slider">
        <Slider {...settings}>
          <div className="slide">
            <img src={oilerImage} alt="Oiler" />
          </div>
          <div className="slide">
            <img src={fillStationImage} alt="Fill Station" />
          </div>
          {/* Additional slides can be added here */}
        </Slider>
        <div className="content">
          <p>
            Welcome to Triumph Group,
            <br />
            Your trusted partner in petroleum delivery <br /> and car
            dealership.
          </p>
        </div>
      </div>
      <div className="gender-list">
        <div className="me">
          <img src={sideImage} alt="Me" />
        </div>
        <div className="you">
          <div className="why">WHY TRIUMPH GROUP WAS FOUNDED</div>
          <div className="why-msg">
            To <span style={{ color: "blue" }}>revolutionize</span> Nigeria's
            <span style={{ color: "blue" }}>
              {" "}
              fuel delivery and car dealership sectors,
            </span>{" "}
            enhancing energy accessibility, reliable
            <span style={{ color: "blue" }}> customer care</span>, and fostering
            <span style={{ color: "blue" }}>
              {" "}
              innovation in service delivery.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
