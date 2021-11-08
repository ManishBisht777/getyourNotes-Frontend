import styled from "styled-components";
import Header from "./components/Header";
import Notegrp from "./components/Notegrp";
function App() {
  return (
    <Wrap>
      <Header />
      <Notegrp />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  background: #661b85d6;
  padding: 20px;
`;
