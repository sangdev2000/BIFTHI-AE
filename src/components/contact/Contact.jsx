import React, { useState } from "react";
import styled from "styled-components";
import Back from "../common/Back";
import "../home/recent/recent.css";
import img from "../images/contact.jpg";
import icon1 from "../images/Armchair.png";
import icon2 from "../images/Roundchair.png";
import icon3 from "../images/Stool.png";
import icon4 from "../images/Wardrobe.png";

const Contact = () => {
  return (
    <>
      <section className="blog-out mb">
        <Back
          title="CONTACT"
          cover={img}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
        />
        <ContactContainer>
          <FormSection>
            <Title><h1>Your Information</h1></Title>
            <form>
              <InputWrapper>
                <label>Full name</label>
                <input type="text" placeholder="Full name" />
              </InputWrapper>
              <InputWrapper>
                <label>Phone number</label>
                <input type="text" placeholder="Phone number" />
              </InputWrapper>
              <InputWrapper>
                <label>Email Address</label>
                <input type="email" placeholder="Email Address" />
              </InputWrapper>
              <InputWrapper>
                <label>Leave a message</label>
                <textarea placeholder="Leave a message" />
              </InputWrapper>
              <SubmitButton type="submit">Send a message</SubmitButton>
            </form>
          </FormSection>
          <MapSection>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.650633325494!2d106.66142607769243!3d10.786376961936199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1726776446785!5m2!1sen!2sus"
              width="600"
              height="450"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapSection>
        </ContactContainer>
      </section>
    </>
  );
};

export default Contact;
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h2`
padding: 10px;
h1{
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}
  @media screen and (min-width: 320px) and (max-width: 460px) {
h1{
  font-size: 18px;
  text-align: center;
}
  }
  @media screen and (min-width: 460px) and (max-width: 760px) {
h1{
  font-size: 24px;
  text-align: center;
}
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 16px;
    margin-bottom: 5px;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  textarea {
    height: 100px;
    resize: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }
`;

const MapSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  iframe {
    width: 100%;
    border: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
