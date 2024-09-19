import React from 'react';
import styled from 'styled-components';
import about3 from "../images/about2-bg-1.jpg";
import about2 from "../images/about2-bg-2.jpg";
import about1 from "../images/about2-bg-3.jpg";
import { FaLightbulb, FaTools, FaPencilRuler, FaHome, FaChair, FaTree, FaQuoteLeft } from 'react-icons/fa';
import Ourteam from '../home/ourteam';

const About = () => {
  return (
    <Container>
      <TitleSection>
        <SubTitle>FURNITURE STORE</SubTitle>
        <MainTitle>We're a furniture company from the US</MainTitle>
      </TitleSection>

      <ImageGallery>
        <GalleryImage src={about1} alt="Image 1" />
        <GalleryImage src={about2} alt="Image 2" />
        <GalleryImage src={about3} alt="Image 3" />
      </ImageGallery>

      <ServiceSection>
        <ServiceTitle>What We Do</ServiceTitle>
        <ServiceGrid>
          <ServiceCard>
            <ServiceIcon><FaLightbulb /></ServiceIcon>
            <ServiceHeading>PLANNING</ServiceHeading>
            <ServiceDescription>
              Sed risus pretium quam vulputate dignissim suspendisse in.
              Scelerisque viverra mauris in aliquam. Amet massa vitae tortor.
            </ServiceDescription>
            <ServiceLink href="#">check our service →</ServiceLink>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaPencilRuler /></ServiceIcon>
            <ServiceHeading>INTERIOR DESIGN</ServiceHeading>
            <ServiceDescription>
              Sed risus pretium quam vulputate dignissim suspendisse in.
              Scelerisque viverra mauris in aliquam. Amet massa vitae tortor.
            </ServiceDescription>
            <ServiceLink href="#">check our service →</ServiceLink>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaTools /></ServiceIcon>
            <ServiceHeading>CONSTRUCTION</ServiceHeading>
            <ServiceDescription>
              Sed risus pretium quam vulputate dignissim suspendisse in.
              Scelerisque viverra mauris in aliquam. Amet massa vitae tortor.
            </ServiceDescription>
            <ServiceLink href="#">check our service →</ServiceLink>
          </ServiceCard>
        </ServiceGrid>
       
        <ServiceGrid>
          <ServiceCard>
            <ServiceIcon><FaHome /></ServiceIcon>
            <ServiceHeading>REMODELING</ServiceHeading>
            <ServiceDescription>
              Sed risus pretium quam vulputate dignissim suspendisse in.
              Scelerisque viverra mauris in aliquam. Amet massa vitae tortor.
            </ServiceDescription>
            <ServiceLink href="#">check our service →</ServiceLink>
          </ServiceCard>
   
          <ServiceCard>
            <ServiceIcon><FaChair /></ServiceIcon>
            <ServiceHeading>FURNITURE</ServiceHeading>
            <ServiceDescription>
              Sed risus pretium quam vulputate dignissim suspendisse in.
              Scelerisque viverra mauris in aliquam. Amet massa vitae tortor.
            </ServiceDescription>
            <ServiceLink href="#">check our service →</ServiceLink>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon><FaTree /></ServiceIcon>
            <ServiceHeading>OUTDOOR</ServiceHeading>
            <ServiceDescription>
              Sed risus pretium quam vulputate dignissim suspendisse in.
              Scelerisque viverra mauris in aliquam. Amet massa vitae tortor.
            </ServiceDescription>
            <ServiceLink href="#">check our service →</ServiceLink>
          </ServiceCard>
        </ServiceGrid>
      </ServiceSection>
      <Ourteam/>
      <TestimonialSection>
        <TestimonialTitle>Testimonial</TestimonialTitle>
        <TestimonialGrid>
          <TestimonialCard>
            <FaQuoteLeft className="quote-icon" />
            <TestimonialText>
              Nibh sed pulvinar proin gravida hendrerit lectus a. Vestibulum morbi blandit cursus risus at. Aliquam ut porttitor.
            </TestimonialText>
            <TestimonialAuthor>DIANNE RUSSELL</TestimonialAuthor>
            <TestimonialInfo>Client - New York</TestimonialInfo>
          </TestimonialCard>

          <TestimonialCard>
            <FaQuoteLeft className="quote-icon" />
            <TestimonialText>
              Egestas fringilla phasellus faucibus scelerisque. Neque gravida in fermentum et sollicitudin ac orci aliquet risus feugiat.
            </TestimonialText>
            <TestimonialAuthor>WADE WARREN</TestimonialAuthor>
            <TestimonialInfo>Client - California</TestimonialInfo>
          </TestimonialCard>

          <TestimonialCard>
            <FaQuoteLeft className="quote-icon" />
            <TestimonialText>
              Aleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Neque gravida in fermentum et sollicitudin.
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
  padding: 40px 20px;
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
