import React from 'react';
import styled from 'styled-components';
import { FaHandsHelping } from 'react-icons/fa';
import Nav from './Nav';

const HeaderWrapper = styled.div`
  background-color: #9077b3;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const HeaderName = styled.h1`
  width: 50%;
  padding: 0 3%;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: sans-serif;
  color: #ffe7a2;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderName>
        Job Helper
        <FaHandsHelping />
      </HeaderName>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
