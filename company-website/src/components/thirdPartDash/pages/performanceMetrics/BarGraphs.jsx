import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Performance",
      data: [65, 59, 80, 81, 56, 77, 23, 35, 56, 45, 100, 12],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Performance Metrics" },
  },
  scales: {
    x: {
      categoryPercentage: 0.3,
      barPercentage: 0.7,
    },
    y: {
      beginAtZero: true,
    },
  },
};

function BarGraphs() {
  return (
    <div className="p-1 pl-3 text-white  shadow-md h-150 overflow-hidden">
      <Bar data={data} options={options} className="w-fit" />
    </div>
  );
}

export default BarGraphs;
