import React from "react";
import styled from "styled-components";
import search from "../../acsset/slice/search1.png";
import sam from "../../acsset/slice/sam.png";
import sam1 from "../../acsset/slice/sam1.png";
import dd from "../../acsset/slice/dd.png";
import dd1 from "../../acsset/slice/dd1.png";
import ct1 from "../../acsset/slice/cd1.png";
import ct2 from "../../acsset/slice/cd2.png";
import ct3 from "../../acsset/slice/cd3.png";
import ct4 from "../../acsset/slice/cd4.png";
import f1 from "../../acsset/slice/f1.png";
import f2 from "../../acsset/slice/f2.png";
import f3 from "../../acsset/slice/f3.png";
import f4 from "../../acsset/slice/f4.png";
import tl1 from "../../acsset/slice/tl1.png";
import tl2 from "../../acsset/slice/tl2.png";
import tl3 from "../../acsset/slice/tl3.png";
import tl4 from "../../acsset/slice/tl4.png";
import { Tabs } from "antd";
import { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("1");
  const onChange = (key) => {
    setActiveTab(key);
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Modern",
      children: (
        <Tabstext>
          <p>
            Contemporary interior design is the perfect blend of modern style
            and the unique, creative trends of the new era. With a focus on
            simplicity, contemporary design offers open, airy spaces while
            ensuring elegance and comfort.
            <br />
            Neutral tones such as white, gray, and black are favored in
            contemporary interiors, combined with accent colors to create focal
            points. The furniture in this style typically features minimalist
            lines, flat surfaces, and uses materials like metal, glass, and
            natural wood to evoke a modern feel.
            <br />
            Moreover, lighting plays a crucial role, not just for illumination
            but also as an artistic expression in the living space. Ceiling
            lights, table lamps, or recessed lighting are all meticulously
            designed to serve both functional and aesthetic purposes.
            <br />
            Contemporary interior design not only emphasizes external beauty but
            also focuses on optimizing space usage. From small apartments to
            large villas, this style brings a living environment that is
            comfortable, sophisticated, and luxurious.
          </p>
        </Tabstext>
      ),
    },
    {
      key: "2",
      label: "Elegant",
      children: (
        <Tabstext>
          <p>
            Elegant interior design is all about creating spaces that exude
            sophistication, grace, and understated luxury. It focuses on clean
            lines, soft color palettes, and carefully curated details that come
            together to form a harmonious and refined atmosphere.
            <br />
            Neutral tones like beige, ivory, and soft gray often serve as the
            foundation, while subtle accents of gold, silver, or muted jewel
            tones bring a touch of richness to the space. High-quality materials
            such as silk, velvet, and polished wood add texture and depth,
            enhancing the feeling of elegance.
            <br />
            Furniture in an elegant design is sleek, with graceful curves and
            timeless appeal. Statement pieces, such as a beautiful chandelier, a
            classic sofa, or an artful mirror, serve as focal points that draw
            attention without overpowering the space.
            <br />
            The key to elegant interior design is balance — nothing feels too
            extravagant or too minimal. Instead, every element complements each
            other, creating a serene, luxurious environment that feels
            effortlessly stylish and comfortable.
          </p>
        </Tabstext>
      ),
    },
    {
      key: "3",
      label: "Classic",
      children: (
        <Tabstext>
          <p>
            Classical interior design is a timeless style that evokes elegance,
            grandeur, and a sense of refined luxury. Inspired by the
            architecture and design elements of ancient Greece and Rome,
            classical interiors are known for their symmetry, balance, and
            meticulous attention to detail.
            <br />
            Rich, warm color palettes dominate the space, often featuring shades
            of gold, cream, burgundy, and deep green. Furniture in classical
            design is typically crafted from high-quality materials like
            mahogany, walnut, and marble, with ornate carvings and intricate
            embellishments.
            <br />
            Decorative moldings, columns, and arches are frequently used to add
            depth and dimension to the rooms, creating a sense of opulence.
            Chandeliers, luxurious drapes, and gilded mirrors are also key
            features, enhancing the grandeur and sophistication of the overall
            design.
            <br />
            Classical interior design embodies a timeless beauty that transcends
            trends, offering a sense of regality and grace in every room. It's
            perfect for those who appreciate art, history, and the beauty of
            traditional craftsmanship.
          </p>
        </Tabstext>
      ),
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "1":
        return samarr.map((item, index) => (
          <Allsyteam key={index}>
            <Hover>
              <HoverImg>
                <img src={item.img} />
              </HoverImg>
            </Hover>
            <p>{item.title}</p>
            <h1>{item.conten}</h1>
            <span>{item.des}</span>
            <button>------ Read More</button>
          </Allsyteam>
        ));
      case "2":
        return samadd1.map((item, index) => (
          <Allsyteam key={index}>
            <Hover>
              <HoverImg>
                <img src={item.img} />
              </HoverImg>
            </Hover>
            <p>{item.title}</p>
            <h1>{item.conten}</h1>
            <span>{item.des}</span>
            <button>------ Read More</button>
          </Allsyteam>
        ));
      case "3":
        return samadd.map((item, index) => (
          <Allsyteam key={index}>
            <Hover>
              <HoverImg>
                <img src={item.img} />
              </HoverImg>
            </Hover>
            <p>{item.title}</p>
            <h1>{item.conten}</h1>
            <span>{item.des}</span>
            <button>------ Read More</button>
          </Allsyteam>
        ));
      default:
        return "";
    }
  };

  return (
    <Wapper>
      <Container>
        <TitlrBlog>
          <Titlesample>
            <h1>sample design</h1>
            <span>
              Netus et malesuada fames ac turpis egestas integer diam quam nulla
              porttitor
              <p>massa amet purus gravida quis blandit.</p>
            </span>
          </Titlesample>
          <Search>
            <Liner>
              <input placeholder="Search..." />
              <img src={search} />
            </Liner>
          </Search>
        </TitlrBlog>

        <Sample >
          <SampleLeft>{renderTabContent()}</SampleLeft>
          <SampleRight>
            <img src={sam1} />
            <h1>design pattern</h1>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            <Tabstext></Tabstext>
          </SampleRight>
        </Sample>
      </Container>
    </Wapper>
  );
};

