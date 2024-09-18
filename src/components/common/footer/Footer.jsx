import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <footer class="footer">
  <div class="container">
    <div class="footer-columns">
      <div class="footer-column">
        <h3>CÔNG TY</h3>
        <ul>
          <li><a href="#">Về Fitzone</a></li>
          <li><a href="#">Đội ngũ Fitzone</a></li>
          <li><a href="#">Việc làm</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>THÔNG TIN</h3>
        <ul>
          <li><a href="#">Chính sách thành viên</a></li>
          <li><a href="#">Chính sách bảo mật</a></li>
          <li><a href="#">Fitzone Rewards</a></li>
          <li><a href="#">Điều khoản website</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>HỖ TRỢ</h3>
        <ul>
          <li><a href="#">Liên hệ</a></li>
          <li><a href="#">Ý kiến phản hồi</a></li>
          <li><a href="#">Câu hỏi thường gặp</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3></h3>
        <ul class="contact-info">
          <li><i class="fas fa-map-marker-alt"></i> XXXXXXXXXXXXXXXXXXXXXXXXXX</li>
          <li><i class="fas fa-phone-alt"></i> 00.000.00000</li>
        </ul>
        <div class="social-icons">
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 BIFITHI SAI GON</p>
    </div>
  </div>
</footer>

  )
}

export default Footer
