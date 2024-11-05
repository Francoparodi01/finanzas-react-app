import React, { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dolarUrl = 'https://dolarapi.com/v1/ambito/dolares';

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(dolarUrl);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [dolarUrl]);

    const principalesVariables = "api.bcra.gob.ar/estadisticas/v2.0/principalesvariables "

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(principalesVariables);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [principalesVariables]);




    return (
        <ApiContext.Provider value={{ data, loading, error }}>
            {children}
        </ApiContext.Provider>
    );
}

export default ApiProvider;
