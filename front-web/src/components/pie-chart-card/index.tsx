import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div className="pie-chart-card-container">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="350"
        height="350"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
