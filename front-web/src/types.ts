export type Store = '0' | '1' | '2' | '3' | '4';

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  storeId: Store;
};

export type SalesSummaryData = {
  sum?: number;
};

export type SalesByStore = {
  storeName: string;
  sum: number;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type SalesByPaymentMethod = {
  description: string;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type SalesResponse = {
  content: Sale[];
};

export type Sale = {
  id: number;
  date: string;
  volume: number;
  total: number;
  store: Store;
  categoryName: string;
  paymentMethod: string;
  storeName: string;
};
