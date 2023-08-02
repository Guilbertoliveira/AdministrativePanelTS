import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import { ContainerStyled } from './components/Container'
import Footer from './components/Footer';
import Table from './components/Table';
import useQueryData from './useQueryData';



function App() {
  const { data, error } = useQueryData();

  return (
    <>
      <Header></Header>
      <ContainerStyled>
        <Title>Área Administrativa</Title>
        <Table data={data}></Table>
      </ContainerStyled>
      <Footer></Footer>
    </>
  );
}

export default App;
