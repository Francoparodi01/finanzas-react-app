import React, { useContext } from 'react';
import CurrencyCard from './CurrencyCard';
import { ApiContext } from '../services/ApiContext';
import SwiperCard from './SwiperCard';

const CurrencySwiper = ({ isDarkMode }) => {
    const { variableData, loading, error } = useContext(ApiContext);

    return (
        <SwiperCard
            isDarkMode={isDarkMode}
            data={variableData}
            loading={loading}
            error={error}
            renderItem={(currency) => {
                const lastUpdate = new Date(currency.fecha).toLocaleString();
                return (
                    <CurrencyCard
                        title={currency.descripcion}
                        venta={currency.valor}
                        lastUpdate={lastUpdate}
                        isDarkMode={isDarkMode}
                    />
                );
            }}
        />
    );
};

export default CurrencySwiper;
