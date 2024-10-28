import styled from "styled-components";
import rw1 from "../../acsset/slice/rv1.png";
import rw2 from "../../acsset/slice/rw2.png";
import av from "../../acsset/slice/avatar.png";
import av2 from "../../acsset/slice/avatar1.png";
import av3 from "../../acsset/slice/avatar2.png";
import av4 from "../../acsset/slice/avatar3.png";
import av5 from "../../acsset/slice/avatar4.png";
import { useState } from "react";

const Reviews = () => {
  const [textvalue, setTextvalue] =  useState("");
  const [comments, setComments] = useState([]);
  console.log("text", textvalue);
  console.log("textvalue", comments);
  const handleSendComment = () => {
    if (textvalue.trim()) {
      setComments([...comments, textvalue]); 
      setTextvalue(""); 
    }
  };
  return (
    <Wapper>
      <Container>
        <TitlePaner>
          {arrimg?.map((item, index) => {
            return (
              <Imgutem>
                <ImgTuI>
                  <img src={item.img} />
                  <h1>{item.title}</h1>
                </ImgTuI>
                <div>
                  <img src={item.image} />
                </div>
              </Imgutem>
            );
          })}
          <textarea placeholder="Enter your comment" onChange={(e)=>{setTextvalue(e.target.value)}}/>
          <Butonky>
            {/* <button onClick={handleSendComment}>Send</button> */}
          </Butonky>
        </TitlePaner>
      </Container>
      <SllTy>
        
        {contenq?.map((item, index) => {
          return (
            <ContenWap>
              <ImgRIght>
                <img src={item.img} />
              </ImgRIght>
              <div>
                <h1>{item.title}</h1>
                <Textp>
                  <img src={item.star} />
                  <p>{item.conten}</p>
                </Textp>
              </div>
              <p>{item.des}</p>
            </ContenWap>
          );
        })}
      </SllTy>
    <Duyts>
    <span>see more</span>
    </Duyts>
    </Wapper>
  );
};
export default Reviews;
const arrimg = [
  {
    img: rw1,
    title: "Sang Fes",
    image: rw2,
  },
];
const contenq = [
  {
    img: av,
    title: "sang nguyen",
    star: rw2,
    conten: "2 mins ago",
    des: "Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua",
  },
  {
    img: av2,
    title: "hoang duong",
    star: rw2,
    conten: "2 mins ago",
    des: "Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua",
  },
  {
    img: av3,
    title: "viet nguyen",
    star: rw2,
    conten: "2 mins ago",
    des: "Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua",
  },
  {
    img: av4,
    title: "minh hieu",
    star: rw2,
    conten: "2 mins ago",
    des: "Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua",
  },
  {
    img: av5,
    title: "phat nguyen",
    star: rw2,
    conten: "2 mins ago",
    des: "Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliquaConsequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua",
  },
];
const Duyts = styled.div`
    &:hover{
        span{
            color: #000;
            transform: scale(1.02);
            cursor: pointer;
            transition: all 0.25s linear;
        }
    }
  span {
    color: var(--Primary, #B88E2F);
text-align: center;
font-family: "Work Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 24px */
border: 1px solid var(--Primary, #B88E2F);
background: var(--Color-White, #FFF);
padding: 7px 10px;
  }
`;
const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  :hover{
        span{
            transform: scale(1.02);
        }
    }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitlePaner = styled.div`
  width: 95%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 0px 4px 41.1px -7px rgba(0, 0, 0, 0.1);
  textarea {
    width: 100%;
    background: #fff;
    overflow: hidden;
    color: #9f9f9f;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Heebo;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    padding: 10px;
  }
  button {
    width: 100px;
    background: #fff;
    color: #dcb47a;
    text-align: right;
    font-family: Heebo;
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
  }
`;
const Imgutem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
const ImgTuI = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h1 {
    color: #333;
    font-family: "Work Sans";
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }
`;
const Butonky = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ContenWap = styled.div`
  width: 80%;
  gap: 10px;
  padding: 20px;
  p {
    color: #333;
    font-family: "Work Sans";
    font-size: 20px;
    font-weight: 400;
    line-height: 148%;
    letter-spacing: -0.2px;
    text-align: left;
  }
  h1 {
    color: #333;
    font-family: "Work Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    text-align: left;
    letter-spacing: -0.16px;
  }
  @media screen and (min-width: 320px) and (max-width: 760px) {
width: 100%;
padding: 10px 0px;
p{
    font-size: 16px;
}
  }
`;
const ImgRIght = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;
const SllTy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Textp = styled.div`
  display: flex;
  text-align: left;
  gap: 10px;
  img{
   width: 30%;
  }
  @media screen and (min-width: 320px) and (max-width: 760px) {
    p{
        font-size: 16px;
    }
  }
`;
