import styled from "styled-components";
import { Image } from "antd";
import sp1 from "../../../acsset/slice/sp1.png";
import sp2 from "../../../acsset/slice/sp2.png";
import sp3 from "../../../acsset/slice/sp3.png";
import sp4 from "../../../acsset/slice/sp4.png";
import sp5 from "../../../acsset/slice/sp5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Sampledesign = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Wapper>
      <div>
        <TitleConten
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <h1>Product Sample</h1>
          
        </TitleConten>
        <Containerr>
          {arrimg?.map((item, index) => {
            return (
              <Container key={index}>
                <Title>
                  <h1>{item.title}</h1>
                </Title>
                <Image
                  data-aos="fade-right"
                  preview={{
                    destroyOnClose: true,
                    imageRender: () => (
                      <AllPaner>
                        <img src={item.img} />
                        <BoderFt>
                          <Link to={item.link}>
                            <h1>See More</h1>
                          </Link>
                        </BoderFt>
                      </AllPaner>
                    ),
                    toolbarRender: () => false,
                  }}
                  width={"100%"}
                  src={item.img}
                />
              </Container>
            );
          })}
        </Containerr>
        <Right>
          {iMT?.map((item, index) => {
            return (
              <Right key={index}>
                <Title>
                  <h1>{item.title}</h1>
                </Title>
                <Image
                  data-aos="fade-left"
                  preview={{
                    destroyOnClose: false,
                    imageRender: () => (
                      <AllPaner>
                        <img src={item.img} />
                        <BoderFt>
                          <Link to={item.link}>
                            <h1>See More</h1>
                          </Link>
                        </BoderFt>
                      </AllPaner>
                    ),
                    toolbarRender: () => false,
                  }}
                  src={item.img}
                />
              </Right>
            );
          })}
        </Right>
      </div>
    </Wapper>
  );
};

export default Sampledesign;

const arrimg = [
  {
    img: sp1,
    title: "Interior",
    link: "/Interior",
  },
  {
    img: sp2,
    title: "Illumination",
    link: "/illumination",
  },
];

const iMT = [
  {
    img: sp3,
    title: "Design",
    link: "/interiordesign",
  },

  {
    img: sp4,
    title: "Kitchen",
    link: "/roomkitchen",
  },
  {
    img: sp5,
    title: "Bathroom",
    link: "/bathroom",
  },
];

const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;

  .ant-image-preview-root .ant-image-preview-img {
    width: 100% !important;
    height: auto !important;
    object-fit: contain;
  }

  .ant-image-mask {
    border-radius: 20px;
  }

  .css-dev-only-do-not-override-qnu6hi.ant-image .ant-image-img {
    width: 100%;
    object-fit: contain;
  }
`;

const Containerr = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  gap: 20px;

  img {
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 460px) {
    flex-wrap: wrap;
    padding: 10px;
  }
`;

const Right = styled.div`
  width: calc((100% - 72) / 3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 10px;
  padding-top: 10px;
  overflow: hidden;
  .ant-image-mask-info{
    position: absolute;
    top: 20%;
  }
  img {
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 460px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (min-width: 460px) and (max-width: 760px) {
    width: 100%;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  width: 400px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) -58.4%,
    rgba(0, 0, 0, 0) 114.8%
  );

  h1 {
    color: #fff;
    text-align: center;
    font-family: "Work Sans";
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
  }

  @media screen and (min-width: 320px) and (max-width: 460px) {
    h1 {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 460px) and (max-width: 760px) {
    h1 {
      font-size: 32px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  overflow: hidden;
  .ant-image-mask-info{
    position: absolute;
    top: 20%;
  }
`;

const TitleConten = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  h1 {
    color: var(--font, #081323);
    text-align: center;
    font-family: "Work Sans";
    font-size: 52px;
    font-weight: 600;
    line-height: normal;

    p {
      color: var(--Gray-2, #4f4f4f);
      text-align: center;
      font-family: "Work Sans";
      font-size: 32px;
      font-weight: 400;
      line-height: normal;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 460px) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
      text-align: center;
    }
  }
`;
const AllPaner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    color: #fff;
    text-align: center;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;
const BoderFt = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) -58.4%,
    rgba(0, 0, 0, 0) 114.8%
  );
  top: 95%;
  cursor: pointer;
`;