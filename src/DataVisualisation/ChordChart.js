import React from 'react';
import { ResponsiveChord } from '@nivo/chord'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveChord = ({ matrix /* see matrix tab */ }) => (
    <ResponsiveChord
        matrix={matrix}
        keys={['Switzerland', 'Ireland', 'UK', 'Denmark', 'Germany']}
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        valueFormat=".2f"
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
        arcOpacity={1}
        arcBorderWidth={1}
        arcBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
        ribbonOpacity={0.5}
        ribbonBorderWidth={1}
        ribbonBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
        enableLabel={true}
        label="id"
        labelOffset={12}
        labelRotation={-90}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
        colors={{ scheme: 'nivo' }}
        isInteractive={true}
        arcHoverOpacity={1}
        arcHoverOthersOpacity={0.25}
        ribbonHoverOpacity={0.75}
        ribbonHoverOthersOpacity={0.25}
        animate={true}
        motionStiffness={90}
        motionDamping={7}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 70,
                itemWidth: 80,
                itemHeight: 14,
                itemsSpacing: 0,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

function ChordChart() {
    let matrix = [[0, 5015514, 19738996, 2790722, 27726450],
    [6324600, 0, 21920358, 974227, 7239251],
    [8731300, 33399755, 0, 9637339, 31411028],
    [448400, 2092651, 5109858, 0, 5287133],
    [14223100, 15913362, 27757338, 8526551, 0]]

    return (
        <div style={{ height: "500px" }}>
            <MyResponsiveChord
                matrix={matrix} />
        </div>
    )

}

export default ChordChart;