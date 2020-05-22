import React from 'react';
import Card from './Card';
import collections from './Collections.js';

const Board = () => {
  return (
    <>
      <Card collections={collections} />
    </>
  );
};

export default Board;
