import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from './utils/request';
import Filter from './components/filter';
import Header from './components/header';
import { FilterData, PieChartConfig, SalesByGender } from './types';
import { buildSalesByGenderChart } from './helpers';
import SalesSummary from './components/sales-sumary';
import PieChartCard from './components/pie-chart-card';

import './App.css';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
      </div>
      <div className="sales-overview-container">
        <SalesSummary filterData={filterData} />
        <PieChartCard name="Gender" labels={salesByGender?.labels} series={salesByGender?.series} />
      </div>
    </>
  );
}

export default App;
