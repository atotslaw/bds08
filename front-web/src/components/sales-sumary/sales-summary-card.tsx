import React from 'react';
import { formatPrice } from '../../utils/formatters';
import './styles.css';

type Props = {
  value: number;
  label: string;
};

function SalesSummaryCard({ value, label }: Props) {
  return (
    <div className="sales-summary-card">
      <h3 className="sales-summary-card-value">{formatPrice(value)}</h3>
      <span className="sales-summary-card-label">{label}</span>
    </div>
  );
}

export default SalesSummaryCard;
