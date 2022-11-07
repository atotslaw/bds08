import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from './utils/request';
import Filter from './components/filter';
import Header from './components/header';
import { FilterData, PieChartConfig, SalesByStore } from './types';

import './App.css';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  // useEffect(() => {
  //   makeRequest
  //     .get<SalesByStore[]>('/sales/by-store', { params })
  //     .then((response) => {
  //       const newSalesByStore = buildSalesByStoreChart(response.data);
  //       setSalesByStore(newSalesByStore);
  //     })
  //     .catch(() => {
  //       console.error('Error to fetch sales by store');
  //     });
  // }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
      </div>
      <div className="sales-overview-container"></div>
    </>
  );
}

export default App;
