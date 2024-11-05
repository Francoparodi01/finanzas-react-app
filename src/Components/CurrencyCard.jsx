import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrencyCard = ({ title, venta, compra, lastUpdate }) => {
  return (
    <Card variant="outlined" style={{ minWidth: 200, margin: '10px' }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography color="textSecondary">Venta: {venta}</Typography>
        <Typography color="textSecondary">Compra: {compra}</Typography>
        <Typography variant="caption" color="textSecondary">{lastUpdate}</Typography>
      </CardContent>
    </Card>
  );
};

export default CurrencyCard;
