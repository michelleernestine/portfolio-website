import React from 'react';
import styled from 'styled-components';
import { FaAward } from 'react-icons/fa';
import {MdSchool} from 'react-icons/md';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2vh;
  margin-bottom: 20rem;

  .perkenalan {
    text-align: center;
    margin-bottom: 2rem;
  }

  .services {
    display: flex;
    gap: 4.8rem;
  }

  .service {
    width: 50rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    h3 {
      margin-top: 1.4rem;
      font-size: 3rem;
      margin-bottom: 1.4rem;
    }

    p {
        font-size: 2rem;
    }

    .icon {
      width: 8rem;
      height: 8rem;
      padding: 2rem;
      border-radius: 50%;
      background-color: #fff;
      color: #311a75;
    }
  }
`;

function About() {
  return (
    <Wrapper>
        <div className="perkenalan">
        <p>Get to Know More</p>
        <h1>About Me</h1>
        </div>
        <div className='services'>
        <div className='service'>
            <FaAward className='icon' />
            <h3>Experience</h3>
            <p>6 months</p><p>Mobile App Frontend Development</p>
            <p style={{marginTop: '1rem'}}>8+ months</p><p>Website Fullstack Development</p>
        </div>
        <div className='service'>
            <div>
            <MdSchool className='icon' />
            <h3>Education</h3>
            <br />
            <p>S.Kom</p>
            <p>Computer Science</p>
            <p>Bina Nusantara</p>
            <br />
            </div>
        </div>
        </div>
        <h3 style={{marginTop: '5rem', fontSize: '2.5rem'}}>
            Hello there! This is my creative hub,
        </h3>
        <h3 style={{marginTop: '1.5rem', fontSize: '2.5rem'}}>
            showcasing a collection of projects that highlight my passion for
        </h3>
        <h3 style={{marginTop: '1.5rem', fontSize: '2.5rem'}}>
            Website and Mobile Development also UI/UX Design
        </h3>
    </Wrapper>
  );
}

export default About;