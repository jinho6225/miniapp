import React from 'react';
import styled from 'styled-components';
import { FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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

const StyledLink = styled(Link)`
  color: #ffe7a2;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    text-decoration: underline;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -3px);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderName>
        <StyledLink to="/"> Job Helper</StyledLink>
        <FaHandsHelping />
      </HeaderName>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
