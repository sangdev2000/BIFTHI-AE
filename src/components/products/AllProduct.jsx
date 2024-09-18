// import React from "react";
// import { list } from "../data/Data";
// import { Link } from "react-router-dom"; // Import Link từ react-router-dom
// import styled from "styled-components";


// const AllProduct = ({ products }) => {
//   return (
//     <div className="content grid3 mtop">
//         {products?.map((val) => {
//           const { id, cover, category, name, price, type } = val;
//           return (
//             <div className="box shadow" key={id}>
//               <Link to={`/product/${id}`}>
//                 <div className="img">
//                   <img src={cover} alt={name} />
//                 </div>
//                 <div className="text">
//                   <div className="category flex">
//                     <span
//                       style={{
//                         background:
//                           category === "Phòng tắm" ? "#25b5791a" : "#ff98001a",
//                         color: category === "Phòng tắm" ? "#25b579" : "#ff9800",
//                       }}
//                     >
//                       {category}
//                     </span>
//                     <i className="fa fa-heart"></i>
//                   </div>
//                   <h4>{name}</h4>
//                   {/* Nếu cần hiển thị thêm thông tin khác như location, có thể thêm vào đây */}
//                 </div>
//                 <div className="button flex">
//                   <div>
//                     <button className="btn2">{price}</button>{" "}
//                   </div>
//                   <span>{type}</span>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//   );
// };

// export default AllProduct;
// const Wapper = styled.div`
// width: 100%;
// max-width: 1440px;
// margin: 0px auto;
// `;
// const Container = styled.div`
// width: 100%;
// display: flex;
// align-items: center;
// justify-content: space-between;
// flex-wrap: wrap;

// @media screen and (min-width: 320px) and (max-width: 760px) {
//   width: 100%;
//   gap: 10px;
//   padding: 10px;
// }
// `;
// const ContainerAll = styled.div`
// width: calc((100% - 156px)/ 4);
// display: flex;
// flex-direction: column;
// gap: 10px;
// &:hover{
//   transform: scale(1.05);
//   transition: all 0.25s linear;
// }
// h1{
//   color: var(--Main-Colors-Gray-4, #292929);
// font-family: "Work Sans";
// font-size: 22.606px;
// font-style: normal;
// font-weight: 400;
// line-height: 100%;
// letter-spacing: -1.13px;
// }
// p{
//   color: var(--Main-Colors-Gray-4, #292929);
// font-family: "Work Sans";
// font-size: 32.294px;
// font-style: normal;
// font-weight: 400;
// line-height: 100%; /* 32.294px */
// letter-spacing: -1.615px;
// }
// button{
// color: #DCB47A;
// font-family: "Work Sans";
// font-size: 22.606px;
// font-style: italic;
// font-weight: 400;
// line-height: 100%; /* 22.606px */
// letter-spacing: -1.13px;
// border-radius: 19.376px;
// border: 1.615px solid #DCB47A;
// background: var(--main-colors-green-05, #F6FFF6);
// padding: 6.459px 12.918px;
// }
// img{
//   width: 100%;
// }
// @media screen and (min-width: 320px) and (max-width: 460px) {
//   width: 100%;
// }
// @media screen and (min-width: 460px) and (max-width: 760px) {
//   width: calc((100% - 104px)/ 2);
// }
// `;
// const TitleWaper = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// padding: 40px 20px;
// h1{
//   color: var(--font, #081323);
// font-family: "Work Sans";
// font-size: 42px;
// font-style: normal;
// font-weight: 600;
// line-height: normal;
// }
// @media screen and (min-width: 320px) and (max-width: 460px) {
//   h1{
//     font-size: 24px;

//   }
//   p{
//     font-size: 16px;
//   }
// }
// `;
// const Spanet = styled.div`
// display: flex;
// align-items: center;
// &:hover{
//   img{
//     transform: translateX(100%);
//     transition: all 0.25s linear;
//     cursor: pointer;
//   }
// }
// img{
//   width: 100%;
// }
// p{
//   cursor: pointer;
//   color: var(--Gray-2, #4F4F4F);
// font-family: "Work Sans";
// font-size: 25.931px;
// font-style: normal;
// font-weight: 500;
// line-height: normal;
// text-align: left;

// }
// `;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px; /* Khoảng cách giữa các box */
  

  @media screen and (min-width: 320px) and (max-width: 760px) {
    width: 100%;
    padding: 10px;
  }
`;

const Box = styled.div`
  width: calc((100% - 156px) / 4);
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.25s linear;
  }

  @media screen and (min-width: 320px) and (max-width: 460px) {
    width: 100%;
  }

  @media screen and (min-width: 460px) and (max-width: 760px) {
    width: calc((100% - 104px) / 2);
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const Text = styled.div`
  h4 {
    color: var(--Main-Colors-Gray-4, #292929);
    font-family: "Work Sans";
    font-size: 22.606px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -1.13px;
  }

  .category {
    display: flex;
    align-items: center;

    span {
      padding: 5px;
      border-radius: 5px;
      margin-right: 10px;
      background: #ff98001a; /* Màu mặc định */
      color: #ff9800; /* Màu mặc định */
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: #dcf47a;
    font-family: "Work Sans";
    font-size: 22.606px;
    font-style: italic;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -1.13px;
    border-radius: 19.376px;
    border: 1.615px solid #dcf47a;
    background: var(--main-colors-green-05, #f6fff6);
    padding: 6.459px 12.918px;
  }
`;

const RecentCard = ({ products }) => {
  return (
    <Content>
      {products?.map((val) => {
        const { id, cover, category, name, price, type } = val;
        return (
          <Box key={id}>
            <Link to={`/product/${id}`}>
              <ImageWrapper>
                <img src={cover} alt={name} />
              </ImageWrapper>
              <Text>
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "Phòng tắm" ? "#25b5791a" : "#ff98001a",
                      color: category === "Phòng tắm" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
              </Text>
              <ButtonWrapper>
                <button className="btn2">{price}</button>
                <span>{type}</span>
              </ButtonWrapper>
            </Link>
          </Box>
        );
      })}
    </Content>
  );
};

export default RecentCard;
