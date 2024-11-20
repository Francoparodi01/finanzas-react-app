import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";

const InflationChart = () => {
  const [inflationData, setInflationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.argentinadatos.com/v1/finanzas/indices/inflacion")
      .then((response) => response.json())
      .then((data) => {
        setInflationData(
          data.map((entry) => ({
            fecha: entry.fecha,
            valor: entry.valor,
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Inflación Mensual con Selección de Rango</h2>
      <LineChart
        width={900}
        height={400}
        data={inflationData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fecha" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="valor"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Brush
          dataKey="fecha"
          height={30}
          stroke="#8884d8"
          startIndex={0}
          endIndex={50}
        />
      </LineChart>
    </div>
  );
};

export default InflationChart