export default Pricing;
const samarr = [
  {
    img: ct1,
    title: "European style",
    conten: "Creative and luxurious design",
    des: "The product is used by many customers and is satisfied when experiencing this luxurious contemporary European-style decor.",
  },
  {
    img: ct2,
    title: "airy and luxurious style",
    conten: "popular in every country",
    des: "This design gives you soothing eyes that can relax during a tiring day at work",
  },
  {
    img: ct3,
    title: "gentle style",
    conten: "Very suitable for families",
    des: "This is a design for your family with a quiet and gentle style, bringing a warm, cozy feeling",
  },
  {
    img: ct4,
    title: "youthful style",
    conten: "popular with young people",
    des: "This design is very popular with young people today and is also trusted by many people and the decor with a youthful design exudes the luxurious beauty of the room.",
  },
];
const samadd = [
  {
    img: f1,
    title: "European style",
    conten: "Creative and luxurious design",
    des: "The product is used by many customers and is satisfied when experiencing this luxurious contemporary European-style decor.",
  },
  {
    img: f2,
    title: "airy and luxurious style",
    conten: "popular in every country",
    des: "This design gives you soothing eyes that can relax during a tiring day at work",
  },
  {
    img: f3,
    title: "gentle style",
    conten: "Very suitable for families",
    des: "This is a design for your family with a quiet and gentle style, bringing a warm, cozy feeling",
  },
  {
    img: f4,
    title: "youthful style",
    conten: "popular with young people",
    des: "This design is very popular with young people today and is also trusted by many people and the decor with a youthful design exudes the luxurious beauty of the room.",
  },
];
const samadd1 = [
  {
    img: tl1,
    title: "European style",
    conten: "Creative and luxurious design",
    des: "The product is used by many customers and is satisfied when experiencing this luxurious contemporary European-style decor.",
  },
  {
    img: tl2,
    title: "airy and luxurious style",
    conten: "popular in every country",
    des: "This design gives you soothing eyes that can relax during a tiring day at work",
  },
  {
    img: tl3,
    title: "gentle style",
    conten: "Very suitable for families",
    des: "This is a design for your family with a quiet and gentle style, bringing a warm, cozy feeling",
  },
  {
    img: tl4,
    title: "youthful style",
    conten: "popular with young people",
    des: "This design is very popular with young people today and is also trusted by many people and the decor with a youthful design exudes the luxurious beauty of the room.",
  },
];
const samright = [
  {
    image: sam1,
  },
];
const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
`;
const Container = styled.div`
  /* background: #dfcfb8; */
`;
const TitlrBlog = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: #dfcfb8;
  padding-top: 70px;
`;
const Titlesample = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    color: #000;
    text-align: center;
    font-family: "Work Sans";
    font-size: 52px;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
  span {
    color: var(--Main-Colors-Gray-4, #292929);
    font-size: 18px;
    text-align: center;
    font-weight: 200;
    line-height: 100%;
  }
  p {
    color: var(--Main-Colors-Gray-4, #292929);
    font-size: 18px;
    text-align: center;
    font-weight: 200;
    line-height: 100%;
    padding: 10px;
  }
  @media screen and (min-width: 320px) and (max-width: 460px) {
    padding-top: 20px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
    span {
      font-size: 16px;
    }
  }
`;
const Search = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Liner = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffffd6;
  input {
    width: 100%;
    border: 1px solid #fff;
    backdrop-filter: blur(10px);
    color: #000;
    padding: 10px;
    background: #cccc;
  }
`;
const Sample = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: -20%;
    left: 0;
    width: 100%;
    height: 600px;
    background: #dfcfb8;
    z-index: -1;
  }
  @media screen and (min-width: 320px) and (max-width: 760px) {
    flex-direction: column-reverse;
  }
`;
const SampleLeft = styled.div`
  width: 60%;
  flex-wrap: wrap;
  @media screen and (min-width: 320px) and (max-width: 760px) {
    width: 100%;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
    span {
      font-size: 18px;
    }
  }
`;
const SampleRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 10px;
  gap: 20px;
  overflow: hidden;
  width: 30%;
  img {
    aspect-ratio: 400/200;
    max-width: 100%;
  }
  h1 {
    color: #000;
    text-align: left;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  @media screen and (min-width: 320px) and (max-width: 760px) {
    width: 100%;
  }
`;
const Allsyteam = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    width: 300px;
    background: #fff;
    color: #000;
    font-size: 24px;
    font-weight: 300;
  }
  p {
    color: #000;
    text-align: left;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  h1 {
    color: #000;
    text-align: left;
    font-family: "Work Sans";
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
  }
  span {
    color: #000;
    text-align: left;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  img {
    aspect-ratio: 800/400;
    width: 100%;
    &:hover {
      transform: scale(1.05);
      transition: all 0.25s linear;
      cursor: pointer;
    }
  }
`;
const Hover = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  &:hover {
    img {
      transform: scale(1.05);
      transition: all 0.25s linear;
    }
  }
`;
const HoverImg = styled.div`
  overflow: hidden;
  img {
    aspect-ratio: 700/400;
    width: 100%;
  }
`;
const Tabstext = styled.div`
  p {
    color: #9f9f9f;
    text-align: justify;
    font-family: "Work Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
