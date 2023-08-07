import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import { ContainerStyled } from './components/Container'
import Footer from './components/Footer';
import Table from './components/Table';
import useQueryData from './useQueryData';
import useProfessional from './useProfessional';
import Graphic from './components/Graphic';
import Assessment from './components/Assessment';
import { Button } from './components/Button';



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
        <Button>Cadastrar especialista</Button>
        <Table data={query}></Table>
        <Graphic query={query} professionals={professional} />
        <Assessment professionals={professional}></Assessment>
      </ContainerStyled>
      <Footer></Footer>
    </>
  );
}

export default App;
