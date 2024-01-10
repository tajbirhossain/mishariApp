import React, { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart = () => {
    const chartRef = useRef(null);

    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr']
        },
        yAxis: {
            title: {
                text: '' // Empty text to hide title
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderRadius: '25%',
                colorByPoint: true,
                negativeColor: '#FF3366',
                colors: ['#2EC4B6'],
                pointWidth: 30, // Increased width
                groupPadding: 0.11,
            }
        },
        series: [
            {
                name: 'Jan',
                data: [5, 3, 4, 7]
            },
            {
                name: 'Feb',
                data: [2, -2, -3, 2]
            },
            {
                name: 'Mar',
                data: [3, 4, 4, -2],
            }
        ],
        legend: {
            enabled: false
        },
    };


    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                ref={chartRef}
                options={options}
            />
        </div>
    );
};

export default ColumnChart;
