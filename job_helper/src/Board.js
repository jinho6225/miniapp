import React from 'react';
import Card from './Card';
import collections from './Collections.js';
import styled from 'styled-components';

const CardBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1% 0;
`;

const Board = () => {
  return (
    <CardBoard>
      {collections.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </CardBoard>
  );
};

export default Board;
