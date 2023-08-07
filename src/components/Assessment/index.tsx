import IProfessional from "../../types/IProfessional";
import { Button } from "../Button";
import Card from "../Card";
import Title from "../Title";
import { SectionStyled } from './styles'

export default function Assessment({ professionals }: { professionals: IProfessional[] | null }) {
    return (
        <>
            <Title image="avaliacao">Avaliações de especialistas</Title>
            <SectionStyled>
                {professionals?.map((professional) => {
                    return <Card professional={professional}></Card>
                })}
            </SectionStyled>
            <Button>Ver mais</Button>
        </>

    )
}