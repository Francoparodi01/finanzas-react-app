import React, { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [dolarData, setDolarData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const[variableData, setVariableData] = useState([]);

    useEffect(() => {
        fetch("https://dolarapi.com/v1/ambito/dolares")
            .then((response) => response.json())
            .then((data) => {
                setDolarData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }
    , []);

    console.log(dolarData);
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
    

    return (
        <ApiContext.Provider value={{ variableData, dolarData, loading, error }}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiProvider;
