import React from 'react';
import { ResponsiveBump } from '@nivo/bump'

const MyResponsiveBump = ({ data }) => (
    <ResponsiveBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        colors={{ scheme: 'nivo' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        AreaBumpComputedSerie={{ from: 'serie.color' }}
        startLabelPadding={0}
        startLabelTextColor="red"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
        }}
    />
)
const BumpChart = () => {
    const data = [{ 'id': 'Switzerland', 'data': [{ 'x': '2013', 'y': 1.0 }, { 'x': '2014', 'y': 1.0 }, { 'x': '2015', 'y': 1.0 }, { 'x': '2016', 'y': 1.0 }, { 'x': '2017', 'y': 1.0 }, { 'x': '2018', 'y': 1.0 }, { 'x': '2019', 'y': 1.0 }, { 'x': '2020', 'y': 1.0 }] }, { 'id': 'Ireland', 'data': [{ 'x': '2013', 'y': 3.0 }, { 'x': '2014', 'y': 2.0 }, { 'x': '2015', 'y': 3.0 }, { 'x': '2016', 'y': 2.0 }, { 'x': '2017', 'y': 3.0 }, { 'x': '2018', 'y': 2.0 }, { 'x': '2019', 'y': 2.0 }, { 'x': '2020', 'y': 2.0 }] }, { 'id': 'United Kingdom', 'data': [{ 'x': '2013', 'y': 6.0 }, { 'x': '2014', 'y': 5.0 }, { 'x': '2015', 'y': 5.0 }, { 'x': '2016', 'y': 4.0 }, { 'x': '2017', 'y': 4.0 }, { 'x': '2018', 'y': 4.0 }, { 'x': '2019', 'y': 3.0 }, { 'x': '2020', 'y': 3.0 }] }, { 'id': 'Denmark', 'data': [{ 'x': '2013', 'y': 2.0 }, { 'x': '2014', 'y': 3.0 }, { 'x': '2015', 'y': 4.0 }, { 'x': '2016', 'y': 5.0 }, { 'x': '2017', 'y': 9.0 }, { 'x': '2018', 'y': 6.0 }, { 'x': '2019', 'y': 6.0 }, { 'x': '2020', 'y': 4.0 }] }, { 'id': 'Estonia', 'data': [{ 'x': '2013', 'y': 4.0 }, { 'x': '2014', 'y': 4.0 }, { 'x': '2015', 'y': 2.0 }, { 'x': '2016', 'y': 3.0 }, { 'x': '2017', 'y': 2.0 }, { 'x': '2018', 'y': 3.0 }, { 'x': '2019', 'y': 7.0 }, { 'x': '2020', 'y': 5.0 }] }, { 'id': 'Iceland', 'data': [{ 'x': '2013', 'y': 9.0 }, { 'x': '2014', 'y': 10.0 }, { 'x': '2015', 'y': 10.0 }, { 'x': '2016', 'y': 9.0 }, { 'x': '2017', 'y': 10.0 }, { 'x': '2018', 'y': 5.0 }, { 'x': '2019', 'y': 4.0 }, { 'x': '2020', 'y': 6.0 }] }, { 'id': 'Georgia', 'data': [{ 'x': '2013', 'y': 8.0 }, { 'x': '2014', 'y': 9.0 }, { 'x': '2015', 'y': 9.0 }, { 'x': '2016', 'y': 10.0 }, { 'x': '2017', 'y': 5.0 }, { 'x': '2018', 'y': 8.0 }, { 'x': '2019', 'y': 8.0 }, { 'x': '2020', 'y': 7.0 }] }, { 'id': 'Netherlands', 'data': [{ 'x': '2013', 'y': 7.0 }, { 'x': '2014', 'y': 6.0 }, { 'x': '2015', 'y': 7.0 }, { 'x': '2016', 'y': 7.0 }, { 'x': '2017', 'y': 7.0 }, { 'x': '2018', 'y': 9.0 }, { 'x': '2019', 'y': 5.0 }, { 'x': '2020', 'y': 8.0 }] }, { 'id': 'Lithuania', 'data': [{ 'x': '2013', 'y': 10.0 }, { 'x': '2014', 'y': 8.0 }, { 'x': '2015', 'y': 6.0 }, { 'x': '2016', 'y': 6.0 }, { 'x': '2017', 'y': 8.0 }, { 'x': '2018', 'y': 10.0 }, { 'x': '2019', 'y': 10.0 }, { 'x': '2020', 'y': 9.0 }] }, { 'id': 'Luxembourg', 'data': [{ 'x': '2013', 'y': 5.0 }, { 'x': '2014', 'y': 7.0 }, { 'x': '2015', 'y': 8.0 }, { 'x': '2016', 'y': 8.0 }, { 'x': '2017', 'y': 6.0 }, { 'x': '2018', 'y': 7.0 }, { 'x': '2019', 'y': 9.0 }, { 'x': '2020', 'y': 10.0 }] }]
    return (<div className='BumpChart'>
        <MyResponsiveBump
            data={data} />
    </div>);
}

export default BumpChart;