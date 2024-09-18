import styled from "styled-components";
import "./App.css"
import Pages from "./components/pages/Pages"

function App() {
  return(
    <Wapper>
    <Pages />
    </Wapper>
    ) 
}

export default App;
const Wapper = styled.div`
width: 100%;
height: 100%;
max-width: 1920px;
overflow: hidden;
`;
