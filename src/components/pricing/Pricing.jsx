import React from "react";
import styled from "styled-components";
import search from "../../acsset/slice/search1.png";
import sam from "../../acsset/slice/templatephongtam.jpg";
import sam1 from "../../acsset/slice/sam1.png";
import sam2 from "../../acsset/slice/templatephongbep.webp";
import sam3 from "../../acsset/slice/templateden.jpg";
import classic from "../../acsset/slice/templatenhatamcd.jpg";
import classic1 from "../../acsset/slice/templatephongbepcd.png";
import classic2 from "../../acsset/slice/templatedencd.jpg";
import elegan from "../../acsset/slice/templatephongtamtl.jpg";
import elegan2 from "../../acsset/slice/templatephongbeptl.jpg";
import elegan3 from "../../acsset/slice/templatedentl.jpg";

import dd1 from "../../acsset/slice/dd1.png";
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
      label: "Luxury",
      children: (
        <TextConten>
          <p>
            A luxurious home design combines elegance and functionality, using
            high-quality materials like marble, hardwood, and sleek metals.
            Sophisticated lighting, spacious layouts, and custom details such as
            bespoke furniture create a refined, timeless aesthetic, offering
            both comfort and a sense of grandeur.
          </p>{" "}
        </TextConten>
      ),
    },
    {
      key: "2",
      label: "Classic",
      children: (
        <TextConten>
          <p>
            {" "}
            Classic home design exudes timeless elegance, characterized by rich
            materials, intricate details, and a warm color palette. Features
            like ornate moldings, hardwood floors, and vintage furnishings
            create a sense of sophistication and charm. Traditional elements
            such as chandeliers, antique decor, and grand fireplaces enhance the
            inviting atmosphere, while symmetrical layouts provide balance and
            harmony. This style emphasizes comfort and craftsmanship, making
            each space feel both luxurious and welcoming. Classic design
            celebrates history and artistry, ensuring that a home remains both
            stylish and functional for generations to come.,
          </p>
        </TextConten>
      ),
    },
    {
      key: "3",
      label: "Elegant",
      children: (
        <TextConten>
          <p>
            Elegant home design focuses on simplicity and sophistication,
            characterized by clean lines, neutral color palettes, and
            high-quality materials. This style incorporates minimalist furniture
            and refined decor, creating a serene atmosphere. Large windows allow
            natural light to flood the space, enhancing its openness. Thoughtful
            details, such as tasteful artwork and stylish lighting fixtures, add
            charm without overwhelming the design. The emphasis on functionality
            ensures that each element serves a purpose while maintaining
            aesthetic appeal, resulting in a harmonious environment that exudes
            modern luxury and timeless grace.3,
          </p>
        </TextConten>
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
            Explore our insights on the latest design trends and innovative techniques
              {/* <p>massa amet purus gravida quis blandit.</p> */}
            </span>
          </Titlesample>
          <Search>
            <Liner>
              {/* <input /> */}
              {/* <img src={search} /> */}
            </Liner>
          </Search>
        </TitlrBlog>

        <Sample>
          <SampleLeft>{renderTabContent()}</SampleLeft>

          <SampleRight>
            <img src={sam1} />
            <h1>design pattern</h1>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </SampleRight>
        </Sample>
      </Container>
    </Wapper>
  );
};

