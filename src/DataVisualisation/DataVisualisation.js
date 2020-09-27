import React from 'react';
import BumpChart from './BumpChart';
import ChordChart from './ChordChart';
import '../DataVisualisation.css';

const DataVisualisation = () => {
  return (
    <>
      <h2 style={{textAlign: 'center'}}>Economic Freedom Top 10 Rank</h2>
      <BumpChart />
      <h2 style={{textAlign: 'center'}}>Exported services in US dollar</h2>
      <ChordChart />
    </>
  );
}

export default DataVisualisation;