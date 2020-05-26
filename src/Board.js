import React from 'react';
import Card from './Card';
import collections from './Collections.js';
import styled from 'styled-components';

const CardBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Board = () => {
  return (
    <CardBoard>
      <Card collections={collections} />
      <Card collections={collections} />
      <Card collections={collections} />
    </CardBoard>
  );
};

export default Board;
