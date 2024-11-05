import React, { useContext } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
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

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
    );

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Compra',
                data: compra,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Venta',
                data: venta,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Diferencia en distintas cotizaciones de $USD',
            },
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
            <Bar data={chartData} options={options} />
        </Box>
    );
}

export default Charts;
