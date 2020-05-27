import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0;
  margin: 1%;
  width: 300px;
  min-height: 450px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -3px);
  }
`;

export const CardName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 2% 0;
  display: block;
  font-family: inherit;
  font-weight: 600;
  color: #664292;
  border-radius: 35px;

  ${CardWrapper}:hover & {
    color: #78a636;
    text-decoration: underline;
  }
`;

export const CardTitle = styled.h1`
  font-size: 16px;
  text-align: center;
  padding: 2% 0;
  display: block;
  font-family: inherit;
  color: #502880;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -3px);
  }
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 20px;
  }

  &:nth-last-of-type(2) {
    margin-top: 25px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  font-family: inherit;
  border: 1px solid gray;
  border-radius: 50%;

  ${CardWrapper}:hover & {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    border: 5px solid #78a636;
  }
`;

export const CardIcon = styled.span`
  color: #502880;
  cursor: pointer;
  opacity: .25;

  &:hover {
    opacity: .95;
    font-size: 30px;
  }

  ${(props) =>
    props.big &&
    css`
      font-size: 25px;
    `}

  ${(props) =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;
