import styled from "styled-components";
import avatar from "../../../acsset/slice/avatar.png";
import avatar1 from "../../../acsset/slice/avatar1.png";
import avatar2 from "../../../acsset/slice/avatar2.png";
import avatar3 from "../../../acsset/slice/avatar3.png";
import avatar4 from "../../../acsset/slice/avatar4.png";
import member from "../../../acsset/slice/member.png";
import t1 from "../../../acsset/slice/t1.png";
import t2 from "../../../acsset/slice/t2.png";
import t3 from "../../../acsset/slice/t3.png";
import "aos/dist/aos.css";
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
const Ourteam = () => {
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
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <EvaluateWapper>
      <ContenEvaluate>
        <img src={member} />
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Meet Our Teams</h1>
        </div>
      </ContenEvaluate>
      <div className="slider-container">
        <ContainerEvalua>
          <Slider {...settings}>
            {arrconten?.map((item) => {
              return (
                <Information
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <ImgSlicert
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                  >
                    <img src={item.img} />
                  </ImgSlicert>
                  <h1>{item.name}</h1>
                  <h3>{item.conten}</h3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Contusfd>
                      <Facebook>
                        {item.star.map((item) => (
                          <img
                            style={{ width: "40px", height: "40px" }}
                            src={item}
                          />
                        ))}
                      </Facebook>
                    </Contusfd>
                  </div>
                </Information>
              );
            })}
          </Slider>
        </ContainerEvalua>
      </div>
    </EvaluateWapper>
  );
};
export default Ourteam;

const arrconten = [

  {
    img: avatar1,
    conten: "CEO",
    name: " HoangCT",
    star: [t1, t2, t3],
  },
  {
    img: avatar2,
    conten: "CEO",
    name: "VietBD",
    star: [t1, t2, t3],
  },
  {
    img: avatar,
    conten: "CEO",
    name: "Sang-VIP",
    star: [t1, t2, t3],
  },
  {
    img: avatar3,
    conten: "CEO",
    name: "MINH HIEU",
    star: [t1, t2, t3],
  },
  {
    img: avatar4,
    conten: "CEO",
    name: "PhatCt",
    star: [t1, t2, t3],
  },
];

const EvaluateWapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  padding-top: 80px;
  padding-bottom: 100px;
  @media screen and (min-width: 320px) and (max-width: 780px) {
    margin: 80px auto;
  }
  .evaluate__Information-sc-18itzn1-3hTBHeg {
    z-index: 1 !important;
  }
  .slick-track {
    display: flex;
    gap: 10px;
  }
  .slick-center {
    /* transform: scale(1.4);
    transition: 0.3s linear; */
    z-index: 1 !important;
  }
`;
const ContainerEvalua = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ContenEvaluate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-direction: column;
  padding-bottom: 30px;

  p:first-child {
    text-align: center;
    color: #161c2d;
    text-align: center;
    font-family: "Montserrat";
    font-size: 24px;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -0.274px;
    @media screen and (min-width: 320px) and (max-width: 460px) {
      font-size: 20px;
    }
  }
  p:last-child {
    color: #161c2d;
    text-align: center;
    font-family: "Montserrat";
    font-size: 32px;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -0.274px;
    @media screen and (min-width: 320px) and (max-width: 460px) {
      font-size: 20px;
    }
  }
  h1 {
    color: #161c2d;
    text-align: center;
    font-family: "Montserrat";
    font-size: 48px;
    font-weight: 300;
    line-height: 100%;
    letter-spacing: -1.643px;
    text-transform: uppercase;
    @media screen and (min-width: 320px) and (max-width: 460px) {
      font-size: 18px;
    }
    @media screen and (min-width: 460px) and (max-width: 1024px) {
      font-size: 30px;
    }
  }
`;
const Information = styled.div`
  width: 100%;
  display: flex;
  border-radius: 13.694px;
  padding: 10px;
  z-index: -999999999999999999999999999999999999999999 !important;
  &:hover {
    background: #e5d9bc;
    transition: all 0.25s linear;
    cursor: pointer;
  }
  @media screen and (min-width: 320px) and (max-width: 560px) {
    width: 100%;
    padding: 10px;
    gap: 0;
  }
  @media screen and (min-width: 560px) and (max-width: 1024px) {
    width: calc((100% - 82px) / 2);
    padding: 10px;
    gap: 10px;
  }
  @media screen and (min-width: 760px) and (max-width: 1024px) {
    padding: 10px;
    gap: 10px;
  }
  h1 {
    color: #000;
    text-align: center;
    font-family: "Work Sans";
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    @media screen and (min-width: 460px) and (max-width: 760px) {
      font-size: 12px;
    }
    @media screen and (min-width: 760px) and (max-width: 1024px) {
      font-size: 18px;
    }
  }
  h3 {
    color: #000;
    text-align: center;
    font-family: "Work Sans";
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    @media screen and (min-width: 320px) and (max-width: 760px) {
      font-size: 16px;
    }
    @media screen and (min-width: 760px) and (max-width: 1024px) {
      font-size: 16px;
    }
  }

  img:last-child {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;
const ImgSlicert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img:first-child {
    aspect-ratio: 100/100;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;
const Contusfd = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Facebook = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  img {
    width: 40px;
    width: 40px;
  }
`;
