import React from "react";
import Foto from '../assets/foto web.png';
import styled from 'styled-components';
import {Button} from '../styles/Button';
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`

    .container {
        padding-top: 2vh;
        height: auto;
        margin-bottom: 20rem;
        box-sizing: border-box;
        min-height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;

        .profile {
            display: flex;
            align-items: center;
            gap: 5rem;
            height: 80vh;

            .profile-container {
                display: block;
                height: auto;
                width: auto;
                margin: 2rem 0;
                text-align: left;

                p {
                    font-weight: 600;
                    font-size: 3rem;
                }

                h1 {
                    font-size: 5rem;
                }
            }

            .profile-photo {
                display: block;
                width: 500px;

                .img-style {
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: auto;
                }
            }

            .button-profile {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 5rem;
                /* flex-direction: column; */
                align-items: flex-start;
                margin-top: 1rem;
                gap: 3rem;

                button {
                    padding: 2rem;
                    font-size: 1.8rem;
                    margin-right: 2rem;
                    /* justify-content: center; */
                    color: whitesmoke;
                    border-radius: 60px;
                    margin: 0;
                }
            }
        }
    }
`;

function Profile() {
    const openResume = () => {
        window.open('../assets/CV_ATS.pdf');
    };

    return (
        <Wrapper>
            {/* hero */}
            <div className='container'>
                <div className='profile'>
                <div className='profile-photo'>
                    <figure>
                    <img
                        src={Foto}
                        alt='hero-section-photo'
                        className='img-style'
                    />
                    </figure>
                </div>
                <div className='profile-container'>
                    <p>Hello, I'm</p>
                    <h1>Michelle Ernestine</h1>
                    <p>Web Developer</p>
                    <div className="button-profile">
                    <Button
                        onclick={openResume}
                        style={{ backgroundColor: '#d9d1ed', color: '#232129' }}
                    >
                        Download CV
                    </Button>
                    <Button>
                        <NavLink to='/contact'>Contact Me</NavLink>
                    </Button>
                    </div>
                </div>
                </div>
            </div>
        </Wrapper>
      );
    }

export default Profile;