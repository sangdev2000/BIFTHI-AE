import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import paner1 from "../../../acsset/slice/paner1.png";
import paner2 from "../../../acsset/slice/slice1.png";

const DecorPaner = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <Wapeer>
      <Container>
      <TitlePaner>
            <h1>Phòng đã được decor</h1>
            <p>make your home so comfortable with refreshing plants</p>
        </TitlePaner>
        <div className="slider-container">
          <Slider {...settings}>
            {paner?.map((item, index) => {
              return (
                <ImgPaner>
                  <img src={item.img} />
                </ImgPaner>
              );
            })}
          </Slider>
        </div>
      </Container>
    </Wapeer>
  );
};

export default DecorPaner;
const paner = [
  {
    img: paner1,
  },
  {
    img: paner2,
  },
];
const Wapeer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 20px auto;
  overflow: hidden;
`;
const Container = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
.slick-prev{
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    z-index: 1;
  }
.slick-next {
    top: 50%;
    right: 20px;
    z-index: 1;
}
`;
const ImgPaner = styled.div`
position: relative;

&::after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.50) -58.4%, rgba(0, 0, 0, 0.00) 114.8%);
    overflow: hidden;
  border-radius: 20px;
  }
  &::before{
    content: "";
    position: absolute;
    left: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.50) -58.4%, rgba(0, 0, 0, 0.00) 114.8%);
    border-radius: 10px;
  }
width: 100%;
img{
    aspect-ratio: 1920/900;
    width: 100%;
    height: 100%;
}
`;
const TitlePaner = styled.div`
position: absolute;
top: 20%;
left: 50%;
transform: translateX(-50%)translateY(-20%);
z-index: 1;
width: 100%;
p{
    color: #FFF;
text-align: center;
font-family: "Work Sans";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
h1{
    color: #FFF;
text-align: center;
font-family: "Work Sans";
font-size: 64px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: uppercase;
}
@media screen and (min-width: 320px) and (max-width: 460px) {
    h1{
        font-size: 18px;
    }
    p{
        font-size: 16px;
    }
}
@media screen and (min-width: 460px) and (max-width: 760px) {
    h1{
        font-size: 32px;
    }
    p{
        font-size: 24px;
    }
}
`;