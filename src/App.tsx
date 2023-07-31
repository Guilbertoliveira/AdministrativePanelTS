import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import { ContainerStyled } from './components/Container'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <ContainerStyled>
        <Title>Área Administrativa</Title>
      </ContainerStyled>
      <Footer></Footer>
    </>
  );
}

export default App;
