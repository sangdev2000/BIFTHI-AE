import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaLeaf,
  FaArrowUp,
} from "react-icons/fa";
import aptech from "../../images/aptech.png";
import Logo from "../../images/Logo1.png";
import Logo5 from "../../images/logo5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
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
  // Hàm theo dõi sự kiện cuộn
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  // Cuộn trang lên đầu
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <FooterContainer>
      <TopSection>
        <BrandName data-aos="fade-up">HomeStyler</BrandName>
        <SubscriptionText>
          Subscribe to get 10% off your first order
        </SubscriptionText>
        <EmailInputWrapper data-aos="fade-down">
          <EmailInput type="email" placeholder="Enter your email..." />
          <SendButton>
            <FaLeaf />
          </SendButton>
        </EmailInputWrapper>
      </TopSection>
      <Border />
      <BottomSection>
        <SocialIcons data-aos="fade-up">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </SocialIcons>
        <FooterNav>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/contact">Contact</Link>
        </FooterNav>
      </BottomSection>
      <CopyrightText>
        COPYRIGHT 2024 © BIFTHI. ALL RIGHTS RESERVED.
      </CopyrightText>
      <Logo1>
        <img src={aptech} alt="" />
        <img src={Logo} alt="" />
        <img src={Logo5}/>
      </Logo1>
      {/* Nút cuộn lên */}
      <ScrollArrow onClick={scrollTop} show={showScroll}>
        <FaArrowUp />
      </ScrollArrow>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #2d2d2d;
  color: #bdbdbd;
  padding: 50px 40px;
  text-align: center;
  position: relative; /* Để định vị mũi tên trong footer */
`;

const TopSection = styled.div`
  margin-bottom: 60px;
`;

const BrandName = styled.h1`
  font-size: 48px;
  color: white;
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 460px) {
    font-size: 32px;
  }
`;

const SubscriptionText = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.34em;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 460px) {
    font-size: 18px;
  }
`;

const EmailInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  max-width: 400px;
  margin: 0 auto;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
  color: #bdbdbd;
  font-size: 16px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

const SendButton = styled.button`
  background: transparent;
  border: none;
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const Border = styled.div`
  border-bottom: 0.5px solid rgba(189, 189, 189, 0.8);
  margin-bottom: 40px;
`;

const BottomSection = styled.div`
  /* display: flex; */
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 760px) {
    flex-wrap: wrap;
  }
`;

const SocialIcons = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  a {
    margin: 0 10px;
    font-size: 20px;
    color: #bdbdbd;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }
`;

const FooterNav = styled.div`
  width: 100%;
  margin-bottom: 30px;

  a {
    margin: 0 15px;
    font-size: 16px;
    color: #bdbdbd;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  color: #7a7a7a;
`;

// CSS cho mũi tên cuộn lên trên
const ScrollArrow = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #2d2d2d;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  transition: opacity 0.4s;
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};

  &:hover {
    background: #bdbdbd;
    color: #2d2d2d;
  }
`;
const Logo1 = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    width: 100px;
    height: auto;
  }
`;