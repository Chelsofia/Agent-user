import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: [
    "Damilola",
    "Amos",
    "Gideon",
    "Dapo",
    "Peter",
    "Alex",
    "Micheal",
    "James",
    "Adebola",
    "Titus",
    "Folakemi",
    "Adeleke",
  ],
  datasets: [
    {
      label: "Transactions",
      data: [10, 20, 30, 50, 50, 70, 80, 100, 90, 100, 110, 120],
      borderColor: "rgba(245, 102, 48, 1)",
      backgroundColor: "rgba(255, 236, 229, 1)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Customers",
        color: "#F56630",
      },
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: false, // Show all labels and let scrolling handle overflow
        maxRotation: 0,
        minRotation: 0,
        padding: 10,
      },
    },
    y: {
      title: {
        display: true,
        text: "Transactions",
        color: "#F56630",
      },
      beginAtZero: true,
      ticks: {
        stepSize: 20,
        callback: function (tickValue) {
          if (typeof tickValue === "number") {
            return `₦ ${tickValue}M`;
          }
          return tickValue;
        },
      },
    },
  },
};

const AreaChart: FC = () => {
  return (
    <div className="overflow-x-auto">
      <div className="w-[600px] md:w-[800px] lg:w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] p-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AreaChart;
