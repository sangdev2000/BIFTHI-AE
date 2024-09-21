import React, { useEffect } from "react";
import { list } from "../../data/Data";
import styled from "styled-components";
import pr1 from "../../../acsset/slice/pr1.png";
import li1 from "../../../acsset/slice/li1.png";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const RecentCard = ({ products }) => {
  useEffect(() => {
    AOS.init({ duration: 1000});
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  AOS.init();
  console.log("dssadsa", list);
  return (
    <Wapper>
      <TitleWaper data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <h1>Featured Products</h1>
        <Spanet>
        <p>See More</p>
          <Link to={"/product"}>
          <div>
            <img src={li1}></img>
          </div>
          </Link>
        </Spanet>
      </TitleWaper>
      <Container data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        {
        list?.slice(0,4).map((item, index) => {
            return (
              <ContainerAll>
                <Link to={`/product/${item.id}`}>
                  <img src={item.images[0]} />
                  <div>
                    <h1>{item.name}</h1>
                  </div>
                  <p>{item.price}</p>

                  <div>
                    <button>{item.detail}</button>
                  </div>
                </Link>
              </ContainerAll>
            );
          })}
      </Container>
    </Wapper>
  );
};

export default RecentCard;

const product = [
  {
    img: pr1,
    title: "gế sofa",
    price: "$15.00",
    detaill: "See More",
  },
  {
    img: pr1,
    title: "gế sofa",
    price: "$15.00",
    detaill: "See More",
  },
  {
    img: pr1,
    title: "gế sofa",
    price: "$15.00",
    detaill: "See More",
  },
  {
    img: pr1,
    title: "gế sofa",
    price: "$15.00",
    detaill: "See More  ",
  },
];
const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 320px) and (max-width: 760px) {
    width: 100%;
    gap: 10px;
    padding: 10px;
  }
`;
const ContainerAll = styled.div`
  width: calc((100% - 156px) / 4);
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 10px 5px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.25s linear;
  }
  h1 {
    color: var(--Main-Colors-Gray-4, #292929);
    font-family: "Work Sans";
    font-size: 22.606px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -1.13px;
  }
  p {
    color: var(--Main-Colors-Gray-4, #292929);
    font-family: "Work Sans";
    font-size: 32.294px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 32.294px */
    letter-spacing: -1.615px;
  }
  button {
    color: #dcb47a;
    font-family: "Work Sans";
    font-size: 22.606px;
    font-style: italic;
    font-weight: 400;
    line-height: 100%; /* 22.606px */
    letter-spacing: -1.13px;
    border-radius: 19.376px;
    border: 1.615px solid #dcb47a;
    background: var(--main-colors-green-05, #f6fff6);
    padding: 6.459px 12.918px;
  }
  a{
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  img {
    width: 100%;
    height: 300px;
  }
  @media screen and (min-width: 320px) and (max-width: 460px) {
    width: 100%;
  }
  @media screen and (min-width: 460px) and (max-width: 760px) {
    width: calc((100% - 104px) / 2);
  }
`;
const TitleWaper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;
  h1 {
    color: var(--font, #081323);
    font-family: "Work Sans";
    font-size: 42px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  @media screen and (min-width: 320px) and (max-width: 460px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;
const Spanet = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    img {
      transform: translateX(100%);
      transition: all 0.25s linear;
      cursor: pointer;
    }
  }
  img {
    width: 100%;
  }
  p {
    cursor: pointer;
    color: var(--Gray-2, #4f4f4f);
    font-family: "Work Sans";
    font-size: 25.931px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
  }
`;
