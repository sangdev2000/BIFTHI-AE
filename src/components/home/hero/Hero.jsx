import React, { useEffect } from "react";
import "./hero.css";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slice1 from "../../../acsset/slice/slice1.png";
import slice2 from "../../../acsset/slice/thietke.png";
import slice3 from "../../../acsset/slice/slide2 1.png";
import br1 from "../../../acsset/slice/br1.png";
import avatar from "../../../acsset/slice/avatar.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
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
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
  };
  return (
    <Wapper>
      <Container>
        <Slider {...settings}>
          <ImgSlice>
            <img src={slice1} />
          </ImgSlice>
          <ImgSlice>
            <img src={slice2} />
          </ImgSlice>
          <ImgSlice>
            <img src={slice3} />
          </ImgSlice>
        </Slider>
        <ContenSlice data-aos="fade-right">
          <ContenIFT>
            <p>Luxury in every little corner</p>
          </ContenIFT>
        </ContenSlice>
        <ContenLeft data-aos="fade-right">
          <ContenIFT>
            <h1>Sang Vip</h1>
            <p>Homestyle truly brings freshness and uniqueness to your home.</p>
            <ContenIFTbr>
              <img src={avatar} />
            </ContenIFTbr>
          </ContenIFT>
        </ContenLeft>
      </Container>
      <div className="container">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Bring Serenity to Your Place <br />
          with Our Thoughtful Designs
        </h1>
        <h3>
          Bring Serenity to
          <br /> Your Place
        </h3>
        <p>
        Discover the perfect design that reflects your style, 
          <br /> and we will bring it to life
        </p>
      </div>
    </Wapper>
  );
};

export default Hero;
const Slice = styled.div`
  overflow: hidden;
`;

const ImgSlice = styled.div`
  width: 100%;
  /* aspect-ratio: 1920/1041; */
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
const ContenSlice = styled.div`
  background-image: url(${br1});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-40%);
  width: 205px;
  height: 196px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  h1 {
    color: #fff;
    font-family: "Work Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #fff;
    font-family: "Work Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media screen and (min-width: 320px) and (max-width: 760px) {
    display: none;
  }
  @media screen and (min-width: 760px) and (max-width: 860px) {
    h1 {
      color: #fff;
      font-family: "Work Sans";
      font-size: 28px !important;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: #fff;
      font-family: "Work Sans";
      font-size: 16px !important;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
const Container = styled.div`
  position: relative;
  overflow: hidden;
`;
const Searchplant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 463px;
  border-radius: 50px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  img {
    width: 100%;
  }
  input {
    color: #fff !important;
    text-align: center;
    font-family: "Work Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media screen and (min-width: 460px) {
    width: 360px;
    height: 50px;
  }
  @media screen and (min-width: 320px) and (max-width: 460px) {
    display: none;
  }
`;
const ConImg = styled.div`
  background: #525a55;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContenLeft = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  top: 70%;
  left: 60px;
  width: 304px;
  border-radius: 50px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  @media screen and (min-width: 320px) and (max-width: 860px) {
    display: none;
  }
`;
const ContenIFT = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    color: #fff;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-transform: capitalize;
  }
  p {
    color: #fff;
    text-align: center;
    font-family: "Work Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
  }
  @media screen and (min-width: 320px) and (max-width: 760px) {
    display: none;
  }
`;
const ContenIFTbr = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 60px;
  height: 60px;
`;
const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  overflow: hidden;

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h1 {
      color: #fff;
      text-align: center;
      font-family: "Work Sans";
      font-size: 52px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    h3 {
      color: #fff;
      text-align: center;
      font-family: "Work Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: #fff;
      text-align: center;
      font-family: "Work Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }

  .slick-prev {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    left: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) -58.4%,
      rgba(0, 0, 0, 0) 114.8%
    );
    z-index: 2;
    height: 100%;
    padding: 20px;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .slick-next {
    top: 45%;
    transform: translateY(-50%);
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) -58.4%,
      rgba(0, 0, 0, 0) 114.8%
    );
    z-index: 2;
    height: 100%;
    padding: 20px;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  @media screen and (min-width: 320px) and (max-width: 460px) {
    ${ContenSlice} {
      h1 {
        color: #fff;
        font-family: "Work Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      p {
        color: #fff;
        font-family: "Work Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    .container {
      top: 20%;
      h1 {
        color: #fff;
        text-align: center;
        font-family: "Work Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      p {
        display: none;
      }
    }
  }
  @media screen and (min-width: 460px) and (max-width: 860px) {
    ${ContenSlice} {
      h1 {
        color: #fff;
        font-family: "Work Sans";
        font-size: 52px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      p {
        color: #fff;
        font-family: "Work Sans";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    .container {
      top: 20%;
      h1 {
        color: #fff;
        text-align: center;
        font-family: "Work Sans";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      p {
        display: none;
      }
    }
  }
  @media screen and (min-width: 760px) {
    h3 {
      display: none;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 760px) {
    h1 {
      display: none;
    }
  }
`;