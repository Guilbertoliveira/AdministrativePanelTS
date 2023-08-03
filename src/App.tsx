import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import { ContainerStyled } from './components/Container'
import Footer from './components/Footer';
import Table from './components/Table';
import useQueryData from './useQueryData';
import useProfessional from './useProfessional';
import Graphic from './components/Graphic';



function App() {
  const { data: query, error: queryError } = useQueryData();
  const { data: professional, error: professionalError } = useProfessional();

  if (queryError || professionalError) {
    console.log("Ocorreu um erro na requisição")
  }

  return (
    <>
      <Header></Header>
      <ContainerStyled>
        <Title>Área Administrativa</Title>
        <Table data={query}></Table>
        <Graphic query={query} professional={professional} />
      </ContainerStyled>
      <Footer></Footer>
    </>
  );
}

export default App;
