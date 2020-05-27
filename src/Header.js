import React from 'react';
import styled from 'styled-components';
import { FaHandsHelping } from 'react-icons/fa';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #9077b3;
`;
const HeaderName = styled.h1`
  margin: 2% 0;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  display: flex;
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
    </HeaderWrapper>
  );
};

export default Header;
