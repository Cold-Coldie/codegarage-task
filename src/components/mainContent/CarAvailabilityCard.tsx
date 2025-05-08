import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import styled from "styled-components";

// Icon Imports
import CarFilledIcon from "../../assets/icons/Car-Filled.svg";
import ClockIcon from "../../assets/icons/Clock.svg";

const CarAvailabilitySection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 16px;
`;

const CarAvailabilityForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .ant-select,
  .ant-picker {
    width: 100% !important;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

const CheckButton = styled.button`
  background-color: #006aff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover {
    background-color: #1d4ed8;
  }
`;

const SmallIconImage = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 1rem;
`;

const CarAvailabilityCard = () => {
  return (
    <CarAvailabilitySection>
      <SectionTitle>Car Availability</SectionTitle>

      <CarAvailabilityForm>
        <Select
          prefix={
            <SmallIconImage
              src={CarFilledIcon}
              style={{ marginTop: "0.3rem" }}
            />
          }
          value={"Car number"}
          onChange={() => {}}
          options={[
            { key: "Car number", label: "Car number", value: "Car number" },
          ]}
        />

        <DatePicker
          value={dayjs(new Date("2022-11-20"))}
          format="MMM D, YYYY"
          onChange={() => {}}
        />

        <Select
          prefix={
            <SmallIconImage src={ClockIcon} style={{ marginTop: "0.3rem" }} />
          }
          value={"10 AM"}
          onChange={() => {}}
          options={[{ key: "10 AM", label: "10 AM", value: "10 AM" }]}
        />

        <CheckButton>Check</CheckButton>
      </CarAvailabilityForm>
    </CarAvailabilitySection>
  );
};

export default CarAvailabilityCard;
