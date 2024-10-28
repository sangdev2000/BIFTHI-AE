import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import paner1 from "../../../acsset/slice/paner1.png";
import paner2 from "../../../acsset/slice/f1.png";
import paner3 from "../../../acsset/slice/f2.png";
import paner4 from "../../../acsset/slice/f3.png";
import p1 from "../../../acsset/slice/p1.png";
import { Image } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
const DecorPaner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const settings = {
    className: "center",
    centerPadding: "60px",
    focusOnSelect: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 4000,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };
  return (
    <Wapeer>
      <TitlePaner>
        <p>make your home</p>
        <h1 data-aos="fade-right">A Dream home</h1>
      </TitlePaner>
      <Container>
        <Slider {...settings}>
          {paner.map((item, index) => {
            const isActive = index === activeSlide;
            return (
              <ContainF key={index} data-aos="flip-right">
                <Image.PreviewGroup items={paner?.map((icon) => icon.img)}>
                  <ImgPaner isActive={isActive}>
                    <Image src={item.img} width={700} />
                  </ImgPaner>
                </Image.PreviewGroup>
              </ContainF>
            );
          })}
        </Slider>
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
  {
    img: paner3,
  },
  {
    img: paner4,
  },
];

const Wapeer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  margin: 20px auto;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .center {
    padding: 10px;
  }
  &::after {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${p1});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -2;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) -58.4%,
      rgba(0, 0, 0, 0) 114.8%
    );
    z-index: -1;
  }

  .slick-prev {
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
z-index: 1;
  }

  .slick-next {
    top: 50%;
    transform: translateY(-50%);
    right: 80px;
    z-index: 1;
  }
  .slick-prev:before {
    font-size: 50px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.39) 0%,
        rgba(0, 0, 0, 0.39) 100%
      ),
      url(<path-to-image>) lightgray 50% / cover no-repeat;
    color: #fff;
    font-family: "auto";
    padding: 10px;
  }
  .slick-next:before {
    font-size: 50px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.39) 0%,
        rgba(0, 0, 0, 0.39) 100%
      ),
      url(<path-to-image>) lightgray 50% / cover no-repeat;
    color: #fff;
    font-family: "auto";
    padding: 10px;
  }
`;

const ImgPaner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 111;
  width: 100%;

  img {
    aspect-ratio: 1920/900;
    width: ${({ isActive }) => (isActive ? "70%" : "50%")};
    transform: ${({ isActive }) => (isActive ? "scale(1.3)" : "scale(1)")};
    transition: transform 0.5s linear;
  }
`;

const TitlePaner = styled.div`
  width: 100%;
  position: absolute;
  top: 2%;
  left: 10%;
  /* transform: translateX(-50%) translateY(-20%); */
  z-index: 1;
  width: 100%;
  overflow: hidden;
  p {
    color: #fff;
    text-align: left;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h1 {
    color: #fff;
    text-align: left;
    font-family: "Work Sans";
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
  @media screen and (min-width: 320px) and (max-width: 460px) {
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 460px) and (max-width: 760px) {
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 24px;
    }
  }
`;

const ContainF = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .ant-image-preview-img {
    width: 70% !important;
  }
  img {
    .ant-image-preview-img {
      width: 70%;
    }
  }
`;






// const ContainF = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   .ant-image-preview-img {
//     width: 70% !important;
//   }
//   img {
//     .ant-image-preview-img {
//       width: 70%;
//     }
//   }
// `; 