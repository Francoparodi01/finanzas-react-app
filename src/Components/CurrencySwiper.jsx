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
    const { variableData, loading, error } = useContext(ApiContext);

    const swiperStyle = {
        backgroundColor: isDarkMode ? '#312c71' : '#fff',
        padding: '20px',
        borderRadius: '8px'
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Alert severity="error">
                <Typography>Error al cargar los datos: {error.message}</Typography>
            </Alert>
        );
    }

    if (!variableData || variableData.length === 0) {
        return (
            <Typography variant="h6" align="center">
                No hay datos disponibles.
            </Typography>
        );
    }
    
    return (
        <Container sx={{ padding: 2 }}>
            <Swiper
                style={swiperStyle}
                spaceBetween={20}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[Autoplay]}
                watchSlidesProgress={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {variableData.map((currency) => {
                    const lastUpdate = new Date(currency.fecha).toLocaleString();

                    return (
                        <SwiperSlide key={currency.idVariable}>
                            <CurrencyCard
                                title={currency.descripcion}
                                venta={currency.valor}
                                lastUpdate={lastUpdate}
                                isDarkMode={isDarkMode}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};

export default CurrencySwiper;
