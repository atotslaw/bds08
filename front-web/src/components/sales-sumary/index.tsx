import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import SalesSummaryCard from './sales-summary-card';
import { FilterData, SalesSummaryData } from '../../types';

import './styles.css';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  sum: 0,
  storeId: 0
};

function SalesSummary({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.sum?.toFixed(2)} label="Total de vendas" />
    </div>
  );
}

export default SalesSummary;
