import React from 'react';
import BumpChart from './BumpChart';
import ChordChart from './ChordChart';

const DataVisualisation = () => {
  return (
    <>
      <h2 style={{textAlign: 'center'}}>Economic Freedom 2020</h2>
      <BumpChart />
      <h2 style={{textAlign: 'center'}}>Exported services in US dollar</h2>
      <ChordChart />
    </>
  );
}

export default DataVisualisation;