import avaliacao from './assets/avaliacao.png';
import consulta from './assets/consulta.png';
import grafico from './assets/grafico.png';
import { SpanStyled, TitleStyled, ContainerStyled } from './styles'

export interface Props {
    image?: string,
    children?: React.ReactNode
}

interface IImagens {
    avaliacao: string,
    grafico: string,
    consulta: string
}

export default function Title({ image, children }: Props) {
    const listaDeImagens: IImagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }


    return (
        < ContainerStyled >
            {/* checking if the passed image exists in the object defined with keyof */}
            {image && <SpanStyled image={listaDeImagens[image as keyof IImagens]} />}
            <TitleStyled>{children}</TitleStyled>
        </ContainerStyled >
    )
}
