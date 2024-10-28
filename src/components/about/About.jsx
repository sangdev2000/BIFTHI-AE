import React, { useEffect } from "react";
import styled from "styled-components";
import about3 from "../images/about2-bg-1.jpg";
import about2 from "../images/about2-bg-2.jpg";
import about1 from "../images/about2-bg-3.jpg";
import {
  FaLightbulb,
  FaTools,
  FaPencilRuler,
  FaHome,
  FaChair,
  FaTree,
  FaQuoteLeft,
} from "react-icons/fa";
import Ourteam from "../home/ourteam";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container>
      <TitleSection>
        <SubTitle>FURNITURE STORE</SubTitle>
        <MainTitle>We are one of Vietnam’s most trusted partner <br/>for exceptional design solutions</MainTitle>
      </TitleSection>

      <ImageGallery>
        <GalleryImage src={about1} alt="Image 1" data-aos="fade-right"/>
        <GalleryImage src={about2} alt="Image 2" />
        <GalleryImage src={about3} alt="Image 3" data-aos="fade-left"/>
      </ImageGallery>

      <ServiceSection>
        <ServiceTitle data-aos="fade-left">What We Do</ServiceTitle>
        <ServiceGrid>
          <ServiceCard data-aos="fade-up-right">
            <ServiceIcon>
              <FaLightbulb />
            </ServiceIcon>
            <ServiceHeading>PLANNING</ServiceHeading>
            <ServiceDescription>
            A well-structured interior design plan begins with defining the overall vision and style for the space. Key elements include selecting a color palette, choosing furniture and decor that align with the aesthetic, and ensuring functionality. Incorporating natural light and optimizing layout are essential for creating a harmonious environment. Regular evaluations throughout the process ensure the design remains cohesive and meets the client’s needs.

            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>

          <ServiceCard data-aos="fade-up-left">
            <ServiceIcon>
              <FaPencilRuler />
            </ServiceIcon>
            <ServiceHeading>INTERIOR DESIGN</ServiceHeading>
            <ServiceDescription>
            Interior design harmonizes aesthetics and functionality, creating spaces that reflect personal style and enhance daily living. By carefully selecting colors, furniture, and decor, designers transform rooms into inviting environments. A successful design considers layout, lighting, and comfort, ensuring each area is both beautiful and practical for everyday use
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>

          <ServiceCard data-aos="fade-down-right">
            <ServiceIcon>
              <FaTools />
            </ServiceIcon>
            <ServiceHeading>CONSTRUCTION</ServiceHeading>
            <ServiceDescription>
            Interior construction involves turning design ideas into reality, including installation, decoration, and finishing of spaces. The construction team must ensure material quality, adhere to design plans, and meet deadlines, creating a harmonious and comfortable living environment for users.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>
        </ServiceGrid>

        <ServiceGrid  data-aos="fade-down-left">
          <ServiceCard>
            <ServiceIcon>
              <FaHome />
            </ServiceIcon>
            <ServiceHeading>REMODELING</ServiceHeading>
            <ServiceDescription>
              
Interior renovation improves and refreshes living spaces, from replacing damaged materials to updating decor styles. This process enhances aesthetics while ensuring functionality, providing comfort and convenience for users. It allows homeowners to create an inviting atmosphere that reflects their personal taste and lifestyle.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>

          <ServiceCard data-aos="flip-left">
            <ServiceIcon>
              <FaChair />
            </ServiceIcon>
            <ServiceHeading>FURNITURE</ServiceHeading>
            <ServiceDescription>
            Furniture arrangement is the process of organizing and positioning furnishings in a living space effectively and aesthetically. This not only optimizes usable area but also creates balance and harmony, resulting in a comfortable and inviting atmosphere for users. Thoughtful layout enhances both functionality and style in any room.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <FaTree />
            </ServiceIcon>
            <ServiceHeading>OUTDOOR</ServiceHeading>
            <ServiceDescription>
           Outdoor interior design creates relaxing and comfortable living spaces that connect people with nature. By using weather-resistant materials, durable furnishings, and greenery, outdoor areas transform into ideal spots for gatherings, entertainment, and relaxation in a fresh atmosphere. Thoughtful design enhances the enjoyment of outdoor living experiences.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>
        </ServiceGrid>
      </ServiceSection>
      <Ourteam />
      <TestimonialSection>
        <TestimonialTitle data-aos="flip-left">Testimonial</TestimonialTitle>
        <TestimonialGrid>
          <TestimonialCard data-aos="flip-left">
            <FaQuoteLeft className="quote-icon" />
            <TestimonialText>
            The interior design is truly impressive, showcasing a perfect blend of style and functionality. Each space is thoughtfully arranged, creating a harmonious atmosphere that enhances both comfort and aesthetic appeal.
            </TestimonialText>
            <TestimonialAuthor>DIANNE RUSSELL</TestimonialAuthor>
            <TestimonialInfo>Client - New York</TestimonialInfo>
          </TestimonialCard>

          <TestimonialCard data-aos="flip-left">
            <FaQuoteLeft className="quote-icon" />
            <TestimonialText>
            I am extremely satisfied with the design company's work. Their professionalism, creativity, and attention to detail exceeded my expectations, resulting in a beautiful space that perfectly reflects my style.
            </TestimonialText>
            <TestimonialAuthor>WADE WARREN</TestimonialAuthor>
            <TestimonialInfo>Client - California</TestimonialInfo>
          </TestimonialCard>

          <TestimonialCard data-aos="flip-left">
            <FaQuoteLeft className="quote-icon" />
            <TestimonialText>
            I couldn’t be happier with the service provided by the design team. They listened to my ideas, offered valuable suggestions, and transformed my vision into reality. The final result is stunning and functional!
            </TestimonialText>
            <TestimonialAuthor>CAMERON WILLIAMSON</TestimonialAuthor>
            <TestimonialInfo>Client - Florida</TestimonialInfo>
          </TestimonialCard>
        </TestimonialGrid>
      </TestimonialSection>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px;
  text-align: center;
`;

const TitleSection = styled.div`
  margin-bottom: 60px;
  margin-top: 100px;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  letter-spacing: 4px;
  color: #b5a191;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding-top: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GalleryImage = styled.img`
  width: 30%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:nth-child(2) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ServiceSection = styled.section`
  margin-top: 80px;
`;

const ServiceTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
`;

const ServiceGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  width: 30%;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ServiceIcon = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const ServiceHeading = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ServiceLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    color: #b5a191;
  }
`;

const TestimonialSection = styled.section`
  margin-top: 80px;
`;

const TestimonialTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
`;

const TestimonialGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  text-align: left;

  .quote-icon {
    font-size: 36px;
    color: #b5a191;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TestimonialText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const TestimonialInfo = styled.p`
  font-size: 14px;
  color: #999;
`;