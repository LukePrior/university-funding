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
  maintainAspectRatio: false,
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

export const hardcoded_data = {
  labels: [],
  datasets: [],
};

export function App() {
  const [data, setData] = React.useState<any>([]);
  const[chartData, setChartData] = React.useState<any>(hardcoded_data);
  const[chartOptions, setChartOptions] = React.useState<any>(options);
  const[course, setCourse] = React.useState<string>("Physics");

  React.useEffect(() => {
    fetch("https://raw.githubusercontent.com/LukePrior/university-funding/main/funding.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  React.useEffect(() => {
    setChartOptions(updateChartOptions(course));
    setChartData(convertData(data, course));
  }, [data, course]);

  return (
    <div>
      <h1>University Funding</h1>
      <p>
        This chart shows the funding for each university course in Australia.
        The funding is split into two categories: Commonwealth Contributions
        (CC) and Maximum Student Contributions (MSC). The CC is paid by the
        government and the MSC is paid by the student.
      </p>
      <CourseSelector data={data} course={course} setCourse={setCourse} />
      <Bar options={chartOptions} data={chartData} style={{maxHeight: "calc(100vh - 200px)"}} />
    </div>
  );
}

// function that updates chart options to reflect correct course name
function updateChartOptions(course: string) {
  let newOptions = options;
  newOptions.plugins.title.text = `University Funding - ${course}`;
  return newOptions;
}

// function that converts the data from the json file into the format that the chart expects
function convertData(data: any, course: string) {
  let labels: any = []
  let datasets: any = [
    {
      label: "Commonwealth Contributions",
      data: [],
      backgroundColor: "rgb(255, 99, 132)"
    },
    {
      label: "Maximum Student Contributions",
      data: [],
      backgroundColor: "rgb(53, 162, 235)"
    }
  ];

  // loop through the data and extract the labels and datasets
  for (const entry of data) {
    if (entry.Title == course) {
      // iterate through the object with keys sorted alphabetically
      for (const [key, value] of Object.entries(entry).sort()) {
        if (key.match(/^\d{4} MSC$/)) {
          labels.push(key.split(" ")[0]);
          datasets[0].data.push(value);
        }
        if (key.match(/^\d{4} CC$/)) {
          datasets[1].data.push(value);
        }
      }
    }
  }

  let processed = { labels, datasets };

  return processed;
}

// function that generates the dropdown menu to select the course given data
function CourseSelector({ data, course, setCourse }: any) {
  let options: any = [];
  for (const entry of data) {
    options.push(<option value={entry.Title} selected={entry.Title == course}>{entry.Title}</option>);
  }

  return (
    <select onChange={(e) => setCourse(e.target.value)}>
      {options}
    </select>
  );
}