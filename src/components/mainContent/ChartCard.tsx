import { Select } from "antd";
import styled from "styled-components";

// Chart Imports
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
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
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

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 16px;
`;

const ChartContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0 0 0 1rem;
    width: auto;
  }

  .ant-select-selector {
    border: none !important;
  }
`;

const LegendContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;

  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-top: 0;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

const LegendDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${(props) => props.color};
`;

const LegendText = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
`;

const ChartWrapper = styled.div`
  height: 12rem;

  @media (min-width: 768px) {
    height: 16rem;
  }
`;

const ChartCard = () => {
  const labels = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];

  const currentYearData = [
    240000, 130000, 250000, 140000, 220000, 230000, 190000, 230000,
  ];

  const previousYearData = [
    120000, 150000, 180000, 220000, 170000, 120000, 140000, 130000,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Last 6 months",
        data: currentYearData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Same period last year",
        data: previousYearData,
        borderColor: "rgb(180, 180, 180)",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
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
      y: {
        min: 0,
        max: 300000,
        ticks: {
          callback: function (value: any) {
            if (value === 0) return "$0.00";
            return `$${value / 1000}k`;
          },
        },
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: true,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <ChartContainer>
      <HeaderContainer>
        <SectionTitle>Car Availability</SectionTitle>

        <Controls>
          <div>
            <Select
              value={"Mar 2022 - Oct 2022"}
              style={{ width: "100%", minWidth: "180px" }}
              options={[
                {
                  key: "Mar 2022 - Oct 2022",
                  label: "Mar 2022 - Oct 2022",
                  value: "Mar 2022 - Oct 2022",
                },
              ]}
              onChange={() => {}}
            />
          </div>

          <LegendContainer>
            <LegendItem>
              <LegendDot color="#006AFF" />
              <LegendText>Last 6 months</LegendText>
            </LegendItem>
            <LegendItem>
              <LegendDot color="#a0aec0" />
              <LegendText>Same period last year</LegendText>
            </LegendItem>
          </LegendContainer>
        </Controls>
      </HeaderContainer>

      <ChartWrapper>
        <Line options={options as any} data={data} />
      </ChartWrapper>
    </ChartContainer>
  );
};

export default ChartCard;
