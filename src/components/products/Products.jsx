import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.png"

const Products = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back title='SẢN PHẨM' name='Home > Sản Phẩm' cover={img} />
        <div class="filter-wrapper">
  <div class="filter-container">
    <div class="filter-item">
      <i class="fas fa-map-marker-alt"></i>
      <div>
        <p class="filter-title">Loại phòng</p>
        <input class="filter-description" placeholder="Tìm nội thất cho từng loại phòng"/>
      </div>
    </div>

    <div class="filter-item">
      <i class="fas fa-tag"></i>
      <div>
        <p class="filter-title">Giá cả</p>
        <input class="filter-description" placeholder="Giá cả phù hợp"/>
      </div>
    </div>

    <div class="search-bar">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Nhập tên loại nội thất" />
    </div>
  </div>
</div>


        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Products;