export default Pricing;
const samarr = [
  {
    img: sam,
    title: "September 14, 2024 by HomeStyler",
    conten: "Luxury Bathroom Design",
    des: "A luxurious bathroom is more than just a functional space; it's a retreat where relaxation and style converge. To create such an atmosphere, every design element must be thoughtfully curated, from the choice of materials to the layout and decor. The foundation of a luxurious bathroom often starts with a sophisticated color palette. Neutral tones like ivory, soft beige, or light gray are commonly used to evoke a sense of calm and elegance. These shades not only make the space feel expansive but also serve as a perfect backdrop for the luxurious accents that will be introduced. For those seeking a bolder, more dramatic aesthetic, deep colors like charcoal, navy blue, or emerald green can be paired with gold or brass fixtures, lending a rich, opulent feel to the room.",
  },
  {
    img: sam2,
    title: "September 18, 2024 by HomeStyler",
    conten: "Ideas For Your Luxury Kitchen",
    des: "A luxurious kitchen design is a perfect blend of functionality, style, and sophistication, creating a space that not only serves as the heart of the home but also exudes elegance. A luxurious kitchen often starts with a carefully selected color palette that sets the tone for the overall aesthetic. Neutral tones such as white, beige, or soft gray are popular choices for a sleek, modern look, as they provide a clean backdrop that highlights other design elements. For a bolder, more dramatic effect, rich hues like deep navy, emerald green, or even matte black can be incorporated to add depth and richness to the space. These colors are often complemented by metallic accents in gold, brass, or stainless steel, giving the kitchen a timeless and high-end appeal",
  },
  {
    img: sam3,
    title: "September 20, 2024 by HomeStyler",
    conten: "The Role of Lighting in Your Home",
    des: "Lighting plays a crucial role in creating a luxurious ambiance in any home, transforming both the aesthetic and functionality of a space. A well-designed lighting scheme can enhance the elegance of a room, highlight architectural features, and create a warm, inviting atmosphere. Luxurious lighting is not just about brightness; it's about layering light in a way that blends both practicality and style. Here’s how luxurious lighting can elevate the sophistication of your home.",
  },
];
const samadd = [
  {
    img: elegan,
    title: "September 20, 2024 by HomeStyer",
    conten: "Elegant Bathroom Design",
    des: "An elegant bathroom design blends luxury with functionality, creating a serene retreat. Key features include soft color palettes, such as whites and muted pastels, complemented by high-quality materials like marble or granite. Freestanding bathtubs and sleek vanities add sophistication, while polished fixtures in brass or chrome enhance the overall aesthetic. Thoughtful lighting, including wall sconces and ambient fixtures, creates a warm glow. Decorative elements like fresh flowers or tasteful artwork contribute to the inviting atmosphere, ensuring the bathroom is both a functional space and a tranquil escape from everyday life.",
  },
  {
    img: elegan2,
    title: "September 19, 2024 by HomeStyler",
    conten: "Elegant Kitchen That Expresses Your Unique Style",
    des: "An elegant kitchen design combines sophistication with practicality, featuring sleek cabinetry and high-quality materials. A neutral color palette, complemented by subtle accents, creates a harmonious atmosphere. Elegant countertops in marble or quartz enhance functionality while adding luxury. Thoughtfully placed pendant lights illuminate workspaces, while open shelving displays stylish dishware. A large kitchen island serves as both a prep area and a gathering spot, promoting social interaction. Decorative elements, such as fresh herbs or tasteful art, contribute to the inviting ambiance, making the kitchen not only a place for cooking but also a beautiful space for entertaining and family gatherings.",
  },
  {
    img: elegan3,
    title: "September 18, 2022 by lastudio",
    conten: "Make Your Home Space More Sophisticated With Pendant Lights",
    des: "Elegant pendant lighting adds a touch of sophistication to any space, serving as both a functional and decorative element. Available in various styles, from minimalist to ornate, these fixtures enhance the room's ambiance. Choosing materials like glass, brass, or polished metals elevates the aesthetic, while thoughtful placement above dining tables or kitchen islands creates focal points. Dimmable options allow for adjustable brightness, setting the perfect mood for any occasion. With their stylish designs and versatility, elegant pendant lights not only illuminate spaces but also contribute to the overall charm and character of a home.",
  },
];
const samadd1 = [
  {
    img: classic,
    title: "September 21, 2024 by HomeStyler",
    conten: "Ideas For Classic Bathrooms",
    des: "A classic bathroom design exudes timeless elegance and charm, making it a perfect choice for those who appreciate traditional aesthetics. The key to creating a classic bathroom lies in the careful selection of fixtures, materials, and colors that evoke a sense of history and sophistication. One of the standout features of a classic bathroom is the clawfoot bathtub, which serves as a stunning focal point. These freestanding tubs not only offer a luxurious bathing experience but also add an element of vintage appeal. Paired with a floor-mounted tub filler or a vintage-style faucet, the bathtub becomes a statement piece that enhances the overall ambiance",
  },
  {
    img: classic1,
    title: "September 19, 2024 by HomeStyler",
    conten: "The Kitchen Is The Heart Of The Home",
    des: "A classic kitchen design evokes warmth and timeless elegance, making it the heart of the home. Characterized by rich cabinetry, often in deep wood tones or soft pastels, a classic kitchen exudes a welcoming atmosphere. Custom-built cabinetry with detailed moldings and antique finishes enhances the charm, providing both beauty and functionality. Open shelving can be incorporated to display fine china or vintage cookware, adding a personal touch to the decor.",
  },
  {
    img: classic2,
    title: "September 16, 2024 by HomeStyler",
    conten: "European Classic Lamps Are A Timeless Design",
    des: "European classic lighting decor brings an air of sophistication and timeless elegance to any home. Chandeliers with intricate designs, often made from crystal or wrought iron, serve as stunning focal points in living rooms and dining areas, casting a warm, inviting glow. Wall sconces featuring antique finishes can enhance hallways or entryways, adding character and depth. Pendant lights in vintage styles, adorned with ornate details, are perfect for kitchens or breakfast nooks, blending functionality with beauty. The use of soft, ambient lighting creates a cozy atmosphere, while elegant lamps with fabric shades offer additional illumination. Incorporating these classic lighting elements not only enhances the overall aesthetic but also evokes a sense of history and luxury throughout the home.",
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
`;
const Search = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Liner = styled.div`
  width: 600px;
  height: 1px;
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
  @media screen and (min-width: 320px) and (max-width: 760px) {
    flex-direction: column-reverse;
  }
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
`;
const SampleLeft = styled.div`
  width: 60%;
  flex-wrap: wrap;
  @media screen and (min-width: 320px) and (max-width: 760px) {
    width: 100%;
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
  @media screen and (min-width: 320px) and (max-width: 760px) {
    width: 100%;
    h1{
      font-size: 18px;
    }
    p{
      font-size: 18px;
    }
    span{
      font-size: 18px;
    }
  }
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
  @media screen and (min-width: 320px) and (max-width: 760px) {
    h1{
      font-size: 18px;
    }
    p{
      font-size: 18px;
    }
    span{
      font-size: 18px;
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
const TextConten = styled.div`
  p {
    color: #9f9f9f;
    text-align: left;
    font-family: "Work Sans";
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
  }
`;
