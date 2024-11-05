import React, { useContext } from "react";
import { ApiContext } from "../services/ApiContext";
import CurrencyCard from "../Components/CurrencyCard";

const CurrencyList = ({isDarkMode}) => {
    const { data, loading, error } = useContext(ApiContext);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

    return (
        <>
          {data.map((currency) => (
            <CurrencyCard
              key={currency.id}
              title={currency.nombre}
              venta={currency.venta}
              compra={currency.compra}
              lastUpdate={currency.fechaActualizacion}
              isDarkMode={isDarkMode} 
            />
          ))}
        </>
    );
};

export default CurrencyList;