import React from "react";
import styled from "styled-components";
import VLogo from "../../assets/images/V.png";

// Icon Imports
import DashBoardIcon from "../../assets/icons/Dashboard.svg";
import CarIcon from "../../assets/icons/Car.svg";
import BookingIcon from "../../assets/icons/Booking.svg";
import BellIcon from "../../assets/icons/Bell.svg";
import SettingsIcon from "../../assets/icons/Settings.svg";
import PaymentIcon from "../../assets/icons/Payment.svg";
import TransactionIcon from "../../assets/icons/Transaction.svg";
import ReportIcon from "../../assets/icons/Report.svg";
import LogoutIcon from "../../assets/icons/Logout.svg";

const SideBarContainer = styled.div`
  width: 260px;
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  margin-right: 4px;
  height: 50px;
  width: 50px;
  transform: translateY(-3px);
`;

const LogoText = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  flex: 1;
  margin-top: 16px;
`;

const NavSection = styled.div`
  padding: 0 16px;
`;

const NavButton = styled.button<{ active: boolean }>`
  width: 100%;
  text-align: left;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  border: none;
  background-color: ${(props) => (props.active ? "#006AFF" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#d1d5db")};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.active ? "#2563eb" : "rgba(255, 255, 255, 0.1)"};
  }

  &::before {
    content: "";
    background: white;
    width: 4px;
    height: 30px;
    border-radius: 5px;
    position: relative;
    left: -11px;
    top: 50%;
    display: ${(props) => (props.active ? "block" : "none")};
  }
`;

const IconWrapper = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
`;

const IconImage = styled.img`
  height: 24px;
  width: 24px;
`;

const Divider = styled.div`
  border-top: 1px solid #374151;
  margin: 16px 0;
`;

const LogoutContainer = styled.div`
  padding: 16px;
  margin-top: auto;
`;

const LogoutButton = styled.button`
  width: 100%;
  background-color: rgba(71, 71, 71);
  color: white;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #374151;
  }
`;

// Nav Buttons Data
const NavSectionData = [
  { title: "Dashboard", icon: DashBoardIcon, active: true },
  { title: "Drivers", icon: CarIcon, active: false },
  { title: "Bookings", icon: BookingIcon, active: false },
  { title: "Notifications", icon: BellIcon, active: false },
  { title: "Settings", icon: SettingsIcon, active: false },
  { title: "Payment Details", icon: PaymentIcon, active: false },
  { title: "Transactions", icon: TransactionIcon, active: false },
  { title: "Car Report", icon: ReportIcon, active: false },
];

const Sidebar: React.FC = () => {
  return (
    <SideBarContainer>
      {/* Logo */}
      <Logo>
        <LogoImage src={VLogo}></LogoImage> <LogoText>CAR RENT</LogoText>
      </Logo>

      {/* Navigation Items */}
      <Navigation>
        <NavSection>
          {NavSectionData?.slice(0, 5)?.map((item) => (
            <NavButton key={item?.title} active={item?.active}>
              <IconWrapper>
                <IconImage src={item?.icon}></IconImage>
              </IconWrapper>
              {item?.title}
            </NavButton>
          ))}
        </NavSection>

        <Divider />

        <NavSection>
          {NavSectionData?.slice(5, 8)?.map((item) => (
            <NavButton key={item?.title} active={item?.active}>
              <IconWrapper>
                <IconImage src={item?.icon}></IconImage>
              </IconWrapper>
              {item?.title}
            </NavButton>
          ))}
        </NavSection>
      </Navigation>

      {/* Logout Button */}
      <LogoutContainer>
        <LogoutButton>
          <IconImage
            src={LogoutIcon}
            style={{ marginRight: "15px" }}
          ></IconImage>
          Logout
        </LogoutButton>
      </LogoutContainer>
    </SideBarContainer>
  );
};

export default Sidebar;
