import React from 'react';
import styled from 'styled-components';
import C from './assets/C.png';
import CSS from './assets/CSS.png';
import HTML from './assets/HTML.png';
import Javascript from './assets/JavaScript.png';
import JQ from './assets/jQuery.png';
import Python from './assets/python.png';
import IGDX from './assets/igdx.jpeg';
import Toefl1 from './assets/TOEFL iBT certificate-1.png';
import Toefl2 from './assets/TOEFL iBT certificate-2.png';

const Wrapper = styled.section`
    padding: 9rem 0;
    text-align: center;

    .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 5rem;
        margin-top: 5rem;
    }

    .box {
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.black};
        padding: 5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        text-align: center;
        transition: all 0.5s linear;
        width: calc(30% - 5px);
        position: relative;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            transition: all 0.2s linear;
        }

        &:hover::after {
            width: 100%;
        }

        &:hover img {
            transform: scale(1.2);
        }

        h3 {
            color: ${({ theme }) => theme.colors.text};
            text-transform: capitalize;
            font-size: 2.5rem;
        }

        img {
            max-width: 100%;
            margin-top: 4rem;
            height: 20rem;
            transition: all 0.2s linear;
            border-radius: 10px;
        }

        .btn {
            margin: 2rem auto;
            background-color: rgb(0 0 0/0%);
            border: 0.1rem solid rgb(98 84 243);
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: rgb(98 84 243);
            }

            &:hover a {
                color: #fff;
            }

            a {
                color: rgb(98 84 243);
                font-size: 1.4rem;
            }
        }
    }

    @media (max-width: 1024px) {
        .box {
            width: calc(50% - 7.5px);
        }
    }

    @media (max-width: 768px) {
        .box {
            width: 100%;
        }
    }
`;

const Certificate = () => {
    return (
        <Wrapper>
            <div className='container'>
                <p>My</p>
                <h1>Certificate</h1>
                <br />
                <br />
                <h3 style={{display: 'block', marginTop: '5rem', fontSize: '3rem'}}>Skill Related Certification</h3>
                <div className='grid'>
                    <div className='box'>
                        <h3>Javascript language programming</h3>
                        <img src={Javascript} alt='' />
                    </div>
                    <div className='box'>
                        <h3>HTML language programming</h3>
                        <img src={HTML} alt='' />
                    </div>
                    <div className='box'>
                        <h3>CSS language programming</h3>
                        <img src={CSS} alt='' />
                    </div>
                    <div className='box'>
                        <h3>Python language programming</h3>
                        <img src={Python} alt='' />
                    </div>
                    <div className='box'>
                        <h3>C language programming</h3>
                        <img src={C} alt='' />
                    </div>
                    <div className='box'>
                        <h3>jQuery language programming</h3>
                        <img src={JQ} alt='' />
                    </div>
                    <div className='box'>
                        <h3>TOEFL iBT</h3>
                        <img style={{height: '30rem'}} src={Toefl1} alt='' />
                    </div>
                </div>
                <br />
                <br />
                <h3 style={{display: 'block', marginTop: '5rem', fontSize: '3rem'}}>Organization Related Certification</h3>
                <div className='grid'>
                    <div className='box'>
                        <h3>IGDX Volunteer Event</h3>
                        <img src={IGDX} alt='' />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Certificate;