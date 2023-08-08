import { Rating } from "@mui/material";
import IProfessional from "../../types/IProfessional";
import { DivStyled, DescribeStyled, RatingStyled, ContainerProfessional, CardStyled, ImageStyled, NameStyled, SpecialityStyled } from './styles'

export default function Card({ professional, onClick }: { professional: IProfessional | null, onClick: any }) {
    return (
        <DivStyled onClick={(event) => {
            onClick(event)
        }}>            <CardStyled>
                <ContainerProfessional>
                    <ImageStyled>
                        <img src={professional?.image} alt={`foto de perfil do profissional ${professional?.name}`}></img>

                    </ImageStyled>
                    <DescribeStyled>
                        <NameStyled>{professional?.name}</NameStyled>
                        <SpecialityStyled>{professional?.specialty}</SpecialityStyled>
                    </DescribeStyled>
                </ContainerProfessional>
                <RatingStyled>
                    <Rating name="simple-controlled" value={professional?.note} readOnly={true} size="large"></Rating>
                </RatingStyled>
            </CardStyled>
        </DivStyled>
    )
}