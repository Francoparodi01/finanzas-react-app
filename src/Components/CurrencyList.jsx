import React, { useContext } from "react";
import { ApiContext } from "../services/ApiContext";
import CurrencyCard from "../Components/CurrencyCard";

const CurrencyList = () => {
    const { data, loading, error } = useContext(ApiContext);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

    return (
        <div>
            <h1>Datos desde la API</h1>
            {data.map((item) => (
                <CurrencyCard
                    key={item.casa}
                    title={item.nombre}
                    compra={item.compra}
                    venta={item.venta}
                    lastUpdate={new Date(item.fechaActualizacion).toLocaleString()}
                    change={null}
                />
            ))}
        </div>
    );
};

export default CurrencyList;
