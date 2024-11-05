import React, { useContext } from "react";
import { ApiContext } from "../services/ApiContext";
import CurrencyCard from "../Components/CurrencyCard";

const CurrencyList = ({isDarkMode}) => {
    const { data, loading, error } = useContext(ApiContext);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.results.length === 0) return <p>No hay datos disponibles</p>;

    return (
        <>
          {data.results.map((currency) => (
            <CurrencyCard
              key={currency.idVariable} // Aquí usamos `idVariable` como clave única
              title={currency.descripcion} // La descripción parece ser el título relevante
              venta={currency.valor} // Usamos el valor para la venta
              compra={currency.valor} // Supongo que el valor puede ser usado tanto para compra como venta
              lastUpdate={currency.fecha} // La fecha de actualización
              isDarkMode={isDarkMode} 
            />
          ))}
        </>
    );
};

export default CurrencyList;
