import React, { useContext } from 'react';
import ReactECharts from 'echarts-for-react';
import { Box } from '@mui/material'; // Import Box from Material-UI
import { ApiContext } from '../services/ApiContext';

const Charts = (props) => {
    const { data, loading, error } = useContext(ApiContext);
    
    if (loading) return <p>Loading...</p>;  
    if (error) return <p>Error: {error}</p>;
    
    const labels = data.map((item) => item.casa);
    const compra = data.map((item) => item.compra);
    const venta = data.map((item) => item.venta);
    
    console.log(data);

    const chartData = {
        xAxis: {
            type: 'category',
            data: labels,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'Compra',
                type: 'bar',
                data: compra,
                itemStyle: {
                    color: 'rgba(255, 99, 132, 0.6)',
                },
            },
            {
                name: 'Venta',
                type: 'bar',
                data: venta,
                itemStyle: {
                    color: 'rgba(54, 162, 235, 0.6)',
                },
            },
        ],
    };

    const options = {
        title: {
            text: 'Diferencia en distintas cotizaciones de $USD',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {
            data: ['Compra', 'Venta'],
            top: '10%',
            left: 'center',
        },
        grid: {
            top: '20%',
            left: '10%',
            right: '10%',
            bottom: '10%',
        },
    };

    return (
        <Box
            sx={{
                width: '100%', 
                height: { xs: 300, sm: 400, md: 500 }, 
                padding: 2, 
            }}
        >
            <ReactECharts option={{ ...options, ...chartData }} />
        </Box>
    );
}

export default Charts;