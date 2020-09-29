import React from 'react';
import BumpChart from './BumpChart';
import ChordChart from './ChordChart';
import '../DataVisualisation.css';

const DataVisualisation = () => {
  return (
    <div className='DataVisualisation' style={{ padding: '1em' }}>
      <div className='BumpChart-wrapper' style={{ padding: '1em' }}>
        <h2 style={{ textAlign: 'center' }}>Economic Freedom Top 10 Rank</h2>
        <BumpChart />
        <p style={{ textDecoratio: 'none', opacity: '.5', fontSize: '.7rem', textAlign: 'right' }}>Data is from: https://www.heritage.org/index/explore?view=by-region-country-year</p>
      </div>
      <div className='ChordChart-wrapper' style={{ padding: '1em' }}>
        <h2 style={{ textAlign: 'center' }}>Exported services in US dollar</h2>
        <ChordChart />
        <p style={{ textDecoratio: 'none', opacity: '.5', fontSize: '.7rem', textAlign: 'right' }}>Data is from: https://www.trademap.org/tradestat/Country_SelServiceCountry_TS.aspx</p>
      </div>
    </div>
  );
}

export default DataVisualisation;