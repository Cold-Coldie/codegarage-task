import React from "react";
import styled from "styled-components";

// Icon Imports
import BellFilledIcon from "../../assets/icons/Bell-Filled.svg";
import SearchIcon from "../../assets/icons/Search.svg";

// Component Imports
import CarAvailabilityCard from "./CarAvailabilityCard";
import CarStatusCard from "./CarStatusCard";
import ChartCard from "./ChartCard";

const MainContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationButton = styled.button`
  padding: 8px;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
`;

const NotificationDot = styled.span`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: #ff2727;
  border-radius: 50%;
  border: 2px solid white;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-left: 8px;

  @media (min-width: 768px) {
    margin-left: 16px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  min-width: 200px;
  padding: 12px 40px 12px 16px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #6b7280;
  background-color: white;
  outline: none;
  box-shadow: 0 4px 5px -6px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    width: 23vw;
    max-width: 400px;
    padding: 16px 48px 16px 24px;
    font-size: 20px;
  }

  &:focus {
    border-color: #e5e7eb;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  cursor: pointer;

  @media (min-width: 768px) {
    right: 24px;
  }
`;

const IconImage = styled.img`
  height: 24px;
  width: 24px;
`;

const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 1rem 1rem;

  @media (min-width: 768px) {
    gap: 24px;
    margin: 0 2rem 2rem;
  }
`;

const MainContent: React.FC = () => {
  return (
    <MainContentContainer>
      <Header>
        <HeaderActions>
          <NotificationButton>
            <IconImage src={BellFilledIcon} />
            <NotificationDot />
          </NotificationButton>

          <SearchContainer>
            <SearchInput placeholder="Search here" />
            <SearchIconWrapper>
              <IconImage src={SearchIcon} />
            </SearchIconWrapper>
          </SearchContainer>
        </HeaderActions>
      </Header>

      <RightColumnContainer>
        {/* Car Availability Section */}
        <CarAvailabilityCard />

        {/* Live Car Status Section */}
        <CarStatusCard />

        {/* Earning Summary Section */}
        <ChartCard />
      </RightColumnContainer>
    </MainContentContainer>
  );
};

export default MainContent;
