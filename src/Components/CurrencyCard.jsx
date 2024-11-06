import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CurrencyCard = ({ title, venta, compra, lastUpdate, isDarkMode, id }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Colores para fondo y texto según el modo
  const backgroundColor = isDarkMode ? '#d2d2a5' : '#459ab6'; 
  const textColor = isDarkMode ? '#000000' : '#ffffff'; 

  return (
    <Link to={`/CardDetail/${id}`} style={{ textDecoration: 'none' }}>
      <Card variant="outlined" sx={{ minWidth: 200, margin: '10px', backgroundColor, display: 'flex'}}>
        <CardContent>
          <Typography variant="h5" style={{ color: textColor }}>{title}</Typography>
          <Typography color="textSecondary" style={{ color: textColor }}>Venta: {formatCurrency(venta)}</Typography>
          <Typography color="textSecondary" style={{ color: textColor }}>Compra: {formatCurrency(compra)}</Typography>
          <Typography variant="caption" color="textSecondary" style={{ color: textColor }}>{lastUpdate}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CurrencyCard;
