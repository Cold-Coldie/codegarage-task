import React, { useState } from "react";
import styled from "styled-components";

// Chart Imports
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticsContainer = styled.div`
  width: 320px;
  background-color: rgb(248, 247, 242);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem 2rem 2rem;
`;

const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #374151;
`;

const HeaderSubtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardHeader = styled.div<{ showBottomBorder: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) =>
    props?.showBottomBorder ? "1px solid #f3f4f6" : ""};
  padding: 2px;
  width: 80%;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  color: #656575;
`;

const CardBadge = styled.span`
  font-size: 12px;
  padding: 4px 12px;
  background-color: #f4f5f7;
  color: #656575;
  border-radius: 5px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceDisplay = styled.div`
  display: flex;
  gap: 5rem;
`;

const Price = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: black;
  margin: 10px;
`;

const PriceChange = styled.span<{ increase: boolean }>`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${(props) => (props.increase ? "#52C93F" : "#FF2727")};
`;

const ComparisonText = styled.p`
  font-size: 14px;
  color: #656575;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatLabel = styled.span`
  font-size: 14px;
  color: #525256;
`;

const StatValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #525256;
`;

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ChartWrapper = styled.div`
  width: 16rem;
  height: 16rem;
  transform: scale(0.5);
  margin: -4rem 0;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ColorIndicator = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  margin-right: 0.75rem;
  background-color: ${(props) => props.color};
`;

const LabelText = styled.span`
  font-size: 1rem;
  color: #1f2937;
`;

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #1f2937;
  margin-left: 3rem;
`;

const ArrowUp = styled.span`
  color: #52c93f;
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;

const ArrowDown = styled.span`
  color: #ff2727;
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;

const StatisticsData = [
  {
    title: "Income",
    price: "$ 9460.00",
    priceChange: "↓ 1.5%",
    increase: false,
    comparisonText: "Compared to $9940 yesterday",
    label: "Last week Income",
    value: "$25658.00",
  },
  {
    title: "Expences",
    price: "$ 5660.00",
    priceChange: "↑ 2.5%",
    increase: true,
    comparisonText: "Compared to $5240 yesterday",
    label: "Last week expences",
    value: "$22658.00",
  },
];

const StatisticsBar: React.FC = () => {
  const [chartData] = useState({
    labels: ["Total Canceled", "Total Hired", "Total Pending"],
    datasets: [
      {
        data: [20, 54, 26],
        backgroundColor: [
          "#52C93F", // Green for Canceled
          "#006AFF", // Blue for Hired
          "#FF2727", // Red for Pending
        ],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <StatisticsContainer>
      <header>
        <HeaderTitle>Todays Statistics</HeaderTitle>
        <HeaderSubtitle>Tue, 14 Nov, 2022, 11.30 AM</HeaderSubtitle>
      </header>

      {StatisticsData?.map((item, index) => (
        <Card key={index} style={{ marginBottom: "1rem" }}>
          <CardHeader showBottomBorder={true}>
            <CardTitle>{item?.title}</CardTitle>
            <CardBadge>Today</CardBadge>
          </CardHeader>

          <CardContent>
            <PriceDisplay>
              <Price>{item?.price}</Price>
              <PriceChange increase={item?.increase}>
                {item?.priceChange}
              </PriceChange>
            </PriceDisplay>

            <ComparisonText>{item?.comparisonText}</ComparisonText>

            <StatRow>
              <StatLabel>{item?.label}</StatLabel>
              <StatValue>{item?.value}</StatValue>
            </StatRow>
          </CardContent>
        </Card>
      ))}

      <Card style={{ marginBottom: "1rem" }}>
        <CardHeader showBottomBorder={false}>
          <CardTitle>{"Hire vs Cancel"}</CardTitle>
          <CardBadge>Today</CardBadge>
        </CardHeader>

        <ChartContainer>
          <ChartWrapper>
            <Doughnut data={chartData} options={options} />
          </ChartWrapper>
        </ChartContainer>

        <LegendContainer>
          {chartData.labels.map((label, idx) => (
            <LegendItem key={idx}>
              <LabelWrapper>
                <ColorIndicator
                  color={chartData.datasets[0].backgroundColor[idx]}
                />
                <LabelText>{label}</LabelText>
              </LabelWrapper>
              <ValueWrapper>
                {chartData.datasets[0].data[idx]}%
                {idx !== 2 ? <ArrowUp>↑</ArrowUp> : <ArrowDown>↓</ArrowDown>}
              </ValueWrapper>
            </LegendItem>
          ))}
        </LegendContainer>
      </Card>
    </StatisticsContainer>
  );
};

export default StatisticsBar;
