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
import { ActivatingStyled } from './styles';
import OpenSpecialist from './components/OpenSpecialist/index';
import { useState } from 'react';

function App() {
  const { data: query, error: queryError } = useQueryData();
  const { data: professional, error: professionalError } = useProfessional();
  const [activatingCard, setActivatingCard] = useState(false);
  const [elementCard, setElementCard] = useState()

  if (queryError || professionalError) {
    console.log("Ocorreu um erro na requisição")
  }

  function essevai(e: any) {
    setElementCard(e.target.parentNode)
    setActivatingCard(!activatingCard)
    document.body.style.overflow = activatingCard ? '' : 'hidden';
  }

  return (
    <>
      <ActivatingStyled activeCard={activatingCard}>
        <Header></Header>
        <ContainerStyled>
          <Title>Área Administrativa</Title>
          <Button>Cadastrar especialista</Button>
          <Table data={query}></Table>
          <Graphic query={query} professionals={professional} />
          <Assessment professionals={professional} funcao={essevai}></Assessment>
        </ContainerStyled>
        <Footer></Footer>
      </ActivatingStyled>
      {activatingCard && <OpenSpecialist teste={elementCard} />}
    </>
  );

}

export default App;
