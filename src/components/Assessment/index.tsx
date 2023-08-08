import IProfessional from "../../types/IProfessional";
import { Button } from "../Button";
import Card from "../Card";
import Title from "../Title";
import { SectionStyled } from './styles'
import OpenSpecialist from "../OpenSpecialist";
import { useState } from 'react';

export default function Assessment({ professionals, funcao }: { professionals: IProfessional[] | null, funcao: any }) {
    const [activatedCard, setActivatedCard] = useState(false);

    return (
        <>
            <Title image="avaliacao">Avaliações de especialistas</Title>
            <SectionStyled>
                {professionals?.map((professional) => {
                    return <Card professional={professional} onClick={funcao}></Card>
                })}
            </SectionStyled >
            <Button>Ver mais</Button>
        </>

    )
}