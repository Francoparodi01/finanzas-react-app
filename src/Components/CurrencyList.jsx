import React, { useContext } from "react";
import { ApiContext } from "../services/ApiContext";
import CurrencyCard from "../Components/CurrencyCard";
import Charts from "./Charts";

const CurrencyList = ({ isDarkMode }) => {
    const { 
        dolarData, 
        loadingDolar, 
        errorDolar, 
    } = useContext(ApiContext);

    if (loadingDolar) return <p>Loading...</p>;
    if (errorDolar) return <p>Error en los datos del dólar: {errorDolar.message}</p>;

    console.log("dolarData", dolarData);  


    return (
        <>
          {dolarData.map((currency) => (
            <CurrencyCard
              key={currency.casa} 
              id={currency.id} 
              title={currency.casa} 
              venta={currency.venta} 
              compra={currency.compra} 
              lastUpdate={currency.fechaActualizacion} 
              isDarkMode={isDarkMode} 
            />
        ))}
        <Charts/>
        </> 
    );
};

export default CurrencyList;
