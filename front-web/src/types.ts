export type Store = 'UBERABA' | 'UBERLANDIA' | 'ARAGUARI' | 'ITUIUTABA';

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  store?: Store;
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByStore = {
  storeName: string;
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
