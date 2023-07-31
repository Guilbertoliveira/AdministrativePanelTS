import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import { ContainerStyled } from './components/Container'

function App() {
  return (
    <>
      <Header></Header>
      <ContainerStyled>
        <Title>Área Administrativa</Title>
      </ContainerStyled>
    </>
  );
}

export default App;
