import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CurrencyCard from './CurrencyCard';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { ApiContext } from '../services/ApiContext';
import { Box } from '@mui/material'; 

const CurrencySwiper = () => {
    const { data, loading, error } = useContext(ApiContext);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.length === 0) return <p>No hay datos disponibles</p>;
    
    const titles = data.map((item) => item.casa);
    const compras = data.map((item) => item.compra);
    const ventas = data.map((item) => item.venta);
    const lastUpdates = data.map((item) => new Date(item.fechaActualizacion).toLocaleString());

    return (
        <Box sx={{ padding: 2 }}> 
            <Swiper
                spaceBetween={20}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 1, 
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3, 
                    },
                }}
            >
                {data.map((currency, index) => (
                    <SwiperSlide key={currency.casa}>
                        <CurrencyCard
                            title={currency.casa} 
                            venta={currency.venta}
                            compra={currency.compra}
                            lastUpdate={lastUpdates[index]}  
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default CurrencySwiper;
