import React from "react";
import styled from "styled-components";

const Back = ({ icon1, icon2, icon3, icon4, title, cover }) => {
  return (
    <Wrapper>
      <BackgroundImage src={cover} alt="background" />
      <Content>
        <Title>{title}</Title>
        <Breadcrumb>Bring Serenity to Your Place
        with Our Thoughtful Designs</Breadcrumb>
        <IconsContainer>
          <IconItem>
            <img src={icon1} alt="Living Room" />
          </IconItem>
          <IconItem>
            <img src={icon2} alt="Kitchen" />
          </IconItem>
          <IconItem>
            <img src={icon3} alt="Bed Room" />
          </IconItem>
          <IconItem>
            <img src={icon4} alt="Home Decor" />
          </IconItem>
        </IconsContainer>
      </Content>
    </Wrapper>
  );
};

export default Back;

// Styles
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1920/400;
`;

const Content = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Breadcrumb = styled.p`
  font-size: 16px;
  color: #ccc;
  margin-bottom: 30px;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease; /* Thêm transition để tạo hiệu ứng mượt mà khi hover */

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px;
    filter: brightness(0) invert(1); /* Biến icon thành màu trắng */
    transition: transform 0.3s ease; /* Thêm hiệu ứng phóng to khi hover */
  }

  span {
    color: white;
    font-size: 14px;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.1); /* Phóng to toàn bộ phần tử khi hover */
  }

  &:hover img {
    transform: scale(1.2); /* Phóng to icon khi hover */
  }
`;
