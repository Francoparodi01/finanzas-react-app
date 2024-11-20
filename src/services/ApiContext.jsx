import React, { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [dolarData, setDolarData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const[variableData, setVariableData] = useState([]);
    const[inflationData, setInflationData] = useState([]);
    const[riskData, setRiskData] = useState([]);
    


    const formatDate = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleString();
    };

    useEffect(() => {
        fetch("https://dolarapi.com/v1/ambito/dolares")
            .then((response) => response.json())
            .then((data) => {
                const formattedData = data.map((item) => ({
                    ...item,
                    id: `${item.moneda}-${item.casa}`,
                    date: formatDate(item.fechaActualizacion),
                }));
                setDolarData(formattedData);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    
    
    useEffect(() => {
        fetch("https://api.bcra.gob.ar/estadisticas/v2.0/principalesvariables")
            .then((response) => response.json())
            .then((variableData) => {
                setVariableData(variableData.results);
                setLoading(false);
                console.log(variableData.results); 
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch("https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais")
            .then((response) => response.json())
            .then((riskData) => {
                setRiskData(riskData);
                setLoading(false);
                console.log(riskData);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    } , []);

    useEffect(() => {
        fetch("https://api.argentinadatos.com/v1/finanzas/indices/inflacion")
            .then((response) => response.json())
            .then((inflationData) => {
                setInflationData(inflationData);
                setLoading(false);
                console.log(inflationData);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <ApiContext.Provider value={{ variableData, dolarData, loading, error, inflationData }}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiProvider;
