import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../services/ApiContext";

const CardDetail = () => {
  const { id } = useParams();  // Obtener el id de la URL
  const { dolarData } = useContext(ApiContext);  // Obtener los datos de dolarData desde el contexto
  const [cardData, setCardData] = useState(null);



  useEffect(() => {
    const selectedCard = dolarData.find((item) => item.id === id);
    setCardData(selectedCard);
  }, [id, dolarData]);  

  if (!cardData) {
    return <div>Loading...</div>;  
  }

  return (
    <div>
      <h1>{cardData.nombre}</h1>
      <p>Moneda: {cardData.moneda}</p>
      <p>Casa: {cardData.casa}</p>
      <p>Compra: {cardData.compra}</p>
      <p>Venta: {cardData.venta}</p>
      <p>Fecha de Actualización: {cardData.date}</p>
    </div>
  );
};

export default CardDetail;
