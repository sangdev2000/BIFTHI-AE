// import React from "react";
// import { list } from "../../data/Data";
// import { Link } from "react-router-dom"; // Import Link từ react-router-dom

// const RecentCard = () => {
//   return (
//     <>
//       <div className="content grid3 mtop">
//         {list.map((val) => {
//           const { id, cover, category, location, name, price, type } = val;
//           return (
//             <div className="box shadow" key={id}>
//               <Link to={`/product/${id}`}> {/* Thêm Link */}
//                 <div className="img">
//                   <img src={cover} alt={name} />
//                 </div>
//                 <div className="text">
//                   <div className="category flex">
//                     <span
//                       style={{
//                         background:
//                           category === "For Sale" ? "#25b5791a" : "#ff98001a",
//                         color: category === "For Sale" ? "#25b579" : "#ff9800",
//                       }}
//                     >
//                       {category}
//                     </span>
//                     <i className="fa fa-heart"></i>
//                   </div>
//                   <h4>{name}</h4>
//                   <p>
//                     <i className="fa fa-location-dot"></i> {location}
//                   </p>
//                 </div>
//                 <div className="button flex">
//                   <div>
//                     <button className="btn2">{price}</button>{" "}
//                     <label htmlFor="">/sqft</label>
//                   </div>
//                   <span>{type}</span>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default RecentCard;

import React from "react";
import { list } from "../../data/Data";
import styled from "styled-components";
import pr1 from "../../../acsset/slice/pr1.png"
import li1 from "../../../acsset/slice/li1.png"
import { Link } from "react-router-dom";

const RecentCard = ({ products }) => {
  return (
      // <div className="content grid3 mtop">
      //   {products?.map((val) => {
      //     const { id, cover, category, name, price, type } = val;
      //     return (
      //       <div className="box shadow" key={id}>
      //         <Link to={`/product/${id}`}>
      //           <div className="img">
      //             <img src={cover} alt={name} />
      //           </div>
      //           <div className="text">
      //             <div className="category flex">
      //               <span
      //                 style={{
      //                   background:
      //                     category === "Phòng tắm" ? "#25b5791a" : "#ff98001a",
      //                   color: category === "Phòng tắm" ? "#25b579" : "#ff9800",
      //                 }}
      //               >
      //                 {category}
      //               </span>
      //               <i className="fa fa-heart"></i>
      //             </div>
      //             <h4>{name}</h4>
      //             {/* Nếu cần hiển thị thêm thông tin khác như location, có thể thêm vào đây */}
      //           </div>
      //           <div className="button flex">
      //             <div>
      //               <button className="btn2">{price}</button>{" "}
      //             </div>
      //             <span>{type}</span>
      //           </div>
      //         </Link>
      //       </div>
      //     );
      //   })}
      // </div>
    <Wapper>
      <TitleWaper>
        <h1>Sản phẩm nổi bật</h1>
        <Spanet>
          <p>Xem thêm</p>
        <div>
        <img src={li1}></img>
        </div>
        </Spanet>
      </TitleWaper>
      <Container>
      {list?.map((item,index)=>{
        return(
          <ContainerAll>
            <Link to={`/product/${item.id}`}>
          <img src={item.images[0]}/>
          <div>
            <h1>{item.name}</h1>
          </div>
          <p>{item.price}</p>

          <div>
            <button>{item.detail}</button>
          </div>
          </Link>
          </ContainerAll>
          
        )
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
  detaill: "chi tiết"
},
{
  img: pr1,
  title: "gế sofa",
  price: "$15.00",
  detaill: "chi tiết"
},
{
  img: pr1,
  title: "gế sofa",
  price: "$15.00",
  detaill: "chi tiết"
},
{
  img: pr1,
  title: "gế sofa",
  price: "$15.00",
  detaill: "chi tiết"
},
]
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
width: calc((100% - 156px)/ 4);
display: flex;
flex-direction: column;
gap: 10px;
&:hover{
  transform: scale(1.05);
  transition: all 0.25s linear;
}
h1{
  color: var(--Main-Colors-Gray-4, #292929);
font-family: "Work Sans";
font-size: 22.606px;
font-style: normal;
font-weight: 400;
line-height: 100%;
letter-spacing: -1.13px;
}
p{
  color: var(--Main-Colors-Gray-4, #292929);
font-family: "Work Sans";
font-size: 32.294px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 32.294px */
letter-spacing: -1.615px;
}
button{
color: #DCB47A;
font-family: "Work Sans";
font-size: 22.606px;
font-style: italic;
font-weight: 400;
line-height: 100%; /* 22.606px */
letter-spacing: -1.13px;
border-radius: 19.376px;
border: 1.615px solid #DCB47A;
background: var(--main-colors-green-05, #F6FFF6);
padding: 6.459px 12.918px;
}
img{
  width: 100%;
}
@media screen and (min-width: 320px) and (max-width: 460px) {
  width: 100%;
}
@media screen and (min-width: 460px) and (max-width: 760px) {
  width: calc((100% - 104px)/ 2);
}
`;
const TitleWaper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 40px 20px;
h1{
  color: var(--font, #081323);
font-family: "Work Sans";
font-size: 42px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
@media screen and (min-width: 320px) and (max-width: 460px) {
  h1{
    font-size: 24px;

  }
  p{
    font-size: 16px;
  }
}
`;
const Spanet = styled.div`
display: flex;
align-items: center;
&:hover{
  img{
    transform: translateX(100%);
    transition: all 0.25s linear;
    cursor: pointer;
  }
}
img{
  width: 100%;
}
p{
  cursor: pointer;
  color: var(--Gray-2, #4F4F4F);
font-family: "Work Sans";
font-size: 25.931px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: left;

}
`;
