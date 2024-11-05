import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import CurrencyCard from './CurrencyCard';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { ApiContext } from '../services/ApiContext';
import { Box, Typography, Container, CircularProgress, Alert } from '@mui/material';

const CurrencySwiper = ({ isDarkMode }) => {
    const { principalesData, loading, error } = useContext(ApiContext);

    if (loading) {
        return <CircularProgress sx={{ display: 'block', margin: 'auto', padding: '20px' }} />;
    }

    if (error) {
        return <Alert severity="error" sx={{ marginBottom: '20px' }}>Error: {error}</Alert>;
    }

    if (!Array.isArray(principalesData) || principalesData.length === 0) {
        return <Typography variant="h6">No hay datos disponibles</Typography>;
    }

    const swiperStyle = {
        backgroundColor: isDarkMode ? '#312c71' : '#fff',
        padding: '20px',
    };

    return (
        <Container sx={{ padding: 2 }}>
            <Swiper
                style={swiperStyle}
                spaceBetween={20}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {principalesData.map((currency) => {
                    const lastUpdate = new Date(currency.fecha).toLocaleString();

                    return (
                        <SwiperSlide key={currency.idVariable}>
                            <CurrencyCard
                                title={currency.descripcion}
                                venta={currency.valor}
                                lastUpdate={lastUpdate}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};

export default CurrencySwiper;
