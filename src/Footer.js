import React from 'react';
import styled from 'styled-components';
import { FaHandsHelping } from 'react-icons/fa';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #9077b3;
`;
const FooterName = styled.h1`
  margin: 20px 0 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  color: #ffe7a2;
`;
const FooterP = styled.p`
  margin: 0 0 20px;
  font-size: 1rem;
  text-align: center;
  font-family: sans-serif;
  color: #ffe7a2;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterName>
        Job Helper
        <FaHandsHelping />
      </FooterName>
      <FooterP>Designed and developed by Jinho Myung © 2020</FooterP>
    </FooterWrapper>
  );
};

export default Footer;
