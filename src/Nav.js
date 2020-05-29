import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBox = styled.ul`
  width: 50%;
  padding: 0 3%;
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-end;
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

function Nav() {
  return (
    <>
      <NavBox>
        <li>
          <StyledLink to="/">App</StyledLink>
        </li>
        <li>
          <StyledLink to="/home">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </NavBox>
    </>
  );
}

export default Nav;
