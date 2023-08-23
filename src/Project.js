import React from 'react';
import styled from 'styled-components';
import Bnb from './assets/barkandbite.png';
import Carbit from './assets/carbit.png';
import Flash from './assets/flash.png';
import Healing from './assets/healing.png';
import Requid from './assets/requid.png';
import Sleep from './assets/sleep.png';
import Warteg from './assets/warteg.png';
import Mobmif from './assets/mobmif.png';
import { Button } from './styles/Button';

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
        width: calc(30% - 10px);
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
            transform: scale(1.1);
        }

        h3 {
            color: ${({ theme }) => theme.colors.text};
            text-transform: capitalize;
            font-size: 3rem;
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

const Project = () => {
    return (
        <Wrapper>
            <div className='container'>
                <p>Browse My Recent</p>
                <h1>Projects</h1>
                <br />
                <br />
                <h2 style={{display: 'block', marginTop: '5rem'}}>UI/UX Design</h2>
                <div className='grid'>
                    <div className='box'>
                        <h3>Bark & Bite</h3>
                        <img src={Bnb} alt='' />
                        <p style={{marginTop: '3rem'}}>This is about online pet hotel service on mobile platform.</p>
                        {/* <Button 
                            className='btn'
                            onClick={() => window.location.href='https://www.figma.com/file/lwqCLB4If2ZJSDTrTiCdnI/ui-ux?type=design&mode=design&t=GkZM7VS2T8jI3Jal-1'}>
                            View More
                        </Button> */}
                    </div>
                    <div className='box'>
                        <h3>Flash.Lab</h3>
                        <img src={Flash} alt='' />
                        <p style={{marginTop: '3rem'}}>This website is about online learning platform for students & undergraduate students all over Indonesia.</p>
                        {/* <Button 
                        className='btn'
                        onClick={() => window.location.href='https://www.figma.com/file/lwqCLB4If2ZJSDTrTiCdnI/ui-ux?type=design&mode=design&t=GkZM7VS2T8jI3Jal-1'}>
                            View More
                        </Button> */}
                    </div>
                    <div className='box'>
                        <h3>Healing.</h3>
                        <img src={Healing} alt='' />
                        <p style={{marginTop: '3rem'}}>This is about mental health for teenagers in Indonesia.</p>
                        {/* <Button 
                        className='btn'
                        onClick={() => window.location.href='https://www.figma.com/file/lwqCLB4If2ZJSDTrTiCdnI/ui-ux?type=design&mode=design&t=GkZM7VS2T8jI3Jal-1'}>
                            View More
                        </Button> */}
                    </div>
                    <div className='box'>
                        <h3>Requid</h3>
                        <img src={Requid} alt='' />
                        <p style={{marginTop: '3rem'}}>This app is connected to an module inside water gallon for notifying the user that their water gallon is empty</p>
                        {/* <Button 
                        className='btn'
                        onClick={() => window.location.href='https://www.figma.com/file/lwqCLB4If2ZJSDTrTiCdnI/ui-ux?type=design&mode=design&t=GkZM7VS2T8jI3Jal-1'}>
                            View More
                        </Button> */}
                    </div>
                    <div className='box'>
                        <h3>Meditation Journal</h3>
                        <img src={Sleep} alt='' />
                        <p style={{marginTop: '3rem'}}>This is about meditation journal to help us control our mind from stress, etc.</p>
                        {/* <Button 
                        className='btn'
                        onClick={() => window.location.href='https://www.figma.com/file/lwqCLB4If2ZJSDTrTiCdnI/ui-ux?type=design&mode=design&t=GkZM7VS2T8jI3Jal-1'}>
                            View More
                        </Button> */}
                    </div>
                </div>
                <br />
                <br />
                <h2 style={{display: 'block', marginTop: '5rem'}}>Web/ App Development</h2>
                <div className='grid'>
                    <div className='box'>
                        <h3>Warteg Anabul</h3>
                        <img src={Warteg} alt='' />
                        <p style={{marginTop: '3rem'}}>This website is an e-commerce for selling cooked dog food</p>
                        {/* <Button 
                        className='btn'
                        onClick={() => window.location.href='https://www.figma.com/file/lwqCLB4If2ZJSDTrTiCdnI/ui-ux?type=design&mode=design&t=GkZM7VS2T8jI3Jal-1'}>
                            View More
                        </Button> */}
                    </div>
                    <div className='box'>
                        <h3>Carbit</h3>
                        <img src={Carbit} alt='' />
                        <p style={{marginTop: '3rem'}}>This website is an car bidding company.</p>
                        {/* <Button 
                        className='btn'
                        onClick={() => window.location.href='https://www.figma.com/file/lwqCLB4If2ZJSDTrTiCdnI/ui-ux?type=design&mode=design&t=GkZM7VS2T8jI3Jal-1'}>
                            View More
                        </Button> */}
                    </div>
                    <div className='box'>
                        <h3>Mobile App Maybank Finance Development</h3>
                        <img src={Mobmif} alt='' />
                        <p style={{marginTop: '3rem'}}>This mobile app feature is for salesman.</p>
                        {/* <Button 
                        className='btn'
                        onClick={() => window.location.href='https://www.figma.com/file/lwqCLB4If2ZJSDTrTiCdnI/ui-ux?type=design&mode=design&t=GkZM7VS2T8jI3Jal-1'}>
                            View More
                        </Button> */}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Project;