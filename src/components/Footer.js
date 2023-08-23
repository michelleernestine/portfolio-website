import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import {FaInstagram} from 'react-icons/fa';

const Wrapper = styled.section`
    footer {
        padding: 14rem 0 9rem 0;
        background-color: ${({theme}) => theme.colors.footer_bg};

        h3 {
            color: ${({theme}) => theme.colors.hr};
            margin-bottom: 2.4rem;
        }

        p {
            color: ${({theme}) => theme.colors.white};
        }

        .footer-social--icons {
            display: flex;
            gap: 2rem;

            div {
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({theme}) => theme.colors.white};

                .icons {
                    color: ${({theme}) => theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }
    }

    .footer-bottom--section {
        padding-top: 9rem;

        hr {
            margin-bottom: 2rem;
            color: ${({theme}) => theme.colors.hr};
            height: 0.1px;
        }
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        .contact-short {
            max-width: 80vw;
            margin: 4.8rem auto;
            transform: translateY(0%);
            text-align: center;

            .grid div:last-child {
                justify-self: center;
            }
        }

        footer {
            padding: 9rem 0 9rem 0;
        }

        .footer-bottom--section {
            padding-top: 4.8rem;
        }
    }
`;

const Footer = () => {
  return (
    <>
        <Wrapper>
            <footer>
                <nav>
                    <div className="nav-links-container">
                        <ul className="nav-links">
                            <li><a href="/about">About</a></li>
                            <li><a href="/project">Project</a></li>
                            <li><a href="/certificate">Certificate</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </footer>
        </Wrapper>
    </>
  );
};

export default Footer;