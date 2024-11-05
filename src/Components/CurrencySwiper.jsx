import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import CurrencyCard from './CurrencyCard';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { ApiContext } from '../services/ApiContext';
import { Box, Typography, Container } from '@mui/material';

const CurrencySwiper = () => {
    const { data, loading, error } = useContext(ApiContext);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

    const lastUpdates = data.map((item) => new Date(item.fechaActualizacion).toLocaleString());

    return (
        <Container sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
                Cotizaciones de Divisas
            </Typography>
                <Swiper
                    spaceBetween={20}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
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
        </Container>
    );
};

export default CurrencySwiper;
