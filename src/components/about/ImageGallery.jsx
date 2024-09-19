import React from 'react';
import styled from 'styled-components';

// Component hiển thị 3 hình
const ImageGallery = () => {
  return (
    <GalleryContainer>
      <GalleryImage src="https://via.placeholder.com/300x600" alt="Image 1" />
      <GalleryImage src="https://via.placeholder.com/600x600" alt="Image 2" />
      <GalleryImage src="https://via.placeholder.com/300x600" alt="Image 3" />
    </GalleryContainer>
  );
};

export default ImageGallery;

// Styled Components
const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GalleryImage = styled.img`
  width: 30%;
  object-fit: cover;
  border-radius: 10px;

  &:nth-child(2) {
    width: 40%; /* Hình thứ 2 to hơn */
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
