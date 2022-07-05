import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true,
      ticks: {
        callback: function (value: any, index: any, ticks: any) {
          return "$" + value.toLocaleString();
        }
      }
    }
  },
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "University Funding - Computer Science"
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (ttItem: any) => {
          const sum =
            ttItem.chart.data.datasets[0].data[ttItem.dataIndex] +
            ttItem.chart.data.datasets[1].data[ttItem.dataIndex];
          let percentage = ((ttItem.parsed.y * 100) / sum).toFixed(2) + "%";
          let amount = "$" + ttItem.parsed.y.toLocaleString();
          return `${ttItem.dataset.label}: ${amount} (${percentage})`;
        }
      }
    }
  }
};

export const data = {
  labels: [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022"
  ],
  datasets: [
    {
      label: "Commonwealth Contributions",
      data: [
        8389,
        8670,
        8808,
        9142,
        9498,
        9782,
        9958,
        10127,
        10278,
        10432,
        10630,
        10821,
        13250,
        13369
      ],
      backgroundColor: "rgb(255, 99, 132)"
    },
    {
      label: "Maximum Student Contributions",
      data: [
        7412,
        7567,
        7756,
        8050,
        8363,
        8613,
        8768,
        8917,
        9050,
        9185,
        9359,
        9527,
        7950,
        8021
      ],
      backgroundColor: "rgb(53, 162, 235)"
    }
  ]
};

export function App() {
  return <Bar options={options} data={data} />;
}
