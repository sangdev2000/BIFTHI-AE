// import styled from "styled-components";
// import addtocar from "../../../acsset/slice/addtocar.svg";
// import brtocar from "../../../acsset/slice/Union.svg";
// import { useContext, useState } from "react";
// import { Button, Modal } from "antd";
// import { Crecontext } from "../../providertocar";

// const Addtocar = () => {
//   const { car, setCar } = useContext(Crecontext);
//   const handleshow = () => {
//     setIsModalOpen(true);
//   };
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   const handlesetdelete = (indexToDelete) => {
//     const updatedCar = car.filter((item, index) => index !== indexToDelete);
//     if (updatedCar) {
//       setCar(updatedCar);
//       return alert(`confirm ${updatedCar}`);
//     }
//   };
//   console.log("sds", car);
//   return (
//     <Wapper>
//       <Container>
//         <img src={addtocar} onClick={handleshow} />
//         {car.length > 0 && (
//           <BrtoCar>
//             <h1>New Product</h1>
//           </BrtoCar>
//         )}
//       </Container>
//       {isModalOpen && (
//         <AllProduct>
//           <Modal
//             title="Basic Modal"
//             open={isModalOpen}
//             onOk={handleOk}
//             onCancel={handleCancel}
//           >
//             {car?.map((item, index) => {
//               return (
//                 <Imgtocar>
//                   <img src={item.images[0]} />
//                   <h1>{item.name}</h1>
//                   <p>{item.price}</p>
//                   <button onClick={() => handlesetdelete(index)}>delete</button>
//                 </Imgtocar>
//               );
//             })}
//           </Modal>
//         </AllProduct>
//       )}
//     </Wapper>
//   );
// };
// export default Addtocar;
// const Wapper = styled.div`
//   position: fixed;
//   top: 50%;
//   right: 0;
//   width: 50px;
//   z-index: 11;
// `;
// const Container = styled.div`
//   position: relative;
//   width: 40px;
//   height: 40px;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const AllProduct = styled.div``;
// const Imgtocar = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 10px;
//   h1{
// color: #000;
// text-align: center;
// font-family: "Work Sans";
// font-size: 16px;
// font-style: normal;
// font-weight: 600;
// line-height: normal;
//   }
//   p{
//     color: red;
// text-align: center;
// font-family: "Work Sans";
// font-size: 14px;
// font-style: normal;
// font-weight: 600;
// line-height: normal;
//   }
//   button{
//     width: 100px;
//     height: 40px;
//     text-align: center;
//     display: flex;
//     align-items: center;
//   }
//   img {
//     width: 100px;
//     height: 100px;
//   }
// `;
// const BrtoCar = styled.div`
//   z-index: 1;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   top: -40px;
//   right: 60px;
//   transform: rotateZ(-60deg);
//   background-image: url(${brtocar});
//   width: 100px;
//   height: 100px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   justify-content: center;
//   padding: 10px;
//   display: flex;
//   h1 {
//     color: red;
//     text-align: center;
//     font-family: "Work Sans";
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 700;
//     line-height: normal;
//   }
// `;
