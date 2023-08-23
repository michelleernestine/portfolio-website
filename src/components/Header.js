import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from '../assets/Logo.png'

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
        height: 5rem;
    }
`;

const Header = () => {
  return (
    <MainHeader>
        <NavLink to='/'>
            {/* <h1>logo</h1> */}
            <img src={Logo}
            style={{height: '8rem'}} />
        </NavLink>
        <Navbar />
    </MainHeader>
  )
};

export default Header;