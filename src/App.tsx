import styled from "styled-components";

//  Component Imports
import Sidebar from "./components/sidebar";
import MainContent from "./components/mainContent";
import StatisticsBar from "./components/statisticsBar";

const AppContainer = styled.div`
  display: flex;
  background-color: #f9fafb;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      {/* Sidebar */}
      <Sidebar />

      {/* Statistics */}
      <StatisticsBar />

      {/* Main Content */}
      <MainContent />
    </AppContainer>
  );
}

export default App;
