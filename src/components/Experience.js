import React from 'react';
import styled from 'styled-components';
import { HiBadgeCheck } from 'react-icons/hi';

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
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      color: #311a75;
    }
  }
`;

function About() {
  return (
    <Wrapper>
        <div className="perkenalan">
        <p>Explore My</p>
        <h1>Experience</h1>
        </div>
        <div className='services'>
        <div className='service'>
            <h3>Frontend Development</h3>
            {/* <HiBadgeCheck className='icon' /> */}
            <p style={{fontWeight: 'bold'}}>Javascript</p><p>Experienced</p>
            <br />
            <p style={{fontWeight: 'bold'}}>HTML</p><p>Intermediate</p>
            <br />
            <p style={{fontWeight: 'bold'}}>CSS</p><p>Intermediate</p>
        </div>
        <div className='service'>
            <div>
            <h3>Backend Development</h3>
            {/* <HiBadgeCheck className='icon' /> */}
            <p style={{fontWeight: 'bold'}}>ExpressJS</p><p>Intermediate</p>
            <br />
            <p style={{fontWeight: 'bold'}}>NodeJS</p><p>Basic</p>
            <br />
            <p style={{fontWeight: 'bold'}}>Git</p><p>Basic</p>
            </div>
        </div>
        </div>
    </Wrapper>
  );
}

export default About;