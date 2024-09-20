import React from "react";
import styled from "styled-components";
import search from "../../acsset/slice/search1.png";
import sam from "../../acsset/slice/sam.png";
import sam1 from "../../acsset/slice/sam1.png";
import dd from "../../acsset/slice/dd.png";
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
      label: "modern",
      children: "page hien dai",
    },
    {
      key: "2",
      label: "elegant",
      children: "page duong dai",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
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
        return  samadd.map((item, index) => (
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
    title: "September 10, 2022 by lastudio",
    conten: "10 Ideas for Furnishing a Family Room",
    des: "Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tortor condimentum lacinia quis vel eros donec ac. Enim eu turpis egestas pretium aenean pharetra magna ac. Sed velit dignissim sodales ut…",
  },
  {
    img: sam,
    title: "September 10, 2022 by lastudio",
    conten: "10 Ideas for Furnishing a Family Room",
    des: "Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tortor condimentum lacinia quis vel eros donec ac. Enim eu turpis egestas pretium aenean pharetra magna ac. Sed velit dignissim sodales ut…",
  },
  {
    img: sam,
    title: "September 10, 2022 by lastudio",
    conten: "10 Ideas for Furnishing a Family Room",
    des: "Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tortor condimentum lacinia quis vel eros donec ac. Enim eu turpis egestas pretium aenean pharetra magna ac. Sed velit dignissim sodales ut…",
  },
];
const samadd = [
  {
    img: dd,
    title: "September 10, 2022 by lastudio",
    conten: "10 Ideas for Furnishing a Family Room",
    des: "Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tortor condimentum lacinia quis vel eros donec ac. Enim eu turpis egestas pretium aenean pharetra magna ac. Sed velit dignissim sodales ut…",
  },
  {
    img: sam,
    title: "September 10, 2022 by lastudio",
    conten: "10 Ideas for Furnishing a Family Room",
    des: "Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tortor condimentum lacinia quis vel eros donec ac. Enim eu turpis egestas pretium aenean pharetra magna ac. Sed velit dignissim sodales ut…",
  },
  {
    img: sam,
    title: "September 10, 2022 by lastudio",
    conten: "10 Ideas for Furnishing a Family Room",
    des: "Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tortor condimentum lacinia quis vel eros donec ac. Enim eu turpis egestas pretium aenean pharetra magna ac. Sed velit dignissim sodales ut…",
  },
];
const samadd1 = [
  {
    img: dd1,
    title: "September 10, 2022 by lastudio",
    conten: "10 Ideas for Furnishing a Family Room",
    des: "Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tortor condimentum lacinia quis vel eros donec ac. Enim eu turpis egestas pretium aenean pharetra magna ac. Sed velit dignissim sodales ut…",
  },
  {
    img: sam,
    title: "September 10, 2022 by lastudio",
    conten: "10 Ideas for Furnishing a Family Room",
    des: "Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tortor condimentum lacinia quis vel eros donec ac. Enim eu turpis egestas pretium aenean pharetra magna ac. Sed velit dignissim sodales ut…",
  },
  {
    img: sam,
    title: "September 10, 2022 by lastudio",
    conten: "10 Ideas for Furnishing a Family Room",
    des: "Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tortor condimentum lacinia quis vel eros donec ac. Enim eu turpis egestas pretium aenean pharetra magna ac. Sed velit dignissim sodales ut…",
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
`;
const SampleLeft = styled.div`
  width: 60%;
  flex-wrap: wrap;
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
