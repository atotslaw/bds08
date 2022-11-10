import React, { useState } from 'react';
import { FilterData, Store } from '../../types';

import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [store, setStore] = useState<Store>();

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value as Store;

    setStore(selectedStore);
    onFilterChange({ storeId: selectedStore });
  };

  return (
    <div className="filter-container base-card">
      <select className="filter-input" value={store} onChange={onChangeStore}>
        <option value="0">Selecione uma loja</option>
        <option value="1">Uberaba</option>
        <option value="2">Uberlândia</option>
        <option value="3">Araguari</option>
        <option value="4">Ituiutaba</option>
      </select>
    </div>
  );
}

export default Filter;
