import './App.css';
import styled from 'styled-components';
import Header from './Component/Header';
import Content from './Component/Content';
import { BookProvider } from './Component/BookContext';

const ContainerDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <BookProvider>
    <div className="App">
        <ContainerDiv>
          <Header />
          <Content />
        </ContainerDiv>
    </div>
    </BookProvider>
  );
}

export default App;
