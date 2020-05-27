import React from 'react';
import styled from 'styled-components';

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

function Nav() {
  return (
    <NavBox>
      <li>a</li>
      <li>b</li>
    </NavBox>
  );
}

export default Nav;
