import IProfessional from "../../types/IProfessional";
import Card from "../Card";
import { SectionStyled } from './styles'

export default function Assessment({ professionals }: { professionals: IProfessional[] | null }) {
    return (
        <SectionStyled>
            {professionals?.map((professional) => {
                return <Card professional={professional}></Card>
            })}
        </SectionStyled>
    )
}