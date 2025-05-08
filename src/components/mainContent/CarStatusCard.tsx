import styled from "styled-components";
import FilterIcon from "../../assets/icons/Filter.svg";

const LiveCarStatusSection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 16px;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #4b5563;
  cursor: pointer;
`;

const Table = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const TableRow = styled.div<{ header?: boolean }>`
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 1.5fr 1fr 1fr;
  align-items: center;
  padding: 12px 0;
  border-bottom: ${(props) =>
    props.header ? "1px solid #e5e7eb" : "1px solid #f3f4f6"};

  @media (max-width: 767px) {
    grid-template-columns: repeat(6, 1fr);
    font-size: 14px;
    gap: 8px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    padding: 16px 0;
    row-gap: 12px;

    &.mobile-header {
      display: none;
    }
  }
`;

const TableCell = styled.div`
  font-size: 14px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.carNo {
    background: rgb(237, 237, 237);
    border-radius: 5px;
    width: 40px;
    padding: 0.2rem 0.5rem;
    text-align: center;

    @media (max-width: 640px) {
      width: auto;
    }
  }

  @media (max-width: 640px) {
    /* Mobile layout adjustments */
    &.no-col {
      grid-column: 1;
    }

    &.car-col {
      grid-column: 2;
    }

    &.driver-col {
      grid-column: 1 / span 3;
      grid-row: 1;
    }

    &.status-col {
      grid-column: 1;
      grid-row: 2;
    }

    &.earning-col {
      grid-column: 2;
      grid-row: 2;
    }

    &.action-col {
      grid-column: 3;
      grid-row: 2;
      text-align: right;
    }
  }
`;

const MobileCardContainer = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

const MobileCard = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StatusDot = styled.div<{ status: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.status === "Completed") return "#52C93F";
    if (props.status === "Pending") return "#006AFF";
    if (props.status === "In route") return "#FF2727";
    return "#6b7280";
  }};
`;

const DriverInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ActionButton = styled.button`
  background-color: #006aff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const DesktopTable = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;

const SmallIconImage = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 1rem;
`;

const TableData = [
  {
    no: "01",
    carNo: "6465",
    driver: "Alex Noman",
    status: "Completed",
    earning: "$ 35.44",
  },
  {
    no: "02",
    carNo: "5665",
    driver: "Razib Rahman",
    status: "Pending",
    earning: "$ 0.00",
  },
  {
    no: "03",
    carNo: "1755",
    driver: "Luke Norton",
    status: "In route",
    earning: "$ 23.50",
  },
];

const CarStatusCard = () => {
  return (
    <LiveCarStatusSection>
      <TableHeader>
        <SectionTitle>Live Car Status</SectionTitle>
        <FilterButton>
          <SmallIconImage src={FilterIcon} />
          Filter
        </FilterButton>
      </TableHeader>

      {/* Desktop Table */}
      <DesktopTable>
        <Table>
          <TableRow header className="mobile-header">
            <TableCell>No.</TableCell>
            <TableCell>Car no.</TableCell>
            <TableCell>Driver</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Earning</TableCell>
            <TableCell></TableCell>
          </TableRow>

          {TableData?.map((item, index) => (
            <TableRow key={item?.no}>
              <TableCell className="no-col">{item?.no}</TableCell>
              <TableCell className="car-col carNo">{item?.carNo}</TableCell>
              <TableCell className="driver-col">
                <DriverInfo>
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 1}`}
                    alt="User avatar"
                    style={{ borderRadius: "50%", width: 30, height: 30 }}
                  />
                  <span style={{ color: "black" }}>{item?.driver}</span>
                </DriverInfo>
              </TableCell>
              <TableCell className="status-col">
                <StatusBadge>
                  <StatusDot status={item?.status} />
                  <span>{item?.status}</span>
                </StatusBadge>
              </TableCell>
              <TableCell className="earning-col">{item?.earning}</TableCell>
              <TableCell className="action-col">
                <ActionButton>Details</ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </DesktopTable>

      {/* Mobile Cards */}
      <MobileCardContainer>
        {TableData.map((item, index) => (
          <MobileCard key={index}>
            <CardRow>
              <div>No. {item.no}</div>
              <div className="carNo">{item.carNo}</div>
            </CardRow>
            <CardRow>
              <DriverInfo>
                <img
                  src={`https://i.pravatar.cc/100?img=${index + 1}`}
                  alt="User avatar"
                  style={{ borderRadius: "50%", width: 30, height: 30 }}
                />
                <span style={{ color: "black" }}>{item?.driver}</span>
              </DriverInfo>
            </CardRow>
            <CardRow>
              <StatusBadge>
                <StatusDot status={item?.status} />
                <span>{item?.status}</span>
              </StatusBadge>
              <div>{item.earning}</div>
            </CardRow>
            <ActionButton>Details</ActionButton>
          </MobileCard>
        ))}
      </MobileCardContainer>
    </LiveCarStatusSection>
  );
};

export default CarStatusCard;
