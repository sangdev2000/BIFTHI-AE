import React, { useEffect, useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import mn1 from "../../../acsset/slice/mn1.png";
import mlogo1 from "../../../acsset/slice/Logo 1.png";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleShow = () => {
    setNavList(!navList);
  };
  console.log("sdsad", scrollPosition);
  return (
    <Wapper>
      <Container scrollPosition={scrollPosition}>
        <LogoImg>
          <img src={mlogo1} />
        </LogoImg>
        <MenuLeft>
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <Menudestop scrollPosition={scrollPosition} key={index}>
                <NavLink   exact={list.path === "/"}  key={index} to={list.path}>
                  <p>{list.text}</p>
                </NavLink>
              </Menudestop>
            ))}
          </ul>
        </MenuLeft>
        <MenuMobile>
          <img src={mn1} onClick={handleShow}></img>
        </MenuMobile>
        {navList && (
          <ConMenumobileConten navList={navList}>
            {nav?.map((item, index) => {
              return (
                <HoverStyled>
                  <NavLink to={item.path} onClick={handleShow}>
                    <p>{item.text}</p>
                  </NavLink>
                </HoverStyled>
              );
            })}
          </ConMenumobileConten>
        )}
      </Container>
    </Wapper>
  );
};

export default Header;
const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  background-color: transparent !important;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999999;

`;
const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 60px;
  background: ${(props) => (props.scrollPosition > 50 ? "rgba(255, 255, 255, 0.8)" : "")};
`;
const Menudestop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  .active{
    color: #826112;
  }
  a {
    color: ${(props) => (props.scrollPosition > 50 ? "#000" : "#fff")};
    text-align: center;
    font-family: "Work Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
const MenuMobile = styled.div`
  position: absolute;
  top: 0;
  right: 40px;
  z-index: 2;
  @media screen and (min-width: 840px) {
    display: none;
  }
`;
const ConMenumobileConten = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  top: 0;
  gap: 10px;
  right: 0;
  background: #fff;
  height: 100vh;
  width: ${(props) => (props.navList ? "50%" : "0")};
  padding: ${(props) => (props.navList ? "10px" : "0")};
  z-index: 1;
  transition: width 0.5s ease, padding 0.5s ease;
  overflow: hidden;
`;
const MenuLeft = styled.div`
  @media screen and (min-width: 320px) and (max-width: 840px) {
    display: none;
  }
`;
const HoverStyled = styled.div`
  padding: 10px;
  p {
    color: rgba(17, 16, 16, 1);
    text-align: left;
    font-family: "Work Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &:hover {
    background: #ccc;
  }
`;
const LogoImg = styled.div`
  img {
    width: 100%;
  }
`;
