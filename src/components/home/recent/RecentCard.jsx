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
import { Link } from "react-router-dom"; // Import Link từ react-router-dom

const RecentCard = ({ products }) => {
  return (
    <>
      <div className="content grid3 mtop">
        {products?.map((val) => {
          const { id, cover, category, name, price, type } = val;
          return (
            <div className="box shadow" key={id}>
              <Link to={`/product/${id}`}>
                <div className="img">
                  <img src={cover} alt={name} />
                </div>
                <div className="text">
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
                  {/* Nếu cần hiển thị thêm thông tin khác như location, có thể thêm vào đây */}
                </div>
                <div className="button flex">
                  <div>
                    <button className="btn2">{price}</button>{" "}
                  </div>
                  <span>{type}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;


