import React, { useContext } from 'react';
import styled from 'styled-components';
import { ApiContext } from '../../services/ApiContext';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1em;
  padding: 2rem;
`;

const StyledCard = styled.div`
  background: #1d1d1d;
  border-radius: 8px;
  padding: 1.5rem;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #00e676;
`;

const CardContent = styled.div`
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  margin: 0.2rem 0;
  font-size: 0.9rem;
  color: #aaa;
`;

const LastUpdate = styled.span`
  font-size: 0.8rem;
  color: #777;
`;

const DolarCard = () => {
  const { dolarData, loadingDolar, errorDolar } = useContext(ApiContext);

  if (loadingDolar) return <p>Cargando...</p>;
  if (errorDolar) return <p>Error al cargar datos.</p>;

  return (
    <CardContainer>
      {dolarData.map((currency) => (
        <StyledCard key={currency.id}>
          <CardTitle>{currency.casa}</CardTitle>
          <CardContent>
            <InfoText>Compra: ${currency.compra}</InfoText>
            <InfoText>Venta: ${currency.venta}</InfoText>
            <LastUpdate>Última actualización: {currency.date}</LastUpdate>
          </CardContent>
        </StyledCard>
      ))}
    </CardContainer>
  );
};

export default DolarCard;
