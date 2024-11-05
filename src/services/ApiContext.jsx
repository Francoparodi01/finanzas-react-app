import React, { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [dolarData, setDolarData] = useState([]);
    const [principalesData, setPrincipalesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url, setter) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result = await response.json();
            setter(result);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const dolarUrl = 'https://dolarapi.com/v1/ambito/dolares';
    const principalesVariablesUrl = 'https://api.bcra.gob.ar/estadisticas/v2.0/principalesvariables';

    useEffect(() => {
        fetchData(dolarUrl, setDolarData);
    }, [dolarUrl]);

    useEffect(() => {
        fetchData(principalesVariablesUrl, setPrincipalesData);
        console.log(principalesData);

    }, [principalesVariablesUrl]);

    return (
        <ApiContext.Provider value={{ dolarData, principalesData, loading, error }}>
            {children}
        </ApiContext.Provider>
    );
}

export default ApiProvider;
