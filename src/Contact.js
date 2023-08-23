import React from 'react';
import styled from 'styled-components';
import EmailIcon from './assets/email.png';
import InstagramIcon from './assets/instagram.png';
import WhatsappIcon from './assets/whatsapp.png';

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 70vh;
`;

const ContactInfoUpperContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: 0.1rem solid ${({theme}) => theme.colors.black};
  border-color: ${({theme}) => theme.colors.gray};
  background-color: ${({theme}) => theme.colors.lightGray};
  margin: 2rem auto;
  padding: 1.2rem;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
  flex-wrap: wrap;
`;

const ContactIcon = styled.img`
  cursor: default;
  width: 3rem;
`;

const ContactLink = styled.a`
  font-size: 3rem;
  text-decoration: none;
  color: ${({theme}) => theme.colors.black};

  &:hover {
    text-decoration: underline;
    color: ${({theme}) => theme.colors.btn};
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <br />
      <br />
      <ContactInfoUpperContainer>
        <ContactInfoContainer>
          <ContactIcon src={EmailIcon} alt="Email icon" className="icon contact-icon email-icon" />
          <ContactLink href="mailto:michelleernestine@icloud.com">michelleernestine@icloud.com</ContactLink>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <ContactIcon src={InstagramIcon} alt="Instagram icon" className="icon contact-icon" />
          <ContactLink href="https://www.instagram.com/michelleernestine">Instagram</ContactLink>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <ContactIcon src={WhatsappIcon} alt="Whatsapp icon" className="icon contact-icon" />
          <ContactLink href="https://wa.me/082219173337">Whatsapp</ContactLink>
        </ContactInfoContainer>
      </ContactInfoUpperContainer>
    </ContactSection>
  );
};

export default Contact;